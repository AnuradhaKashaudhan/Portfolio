
-- Create a table to store the global connection count
CREATE TABLE public.connections (
  id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  count INTEGER NOT NULL DEFAULT 0,
  updated_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now()
);

-- Enable RLS
ALTER TABLE public.connections ENABLE ROW LEVEL SECURITY;

-- Allow anyone to read the count
CREATE POLICY "Anyone can view connection count"
ON public.connections
FOR SELECT
USING (true);

-- Allow anyone to update the count (incrementing)
CREATE POLICY "Anyone can increment connection count"
ON public.connections
FOR UPDATE
USING (true);

-- Insert the initial row
INSERT INTO public.connections (count) VALUES (0);

-- Enable realtime
ALTER PUBLICATION supabase_realtime ADD TABLE public.connections;
