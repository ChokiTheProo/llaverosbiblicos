import { useEffect, useState } from "react";
import { Flame } from "lucide-react";

interface Props {
  href: string;
}

const TARGET_SECONDS = 2 * 3600 + 46 * 60 + 40;

export const StickyCountdownBar = ({ href }: Props) => {
  const [secondsLeft, setSecondsLeft] = useState(TARGET_SECONDS);

  useEffect(() => {
    const id = setInterval(() => {
      setSecondsLeft((s) => (s > 0 ? s - 1 : 0));
    }, 1000);
    return () => clearInterval(id);
  }, []);

  const h = Math.floor(secondsLeft / 3600);
  const m = Math.floor((secondsLeft % 3600) / 60);
  const s = secondsLeft % 60;
  const pad = (n: number) => String(n).padStart(2, "0");

  return (
    <div className="sticky top-0 z-50 glass-dark text-primary-foreground">
      <div className="container flex items-center justify-between gap-3 py-2.5 text-xs sm:text-sm">
        <div className="flex items-center gap-2 min-w-0">
          <Flame className="h-4 w-4 text-accent shrink-0" aria-hidden />
          <span className="font-medium truncate">
            <span className="hidden sm:inline">Oferta por tiempo limitado · </span>
            <b className="text-accent">-50% OFF</b>
          </span>
        </div>
        <div className="flex items-center gap-2 shrink-0">
          <span className="hidden md:inline opacity-80">Termina en</span>
          <div className="flex items-center gap-1 font-display font-bold tabular-nums tracking-tight">
            <span className="bg-accent/15 border border-accent/40 rounded-md px-1.5 py-0.5 text-accent">{pad(h)}</span>
            <span className="text-accent/70">:</span>
            <span className="bg-accent/15 border border-accent/40 rounded-md px-1.5 py-0.5 text-accent">{pad(m)}</span>
            <span className="text-accent/70">:</span>
            <span className="bg-accent/15 border border-accent/40 rounded-md px-1.5 py-0.5 text-accent">{pad(s)}</span>
          </div>
          <a
            href={href}
            className="ml-2 hidden sm:inline-flex items-center justify-center bg-gradient-gold-strong text-primary-foreground font-bold rounded-full px-4 py-1.5 shadow-gold hover:brightness-110 transition-smooth"
          >
            Quiero el kit
          </a>
        </div>
      </div>
    </div>
  );
};
