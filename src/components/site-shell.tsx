import { Link, useRouterState } from "@tanstack/react-router";
import { Menu, Phone, X, MessageCircle, Instagram, Linkedin } from "lucide-react";
import { useEffect, useState, type ReactNode } from "react";
import { BrandLogo } from "@/components/brand-logo";
import { Button } from "@/components/ui/button";
import { contact } from "@/lib/site-data";
import { cn } from "@/lib/utils";

const links = [
  { to: "/" as const, label: "Home" },
  { to: "/about" as const, label: "About" },
  { to: "/inventory" as const, label: "Inventory" },
  { to: "/partners" as const, label: "Our Partners" },
  { to: "/contact" as const, label: "Contact" },
];

export function SiteShell({ children }: { children: ReactNode }) {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const pathname = useRouterState({ select: (state) => state.location.pathname });
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);
  useEffect(() => setOpen(false), [pathname]);

  return (
    <div className="min-h-screen overflow-x-hidden bg-background">
      <header
        className={cn(
          "fixed inset-x-0 top-0 z-50 border-b border-transparent transition-all duration-300",
          scrolled ? "bg-background/95 py-2 shadow-nav backdrop-blur" : "bg-background py-4",
        )}
      >
        <div className="site-container flex items-center justify-between gap-5">
          <Link to="/" aria-label="Maamaar home">
            <BrandLogo />
          </Link>
          <nav className="hidden items-center gap-6 lg:flex" aria-label="Main navigation">
            {links.map((link) => (
              <Link
                key={link.to}
                to={link.to}
                className="nav-link"
                activeProps={{ className: "nav-link nav-link-active" }}
              >
                {link.label}
              </Link>
            ))}
          </nav>
          <div className="hidden items-center gap-4 lg:flex">
            <a
              href="tel:+16479018914"
              className="flex items-center gap-2 text-sm font-bold text-primary"
            >
              <Phone className="size-4 text-accent-strong" />
              {contact.phone}
            </a>
            <a
              href={contact.whatsapp}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1.5 text-sm font-semibold text-[#25D366] hover:opacity-85"
              aria-label="Chat on WhatsApp"
            >
              <WhatsAppIcon className="size-4" />
              <span className="hidden xl:inline">WhatsApp</span>
            </a>
            <Button asChild variant="gold">
              <Link to="/contact">Get a Quote</Link>
            </Button>
          </div>
          <Button
            variant="ghost"
            size="icon"
            className="lg:hidden"
            aria-label={open ? "Close menu" : "Open menu"}
            onClick={() => setOpen(!open)}
          >
            {open ? <X /> : <Menu />}
          </Button>
        </div>
      </header>
      <div
        className={cn(
          "fixed inset-0 z-40 bg-primary transition-transform duration-500 lg:hidden",
          open ? "translate-x-0" : "translate-x-full",
        )}
      >
        <nav className="flex h-full flex-col justify-center px-8" aria-label="Mobile navigation">
          {links.map((link) => (
            <Link
              key={link.to}
              to={link.to}
              className="border-b border-primary-foreground/15 py-5 font-display text-3xl font-bold text-primary-foreground"
            >
              {link.label}
            </Link>
          ))}
          <a
            href="tel:+16479018914"
            className="mt-8 flex items-center gap-2 text-primary-foreground"
          >
            {contact.phone}
          </a>
          <a
            href={contact.whatsapp}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-4 flex items-center gap-2 text-accent hover:underline"
          >
            <WhatsAppIcon className="size-5" /> Chat on WhatsApp
          </a>
        </nav>
      </div>
      <main className="page-enter">{children}</main>
      <Footer />
      <a
        href={contact.whatsapp}
        target="_blank"
        rel="noopener noreferrer"
        className="whatsapp-fab"
        aria-label="Chat on WhatsApp"
        title="Chat on WhatsApp"
      >
        <WhatsAppIcon />
      </a>
    </div>
  );
}

