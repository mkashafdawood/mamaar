import { createFileRoute, Link } from "@tanstack/react-router";
import {
  ArrowDown,
  ArrowRight,
  Boxes,
  Container,
  Globe2,
  PackageCheck,
  Search,
  Ship,
  Star,
} from "lucide-react";
import heroImage from "@/assets/hero-apparel.jpg";
import warehouseBin from "@/assets/warehouse-bin-1.jpeg";
import denimSorting from "@/assets/denim-sorting.jpg";
import apparelInspection from "@/assets/apparel-inspection.jpg";
import { Button } from "@/components/ui/button";
import { CountUp, Reveal } from "@/components/reveal";
import { InventoryCard } from "@/components/inventory-card";
import { WhatsAppIcon } from "@/components/site-shell";
import { contact, howItWorks, inventory, partners, warehouseShowcase } from "@/lib/site-data";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Maamaar | Wholesale Apparel Exporter Canada" },
      {
        name: "description",
        content:
          "Canadian exporter of branded overstock, surplus and liquidation apparel to the UAE and global wholesale markets.",
      },
      { property: "og:title", content: "Maamaar | Wholesale Apparel Exporter Canada" },
      {
        property: "og:description",
        content: "Container-scale apparel sourcing and export from North America since 2013.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: HomePage,
});

