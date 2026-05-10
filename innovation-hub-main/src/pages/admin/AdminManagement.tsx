import { useState } from "react";
import { useAuth } from "@/contexts/AuthContext";
import { supabase } from "@/integrations/supabase/client";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useToast } from "@/hooks/use-toast";
import { UserPlus, UserMinus, ShieldAlert } from "lucide-react";

export default function AdminManagement() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const { session } = useAuth();
  const { toast } = useToast();

  const handleManageAdmin = async (action: 'create' | 'remove') => {
    if (!email) {
      toast({ title: "Email required", variant: "destructive" });
      return;
    }
    if (action === 'create' && !password) {
      toast({ title: "Password required for new admins", variant: "destructive" });
      return;
    }

    setIsLoading(true);
    
    // Check if they are using the bypass
    const fakeAdminEmail = localStorage.getItem("fake_admin");
    if (fakeAdminEmail) {
      toast({
        title: "Action block",
        description: "You are logged in using the local bypass. You must log in with a real Supabase account to manage other admins.",
        variant: "destructive"
      });
      setIsLoading(false);
      return;
    }

    try {
      const response = await supabase.functions.invoke('manage-admin', {
        body: { action, email, password }
      });

      if (response.error) throw new Error(response.error.message || "Failed to manage admin");

      toast({
        title: action === 'create' ? "Admin Added" : "Admin Removed",
        description: action === 'create' ? `Successfully created admin account for ${email}` : `Removed admin privileges from ${email}`
      });
      
      setEmail("");
      setPassword("");
    } catch (error: any) {
      toast({
        title: "Error",
        description: error.message,
        variant: "destructive"
      });
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="space-y-6 max-w-2xl">
      <div>
        <h1 className="text-2xl font-bold tracking-tight">Admin Management</h1>
        <p className="text-muted-foreground mt-1">Add or remove administrator accounts.</p>
      </div>

      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2 max-sm:text-lg">
            <ShieldAlert className="h-5 w-5 text-primary" />
            Manage Privileges
          </CardTitle>
          <CardDescription>
            Use this secure panel to invite new admins or revoke access.
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="space-y-2">
            <Label htmlFor="email">Email Address</Label>
            <Input
              id="email"
              type="email"
              placeholder="newadmin@college.edu"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div className="space-y-2">
            <Label htmlFor="password">Password (only required for adding)</Label>
            <Input
              id="password"
              type="password"
              placeholder="••••••••"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>

          <div className="flex gap-4 pt-4">
            <Button
              onClick={() => handleManageAdmin('create')}
              disabled={isLoading || !email || !password}
              className="w-full sm:w-auto"
            >
              <UserPlus className="mr-2 h-4 w-4" />
              Add Admin
            </Button>
            <Button
              onClick={() => handleManageAdmin('remove')}
              disabled={isLoading || !email}
              variant="destructive"
              className="w-full sm:w-auto"
            >
              <UserMinus className="mr-2 h-4 w-4" />
              Remove Admin role
            </Button>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
