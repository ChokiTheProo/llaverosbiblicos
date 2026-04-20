import { useEffect, useState } from "react";

export const CountdownTimer = () => {
  const [time, setTime] = useState({ hours: 2, minutes: 46, seconds: 40 });

  useEffect(() => {
    const interval = setInterval(() => {
      setTime((prev) => {
        let { hours, minutes, seconds } = prev;
        if (seconds > 0) seconds--;
        else if (minutes > 0) {
          minutes--;
          seconds = 59;
        } else if (hours > 0) {
          hours--;
          minutes = 59;
          seconds = 59;
        }
        return { hours, minutes, seconds };
      });
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  const items = [
    { label: "horas", value: time.hours },
    { label: "min", value: time.minutes },
    { label: "seg", value: time.seconds },
  ];

  return (
    <div className="flex items-center justify-center gap-3">
      {items.map((item, i) => (
        <div key={item.label} className="flex items-center gap-3">
          <div className="bg-foreground text-background rounded-2xl px-5 py-3 min-w-[80px] text-center shadow-soft">
            <div className="font-display text-3xl md:text-4xl font-bold tabular-nums">
              {String(item.value).padStart(2, "0")}
            </div>
            <div className="text-xs uppercase tracking-widest opacity-70 mt-1">{item.label}</div>
          </div>
          {i < items.length - 1 && <span className="font-display text-3xl text-primary">:</span>}
        </div>
      ))}
    </div>
  );
};
