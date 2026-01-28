-- Create storage bucket for gallery photos
INSERT INTO storage.buckets (id, name, public)
VALUES ('gallery', 'gallery', true);

-- Allow anyone to view photos (public bucket)
CREATE POLICY "Anyone can view gallery photos"
ON storage.objects FOR SELECT
USING (bucket_id = 'gallery');

-- Allow anyone to upload photos (for simplicity - no auth required for this love website)
CREATE POLICY "Anyone can upload gallery photos"
ON storage.objects FOR INSERT
WITH CHECK (bucket_id = 'gallery');

-- Allow anyone to delete photos
CREATE POLICY "Anyone can delete gallery photos"
ON storage.objects FOR DELETE
USING (bucket_id = 'gallery');

-- Create a photos table to store photo metadata
CREATE TABLE public.gallery_photos (
  id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  file_path TEXT NOT NULL,
  caption TEXT,
  display_order INTEGER DEFAULT 0,
  created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now()
);

-- Enable RLS but allow public access (this is a personal gift website)
ALTER TABLE public.gallery_photos ENABLE ROW LEVEL SECURITY;

-- Allow anyone to view photos
CREATE POLICY "Anyone can view gallery photos metadata"
ON public.gallery_photos FOR SELECT
USING (true);

-- Allow anyone to insert photos
CREATE POLICY "Anyone can insert gallery photos"
ON public.gallery_photos FOR INSERT
WITH CHECK (true);

-- Allow anyone to delete photos  
CREATE POLICY "Anyone can delete gallery photos"
ON public.gallery_photos FOR DELETE
USING (true);