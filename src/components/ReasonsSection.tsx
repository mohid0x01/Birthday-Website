import { useState } from "react";
import { Heart, ChevronDown, Star, Sparkles } from "lucide-react";

const reasons = [
  "Your beautiful smile that lights up my entire world",
  "The way you laugh at my silly jokes",
  "How caring and kind you are to everyone",
  "Your strength and determination inspire me daily",
  "The way you make ordinary moments feel magical",
  "How you always know how to make me feel better",
  "Your intelligence and the way you see the world",
  "The comfort I feel just being near you",
  "How you support my dreams and believe in me",
  "Every little thing about you that makes you, YOU",
];

const ReasonsSection = () => {
  const [revealedCount, setRevealedCount] = useState(0);
  const [isRevealing, setIsRevealing] = useState(false);

  const revealNext = () => {
    if (revealedCount < reasons.length && !isRevealing) {
      setIsRevealing(true);
      setRevealedCount((prev) => prev + 1);
      setTimeout(() => setIsRevealing(false), 500);
    }
  };

  const revealAll = () => {
    setRevealedCount(reasons.length);
  };

  return (
    <section className="py-24 px-4 bg-romantic-gradient relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-20 left-[5%] opacity-[0.04]">
          <Heart size={220} className="text-primary fill-primary" />
        </div>
        <div className="absolute bottom-20 right-[5%] opacity-[0.04]">
          <Heart size={180} className="text-primary fill-primary" />
        </div>
      </div>
      
      {/* Sparkles */}
      {[...Array(8)].map((_, i) => (
        <Star
          key={i}
          className="absolute text-gold/20 fill-gold/10 animate-sparkle"
          size={10}
          style={{
            left: `${5 + i * 12}%`,
            top: `${10 + (i % 3) * 35}%`,
            animationDelay: `${i * 0.4}s`,
          }}
        />
      ))}

      <div className="max-w-4xl mx-auto relative z-10">
        <div className="text-center mb-14 animate-fade-in-up">
          <Heart className="w-9 h-9 mx-auto text-primary fill-primary/80 mb-5 animate-heartbeat" />
          <h2 className="font-script text-5xl md:text-7xl text-primary mb-4">
            Reasons Why I Love You
          </h2>
          <p className="font-body text-muted-foreground tracking-wide">
            Tap to reveal each reason, one by one 💕
          </p>
          <div className="flex items-center justify-center gap-3 mt-6">
            <div className="w-16 h-px bg-gradient-to-r from-transparent to-gold" />
            <Sparkles className="w-4 h-4 text-gold" />
            <div className="w-16 h-px bg-gradient-to-l from-transparent to-gold" />
          </div>
        </div>

        {/* Reasons Grid */}
        <div className="grid gap-4 mb-10">
          {reasons.map((reason, index) => (
            <div
              key={index}
              className={`transform transition-all duration-700 ease-out ${
                index < revealedCount
                  ? "opacity-100 translate-y-0 scale-100"
                  : "opacity-0 translate-y-10 scale-95 pointer-events-none h-0 overflow-hidden"
              }`}
            >
              <div className="luxury-card p-5 md:p-6 flex items-center gap-4 group hover:shadow-glow transition-shadow duration-500">
                <div className="flex-shrink-0 w-12 h-12 rounded-full bg-gradient-to-br from-primary/20 to-rose-gold/20 flex items-center justify-center border border-primary/20">
                  <span className="font-script text-2xl text-primary">
                    {index + 1}
                  </span>
                </div>
                <div className="flex-1">
                  <p className="font-elegant text-lg md:text-xl text-foreground/90 leading-relaxed">
                    {reason}
                  </p>
                </div>
                <Heart className="w-5 h-5 text-primary fill-primary/60 flex-shrink-0 group-hover:animate-heartbeat" />
              </div>
            </div>
          ))}
        </div>

        {/* Reveal Button */}
        <div className="text-center">
          {revealedCount < reasons.length ? (
            <button
              onClick={revealNext}
              disabled={isRevealing}
              className="group inline-flex flex-col items-center gap-2 px-10 py-5 rounded-full font-body font-medium shadow-romantic hover:shadow-glow transition-all duration-500 hover:scale-105 disabled:opacity-70 animate-glow-pulse"
              style={{
                background: "linear-gradient(135deg, hsl(340 82% 52%) 0%, hsl(340 85% 45%) 50%, hsl(15 45% 55%) 100%)",
                color: "white",
              }}
            >
              <span className="flex items-center gap-2">
                <Sparkles className="w-4 h-4" />
                Reveal Reason #{revealedCount + 1}
                <Sparkles className="w-4 h-4" />
              </span>
              <ChevronDown className="w-5 h-5 animate-bounce" />
            </button>
          ) : (
            <div className="animate-fade-in-up">
              <p className="font-script text-4xl text-primary mb-4">
                And a million more reasons... 💕
              </p>
              <p className="font-elegant text-xl text-muted-foreground italic">
                I love you more than words could ever express
              </p>
            </div>
          )}

          {revealedCount > 0 && revealedCount < reasons.length && (
            <button
              onClick={revealAll}
              className="block mx-auto mt-5 text-sm text-muted-foreground hover:text-primary transition-colors underline underline-offset-4"
            >
              Reveal all reasons
            </button>
          )}
        </div>

        {/* Progress indicator */}
        <div className="mt-10 flex justify-center gap-2">
          {reasons.map((_, index) => (
            <div
              key={index}
              className={`w-2.5 h-2.5 rounded-full transition-all duration-500 ${
                index < revealedCount
                  ? "bg-primary scale-100 shadow-sm shadow-primary/50"
                  : "bg-primary/20 scale-75"
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ReasonsSection;
