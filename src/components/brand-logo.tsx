import { cn } from "@/lib/utils";

export function BrandLogo({ compact = false, className }: { compact?: boolean; className?: string }) {
  return (
    <div className={cn("flex items-center gap-3", className)} aria-label="Maamaar International Limited">
      <span className="relative grid size-10 shrink-0 place-items-center rounded-sm bg-primary" aria-hidden="true">
        <span className="absolute left-[8px] top-[9px] h-5 w-3 skew-x-[-20deg] bg-accent" />
        <span className="absolute right-[8px] top-[9px] h-5 w-3 skew-x-[20deg] bg-accent" />
      </span>
      {!compact && <span className="leading-none"><strong className="block font-display text-xl text-primary">Maamaar</strong><span className="mt-1 block text-[9px] font-semibold uppercase tracking-[0.18em] text-muted-foreground">International Limited</span></span>}
    </div>
  );
}