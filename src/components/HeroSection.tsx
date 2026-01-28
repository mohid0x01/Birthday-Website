import { Heart, Sparkles } from "lucide-react";
import CountdownTimer from "./CountdownTimer";

const HeroSection = () => {
  return (
    <section className="min-h-screen flex flex-col items-center justify-center px-4 py-12 bg-hero-gradient relative overflow-hidden">
      {/* Decorative sparkles */}
      <div className="absolute top-20 left-[10%] animate-pulse-glow">
        <Sparkles className="w-6 h-6 text-gold" />
      </div>
      <div className="absolute top-40 right-[15%] animate-pulse-glow animation-delay-300">
        <Sparkles className="w-4 h-4 text-gold" />
      </div>
      <div className="absolute bottom-40 left-[20%] animate-pulse-glow animation-delay-500">
        <Sparkles className="w-5 h-5 text-gold" />
      </div>
      <div className="absolute bottom-32 right-[10%] animate-pulse-glow animation-delay-200">
        <Sparkles className="w-4 h-4 text-gold" />
      </div>

      {/* Main content */}
      <div className="text-center z-10 max-w-4xl mx-auto">
        {/* Greeting */}
        <div className="animate-fade-in-up">
          <p className="font-body text-muted-foreground tracking-[0.3em] uppercase text-sm mb-4">
            Happy Birthday
          </p>
        </div>

        {/* Name with decorative hearts */}
        <div className="animate-fade-in-up animation-delay-200 mb-8">
          <div className="flex items-center justify-center gap-4 mb-2">
            <Heart className="w-6 h-6 md:w-8 md:h-8 text-primary fill-primary animate-pulse" />
            <h1 className="font-script text-6xl md:text-8xl lg:text-9xl text-primary">
              Ayesha
            </h1>
            <Heart className="w-6 h-6 md:w-8 md:h-8 text-primary fill-primary animate-pulse" />
          </div>
          
          {/* Gold shimmer line */}
          <div className="w-48 h-1 mx-auto rounded-full bg-gradient-to-r from-transparent via-gold to-transparent animate-shimmer" />
        </div>

        {/* Subtitle */}
        <div className="animate-fade-in-up animation-delay-300 mb-12">
          <p className="font-heading text-xl md:text-2xl text-foreground/80 italic">
            Wishing you a day as beautiful as you are
          </p>
        </div>

        {/* Countdown Timer */}
        <div className="animate-fade-in-up animation-delay-500 mb-12">
          <CountdownTimer />
        </div>

        {/* From Rehan */}
        <div className="animate-fade-in-up animation-delay-700">
          <p className="font-body text-sm text-muted-foreground tracking-wide">
            With love from
          </p>
          <p className="font-script text-3xl md:text-4xl text-gold mt-2">
            Rehan
          </p>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 rounded-full border-2 border-primary/30 flex items-start justify-center p-2">
          <div className="w-1 h-2 bg-primary/50 rounded-full animate-pulse" />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
