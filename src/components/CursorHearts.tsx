import { useEffect, useState, useCallback } from "react";
import { Heart } from "lucide-react";

interface TrailingHeart {
  id: number;
  x: number;
  y: number;
  size: number;
  opacity: number;
}

const CursorHearts = () => {
  const [hearts, setHearts] = useState<TrailingHeart[]>([]);
  const [isActive, setIsActive] = useState(true);

  const addHeart = useCallback((x: number, y: number) => {
    const newHeart: TrailingHeart = {
      id: Date.now() + Math.random(),
      x: x - 8,
      y: y - 8,
      size: Math.random() * 12 + 10,
      opacity: Math.random() * 0.5 + 0.5,
    };

    setHearts((prev) => [...prev.slice(-15), newHeart]);
  }, []);

  useEffect(() => {
    let lastTime = 0;
    const throttleMs = 80;

    const handleMouseMove = (e: MouseEvent) => {
      const now = Date.now();
      if (now - lastTime >= throttleMs && isActive) {
        lastTime = now;
        addHeart(e.clientX, e.clientY);
      }
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, [addHeart, isActive]);

  // Auto-remove hearts after animation
  useEffect(() => {
    if (hearts.length === 0) return;

    const timer = setTimeout(() => {
      setHearts((prev) => prev.slice(1));
    }, 1200);

    return () => clearTimeout(timer);
  }, [hearts]);

  return (
    <div className="fixed inset-0 pointer-events-none z-[100] overflow-hidden">
      {hearts.map((heart) => (
        <div
          key={heart.id}
          className="absolute animate-cursor-heart"
          style={{
            left: heart.x,
            top: heart.y,
          }}
        >
          <Heart
            size={heart.size}
            className="text-primary fill-primary/60"
            style={{ opacity: heart.opacity }}
          />
        </div>
      ))}
    </div>
  );
};

export default CursorHearts;
