import { useState, useEffect } from "react";
import { Heart, Camera, ImagePlus, Upload, X, Loader2 } from "lucide-react";
import { supabase } from "@/integrations/supabase/client";
import { toast } from "@/hooks/use-toast";

interface GalleryPhoto {
  id: string;
  file_path: string;
  caption: string | null;
  display_order: number;
  created_at: string;
}

const PhotoGallery = () => {
  const [photos, setPhotos] = useState<GalleryPhoto[]>([]);
  const [uploading, setUploading] = useState(false);
  const [showUploadModal, setShowUploadModal] = useState(false);
  const [caption, setCaption] = useState("");
  const [selectedFile, setSelectedFile] = useState<File | null>(null);
  const [previewUrl, setPreviewUrl] = useState<string | null>(null);

  useEffect(() => {
    fetchPhotos();
  }, []);

  const fetchPhotos = async () => {
    const { data, error } = await supabase
      .from("gallery_photos")
      .select("*")
      .order("display_order", { ascending: true });

    if (error) {
      console.error("Error fetching photos:", error);
      return;
    }

    setPhotos(data || []);
  };

  const handleFileSelect = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      setSelectedFile(file);
      setPreviewUrl(URL.createObjectURL(file));
    }
  };

  const handleUpload = async () => {
    if (!selectedFile) return;

    setUploading(true);

    try {
      const fileExt = selectedFile.name.split(".").pop();
      const fileName = `${Date.now()}.${fileExt}`;
      const filePath = `photos/${fileName}`;

      // Upload to storage
      const { error: uploadError } = await supabase.storage
        .from("gallery")
        .upload(filePath, selectedFile);

      if (uploadError) throw uploadError;

      // Save metadata to database
      const { error: dbError } = await supabase.from("gallery_photos").insert({
        file_path: filePath,
        caption: caption || null,
        display_order: photos.length,
      });

      if (dbError) throw dbError;

      toast({
        title: "Photo uploaded! 💕",
        description: "Your memory has been added to the gallery.",
      });

      // Reset and refresh
      setSelectedFile(null);
      setPreviewUrl(null);
      setCaption("");
      setShowUploadModal(false);
      fetchPhotos();
    } catch (error) {
      console.error("Upload error:", error);
      toast({
        title: "Upload failed",
        description: "Please try again.",
        variant: "destructive",
      });
    } finally {
      setUploading(false);
    }
  };

  const getPhotoUrl = (filePath: string) => {
    const { data } = supabase.storage.from("gallery").getPublicUrl(filePath);
    return data.publicUrl;
  };

  const handleDelete = async (photo: GalleryPhoto) => {
    try {
      // Delete from storage
      await supabase.storage.from("gallery").remove([photo.file_path]);

      // Delete from database
      await supabase.from("gallery_photos").delete().eq("id", photo.id);

      toast({
        title: "Photo removed",
        description: "The photo has been deleted.",
      });

      fetchPhotos();
    } catch (error) {
      console.error("Delete error:", error);
    }
  };

  return (
    <section className="py-20 px-4 bg-background relative">
      {/* Background glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[400px] bg-primary/5 blur-3xl rounded-full" />

      <div className="max-w-6xl mx-auto relative z-10">
        <div className="text-center mb-12 animate-fade-in-up">
          <Camera className="w-8 h-8 mx-auto text-primary mb-4" />
          <h2 className="font-script text-4xl md:text-5xl text-primary mb-2">
            Our Memories
          </h2>
          <p className="font-body text-muted-foreground mt-4 max-w-md mx-auto">
            Every moment with you is a treasure I hold close to my heart
          </p>
          <div className="w-24 h-0.5 bg-gold mx-auto mt-6" />
        </div>

        {/* Photo Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4 md:gap-6 mb-8">
          {photos.map((photo, index) => (
            <div
              key={photo.id}
              className="aspect-square rounded-2xl overflow-hidden shadow-romantic border border-rose-medium/20 animate-fade-in-up group relative"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <img
                src={getPhotoUrl(photo.file_path)}
                alt={photo.caption || "Memory"}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
              />

              {/* Overlay with caption */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-4">
                {photo.caption && (
                  <p className="text-white font-body text-sm">{photo.caption}</p>
                )}
                <button
                  onClick={() => handleDelete(photo)}
                  className="absolute top-2 right-2 p-1.5 bg-black/50 rounded-full text-white hover:bg-red-500 transition-colors"
                >
                  <X className="w-4 h-4" />
                </button>
              </div>

              {/* Heart overlay on hover */}
              <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                <Heart className="w-12 h-12 text-white opacity-0 group-hover:opacity-80 transition-opacity duration-300 fill-white/50 drop-shadow-lg" />
              </div>
            </div>
          ))}

          {/* Upload Button Card */}
          <button
            onClick={() => setShowUploadModal(true)}
            className="aspect-square rounded-2xl overflow-hidden shadow-romantic border-2 border-dashed border-primary/30 hover:border-primary/60 transition-colors flex flex-col items-center justify-center gap-3 bg-gradient-to-br from-rose-light to-secondary group cursor-pointer animate-fade-in-up"
          >
            <div className="p-4 rounded-full bg-primary/10 group-hover:bg-primary/20 transition-colors">
              <Upload className="w-8 h-8 text-primary" />
            </div>
            <p className="font-body text-sm text-muted-foreground group-hover:text-primary transition-colors">
              Add Photo
            </p>
          </button>
        </div>

        {photos.length === 0 && (
          <p className="text-center text-muted-foreground font-body text-sm italic mb-8">
            💕 Upload your favorite memories together 💕
          </p>
        )}
      </div>

      {/* Upload Modal */}
      {showUploadModal && (
        <div className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4">
          <div className="luxury-card p-6 md:p-8 max-w-md w-full animate-scale-in">
            <div className="flex items-center justify-between mb-6">
              <h3 className="font-heading text-xl text-foreground">
                Add a Memory
              </h3>
              <button
                onClick={() => {
                  setShowUploadModal(false);
                  setSelectedFile(null);
                  setPreviewUrl(null);
                  setCaption("");
                }}
                className="p-2 hover:bg-secondary rounded-full transition-colors"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {previewUrl ? (
              <div className="relative mb-4">
                <img
                  src={previewUrl}
                  alt="Preview"
                  className="w-full aspect-square object-cover rounded-xl"
                />
                <button
                  onClick={() => {
                    setSelectedFile(null);
                    setPreviewUrl(null);
                  }}
                  className="absolute top-2 right-2 p-1.5 bg-black/50 rounded-full text-white hover:bg-red-500 transition-colors"
                >
                  <X className="w-4 h-4" />
                </button>
              </div>
            ) : (
              <label className="block mb-4 cursor-pointer">
                <div className="border-2 border-dashed border-primary/30 hover:border-primary/60 rounded-xl p-8 text-center transition-colors">
                  <ImagePlus className="w-12 h-12 mx-auto text-primary/50 mb-3" />
                  <p className="font-body text-sm text-muted-foreground">
                    Click to select a photo
                  </p>
                </div>
                <input
                  type="file"
                  accept="image/*"
                  onChange={handleFileSelect}
                  className="hidden"
                />
              </label>
            )}

            <input
              type="text"
              placeholder="Add a caption (optional)"
              value={caption}
              onChange={(e) => setCaption(e.target.value)}
              className="w-full px-4 py-3 rounded-xl border border-rose-medium/30 bg-background focus:outline-none focus:ring-2 focus:ring-primary/30 font-body text-sm mb-4"
            />

            <button
              onClick={handleUpload}
              disabled={!selectedFile || uploading}
              className="w-full py-3 rounded-xl font-body font-medium text-white disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2 transition-all hover:scale-[1.02]"
              style={{
                background:
                  "linear-gradient(135deg, hsl(340 82% 52%) 0%, hsl(340 85% 45%) 50%, hsl(15 45% 55%) 100%)",
              }}
            >
              {uploading ? (
                <>
                  <Loader2 className="w-5 h-5 animate-spin" />
                  Uploading...
                </>
              ) : (
                <>
                  <Heart className="w-5 h-5" />
                  Add to Gallery
                </>
              )}
            </button>
          </div>
        </div>
      )}
    </section>
  );
};

export default PhotoGallery;
