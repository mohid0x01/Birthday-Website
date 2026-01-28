import { Heart, Camera, ImagePlus } from "lucide-react";

const PhotoGallery = () => {
  // Placeholder images - replace with actual photos
  const photos = [
    { id: 1, label: "Our first photo together" },
    { id: 2, label: "A special moment" },
    { id: 3, label: "Adventure time" },
    { id: 4, label: "Celebration" },
    { id: 5, label: "Just us" },
    { id: 6, label: "Forever memories" },
  ];

  return (
    <section className="py-20 px-4 bg-background">
      <div className="max-w-6xl mx-auto">
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

        <div className="grid grid-cols-2 md:grid-cols-3 gap-4 md:gap-6">
          {photos.map((photo, index) => (
            <div
              key={photo.id}
              className="aspect-square rounded-2xl overflow-hidden shadow-romantic border border-rose-medium/20 animate-fade-in-up group relative cursor-pointer hover:scale-[1.02] transition-transform duration-300"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              {/* Placeholder for photos - upload your images! */}
              <div className="w-full h-full bg-gradient-to-br from-rose-light via-rose-medium/50 to-secondary flex items-center justify-center">
                <div className="text-center p-4">
                  <ImagePlus className="w-12 h-12 mx-auto text-primary/30 mb-3 group-hover:scale-110 transition-transform" />
                  <p className="text-sm text-muted-foreground/70 font-body font-medium">
                    {photo.label}
                  </p>
                  <p className="text-xs text-muted-foreground/50 mt-1">
                    Upload photo here
                  </p>
                </div>
              </div>
              
              {/* Hover overlay */}
              <div className="absolute inset-0 bg-primary/0 group-hover:bg-primary/10 transition-colors duration-300 flex items-center justify-center">
                <Heart className="w-12 h-12 text-primary opacity-0 group-hover:opacity-100 transition-opacity duration-300 fill-primary/50" />
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-10 p-6 bg-secondary/50 rounded-2xl border border-dashed border-primary/30 max-w-lg mx-auto">
          <ImagePlus className="w-8 h-8 mx-auto text-primary/50 mb-3" />
          <p className="text-muted-foreground font-body text-sm">
            <span className="font-semibold text-foreground">Upload your photos!</span>
            <br />
            Share your images with me and I'll add them to the gallery 💕
          </p>
        </div>
      </div>
    </section>
  );
};

export default PhotoGallery;
