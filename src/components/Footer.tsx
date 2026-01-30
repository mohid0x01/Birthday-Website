import { Heart, Star, Sparkles } from "lucide-react";

const Footer = () => {
  return (
    <footer className="py-16 px-4 bg-romantic-gradient border-t border-rose-medium/20 relative overflow-hidden">
      {/* Background glow */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-primary/5 blur-3xl" />
      
      <div className="max-w-4xl mx-auto text-center relative z-10">
        <div className="flex items-center justify-center gap-3 mb-6">
          <Sparkles className="w-5 h-5 text-gold animate-pulse-glow" />
          <Heart className="w-6 h-6 text-primary fill-primary animate-heartbeat" />
          <span className="font-script text-3xl text-primary">Forever Yours</span>
          <Heart className="w-6 h-6 text-primary fill-primary animate-heartbeat" />
          <Sparkles className="w-5 h-5 text-gold animate-pulse-glow" />
        </div>
        
        <p className="font-elegant text-xl text-muted-foreground italic mb-8 max-w-lg mx-auto leading-relaxed">
          "In all the world, there is no heart for me like yours. In all the world, there is no love for you like mine."
        </p>
        
        <div className="flex justify-center gap-2 mb-8">
          {[...Array(7)].map((_, i) => (
            <Star 
              key={i} 
              className="w-3 h-3 text-gold/50 fill-gold/30"
            />
          ))}
        </div>
        
        <p className="text-sm text-muted-foreground/70 font-body flex items-center justify-center gap-2">
          Made with
          <Heart className="w-4 h-4 text-primary fill-primary animate-pulse" />
          for Hasina
        </p>
        <p className="text-xs text-muted-foreground/50 font-body mt-2 tracking-wider">
          From Mohid • February 9th
        </p>
      </div>
    </footer>
  );
};

export default Footer;
