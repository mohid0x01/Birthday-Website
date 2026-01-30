import { Heart, Sparkles, Music, Star, Loader2 } from "lucide-react";
import { useState, useRef, useEffect } from "react";

interface WelcomeOverlayProps {
  onEnter: () => void;
}

const WelcomeOverlay = ({ onEnter }: WelcomeOverlayProps) => {
  const [isExiting, setIsExiting] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [musicReady, setMusicReady] = useState(false);
  const audioRef = useRef<HTMLAudioElement | null>(null);

  // Pre-generate music on component mount
  useEffect(() => {
    const generateMusic = async () => {
      try {
        console.log("Generating romantic piano music...");
        const response = await fetch(
          `${import.meta.env.VITE_SUPABASE_URL}/functions/v1/generate-music`,
          {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
              apikey: import.meta.env.VITE_SUPABASE_PUBLISHABLE_KEY,
              Authorization: `Bearer ${import.meta.env.VITE_SUPABASE_PUBLISHABLE_KEY}`,
            },
            body: JSON.stringify({
              prompt: "Calm romantic piano music, soft and tender love theme, gentle peaceful melody, wedding style, emotional and heartfelt, solo piano",
              duration: 120,
            }),
          }
        );

        const data = await response.json();
        
        if (data.success && data.audioContent) {
          const audioUrl = `data:audio/mpeg;base64,${data.audioContent}`;
          audioRef.current = new Audio(audioUrl);
          audioRef.current.loop = true;
          audioRef.current.volume = 0.4;
          setMusicReady(true);
          console.log("Music ready to play!");
        } else {
          console.error("Music generation failed:", data.error);
          // Fallback to static music
          audioRef.current = new Audio(
            "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3"
          );
          audioRef.current.loop = true;
          audioRef.current.volume = 0.3;
          setMusicReady(true);
        }
      } catch (error) {
        console.error("Error generating music:", error);
        // Fallback to static music
        audioRef.current = new Audio(
          "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3"
        );
        audioRef.current.loop = true;
        audioRef.current.volume = 0.3;
        setMusicReady(true);
      }
    };

    generateMusic();
  }, []);

  const handleEnter = async () => {
    setIsLoading(true);
    
    if (audioRef.current) {
      try {
        await audioRef.current.play();
      } catch (error) {
        console.error("Audio play error:", error);
      }
    }
    
    setIsExiting(true);
    setTimeout(() => {
      onEnter();
    }, 1000);
  };

  return (
    <div
      className={`fixed inset-0 z-50 flex items-center justify-center transition-all duration-1000 ${
        isExiting ? "opacity-0 scale-110 blur-sm" : "opacity-100 scale-100"
      }`}
      style={{
        background: "linear-gradient(135deg, hsl(340 100% 98%) 0%, hsl(340 70% 96%) 30%, hsl(350 80% 97%) 60%, hsl(30 60% 98%) 100%)",
      }}
    >
      {/* Animated background glow */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] rounded-full bg-gradient-to-r from-primary/10 via-rose-gold/10 to-gold/10 blur-3xl animate-pulse" />
      </div>

      {/* Floating decorative elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(25)].map((_, i) => (
          <Heart
            key={i}
            className="absolute text-primary/20 fill-primary/10 animate-float-up"
            size={Math.random() * 25 + 12}
            style={{
              left: `${Math.random() * 100}%`,
              bottom: "-50px",
              animationDelay: `${Math.random() * 8}s`,
              animationDuration: `${Math.random() * 6 + 10}s`,
            }}
          />
        ))}
        
        {/* Sparkles */}
        {[...Array(12)].map((_, i) => (
          <Star
            key={`star-${i}`}
            className="absolute text-gold/40 animate-sparkle"
            size={Math.random() * 12 + 8}
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 3}s`,
            }}
          />
        ))}
      </div>

      {/* Decorative sparkles positioned */}
      <div className="absolute top-[15%] left-[12%] animate-pulse-glow">
        <Sparkles className="w-10 h-10 text-gold" />
      </div>
      <div className="absolute top-[25%] right-[15%] animate-pulse-glow animation-delay-300">
        <Sparkles className="w-7 h-7 text-gold" />
      </div>
      <div className="absolute bottom-[25%] left-[20%] animate-pulse-glow animation-delay-500">
        <Sparkles className="w-6 h-6 text-gold" />
      </div>
      <div className="absolute bottom-[35%] right-[12%] animate-pulse-glow animation-delay-200">
        <Sparkles className="w-8 h-8 text-gold" />
      </div>

      {/* Main content */}
      <div className="text-center px-8 relative z-10 max-w-lg">
        <div className="animate-fade-in-up">
          {/* Hearts decoration */}
          <div className="flex justify-center gap-4 mb-8">
            <Heart className="w-7 h-7 text-primary/60 fill-primary/40 animate-float" style={{ animationDelay: '0s' }} />
            <Heart className="w-10 h-10 text-primary fill-primary/80 animate-heartbeat" />
            <Heart className="w-7 h-7 text-primary/60 fill-primary/40 animate-float" style={{ animationDelay: '0.5s' }} />
          </div>
          
          <p className="font-body text-muted-foreground tracking-[0.5em] uppercase text-xs mb-6 animate-fade-in-up animation-delay-100">
            A Special Birthday Gift
          </p>
          
          <h1 className="font-script text-6xl md:text-8xl text-primary mb-3 animate-fade-in-up animation-delay-200 drop-shadow-sm">
            For Hasina
          </h1>
          
          <p className="font-elegant text-2xl text-foreground/70 italic mb-3 animate-fade-in-up animation-delay-300">
            From Mohid, with all my love
          </p>
          
          {/* Ornamental divider */}
          <div className="flex items-center justify-center gap-3 my-8 animate-fade-in-up animation-delay-400">
            <div className="w-16 h-px bg-gradient-to-r from-transparent via-gold to-transparent" />
            <Star className="w-4 h-4 text-gold fill-gold" />
            <div className="w-16 h-px bg-gradient-to-r from-transparent via-gold to-transparent" />
          </div>
          
          <div className="flex items-center justify-center gap-2 text-muted-foreground mb-10 animate-fade-in-up animation-delay-500">
            <Music className="w-4 h-4" />
            <span className="font-body text-sm tracking-wide">
              {musicReady ? "Romantic piano music ready ♪" : "Preparing romantic music..."}
            </span>
            {!musicReady && <Loader2 className="w-4 h-4 animate-spin" />}
          </div>
        </div>

        <button
          onClick={handleEnter}
          disabled={isLoading}
          className="animate-fade-in-up animation-delay-700 group relative inline-flex items-center gap-4 px-12 py-5 rounded-full font-body font-medium text-lg overflow-hidden transition-all duration-500 hover:scale-105 animate-glow-pulse disabled:opacity-70 disabled:cursor-not-allowed"
          style={{
            background: "linear-gradient(135deg, hsl(340 82% 52%) 0%, hsl(340 85% 45%) 50%, hsl(15 45% 55%) 100%)",
            color: "white",
          }}
        >
          {/* Shimmer effect */}
          <div className="absolute inset-0 animate-shimmer opacity-40" />
          
          {isLoading ? (
            <Loader2 className="w-5 h-5 relative z-10 animate-spin" />
          ) : (
            <Heart className="w-5 h-5 relative z-10 group-hover:animate-heartbeat fill-white/30" />
          )}
          <span className="relative z-10 tracking-wide">
            {isLoading ? "Opening..." : "Enter & Play Music"}
          </span>
          <Sparkles className="w-5 h-5 relative z-10 group-hover:animate-pulse-glow" />
        </button>

        <p className="mt-8 text-sm text-muted-foreground/50 font-body animate-fade-in-up animation-delay-1000">
          Click to begin your birthday experience 💕
        </p>
      </div>
    </div>
  );
};

export default WelcomeOverlay;
