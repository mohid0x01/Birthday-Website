import { Heart } from "lucide-react";

const Footer = () => {
  return (
    <footer className="py-12 px-4 bg-romantic-gradient border-t border-rose-medium/20">
      <div className="max-w-4xl mx-auto text-center">
        <div className="flex items-center justify-center gap-2 mb-4">
          <Heart className="w-5 h-5 text-primary fill-primary animate-heartbeat" />
          <span className="font-script text-2xl text-primary">Forever Yours</span>
          <Heart className="w-5 h-5 text-primary fill-primary animate-heartbeat" />
        </div>
        
        <p className="font-heading text-lg text-muted-foreground italic mb-6">
          "In all the world, there is no heart for me like yours. In all the world, there is no love for you like mine."
        </p>
        
        <div className="flex justify-center gap-1 mb-6">
          {[...Array(7)].map((_, i) => (
            <Heart 
              key={i} 
              className="w-3 h-3 text-primary/50 fill-primary/30"
            />
          ))}
        </div>
        
        <p className="text-sm text-muted-foreground/70 font-body">
          Made with{" "}
          <Heart className="w-4 h-4 inline text-primary fill-primary animate-pulse" />{" "}
          for Ayesha
        </p>
        <p className="text-xs text-muted-foreground/50 font-body mt-2">
          From Rehan • February 9th
        </p>
      </div>
    </footer>
  );
};

export default Footer;
