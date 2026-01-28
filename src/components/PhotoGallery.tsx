import { Heart, Camera } from "lucide-react";

const PhotoGallery = () => {
  // Placeholder images - these can be replaced with actual photos
  const photos = [
    { id: 1, placeholder: true },
    { id: 2, placeholder: true },
    { id: 3, placeholder: true },
    { id: 4, placeholder: true },
    { id: 5, placeholder: true },
    { id: 6, placeholder: true },
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
              {/* Placeholder for photos */}
              <div className="w-full h-full bg-gradient-to-br from-rose-light to-rose-medium flex items-center justify-center">
                <div className="text-center p-4">
                  <Heart className="w-10 h-10 mx-auto text-primary/40 mb-2 group-hover:animate-heartbeat" />
                  <p className="text-sm text-muted-foreground/60 font-body">
                    Add your photo here
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

        <p className="text-center mt-8 text-muted-foreground font-body text-sm italic">
          💕 Replace these with your favorite memories together 💕
        </p>
      </div>
    </section>
  );
};

export default PhotoGallery;
