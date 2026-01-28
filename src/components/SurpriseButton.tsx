import confetti from "canvas-confetti";
import { Heart, PartyPopper, Sparkles } from "lucide-react";
import { useState } from "react";

const SurpriseButton = () => {
  const [hasClicked, setHasClicked] = useState(false);
  const [showMessage, setShowMessage] = useState(false);

  const triggerConfetti = () => {
    setHasClicked(true);
    
    // Create heart-shaped confetti burst
    const duration = 4000;
    const animationEnd = Date.now() + duration;
    const colors = ["#BE123C", "#FB7185", "#FFC0CB", "#FFD700", "#FF69B4"];

    const frame = () => {
      confetti({
        particleCount: 3,
        angle: 60,
        spread: 55,
        origin: { x: 0, y: 0.7 },
        colors: colors,
      });
      confetti({
        particleCount: 3,
        angle: 120,
        spread: 55,
        origin: { x: 1, y: 0.7 },
        colors: colors,
      });

      if (Date.now() < animationEnd) {
        requestAnimationFrame(frame);
      }
    };

    // Initial big burst
    confetti({
      particleCount: 100,
      spread: 100,
      origin: { y: 0.6 },
      colors: colors,
    });

    // Side cannons
    frame();

    // Show love message after delay
    setTimeout(() => {
      setShowMessage(true);
    }, 1500);

    // Final celebration burst
    setTimeout(() => {
      confetti({
        particleCount: 150,
        spread: 180,
        origin: { y: 0.5 },
        colors: colors,
        shapes: ["circle", "square"],
        scalar: 1.2,
      });
    }, 2000);
  };

  return (
    <section className="py-16 px-4 bg-background">
      <div className="max-w-2xl mx-auto text-center">
        {!hasClicked ? (
          <div className="animate-fade-in-up">
            <PartyPopper className="w-10 h-10 mx-auto text-gold mb-4" />
            <h2 className="font-script text-3xl md:text-4xl text-primary mb-4">
              A Special Surprise
            </h2>
            <p className="font-body text-muted-foreground mb-8">
              Click the button below for something magical! ✨
            </p>
            <button
              onClick={triggerConfetti}
              className="group relative inline-flex items-center gap-3 px-10 py-5 bg-gradient-to-r from-primary to-rose-dark text-primary-foreground rounded-full font-body font-semibold text-lg shadow-romantic hover:shadow-xl transition-all duration-300 hover:scale-105 overflow-hidden"
            >
              {/* Shimmer effect */}
              <div className="absolute inset-0 animate-shimmer opacity-30" />
              
              <Sparkles className="w-6 h-6 relative z-10" />
              <span className="relative z-10">Click for Surprise!</span>
              <Heart className="w-6 h-6 relative z-10 group-hover:animate-heartbeat" />
            </button>
          </div>
        ) : (
          <div className={`transition-all duration-700 ${showMessage ? 'animate-scale-in' : 'opacity-0'}`}>
            <div className="bg-card rounded-3xl p-8 md:p-12 shadow-romantic border border-rose-medium/20">
              <div className="flex justify-center gap-2 mb-6">
                {[...Array(5)].map((_, i) => (
                  <Heart
                    key={i}
                    className="w-8 h-8 text-primary fill-primary animate-heartbeat"
                    style={{ animationDelay: `${i * 0.1}s` }}
                  />
                ))}
              </div>
              
              <h3 className="font-script text-4xl md:text-5xl text-primary mb-6">
                Happy Birthday, My Love!
              </h3>
              
              <p className="font-heading text-xl md:text-2xl text-foreground/90 italic leading-relaxed mb-6">
                You mean the world to me, Ayesha. Every day with you is a blessing, 
                and I'm so grateful to celebrate another year of your beautiful life.
              </p>
              
              <p className="font-script text-2xl text-gold">
                I love you forever and always 💕
              </p>
              
              <p className="font-body text-muted-foreground mt-6 text-sm">
                - Your Rehan
              </p>
            </div>
            
            <button
              onClick={triggerConfetti}
              className="mt-6 text-primary hover:text-rose-dark transition-colors font-body"
            >
              🎉 Click for more confetti! 🎉
            </button>
          </div>
        )}
      </div>
    </section>
  );
};

export default SurpriseButton;
