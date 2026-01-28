import { Heart, Sparkles, Music } from "lucide-react";
import { useState, useRef, useEffect } from "react";

interface WelcomeOverlayProps {
  onEnter: () => void;
}

const WelcomeOverlay = ({ onEnter }: WelcomeOverlayProps) => {
  const [isExiting, setIsExiting] = useState(false);
  const audioRef = useRef<HTMLAudioElement | null>(null);

  useEffect(() => {
    // Preload the audio
    audioRef.current = new Audio(
      // Romantic piano music - royalty free
      "https://cdn.pixabay.com/audio/2022/01/18/audio_d0c6ff1bab.mp3"
    );
    audioRef.current.loop = true;
    audioRef.current.volume = 0.4;
  }, []);

  const handleEnter = () => {
    setIsExiting(true);
    
    // Start playing music
    if (audioRef.current) {
      audioRef.current.play().catch(console.error);
    }
    
    // Delay to allow exit animation
    setTimeout(() => {
      onEnter();
    }, 800);
  };

  return (
    <div
      className={`fixed inset-0 z-50 flex items-center justify-center bg-hero-gradient transition-all duration-700 ${
        isExiting ? "opacity-0 scale-110" : "opacity-100 scale-100"
      }`}
    >
      {/* Decorative elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(20)].map((_, i) => (
          <Heart
            key={i}
            className="absolute text-primary/10 fill-primary/5 animate-float-up"
            size={Math.random() * 30 + 15}
            style={{
              left: `${Math.random() * 100}%`,
              bottom: "-50px",
              animationDelay: `${Math.random() * 5}s`,
              animationDuration: `${Math.random() * 5 + 8}s`,
            }}
          />
        ))}
      </div>

      {/* Sparkles */}
      <div className="absolute top-[20%] left-[15%] animate-pulse-glow">
        <Sparkles className="w-8 h-8 text-gold" />
      </div>
      <div className="absolute top-[30%] right-[20%] animate-pulse-glow animation-delay-300">
        <Sparkles className="w-6 h-6 text-gold" />
      </div>
      <div className="absolute bottom-[30%] left-[25%] animate-pulse-glow animation-delay-500">
        <Sparkles className="w-5 h-5 text-gold" />
      </div>

      {/* Main content */}
      <div className="text-center px-6 relative z-10">
        <div className="animate-fade-in-up">
          <div className="flex justify-center gap-3 mb-6">
            <Heart className="w-8 h-8 text-primary fill-primary animate-heartbeat" />
            <Heart className="w-10 h-10 text-primary fill-primary animate-heartbeat animation-delay-100" />
            <Heart className="w-8 h-8 text-primary fill-primary animate-heartbeat animation-delay-200" />
          </div>
          
          <p className="font-body text-muted-foreground tracking-[0.4em] uppercase text-sm mb-4">
            A Special Birthday Gift
          </p>
          
          <h1 className="font-script text-5xl md:text-7xl text-primary mb-4">
            For Ayesha
          </h1>
          
          <p className="font-heading text-xl text-foreground/80 italic mb-2">
            From Rehan, with all my love
          </p>
          
          <div className="w-32 h-0.5 bg-gradient-to-r from-transparent via-gold to-transparent mx-auto mb-8" />
          
          <div className="flex items-center justify-center gap-2 text-muted-foreground mb-8">
            <Music className="w-4 h-4" />
            <span className="font-body text-sm">Best experienced with sound</span>
          </div>
        </div>

        <button
          onClick={handleEnter}
          className="animate-fade-in-up animation-delay-300 group relative inline-flex items-center gap-3 px-10 py-5 bg-gradient-to-r from-primary to-rose-dark text-primary-foreground rounded-full font-body font-semibold text-lg shadow-romantic hover:shadow-xl transition-all duration-300 hover:scale-105 overflow-hidden"
        >
          {/* Shimmer effect */}
          <div className="absolute inset-0 animate-shimmer opacity-30" />
          
          <Heart className="w-5 h-5 relative z-10 group-hover:animate-heartbeat" />
          <span className="relative z-10">Enter & Play Music</span>
          <Sparkles className="w-5 h-5 relative z-10" />
        </button>

        <p className="mt-6 text-sm text-muted-foreground/60 font-body animate-fade-in-up animation-delay-500">
          Click to begin your birthday experience 💕
        </p>
      </div>
    </div>
  );
};

export default WelcomeOverlay;
