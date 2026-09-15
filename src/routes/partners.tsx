import { createFileRoute, Link } from "@tanstack/react-router";
import { Boxes, Globe, MessageCircle, RefreshCw, ShieldCheck } from "lucide-react";
import { PageHero, WhatsAppIcon } from "@/components/site-shell";
import { contact, partners } from "@/lib/site-data";
import { Reveal } from "@/components/reveal";
import { Button } from "@/components/ui/button";

export const Route = createFileRoute("/partners")({
  head: () => ({
    meta: [
      { title: "Our Sourcing Partners | Maamaar" },
      {
        name: "description",
        content:
          "Leading North American manufacturers and brands supporting Maamaar's overstock apparel inventory.",
      },
      { property: "og:title", content: "Our Sourcing Partners | Maamaar" },
      {
        property: "og:description",
        content: "Trusted sourcing relationships across Canada, the US, and international brands.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: PartnersPage,
});

function PartnersPage() {
  const trust = [
    {
      Icon: ShieldCheck,
      title: "Reliability & Compliance",
      text: "Clear trade commitments, strict export documentation, and dependable execution on every container.",
    },
    {
      Icon: Boxes,
      title: "Volume Capacity",
      text: "Container-scale purchasing capability to clear enterprise apparel surplus swiftly and smoothly.",
    },
    {
      Icon: RefreshCw,
      title: "Repeat Consistency",
      text: "Over a decade of multi-year relationships built on trust, confidentiality, and mutual growth.",
    },
  ];

  return (
    <>
      <PageHero
        eyebrow="Sourcing network"
        title="Established brands. Dependable supply."
        description="We proudly work with leading North American retailers and manufacturers for sourcing authentic overstock, surplus, and liquidation inventory."
      />

      <section className="overflow-hidden border-b border-border bg-secondary py-8">
        <div className="marquee-track">
          {[...partners, ...partners].map((p, i) => (
            <div className="partner-logo" key={`${p.name}-${i}`}>
              {p.name}
            </div>
          ))}
        </div>
      </section>

      <section className="section">
        <div className="site-container">
          <Reveal className="mb-12">
            <p className="eyebrow">Enterprise relationships</p>
            <h2 className="section-title">Brand & Manufacturing Partners</h2>
            <p className="body-copy mt-3">
              We coordinate directly with retail supply chains and licensed brand holders to bring
              consistent, container-scale lots to our international buyer network.
            </p>
          </Reveal>

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {partners.map((partner, i) => {
              const waUrl = `${contact.whatsapp}?text=${encodeURIComponent(`Hello, I'm interested in sourcing lots from partner brand: ${partner.name}`)}`;
              return (
                <Reveal key={partner.name} delay={(i % 3) * 80}>
                  <article className="group flex h-full flex-col justify-between rounded-2xl border border-border/80 bg-card p-6 shadow-xs transition-[transform,box-shadow,border-color] duration-200 ease-out hover:-translate-y-1 hover:border-primary/25 hover:shadow-card active:scale-[0.99]">
                    <div>
                      <div className="flex items-center justify-between gap-2">
                        <span className="inline-flex items-center gap-1.5 rounded-md bg-secondary px-2.5 py-1 text-xs font-semibold text-muted-foreground">
                          <Globe className="size-3 text-accent-strong" /> {partner.country}
                        </span>
                        <span className="text-[11px] font-bold uppercase tracking-wider text-accent-strong">
                          Verified Supply
                        </span>
                      </div>
                      <h3 className="mt-4 font-display text-xl font-bold text-primary">
                        {partner.name}
                      </h3>
                      <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                        {partner.relationship}
                      </p>
                    </div>
                    <div className="mt-6 pt-4 border-t border-border/60 flex items-center justify-between">
                      <Button asChild variant="outline" size="sm">
                        <Link to="/contact">Request Lot</Link>
                      </Button>
                      <a
                        href={waUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1.5 text-xs font-semibold text-[#25D366] transition-[transform,opacity] duration-150 ease-out hover:opacity-85 active:scale-[0.96]"
                        aria-label={`Inquire about ${partner.name} lots on WhatsApp`}
                      >
                        <WhatsAppIcon className="size-3.5" /> WhatsApp Inquire
                      </a>
                    </div>
                  </article>
                </Reveal>
              );
            })}
          </div>
        </div>
      </section>

      <section className="section bg-primary text-primary-foreground">
        <div className="site-container">
          <Reveal className="text-center">
            <p className="eyebrow text-accent">Long-term value</p>
            <h2 className="section-title mx-auto text-primary-foreground">
              Why Our Partners Trust Us
            </h2>
            <p className="body-copy mx-auto mt-4 text-primary-foreground/75 max-w-2xl">
              We understand brand protection, liquidation compliance, and the requirements of
              transcontinental container shipping.
            </p>
          </Reveal>

          <div className="mt-12 grid gap-6 md:grid-cols-3">
            {trust.map(({ Icon, title, text }) => (
              <div
                className="dark-feature rounded-2xl border border-white/15 bg-white/[0.04] p-7 transition-[border-color,background-color] duration-200 hover:border-white/25 hover:bg-white/[0.07]"
                key={title}
              >
                <div className="mb-4 inline-flex size-11 items-center justify-center rounded-xl bg-accent/20 text-accent">
                  <Icon className="size-6" />
                </div>
                <h3 className="font-display text-lg font-bold text-primary-foreground">{title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-primary-foreground/70">{text}</p>
              </div>
            ))}
          </div>

          <div className="mt-12 flex flex-wrap items-center justify-center gap-4">
            <Button asChild variant="gold" size="xl">
              <Link to="/contact">Discuss a Sourcing Partnership</Link>
            </Button>
            <a
              href={contact.whatsapp}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-full bg-[#25D366] px-6 py-3.5 text-sm font-bold text-white shadow-md transition-[transform,background-color] duration-150 ease-out hover:bg-[#20bd5a] active:scale-[0.96]"
            >
              <WhatsAppIcon className="size-5" /> Chat on WhatsApp
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
