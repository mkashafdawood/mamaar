import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { PageHero } from "@/components/site-shell";
import { InventoryCard } from "@/components/inventory-card";
import { Button } from "@/components/ui/button";
import { categories, inventory } from "@/lib/site-data";
import { Reveal } from "@/components/reveal";

export const Route = createFileRoute("/inventory")({ head: () => ({ meta: [{ title: "Wholesale Apparel Inventory | Maamaar" }, { name: "description", content: "Browse branded sportswear, outerwear, denim, mixed lots, kids apparel and accessories for wholesale export." }, { property: "og:title", content: "Wholesale Apparel Inventory | Maamaar" }, { property: "og:description", content: "Current overstock and liquidation apparel categories for container-scale buyers." }, { property: "og:type", content: "website" }, { name: "twitter:card", content: "summary_large_image" }] }), component: InventoryPage });
function InventoryPage() {
  const [active, setActive] = useState("All");
  const filtered = active === "All" ? inventory : inventory.filter((item) => item.category === active);
  return <><PageHero eyebrow="Available categories" title="Wholesale inventory, ready for global markets." description="Explore representative overstock and liquidation lots. Availability changes frequently; contact us for current quantities, samples, and pricing." /><section className="section"><div className="site-container"><div className="flex flex-wrap gap-2" role="group" aria-label="Inventory filters">{categories.map((category)=><Button key={category} variant={active===category?"default":"outline"} onClick={()=>setActive(category)}>{category}</Button>)}</div><div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">{filtered.map((item,i)=><Reveal key={item.id} delay={(i%3)*80}><InventoryCard item={item} /></Reveal>)}</div>{filtered.length===0&&<div className="mt-12 rounded-lg border border-border bg-secondary p-10 text-center"><h2 className="font-display text-2xl font-bold text-primary">Footwear lots are sourced on request</h2><p className="mt-3 text-muted-foreground">Contact our team for current availability.</p></div>}</div></section></>;
}