export function WhatsAppIcon({ className = "size-7" }: { className?: string }) {
  return (
    <svg
      width="28"
      height="28"
      viewBox="0 0 28 28"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
      className={className}
    >
      <path
        d="M14 2.333C7.556 2.333 2.333 7.556 2.333 14c0 2.044.544 3.96 1.494 5.617L2.333 25.667l6.24-1.455A11.6 11.6 0 0014 25.667c6.444 0 11.667-5.223 11.667-11.667C25.667 7.556 20.444 2.333 14 2.333z"
        fill="white"
      />
      <path
        d="M10.267 8.167c-.28 0-.7.105-.98.385-.28.28-1.085 1.05-1.085 2.555 0 1.505 1.085 2.975 1.225 3.185.14.21 2.17 3.43 5.285 4.655 3.115 1.225 3.115.84 3.675.805.56-.035 1.82-.735 2.065-1.47.245-.735.245-1.365.175-1.505-.07-.14-.245-.245-.525-.385-.28-.14-1.68-.84-1.96-.945-.28-.105-.49-.14-.7.14-.21.28-.805.945-.98 1.155-.175.21-.35.245-.63.105-.28-.14-1.19-.455-2.275-1.435-.84-.77-1.435-1.715-1.61-1.995-.175-.28-.02-.435.12-.575.14-.14.28-.35.42-.525.14-.175.175-.28.28-.49.105-.21.07-.385-.035-.525-.105-.14-.7-1.68-.945-2.31-.245-.595-.49-.525-.7-.525z"
        fill="#25D366"
      />
    </svg>
  );
}

function Footer() {
  return (
    <footer className="bg-primary py-14 text-primary-foreground">
      <div className="site-container grid gap-10 md:grid-cols-[1.5fr_1fr_1fr]">
        <div>
          <BrandLogo className="footer-logo brightness-0 invert" />
          <p className="mt-6 max-w-md text-sm leading-7 text-primary-foreground/70">
            Maamaar International Limited — Connecting North American Overstock with Global Markets
            Since 2013
          </p>
        </div>
        <div>
          <h2 className="font-display font-bold">Quick links</h2>
          <div className="mt-4 grid gap-3 text-sm text-primary-foreground/70">
            {links.map((link) => (
              <Link key={link.to} to={link.to} className="hover:text-accent">
                {link.label}
              </Link>
            ))}
          </div>
        </div>
        <div>
          <h2 className="font-display font-bold">Contact</h2>
          <a
            href="tel:+16479018914"
            className="mt-4 block text-sm text-primary-foreground/70 hover:text-accent"
          >
            {contact.phone}
          </a>
          <a
            href={contact.whatsapp}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-2 flex items-center gap-1.5 text-sm text-[#25D366] hover:underline font-semibold"
          >
            <WhatsAppIcon className="size-4 shrink-0" /> WhatsApp Us
          </a>
          <a
            href={`mailto:${contact.email}`}
            className="mt-2 block break-all text-sm text-primary-foreground/70 hover:text-accent"
          >
            {contact.email}
          </a>
          <div className="mt-5 flex gap-3">
            <Instagram className="size-5" aria-label="Instagram" />
            <Linkedin className="size-5" aria-label="LinkedIn" />
          </div>
        </div>
      </div>
      <div className="site-container mt-10 border-t border-primary-foreground/15 pt-6 text-xs text-primary-foreground/50">
        © 2026 Maamaar International Limited. All rights reserved.
      </div>
    </footer>
  );
}

export function PageHero({
  eyebrow,
  title,
  description,
}: {
  eyebrow: string;
  title: string;
  description: string;
}) {
  return (
    <section className="bg-hero pb-20 pt-40 text-primary-foreground">
      <div className="site-container">
        <p className="eyebrow text-accent">{eyebrow}</p>
        <h1 className="mt-5 max-w-4xl font-display text-4xl font-bold leading-tight sm:text-6xl">
          {title}
        </h1>
        <p className="mt-6 max-w-2xl text-lg leading-8 text-primary-foreground/70">{description}</p>
      </div>
    </section>
  );
}
