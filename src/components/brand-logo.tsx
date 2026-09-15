import logo from "@/assets/logo.png";
import { cn } from "@/lib/utils";

export function BrandLogo({
  compact = false,
  className,
}: {
  compact?: boolean;
  className?: string;
}) {
  return (
    <div
      className={cn("flex items-center gap-3", className)}
      aria-label="Maamaar International Limited"
    >
      <img
        src={logo}
        alt="Maamaar International Limited"
        width={180}
        height={44}
        className={cn("h-11 w-auto object-contain transition-transform duration-150 ease-out", compact && "h-8")}
      />
    </div>
  );
}
