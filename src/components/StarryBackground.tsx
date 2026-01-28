import { useEffect, useState } from "react";

interface StarType {
  id: number;
  x: number;
  y: number;
  size: number;
  opacity: number;
  duration: number;
  delay: number;
}

interface ShootingStarType {
  id: number;
  x: number;
  y: number;
  delay: number;
}

const StarryBackground = () => {
  const [stars, setStars] = useState<StarType[]>([]);
  const [shootingStars, setShootingStars] = useState<ShootingStarType[]>([]);

  useEffect(() => {
    // Generate static stars
    const generatedStars: StarType[] = [];
    for (let i = 0; i < 80; i++) {
      generatedStars.push({
        id: i,
        x: Math.random() * 100,
        y: Math.random() * 100,
        size: Math.random() * 2.5 + 0.5,
        opacity: Math.random() * 0.7 + 0.3,
        duration: Math.random() * 3 + 2,
        delay: Math.random() * 5,
      });
    }
    setStars(generatedStars);

    // Generate shooting stars
    const generatedShootingStars: ShootingStarType[] = [];
    for (let i = 0; i < 4; i++) {
      generatedShootingStars.push({
        id: i,
        x: Math.random() * 60 + 10,
        y: Math.random() * 30 + 5,
        delay: Math.random() * 15 + i * 8,
      });
    }
    setShootingStars(generatedShootingStars);
  }, []);

  return (
    <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
      {/* Dark gradient overlay for starry effect */}
      <div 
        className="absolute inset-0 opacity-[0.03]"
        style={{
          background: "radial-gradient(ellipse at top, hsl(240 50% 20%) 0%, transparent 70%)",
        }}
      />
      
      {/* Stars */}
      {stars.map((star) => (
        <div
          key={star.id}
          className="absolute rounded-full bg-gold animate-twinkle"
          style={{
            left: `${star.x}%`,
            top: `${star.y}%`,
            width: star.size,
            height: star.size,
            opacity: star.opacity,
            animationDuration: `${star.duration}s`,
            animationDelay: `${star.delay}s`,
            boxShadow: `0 0 ${star.size * 2}px ${star.size / 2}px hsl(var(--gold) / 0.5)`,
          }}
        />
      ))}

      {/* Shooting stars */}
      {shootingStars.map((star) => (
        <div
          key={star.id}
          className="absolute animate-shooting-star"
          style={{
            left: `${star.x}%`,
            top: `${star.y}%`,
            animationDelay: `${star.delay}s`,
          }}
        >
          <div 
            className="w-1 h-1 bg-gold rounded-full relative"
            style={{
              boxShadow: "0 0 6px 2px hsl(var(--gold) / 0.8)",
            }}
          >
            {/* Trail */}
            <div 
              className="absolute top-0 right-0 w-20 h-0.5 origin-right"
              style={{
                background: "linear-gradient(90deg, hsl(var(--gold) / 0.8) 0%, transparent 100%)",
              }}
            />
          </div>
        </div>
      ))}

      {/* Magical sparkle clusters */}
      <div className="absolute top-[10%] left-[20%] w-40 h-40 rounded-full bg-rose-gold/5 blur-3xl animate-pulse-glow" />
      <div className="absolute top-[30%] right-[15%] w-32 h-32 rounded-full bg-gold/5 blur-3xl animate-pulse-glow animation-delay-300" />
      <div className="absolute bottom-[25%] left-[10%] w-24 h-24 rounded-full bg-primary/5 blur-3xl animate-pulse-glow animation-delay-500" />
    </div>
  );
};

export default StarryBackground;
