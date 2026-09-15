import { Link } from "@tanstack/react-router";
import { ArrowUpRight } from "lucide-react";
import { contact, type inventory } from "@/lib/site-data";
import { Button } from "@/components/ui/button";
import { WhatsAppIcon } from "@/components/site-shell";

type Item = (typeof inventory)[number];
export function InventoryCard({ item, compact = false }: { item: Item; compact?: boolean }) {
  const waUrl = `${contact.whatsapp}?text=${encodeURIComponent(`Hello, I'm interested in wholesale lot: ${item.title} (${item.category})`)}`;

  return (
    <article className="group overflow-hidden rounded-2xl border border-border bg-card shadow-card transition duration-300 hover:-translate-y-1 hover:shadow-elevated">
      <div
        className={
          compact ? "relative h-48 overflow-hidden" : "relative aspect-[4/3] overflow-hidden"
        }
      >
        <img
          src={item.image}
          alt={`${item.title} wholesale inventory`}
          loading="lazy"
          width={816}
          height={816}
          className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
        />
        <span className="absolute left-4 top-4 rounded-full bg-accent px-3 py-1 text-xs font-bold text-accent-foreground">
          {item.tag}
        </span>
      </div>
      <div className="p-5">
        <p className="text-xs font-bold uppercase text-muted-foreground">{item.category}</p>
        <h3 className="mt-2 font-display text-lg font-bold text-primary">{item.title}</h3>
        {!compact && (
          <div className="mt-5 flex items-center gap-2">
            <Button asChild variant="outline" className="flex-1">
              <Link to="/contact">
                Inquire <ArrowUpRight className="ml-1 size-4" />
              </Link>
            </Button>
            <a
              href={waUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="grid size-9 shrink-0 place-items-center rounded-lg bg-[#25D366] text-white transition hover:scale-105 hover:bg-[#20bd5a]"
              title="Inquire on WhatsApp"
              aria-label={`Inquire about ${item.title} on WhatsApp`}
            >
              <WhatsAppIcon className="size-5" />
            </a>
          </div>
        )}
      </div>
    </article>
  );
}
