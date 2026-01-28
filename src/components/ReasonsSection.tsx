import { useState } from "react";
import { Heart, ChevronDown } from "lucide-react";

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
      setTimeout(() => setIsRevealing(false), 400);
    }
  };

  const revealAll = () => {
    setRevealedCount(reasons.length);
  };

  return (
    <section className="py-20 px-4 bg-romantic-gradient relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-20 left-[5%] opacity-5">
          <Heart size={200} className="text-primary fill-primary" />
        </div>
        <div className="absolute bottom-20 right-[5%] opacity-5">
          <Heart size={150} className="text-primary fill-primary" />
        </div>
      </div>

      <div className="max-w-4xl mx-auto relative z-10">
        <div className="text-center mb-12 animate-fade-in-up">
          <Heart className="w-8 h-8 mx-auto text-primary fill-primary mb-4 animate-heartbeat" />
          <h2 className="font-script text-4xl md:text-6xl text-primary mb-4">
            Reasons Why I Love You
          </h2>
          <p className="font-body text-muted-foreground">
            Tap to reveal each reason, one by one 💕
          </p>
          <div className="w-24 h-0.5 bg-gold mx-auto mt-6" />
        </div>

        {/* Reasons Grid */}
        <div className="grid gap-4 mb-8">
          {reasons.map((reason, index) => (
            <div
              key={index}
              className={`transform transition-all duration-500 ${
                index < revealedCount
                  ? "opacity-100 translate-y-0 scale-100"
                  : "opacity-0 translate-y-8 scale-95 pointer-events-none h-0 overflow-hidden"
              }`}
              style={{
                transitionDelay: index === revealedCount - 1 ? "0ms" : "0ms",
              }}
            >
              <div className="bg-card rounded-2xl p-5 md:p-6 shadow-romantic border border-rose-medium/20 flex items-start gap-4">
                <div className="flex-shrink-0 w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center">
                  <span className="font-script text-xl text-primary">
                    {index + 1}
                  </span>
                </div>
                <div className="flex-1">
                  <p className="font-heading text-lg md:text-xl text-foreground leading-relaxed">
                    {reason}
                  </p>
                </div>
                <Heart className="w-5 h-5 text-primary fill-primary flex-shrink-0 animate-pulse" />
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
              className="group inline-flex flex-col items-center gap-2 px-8 py-4 bg-primary text-primary-foreground rounded-full font-body font-medium shadow-romantic hover:shadow-lg transition-all duration-300 hover:scale-105 disabled:opacity-70"
            >
              <span>Reveal Reason #{revealedCount + 1}</span>
              <ChevronDown className="w-5 h-5 animate-bounce" />
            </button>
          ) : (
            <div className="animate-fade-in-up">
              <p className="font-script text-3xl text-primary mb-4">
                And a million more reasons... 💕
              </p>
              <p className="font-heading text-lg text-muted-foreground italic">
                I love you more than words could ever express
              </p>
            </div>
          )}

          {revealedCount > 0 && revealedCount < reasons.length && (
            <button
              onClick={revealAll}
              className="block mx-auto mt-4 text-sm text-muted-foreground hover:text-primary transition-colors underline"
            >
              Reveal all
            </button>
          )}
        </div>

        {/* Progress indicator */}
        <div className="mt-8 flex justify-center gap-1.5">
          {reasons.map((_, index) => (
            <div
              key={index}
              className={`w-2 h-2 rounded-full transition-all duration-300 ${
                index < revealedCount
                  ? "bg-primary scale-100"
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
