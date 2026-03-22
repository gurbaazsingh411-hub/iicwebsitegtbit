import { useEffect, useState } from "react";
import { supabase } from "@/integrations/supabase/client";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { CalendarDays, FileText, Users, MessageSquare } from "lucide-react";

interface Stats {
  events: number;
  reports: number;
  members: number;
  pendingQueries: number;
}

const Dashboard = () => {
  const [stats, setStats] = useState<Stats>({ events: 0, reports: 0, members: 0, pendingQueries: 0 });
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchStats = async () => {
      const [eventsRes, reportsRes, membersRes, queriesRes] = await Promise.all([
        supabase.from("events").select("id", { count: "exact", head: true }),
        supabase.from("reports").select("id", { count: "exact", head: true }),
        supabase.from("members").select("id", { count: "exact", head: true }).eq("is_active", true),
        supabase.from("queries").select("id", { count: "exact", head: true }).eq("status", "pending"),
      ]);
      setStats({
        events: eventsRes.count ?? 0,
        reports: reportsRes.count ?? 0,
        members: membersRes.count ?? 0,
        pendingQueries: queriesRes.count ?? 0,
      });
      setLoading(false);
    };
    fetchStats();
  }, []);

  const cards = [
    { label: "Total Events", value: stats.events, icon: CalendarDays, color: "text-blue-600" },
    { label: "Reports", value: stats.reports, icon: FileText, color: "text-emerald-600" },
    { label: "Active Members", value: stats.members, icon: Users, color: "text-violet-600" },
    { label: "Pending Queries", value: stats.pendingQueries, icon: MessageSquare, color: "text-amber-600" },
  ];

  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-2xl font-bold tracking-tight">Dashboard</h1>
        <p className="text-muted-foreground mt-1">Overview of your IIC portal</p>
      </div>
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {cards.map((card) => (
          <Card key={card.label} className="shadow-sm">
            <CardHeader className="flex flex-row items-center justify-between pb-2">
              <CardTitle className="text-sm font-medium text-muted-foreground">{card.label}</CardTitle>
              <card.icon className={`h-5 w-5 ${card.color}`} />
            </CardHeader>
            <CardContent>
              {loading ? (
                <div className="h-8 w-16 animate-pulse rounded bg-muted" />
              ) : (
                <p className="text-3xl font-bold tabular-nums">{card.value}</p>
              )}
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default Dashboard;
