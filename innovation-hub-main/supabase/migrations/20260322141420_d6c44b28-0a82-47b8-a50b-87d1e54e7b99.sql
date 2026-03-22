
-- Drop the overly permissive insert policy on queries
DROP POLICY "Anyone can submit queries" ON public.queries;

-- Recreate with a more specific check (still allows anonymous but validates required fields exist)
CREATE POLICY "Anyone can submit queries" ON public.queries FOR INSERT WITH CHECK (
  name IS NOT NULL AND email IS NOT NULL AND question IS NOT NULL AND status = 'pending'
);