function HomePage() {
  const offers = [
    [PackageCheck, "Overstock & Surplus Clothing"],
    [Boxes, "Retail Liquidation Apparel"],
    [Star, "Branded Clothing"],
    [Container, "Wholesale Container Shipments"],
    [Search, "USA & Canada Sourcing"],
    [Globe2, "Export Services to UAE & International Markets"],
  ] as const;
  return (
    <>
      <section
        className="hero"
        onMouseMove={(e) => {
          const r = e.currentTarget.getBoundingClientRect();
          e.currentTarget.style.setProperty("--mx", `${e.clientX - r.left}px`);
          e.currentTarget.style.setProperty("--my", `${e.clientY - r.top}px`);
        }}
      >
        <div className="hero-cursor" />
        <div className="hero-line hero-line-one" />
        <div className="hero-line hero-line-two" />
        <div className="site-container relative z-10 grid min-h-[calc(100vh-1rem)] items-center gap-12 pb-24 pt-36 lg:grid-cols-[1.2fr_.8fr]">
          <div>
            <div className="hero-badge">
              <span />
              Canada → UAE & Global Markets
            </div>
            <h1 className="hero-title">
              <span>Connecting North American</span>
              <span>Overstock with Global</span>
              <span>Wholesale Markets</span>
            </h1>
            <p className="hero-copy">
              Trusted wholesale exporter of branded overstock, surplus & liquidation apparel since
              2013. Serving UAE and international wholesale buyers with container-scale shipments.
            </p>
            <div className="mt-9 flex flex-wrap items-center gap-4">
              <Button asChild variant="gold" size="xl">
                <Link to="/contact">
                  Request a Wholesale Quote <ArrowRight />
                </Link>
              </Button>
              <a
                href={contact.whatsapp}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-full bg-[#25D366] px-6 py-3.5 text-sm font-bold text-white shadow-[0_4px_16px_rgba(37,211,102,0.35)] transition-[transform,background-color,box-shadow] duration-150 ease-out hover:bg-[#20bd5a] hover:shadow-[0_6px_20px_rgba(37,211,102,0.5)] active:scale-[0.96]"
                aria-label="Chat directly on WhatsApp"
              >
                <WhatsAppIcon className="size-5" /> Chat on WhatsApp
              </a>
              <Button asChild variant="heroOutline" size="xl">
                <Link to="/inventory">View Inventory</Link>
              </Button>
            </div>
          </div>
          <div className="hero-visual">
            <div className="hero-glow" />
            <img
              src={heroImage}
              alt="Folded apparel prepared for international shipment"
              width={912}
              height={1008}
              fetchPriority="high"
              className="hero-main-image"
            />
            <Floating image={warehouseBin} label="Branded Lot" className="float-one" />
            <Floating image={denimSorting} label="New Arrival" className="float-two" />
            <Floating image={apparelInspection} label="Mixed Apparel" className="float-three" />
          </div>
        </div>
        <div className="scroll-cue">
          <span>Scroll to explore</span>
          <ArrowDown />
        </div>
        <div className="scroll-dots">
          <i />
          <i />
          <i />
        </div>
      </section>

      <section className="stats-bar">
        <div className="site-container grid grid-cols-2 gap-8 lg:grid-cols-4">
          <Stat value={10} label="Years in Business" delay={0} />
          <Stat value={1000} label="Containers Shipped" delay={150} />
          <Stat text="UAE & Global" label="Export Markets" delay={300} />
          <Stat value={10} label="Retail Partners" delay={450} />
        </div>
      </section>

      {/* Live Inventory Video Showcase */}
      <section
        className="section bg-primary text-primary-foreground overflow-hidden"
        aria-label="Inventory video showcase"
      >
        <div className="site-container">
          <Reveal className="text-center">
            <p className="eyebrow text-accent">Live Inventory</p>
            <h2 className="section-title text-primary-foreground mx-auto">
              See Our Inventory in Action
            </h2>
            <p className="body-copy text-primary-foreground/75 mx-auto mt-4 max-w-2xl">
              Real footage from our warehouse — actual overstock lots available for wholesale
              container orders.
            </p>
          </Reveal>
          <div className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {warehouseShowcase.map((item, i) => (
              <Reveal key={item.id} delay={i * 90}>
                <div className="video-card group">
                  <div className="relative aspect-square overflow-hidden bg-primary/80">
                    <video
                      src={item.video}
                      poster={item.poster}
                      autoPlay
                      muted
                      loop
                      playsInline
                      className="h-full w-full object-cover transition-transform duration-500 ease-out group-hover:scale-105 image-outline"
                    />
                    <div className="absolute top-3 left-3">
                      <span className="inline-block rounded-full bg-accent/95 px-2.5 py-1 text-xs font-bold text-accent-foreground shadow-xs backdrop-blur-xs">
                        {item.tag}
                      </span>
                    </div>
                    <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/85 via-black/45 to-transparent p-4">
                      <p className="font-display text-sm font-bold text-white leading-snug">
                        {item.title}
                      </p>
                      <a
                        href={`${contact.whatsapp}?text=${encodeURIComponent(`Hello, I'm interested in wholesale lot: ${item.title} (${item.tag})`)}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="mt-2 inline-flex items-center gap-1.5 text-xs font-semibold text-[#25D366] transition-[transform,color] duration-150 ease-out hover:text-white active:scale-[0.96]"
                      >
                        <WhatsAppIcon className="size-3.5" /> Inquire on WhatsApp
                      </a>
                    </div>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="section overflow-hidden">
        <div className="site-container">
          <Reveal>
            <p className="eyebrow">Current lots</p>
            <h2 className="section-title underline-title">Our Latest Inventory</h2>
          </Reveal>
        </div>
        <Marquee items={inventory.slice(0, 5)} reverse={false} />
        <Marquee items={inventory.slice(5)} reverse />
        <div className="mt-10 text-center">
          <Button asChild size="xl">
            <Link to="/inventory">
              View Full Inventory <ArrowRight />
            </Link>
          </Button>
        </div>
      </section>

      <section className="border-y border-border bg-secondary py-16">
        <div className="site-container text-center">
          <Reveal>
            <p className="text-sm font-semibold text-muted-foreground">
              Sourced from leading North American manufacturers and brands
            </p>
          </Reveal>
        </div>
        <div className="mt-8 overflow-hidden">
          <div className="marquee-track">
            {[...partners, ...partners].map((p, i) => (
              <div
                id={
                  i < partners.length
                    ? `logo-${p.name.split(" ")[0]?.toLowerCase().replaceAll("/", "")}`
                    : undefined
                }
                className="partner-logo"
                key={`${p.name}-${i}`}
              >
                {p.name}
              </div>
            ))}
          </div>
        </div>
        <div className="mt-8 text-center">
          <Button asChild variant="outline">
            <Link to="/partners">Meet Our Partners</Link>
          </Button>
        </div>
      </section>

      <section className="section">
        <div className="site-container grid items-center gap-14 lg:grid-cols-2">
          <Reveal>
            <p className="eyebrow">Since 2013</p>
            <h2 className="section-title">North American supply. Global market expertise.</h2>
          </Reveal>
          <Reveal delay={120}>
            <p className="body-copy">
              Based in Canada, we source high-quality overstock and liquidation apparel from leading
              retailers across the US and Canada. Our established UAE relationships help
              international buyers secure reliable inventory with professional export support.
            </p>
            <Button asChild variant="link" className="mt-4 px-0">
              <Link to="/about">
                Read our story <ArrowRight />
              </Link>
            </Button>
          </Reveal>
        </div>
      </section>

      <section className="section bg-secondary">
        <div className="site-container">
          <Reveal className="text-center">
            <p className="eyebrow">Our capabilities</p>
            <h2 className="section-title mx-auto">What we offer</h2>
          </Reveal>
          <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {offers.map(([Icon, title], i) => (
              <Reveal key={title} delay={(i % 3) * 90}>
                <div className="feature-card">
                  <Icon />
                  <h3>{title}</h3>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="section">
        <div className="site-container">
          <Reveal>
            <p className="eyebrow">Simple and transparent</p>
            <h2 className="section-title">How it works</h2>
          </Reveal>
          <div className="process-grid">
            {howItWorks.map((item, i) => (
              <Reveal key={item.step} delay={i * 100}>
                <div className="process-step">
                  <span>{String(item.step).padStart(2, "0")}</span>
                  <h3>{item.title}</h3>
                  <p>{item.description}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="section bg-secondary">
        <div className="site-container">
          <Reveal className="text-center">
            <p className="eyebrow">Buyer relationships</p>
            <h2 className="section-title mx-auto">Built for repeat business</h2>
          </Reveal>
          <div className="mt-12 grid gap-6 md:grid-cols-3">
            {[
              "Reliable communication and accurate lot details from the first conversation.",
              "A professional partner for container-scale apparel sourcing into the UAE.",
              "Consistent quality and responsive export coordination we can depend on.",
            ].map((quote, i) => (
              <blockquote className="testimonial" key={quote}>
                <div className="flex gap-1 text-accent-strong">★★★★★</div>
                <p>“{quote}”</p>
                <cite>
                  {
                    ["UAE Wholesale Buyer", "Dubai Apparel Distributor", "International Reseller"][
                      i
                    ]
                  }
                </cite>
              </blockquote>
            ))}
          </div>
        </div>
      </section>

      <section className="cta-band">
        <div className="site-container flex flex-col items-start justify-between gap-7 md:flex-row md:items-center">
          <div>
            <p className="eyebrow text-accent">Start a conversation</p>
            <h2>Ready to Source Your Next Container?</h2>
          </div>
          <div className="flex flex-wrap gap-4">
            <Button asChild variant="gold" size="xl">
              <Link to="/contact">
                Request a Quote <ArrowRight />
              </Link>
            </Button>
            <a
              href={contact.whatsapp}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-full bg-[#25D366] px-6 py-3.5 text-sm font-bold text-white shadow-lg transition-[transform,background-color,box-shadow] duration-150 ease-out hover:bg-[#20bd5a] hover:shadow-[0_6px_20px_rgba(37,211,102,0.5)] active:scale-[0.96]"
            >
              <WhatsAppIcon className="size-5" /> Chat on WhatsApp
            </a>
          </div>
        </div>
      </section>
    </>
  );
}

function Floating({
  image,
  label,
  className,
}: {
  image: string;
  label: string;
  className: string;
}) {
  return (
    <div className={`floating-card ${className}`}>
      <img src={image} alt="" width={816} height={816} />
      <span>{label}</span>
    </div>
  );
}
function Stat({
  value,
  text,
  label,
  delay = 0,
}: {
  value?: number;
  text?: string;
  label: string;
  delay?: number;
}) {
  return (
    <Reveal delay={delay}>
      <div className="stat-item">
        <strong
          className={`stat-value ${text ? "stat-text" : ""}`}
          style={text ? { transitionDelay: `${delay}ms` } : undefined}
        >
          {value !== undefined ? <CountUp value={value} delay={delay} /> : text}
        </strong>
        <span className="stat-label">{label}</span>
      </div>
    </Reveal>
  );
}
function Marquee({ items, reverse }: { items: typeof inventory; reverse: boolean }) {
  return (
    <div className="inventory-marquee">
      <div className={`inventory-track ${reverse ? "marquee-reverse" : ""}`}>
        {[...items, ...items].map((item, i) => (
          <div className="w-72 shrink-0" key={`${item.id}-${i}`}>
            <InventoryCard item={item} compact />
          </div>
        ))}
      </div>
    </div>
  );
}
