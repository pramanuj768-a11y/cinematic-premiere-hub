import { useEffect, useState } from "react";

interface CountdownTimerProps {
  targetDate: string;
  variant?: "hero" | "compact";
}

export function CountdownTimer({ targetDate, variant = "hero" }: CountdownTimerProps) {
  const [timeLeft, setTimeLeft] = useState({ days: 0, hours: 0, minutes: 0, seconds: 0 });

  useEffect(() => {
    const timer = setInterval(() => {
      const now = new Date().getTime();
      const target = new Date(targetDate).getTime();
      const diff = target - now;

      if (diff <= 0) {
        setTimeLeft({ days: 0, hours: 0, minutes: 0, seconds: 0 });
        clearInterval(timer);
        return;
      }

      setTimeLeft({
        days: Math.floor(diff / (1000 * 60 * 60 * 24)),
        hours: Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
        minutes: Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60)),
        seconds: Math.floor((diff % (1000 * 60)) / 1000),
      });
    }, 1000);

    return () => clearInterval(timer);
  }, [targetDate]);

  const units = [
    { label: "Days", value: timeLeft.days },
    { label: "Hours", value: timeLeft.hours },
    { label: "Min", value: timeLeft.minutes },
    { label: "Sec", value: timeLeft.seconds },
  ];

  if (variant === "compact") {
    return (
      <div className="flex gap-2">
        {units.map((unit) => (
          <div key={unit.label} className="text-center">
            <div className="bg-secondary rounded px-2 py-1 text-sm font-mono font-bold text-foreground min-w-[2.5rem]">
              {String(unit.value).padStart(2, "0")}
            </div>
            <div className="text-[10px] text-muted-foreground mt-0.5">{unit.label}</div>
          </div>
        ))}
      </div>
    );
  }

  return (
    <div className="flex gap-4">
      {units.map((unit) => (
        <div key={unit.label} className="text-center">
          <div className="bg-secondary/80 backdrop-blur-sm border border-border rounded-lg px-4 py-3 min-w-[4.5rem] cinema-glow">
            <span className="text-3xl font-mono font-bold text-primary animate-countdown">
              {String(unit.value).padStart(2, "0")}
            </span>
          </div>
          <span className="text-xs text-muted-foreground mt-2 block uppercase tracking-widest">
            {unit.label}
          </span>
        </div>
      ))}
    </div>
  );
}
