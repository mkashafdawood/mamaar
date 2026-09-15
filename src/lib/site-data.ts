import sportswear from "@/assets/inventory-sportswear.jpg";
import denim from "@/assets/inventory-denim.jpg";
import mixed from "@/assets/inventory-mixed.jpg";
import warehouseBin from "@/assets/warehouse-bin-1.jpeg";
import warehousePallets from "@/assets/warehouse-pallets-2.jpeg";
import denimSorting from "@/assets/denim-sorting.jpg";
import apparelInspection from "@/assets/apparel-inspection.jpg";
import baledInventory from "@/assets/baled-inventory.jpg";

export const contact = {
  phone: "+1 (647) 901-8914",
  phoneRaw: "+16479018914",
  whatsapp: "https://wa.me/16479018914",
  email: "info@maamaarinternational.com",
};

export const warehouseShowcase = [
  {
    id: 1,
    title: "Overstock Assortment",
    tag: "Mixed Apparel",
    poster: warehouseBin,
    video: "/tasks/WhatsApp_Video_2026-08-27_at_11.44.47_PM.mp4",
  },
  {
    id: 2,
    title: "Warehouse Stock",
    tag: "New Arrival",
    poster: warehousePallets,
    video: "/tasks/WhatsApp_Video_2026-08-27_at_11.44.44_PM.mp4",
  },
  {
    id: 3,
    title: "Branded Apparel Lot",
    tag: "Branded Lot",
    poster: denimSorting,
    video: "/tasks/WhatsApp_Video_2026-08-27_at_11.44.46_PM.mp4",
  },
  {
    id: 4,
    title: "Container Lot Preview",
    tag: "Mixed Apparel",
    poster: baledInventory,
    video: "/tasks/WhatsApp_Video_2026-08-27_at_11.44.47_PM.mp4",
  },
];

export const inventory = [
  {
    id: 1,
    title: "Branded Sportswear Jerseys",
    tag: "Branded Lot",
    category: "Sportswear",
    image: sportswear,
  },
  {
    id: 2,
    title: "Mixed Hoodies & Sweatshirts",
    tag: "Mixed Apparel",
    category: "Outerwear",
    image: warehouseBin,
  },
  {
    id: 3,
    title: "John Deere & Workwear Hoodies",
    tag: "Branded Lot",
    category: "Outerwear",
    image: apparelInspection,
  },
  {
    id: 4,
    title: "Denim & Jeans Assorted",
    tag: "Mixed Apparel",
    category: "Denim",
    image: denimSorting,
  },
  {
    id: 5,
    title: "Kids & Family Pajama Sets",
    tag: "Kids & Family",
    category: "Kids/Family Apparel",
    image: warehousePallets,
  },
  {
    id: 6,
    title: "Base Layer & Athletic Sets",
    tag: "New Arrival",
    category: "Sportswear",
    image: sportswear,
  },
  {
    id: 7,
    title: "Assorted Bagged Overstock Apparel",
    tag: "Mixed Apparel",
    category: "Mixed Lots",
    image: baledInventory,
  },
  {
    id: 8,
    title: "Accessories & Undergarments Lot",
    tag: "Mixed Apparel",
    category: "Accessories",
    image: mixed,
  },
  {
    id: 9,
    title: "Character & Kids Printed Tees",
    tag: "Kids & Family",
    category: "Kids/Family Apparel",
    image: warehouseBin,
  },
  {
    id: 10,
    title: "Assorted Branded Streetwear",
    tag: "Branded Lot",
    category: "Mixed Lots",
    image: denim,
  },
];

export const partners = [
  {
    name: "Costco / Kirkland Signature",
    country: "United States",
    relationship: "Retail Sourcing Partner",
  },
  { name: "Hanes", country: "United States", relationship: "Apparel Manufacturing Partner" },
  {
    name: "Fruit of the Loom",
    country: "United States",
    relationship: "Apparel Manufacturing Partner",
  },
  { name: "Gildan", country: "Canada", relationship: "Apparel Manufacturing Partner" },
  { name: "Champion", country: "United States", relationship: "Sportswear Sourcing Partner" },
  {
    name: "Russell Athletic",
    country: "United States",
    relationship: "Sportswear Sourcing Partner",
  },
  { name: "Fila", country: "Italy", relationship: "Sportswear Sourcing Partner" },
  { name: "Umbro", country: "United Kingdom", relationship: "Sportswear Sourcing Partner" },
  { name: "Starter", country: "United States", relationship: "Sportswear Sourcing Partner" },
  {
    name: "John Deere Merchandise",
    country: "United States",
    relationship: "Licensed Apparel Partner",
  },
];

export const howItWorks = [
  {
    step: 1,
    title: "Browse Container Lots",
    description: "Explore available overstock and liquidation inventory categories.",
  },
  {
    step: 2,
    title: "Request Quote & Samples",
    description: "Get pricing and sample photos for the lots you're interested in.",
  },
  {
    step: 3,
    title: "Confirm Order & Payment",
    description: "Finalize terms, quantities, and payment method.",
  },
  {
    step: 4,
    title: "Shipping & Export Documentation",
    description: "We handle export paperwork and coordinate shipping to your destination.",
  },
];

export const categories = [
  "All",
  "Sportswear",
  "Outerwear",
  "Denim",
  "Mixed Lots",
  "Kids/Family Apparel",
  "Accessories",
  "Footwear",
];
