import { Link } from "@tanstack/react-router";
import { ArrowUpRight } from "lucide-react";
import { contact, type inventory } from "@/lib/site-data";
import { Button } from "@/components/ui/button";
import { WhatsAppIcon } from "@/components/site-shell";

type Item = (typeof inventory)[number];
export function InventoryCard({ item, compact = false }: { item: Item; compact?: boolean }) {
  const waUrl = `${contact.whatsapp}?text=${encodeURIComponent(`Hello, I'm interested in wholesale lot: ${item.title} (${item.category})`)}`;

  return (
    <article className="group overflow-hidden rounded-2xl border border-border/70 bg-card shadow-card transition-[transform,box-shadow,border-color] duration-200 ease-out hover:-translate-y-1 hover:shadow-elevated hover:border-primary/20">
      <div
        className={
          compact ? "relative h-48 overflow-hidden" : "relative aspect-[4/3] overflow-hidden"
        }
      >
        <img
          src={item.image}
          alt={`${item.title} wholesale inventory`}
          loading="lazy"
          decoding="async"
          width={816}
          height={816}
          className="h-full w-full object-cover transition-transform duration-500 ease-out group-hover:scale-105 image-outline"
        />
        <span className="absolute left-3.5 top-3.5 rounded-md bg-accent/95 px-2.5 py-1 text-xs font-bold text-accent-foreground shadow-xs backdrop-blur-xs">
          {item.tag}
        </span>
      </div>
      <div className="p-5">
        <div className="flex items-center justify-between text-xs font-semibold uppercase tracking-wider text-muted-foreground">
          <span>{item.category}</span>
          <span className="text-[11px] font-normal normal-case text-muted-foreground/80">Full / Mixed Lots</span>
        </div>
        <h3 className="mt-2 font-display text-base font-bold leading-snug text-primary">{item.title}</h3>
        {!compact && (
          <div className="mt-4.5 flex items-center gap-2">
            <Button asChild variant="outline" className="flex-1 h-9 text-xs">
              <Link to="/contact">
                Inquire <ArrowUpRight className="ml-1 size-3.5 translate-y-[-0.5px]" />
              </Link>
            </Button>
            <a
              href={waUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="grid size-9 shrink-0 place-items-center rounded-lg bg-[#25D366] text-white shadow-xs transition-[transform,background-color] duration-150 active:scale-[0.96] hover:bg-[#20bd5a]"
              title="Inquire on WhatsApp"
              aria-label={`Inquire about ${item.title} on WhatsApp`}
            >
              <WhatsAppIcon className="size-4.5" />
            </a>
          </div>
        )}
      </div>
    </article>
  );
}
