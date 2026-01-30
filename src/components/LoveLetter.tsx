import { Heart, Star, Feather } from "lucide-react";

const LoveLetter = () => {
  return (
    <section className="py-24 px-4 bg-romantic-gradient relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute top-16 left-8 opacity-[0.07]">
        <Heart size={140} className="text-primary fill-primary" />
      </div>
      <div className="absolute bottom-16 right-8 opacity-[0.07]">
        <Heart size={100} className="text-primary fill-primary" />
      </div>
      
      {/* Floating stars */}
      {[...Array(5)].map((_, i) => (
        <Star
          key={i}
          className="absolute text-gold/20 fill-gold/10 animate-sparkle"
          size={10}
          style={{
            left: `${10 + i * 20}%`,
            top: `${15 + (i % 2) * 70}%`,
            animationDelay: `${i * 0.7}s`,
          }}
        />
      ))}

      <div className="max-w-3xl mx-auto relative z-10">
        <div className="text-center mb-14 animate-fade-in-up">
          <Feather className="w-8 h-8 mx-auto text-gold mb-5 animate-float" />
          <h2 className="font-script text-5xl md:text-6xl text-primary mb-3">
            A Letter For You
          </h2>
          <div className="flex items-center justify-center gap-3 mt-6">
            <div className="w-16 h-px bg-gradient-to-r from-transparent to-gold" />
            <Star className="w-3 h-3 text-gold fill-gold" />
            <div className="w-16 h-px bg-gradient-to-l from-transparent to-gold" />
          </div>
        </div>

        <div className="luxury-card p-8 md:p-14 animate-fade-in-up animation-delay-200 relative">
          {/* Corner decorations */}
          <div className="absolute top-4 left-4 w-12 h-12 border-t-2 border-l-2 border-gold/30 rounded-tl-lg" />
          <div className="absolute top-4 right-4 w-12 h-12 border-t-2 border-r-2 border-gold/30 rounded-tr-lg" />
          <div className="absolute bottom-4 left-4 w-12 h-12 border-b-2 border-l-2 border-gold/30 rounded-bl-lg" />
          <div className="absolute bottom-4 right-4 w-12 h-12 border-b-2 border-r-2 border-gold/30 rounded-br-lg" />
          
          <div className="font-elegant text-lg md:text-xl leading-[1.9] text-foreground/85 space-y-6">
            <p className="text-gradient-gold font-heading font-semibold text-2xl md:text-3xl">
              My Dearest Hasina,
            </p>
            
            <p className="italic text-foreground/75">
              On this beautiful day, I want you to know how incredibly special you are to me. 
              Every moment with you feels like a gift, and I cherish each one deeply.
            </p>
            
            <p>
              Your smile lights up my world in ways words cannot describe. Your kindness, 
              your laughter, and the way you care for others – these are just a few of the 
              countless reasons why I fall in love with you more each day.
            </p>
            
            <p>
              As you celebrate another year of your beautiful life, I want you to know that 
              you deserve all the happiness in the world. May this year bring you endless joy, 
              success, and all your heart's desires.
            </p>
            
            <p>
              Thank you for being you – for being the amazing person who makes my life complete. 
              I am so grateful to have you in my life.
            </p>
            
            <div className="pt-8 border-t border-rose-medium/30">
              <p className="text-right">
                <span className="text-gold font-heading font-semibold text-lg">With all my love,</span>
                <br />
                <span className="font-script text-4xl text-primary mt-2 inline-block">Mohid</span>
              </p>
            </div>
          </div>
        </div>

        <div className="flex justify-center mt-10 gap-3">
          {[...Array(5)].map((_, i) => (
            <Heart 
              key={i} 
              className="w-5 h-5 text-primary fill-primary/80 animate-pulse-glow"
              style={{ animationDelay: `${i * 0.25}s` }}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default LoveLetter;
