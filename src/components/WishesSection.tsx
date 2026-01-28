import { Cake, Gift, Star, Heart, Sparkles } from "lucide-react";

const wishes = [
  {
    icon: Cake,
    title: "Endless Joy",
    message: "May your year be filled with moments that make your heart sing and your soul dance.",
  },
  {
    icon: Gift,
    title: "Beautiful Surprises",
    message: "May life bring you wonderful surprises and blessings beyond your wildest dreams.",
  },
  {
    icon: Star,
    title: "Dreams Come True",
    message: "May all your wishes and dreams unfold in the most magical ways possible.",
  },
  {
    icon: Sparkles,
    title: "Radiant Happiness",
    message: "May your smile continue to light up the world and spread happiness everywhere.",
  },
];

const WishesSection = () => {
  return (
    <section className="py-20 px-4 bg-background">
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-16 animate-fade-in-up">
          <Gift className="w-8 h-8 mx-auto text-primary mb-4" />
          <h2 className="font-script text-4xl md:text-5xl text-primary mb-2">
            Birthday Wishes
          </h2>
          <p className="font-body text-muted-foreground mt-4">
            May this year bring you...
          </p>
          <div className="w-24 h-0.5 bg-gold mx-auto mt-6" />
        </div>

        <div className="grid md:grid-cols-2 gap-6 md:gap-8">
          {wishes.map((wish, index) => (
            <div
              key={wish.title}
              className="bg-card rounded-2xl p-6 md:p-8 shadow-romantic border border-rose-medium/20 hover:shadow-lg transition-shadow duration-300 animate-fade-in-up group"
              style={{ animationDelay: `${index * 150}ms` }}
            >
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-xl bg-secondary group-hover:bg-primary/10 transition-colors duration-300">
                  <wish.icon className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h3 className="font-heading text-xl font-semibold text-foreground mb-2">
                    {wish.title}
                  </h3>
                  <p className="font-body text-muted-foreground leading-relaxed">
                    {wish.message}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12 animate-fade-in-up animation-delay-500">
          <div className="inline-flex items-center gap-3 px-6 py-3 bg-secondary rounded-full">
            <Heart className="w-5 h-5 text-primary fill-primary animate-heartbeat" />
            <span className="font-heading text-lg text-secondary-foreground italic">
              You deserve all the happiness in the world
            </span>
            <Heart className="w-5 h-5 text-primary fill-primary animate-heartbeat" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default WishesSection;
