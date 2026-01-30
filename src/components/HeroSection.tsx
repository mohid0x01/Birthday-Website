import { Heart, Sparkles, Star } from "lucide-react";
import CountdownTimer from "./CountdownTimer";

const HeroSection = () => {
  return (
    <section className="min-h-screen flex flex-col items-center justify-center px-4 py-16 bg-hero-gradient relative overflow-hidden">
      {/* Soft background glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full bg-primary/5 blur-3xl" />
      
      {/* Decorative sparkles */}
      <div className="absolute top-16 left-[8%] animate-pulse-glow">
        <Sparkles className="w-8 h-8 text-gold" />
      </div>
      <div className="absolute top-32 right-[12%] animate-pulse-glow animation-delay-300">
        <Sparkles className="w-5 h-5 text-gold" />
      </div>
      <div className="absolute bottom-36 left-[18%] animate-pulse-glow animation-delay-500">
        <Sparkles className="w-6 h-6 text-gold" />
      </div>
      <div className="absolute bottom-24 right-[8%] animate-pulse-glow animation-delay-200">
        <Sparkles className="w-5 h-5 text-gold" />
      </div>
      <div className="absolute top-[45%] right-[5%] animate-pulse-glow animation-delay-400">
        <Sparkles className="w-4 h-4 text-gold" />
      </div>

      {/* Floating stars */}
      {[...Array(6)].map((_, i) => (
        <Star
          key={i}
          className="absolute text-gold/30 fill-gold/20 animate-sparkle"
          size={12}
          style={{
            left: `${15 + i * 15}%`,
            top: `${20 + (i % 3) * 25}%`,
            animationDelay: `${i * 0.5}s`,
          }}
        />
      ))}

      {/* Main content */}
      <div className="text-center z-10 max-w-4xl mx-auto">
        {/* Greeting */}
        <div className="animate-fade-in-up">
          <p className="font-body text-muted-foreground tracking-[0.4em] uppercase text-xs md:text-sm mb-6">
            ✦ Happy Birthday ✦
          </p>
        </div>

        {/* Name with decorative elements */}
        <div className="animate-fade-in-up animation-delay-200 mb-10">
          <div className="flex items-center justify-center gap-5 mb-4">
            <Heart className="w-7 h-7 md:w-9 md:h-9 text-primary fill-primary/80 animate-float" />
            <h1 className="font-script text-7xl md:text-9xl lg:text-[10rem] text-primary drop-shadow-sm">
              Hasina
            </h1>
            <Heart className="w-7 h-7 md:w-9 md:h-9 text-primary fill-primary/80 animate-float animation-delay-300" />
          </div>
          
          {/* Ornamental divider */}
          <div className="flex items-center justify-center gap-4">
            <div className="w-20 h-0.5 bg-gradient-to-r from-transparent via-gold/60 to-gold" />
            <Star className="w-3 h-3 text-gold fill-gold" />
            <div className="w-12 h-0.5 bg-gold animate-shimmer" />
            <Star className="w-3 h-3 text-gold fill-gold" />
            <div className="w-20 h-0.5 bg-gradient-to-l from-transparent via-gold/60 to-gold" />
          </div>
        </div>

        {/* Subtitle */}
        <div className="animate-fade-in-up animation-delay-300 mb-14">
          <p className="font-elegant text-xl md:text-3xl text-foreground/80 italic">
            Wishing you a day as beautiful as you are
          </p>
        </div>

        {/* Countdown Timer */}
        <div className="animate-fade-in-up animation-delay-500 mb-16">
          <CountdownTimer />
        </div>

        {/* From Rehan */}
        <div className="animate-fade-in-up animation-delay-700">
          <p className="font-body text-sm text-muted-foreground tracking-widest uppercase mb-2">
            With love from
          </p>
          <p className="font-script text-4xl md:text-5xl text-gradient-gold">
            Mohid
          </p>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce">
        <div className="w-7 h-12 rounded-full border-2 border-primary/30 flex items-start justify-center p-2.5">
          <div className="w-1.5 h-2.5 bg-primary/50 rounded-full animate-pulse" />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
