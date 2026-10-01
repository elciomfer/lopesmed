import { cn } from "cn";
import { ClipboardCheck, FileText, HeartPulse, Send } from "lucide-react";

const hips = [
  {
    icon: ClipboardCheck,
    label: "ASO",
    position: "left-[7%] top-[18%]",
    delay: "0s",
  },
  {
    icon: HeartPulse,
    label: "ECG e EEG",
    position: "right-[8%] top-[24%]",
    delay: "-2s",
  },
  {
    icon: FileText,
    label: "PCMSO",
    position: "left-[11%] bottom-[20%]",
    delay: "-4s",
  },
  {
    icon: Send,
    label: "eSocial",
    position: "right-[12%] bottom-[16%]",
    delay: "-6s",
  },
];

export function Background() {
  return (
    <div aria-hidden className="pointer-events-none absolute inset-0 -z-10">
      <div className="absolute inset-x-0 bottom-0 h-40 bg-linear-to-b from-transparent to-background" />
      <div className="absolute top-1/2 left-1/2 size-[min(72rem,170vw)] -translate-x-1/2 -translate-y-1/2 opacity-60 dark:opacity-35">
        <div className="absolute top-[30%] left-[10%] size-[40%] rounded-full bg-emerald-500 blur-3xl motion-safe:animate-aurora" />
        <div className="absolute top-[40%] right-[10%] size-[50%] rounded-full bg-green-400 blur-3xl motion-safe:animate-aurora" />
        <div className="absolute top-[50%] bottom-[30%] size-[60%] rounded-full bg-lime-300 blur-3xl motion-safe:animate-aurora" />
      </div>
      <div className="absolute inset-x-0 bottom-0 h-40 bg-linear-to-b from-transparent to-background" />
      {hips.map(({ icon: Icon, label, position, delay }) => (
        <div
          key={label}
          style={{ animationDelay: delay }}
          className={cn(
            "absolute hidden items-center gap-2 rounded-full bg-background/70 py-2 pr-4 pl-2 text-sm font-medium shadow-lg ring-1 shadow-foreground/5 ring-foreground/5 backdrop-blur-xl xl:flex motion-safe:animate-float",
            position,
          )}
        >
          <span className="flex size-7 items-center justify-center rounded-full bg-primary/10">
            <Icon className="size-4 text-primary" />
          </span>
          {label}
        </div>
      ))}
    </div>
  );
}
