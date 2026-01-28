import { Heart } from "lucide-react";

const LoveLetter = () => {
  return (
    <section className="py-20 px-4 bg-romantic-gradient relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute top-10 left-10 opacity-10">
        <Heart size={120} className="text-primary fill-primary" />
      </div>
      <div className="absolute bottom-10 right-10 opacity-10">
        <Heart size={80} className="text-primary fill-primary" />
      </div>

      <div className="max-w-3xl mx-auto relative z-10">
        <div className="text-center mb-12 animate-fade-in-up">
          <Heart className="w-8 h-8 mx-auto text-primary fill-primary mb-4" />
          <h2 className="font-script text-4xl md:text-5xl text-primary mb-2">
            A Letter For You
          </h2>
          <div className="w-24 h-0.5 bg-gold mx-auto mt-4" />
        </div>

        <div className="bg-card rounded-3xl p-8 md:p-12 shadow-romantic border border-rose-medium/20 animate-fade-in-up animation-delay-200">
          <div className="font-heading text-lg md:text-xl leading-relaxed text-foreground/90 space-y-6">
            <p className="text-gold font-semibold text-2xl">My Dearest Ayesha,</p>
            
            <p className="italic">
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
            
            <div className="pt-6 border-t border-rose-medium/20">
              <p className="text-right">
                <span className="text-gold font-semibold">With all my love,</span>
                <br />
                <span className="font-script text-3xl text-primary">Rehan</span>
              </p>
            </div>
          </div>
        </div>

        <div className="flex justify-center mt-8 gap-2">
          {[...Array(5)].map((_, i) => (
            <Heart 
              key={i} 
              className="w-5 h-5 text-primary fill-primary animate-pulse-glow"
              style={{ animationDelay: `${i * 0.2}s` }}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default LoveLetter;
