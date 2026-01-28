import { useEffect, useState } from "react";

interface TimeLeft {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
}

const CountdownTimer = () => {
  const [timeLeft, setTimeLeft] = useState<TimeLeft>({ days: 0, hours: 0, minutes: 0, seconds: 0 });
  const [isBirthday, setIsBirthday] = useState(false);

  useEffect(() => {
    const calculateTimeLeft = () => {
      const now = new Date();
      const currentYear = now.getFullYear();
      
      // Birthday is Feb 9th
      let birthdayDate = new Date(currentYear, 1, 9); // Month is 0-indexed
      
      // If birthday has passed this year, use next year
      if (now > birthdayDate) {
        birthdayDate = new Date(currentYear + 1, 1, 9);
      }

      // Check if today is the birthday
      const today = new Date(now.getFullYear(), now.getMonth(), now.getDate());
      const birthdayThisYear = new Date(currentYear, 1, 9);
      
      if (today.getTime() === birthdayThisYear.getTime()) {
        setIsBirthday(true);
        return { days: 0, hours: 0, minutes: 0, seconds: 0 };
      }

      const difference = birthdayDate.getTime() - now.getTime();
      
      const days = Math.floor(difference / (1000 * 60 * 60 * 24));
      const hours = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
      const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
      const seconds = Math.floor((difference % (1000 * 60)) / 1000);

      return { days, hours, minutes, seconds };
    };

    setTimeLeft(calculateTimeLeft());
    
    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  if (isBirthday) {
    return (
      <div className="text-center animate-fade-in-up">
        <h2 className="font-script text-5xl md:text-7xl text-primary mb-4 animate-heartbeat">
          🎂 Happy Birthday! 🎂
        </h2>
        <p className="font-heading text-xl text-muted-foreground italic">
          Today is your special day, my love!
        </p>
      </div>
    );
  }

  const TimeBlock = ({ value, label }: { value: number; label: string }) => (
    <div className="flex flex-col items-center">
      <div className="bg-card shadow-romantic rounded-2xl p-4 md:p-6 min-w-[70px] md:min-w-[100px] border border-rose-medium/30">
        <span className="font-heading text-3xl md:text-5xl font-semibold text-primary">
          {String(value).padStart(2, '0')}
        </span>
      </div>
      <span className="mt-2 text-sm md:text-base text-muted-foreground font-body tracking-wider uppercase">
        {label}
      </span>
    </div>
  );

  return (
    <div className="text-center">
      <p className="font-body text-muted-foreground mb-6 tracking-wide uppercase text-sm">
        Countdown to Your Special Day
      </p>
      <div className="flex justify-center gap-3 md:gap-6">
        <TimeBlock value={timeLeft.days} label="Days" />
        <TimeBlock value={timeLeft.hours} label="Hours" />
        <TimeBlock value={timeLeft.minutes} label="Mins" />
        <TimeBlock value={timeLeft.seconds} label="Secs" />
      </div>
    </div>
  );
};

export default CountdownTimer;
