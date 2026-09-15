import { Link, useRouterState } from "@tanstack/react-router";
import { Menu, Phone, X, MessageCircle, Instagram, Linkedin } from "lucide-react";
import { useEffect, useState, type ReactNode } from "react";
import { BrandLogo } from "@/components/brand-logo";
import { Button } from "@/components/ui/button";
import { contact } from "@/lib/site-data";
import { cn } from "@/lib/utils";

const links = [
  { to: "/" as const, label: "Home" }, { to: "/about" as const, label: "About" },
  { to: "/inventory" as const, label: "Inventory" }, { to: "/partners" as const, label: "Our Partners" },
  { to: "/contact" as const, label: "Contact" },
];

export function SiteShell({ children }: { children: ReactNode }) {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const pathname = useRouterState({ select: (state) => state.location.pathname });
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll(); window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);
  useEffect(() => setOpen(false), [pathname]);

  return <div className="min-h-screen overflow-x-hidden bg-background">
    <header className={cn("fixed inset-x-0 top-0 z-50 border-b border-transparent transition-all duration-300", scrolled ? "bg-background/95 py-2 shadow-nav backdrop-blur" : "bg-background py-4")}>
      <div className="site-container flex items-center justify-between gap-5">
        <Link to="/" aria-label="Maamaar home"><BrandLogo /></Link>
        <nav className="hidden items-center gap-6 lg:flex" aria-label="Main navigation">
          {links.map((link) => <Link key={link.to} to={link.to} className="nav-link" activeProps={{ className: "nav-link nav-link-active" }}>{link.label}</Link>)}
        </nav>
        <div className="hidden items-center gap-4 lg:flex">
          <a href="tel:+16479018914" className="flex items-center gap-2 text-sm font-bold text-primary"><Phone className="size-4 text-accent-strong" />{contact.phone}</a>
          <Button asChild variant="gold"><Link to="/contact">Get a Quote</Link></Button>
        </div>
        <Button variant="ghost" size="icon" className="lg:hidden" aria-label={open ? "Close menu" : "Open menu"} onClick={() => setOpen(!open)}>{open ? <X /> : <Menu />}</Button>
      </div>
    </header>
    <div className={cn("fixed inset-0 z-40 bg-primary transition-transform duration-500 lg:hidden", open ? "translate-x-0" : "translate-x-full")}>
      <nav className="flex h-full flex-col justify-center px-8" aria-label="Mobile navigation">
        {links.map((link) => <Link key={link.to} to={link.to} className="border-b border-primary-foreground/15 py-5 font-display text-3xl font-bold text-primary-foreground">{link.label}</Link>)}
        <a href="tel:+16479018914" className="mt-8 text-primary-foreground">{contact.phone}</a>
      </nav>
    </div>
    <main className="page-enter">{children}</main>
    <Footer />
    <a href="https://wa.me/16479018914" target="_blank" rel="noreferrer" className="fixed bottom-5 right-5 z-40 grid size-14 place-items-center rounded-full bg-accent text-accent-foreground shadow-gold transition hover:scale-110" aria-label="Chat on WhatsApp"><MessageCircle /></a>
  </div>;
}

function Footer() {
  return <footer className="bg-primary py-14 text-primary-foreground">
    <div className="site-container grid gap-10 md:grid-cols-[1.5fr_1fr_1fr]">
      <div><BrandLogo className="footer-logo" /><p className="mt-6 max-w-md text-sm leading-7 text-primary-foreground/70">Maamaar International Limited — Connecting North American Overstock with Global Markets Since 2013</p></div>
      <div><h2 className="font-display font-bold">Quick links</h2><div className="mt-4 grid gap-3 text-sm text-primary-foreground/70">{links.map((link) => <Link key={link.to} to={link.to} className="hover:text-accent">{link.label}</Link>)}</div></div>
      <div><h2 className="font-display font-bold">Contact</h2><a href="tel:+16479018914" className="mt-4 block text-sm text-primary-foreground/70 hover:text-accent">{contact.phone}</a><a href={`mailto:${contact.email}`} className="mt-2 block break-all text-sm text-primary-foreground/70 hover:text-accent">{contact.email}</a><div className="mt-5 flex gap-3"><Instagram className="size-5" aria-label="Instagram" /><Linkedin className="size-5" aria-label="LinkedIn" /></div></div>
    </div>
    <div className="site-container mt-10 border-t border-primary-foreground/15 pt-6 text-xs text-primary-foreground/50">© 2026 Maamaar International Limited. All rights reserved.</div>
  </footer>;
}

export function PageHero({ eyebrow, title, description }: { eyebrow: string; title: string; description: string }) {
  return <section className="bg-hero pb-20 pt-40 text-primary-foreground"><div className="site-container"><p className="eyebrow text-accent">{eyebrow}</p><h1 className="mt-5 max-w-4xl font-display text-4xl font-bold leading-tight sm:text-6xl">{title}</h1><p className="mt-6 max-w-2xl text-lg leading-8 text-primary-foreground/70">{description}</p></div></section>;
}