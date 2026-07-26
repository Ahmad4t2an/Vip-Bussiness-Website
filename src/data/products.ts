export interface ProductSpec {
  label: string;
  value: string;
}

export interface Product {
  id: string;
  categoryId: string;
  name: string;
  image: string;
  description?: string;
  specs: ProductSpec[];
}

export interface Category {
  id: string;
  name: string;
}

export const categories: Category[] = [
  { id: "food-packaging",  name: "Food Packaging Boxes" },
  { id: "business-cards",  name: "Business Cards" },
  { id: "door-hangers",    name: "Door Hangers" },
  { id: "flyers-posters",  name: "Flyers & Posters" },
  { id: "stickers-labels", name: "Stickers & Labels" },
  { id: "stationery",      name: "Stationery & Certificates" },
  { id: "paper-cups",      name: "Paper Cups" },
  { id: "event-cards",     name: "Event & Wedding Stationery" },

  // ─── NEW CATEGORIES (added from client photos) ──────────────────────────
  { id: "microwave-containers", name: "Microwave Food Containers" },
  { id: "deli-tubs",            name: "Deli & Ice Cream Tubs" },
  { id: "kraft-bowls",          name: "Kraft Salad Bowls" },
  { id: "cutlery-sets",         name: "Disposable Cutlery" },
  { id: "buckets-pails",        name: "Buckets & Pails" },
  { id: "produce-trays",        name: "Egg & Produce Trays" },
  { id: "nursery-trays",        name: "Nursery & Seedling Trays" },
  { id: "clamshell-containers", name: "Clamshell Containers" },
];

export const products: Product[] = [

  // ─── FOOD PACKAGING ────────────────────────────────────────────────────────
  {
    id: "food-carry-box-1",
    categoryId: "food-packaging",
    name: "Food Carry Box – Open View",
    image: "/images/products/food-carry-box-1.png",
    description: "Heavy-duty printed food carry box with top handle, ideal for burger & fries combos.",
    specs: [
      { label: "Material",      value: "E-Flute Corrugated Board" },
      { label: "Print",         value: "Full Color Offset" },
      { label: "Handle",        value: "Built-in Carry Handle" },
      { label: "Custom Design", value: "Available" },
    ],
  },
  {
    id: "food-carry-box-2",
    categoryId: "food-packaging",
    name: "Food Carry Box – Angle View",
    image: "/images/products/food-carry-box-2.png",
    description: "Branded fast food carry box – angle view showing vivid full-bleed printing.",
    specs: [
      { label: "Material",      value: "E-Flute Corrugated Board" },
      { label: "Print",         value: "Full Color Offset" },
      { label: "Handle",        value: "Built-in Carry Handle" },
      { label: "Custom Design", value: "Available" },
    ],
  },
  {
    id: "food-carry-box-3",
    categoryId: "food-packaging",
    name: "Food Carry Box – Side View",
    image: "/images/products/food-carry-box-3.png",
    description: "Side profile of the branded food carry box – sturdy base and food-safe interior.",
    specs: [
      { label: "Material",      value: "E-Flute Corrugated Board" },
      { label: "Print",         value: "Full Color Offset" },
      { label: "Handle",        value: "Built-in Carry Handle" },
      { label: "Custom Design", value: "Available" },
    ],
  },
  {
    id: "burger-box-1",
    categoryId: "food-packaging",
    name: "Burger Box – Classic Style",
    image: "/images/products/burger-box-1.png",
    description: "Classic red & white clam-shell burger box with bold custom branding.",
    specs: [
      { label: "Material",   value: "SBS Paperboard" },
      { label: "GSM",        value: "350–400" },
      { label: "Finish",     value: "Gloss Lamination" },
      { label: "Min Order",  value: "500 pcs" },
    ],
  },
  {
    id: "burger-box-2",
    categoryId: "food-packaging",
    name: "Burger Box – Red Grid Design",
    image: "/images/products/burger-box-2.png",
    description: "Premium burger box with grid-pattern side panels and full-color lid printing.",
    specs: [
      { label: "Material",   value: "SBS Paperboard" },
      { label: "GSM",        value: "350–400" },
      { label: "Finish",     value: "Gloss Lamination" },
      { label: "Min Order",  value: "500 pcs" },
    ],
  },
  {
    id: "burger-box-3",
    categoryId: "food-packaging",
    name: "Burger Box – Premium Print",
    image: "/images/products/burger-box-3.png",
    description: "High-end burger box with photographic food imagery and brand logo panel.",
    specs: [
      { label: "Material",   value: "SBS Paperboard" },
      { label: "GSM",        value: "350–400" },
      { label: "Finish",     value: "Gloss Lamination" },
      { label: "Min Order",  value: "500 pcs" },
    ],
  },
  {
    id: "burger-box-4",
    categoryId: "food-packaging",
    name: "Burger Box – Compact Design",
    image: "/images/products/burger-box-4.png",
    description: "Compact flat-lid burger box, food-safe lining, customisable on all panels.",
    specs: [
      { label: "Material",   value: "SBS Paperboard" },
      { label: "GSM",        value: "350–400" },
      { label: "Finish",     value: "Matte / Gloss" },
      { label: "Min Order",  value: "500 pcs" },
    ],
  },
  {
    id: "fries-cup",
    categoryId: "food-packaging",
    name: "French Fries Cup",
    image: "/images/products/fries-cup.png",
    description: "Open-top fries cup with branded side print – grease-resistant food-safe board.",
    specs: [
      { label: "Material",   value: "SBS Board" },
      { label: "Sizes",      value: "Small / Medium / Large" },
      { label: "Grease-Resistant", value: "Yes" },
      { label: "Custom Print", value: "Full Color" },
    ],
  },
  {
    id: "fried-chicken-box",
    categoryId: "food-packaging",
    name: "Fried Chicken Carry Box",
    image: "/images/products/fried-chicken-box.png",
    description: "Fried chicken carry box with flame-design full-color print and carry handle.",
    specs: [
      { label: "Material",   value: "E-Flute Corrugated" },
      { label: "Print",      value: "Full Color Offset" },
      { label: "Handle",     value: "Built-in Carry Handle" },
      { label: "Min Order",  value: "500 pcs" },
    ],
  },
  {
    id: "paper-tray-checkered",
    categoryId: "food-packaging",
    name: "Paper Food Tray – Checkered",
    image: "/images/products/paper-tray-checkered.png",
    description: "Classic red-checkered open food tray for snacks, fries, and fast food servings.",
    specs: [
      { label: "Material",   value: "SBS Paperboard" },
      { label: "Sizes",      value: "Small / Medium / Large" },
      { label: "Pattern",    value: "Red Grid / Custom" },
      { label: "Min Order",  value: "1000 pcs" },
    ],
  },
  {
    id: "fried-chicken-tray",
    categoryId: "food-packaging",
    name: "Fried Chicken Tray – Branded",
    image: "/images/products/fried-chicken-tray.png",
    description: "Orange branded fried chicken serving tray with full-color side label.",
    specs: [
      { label: "Material",   value: "SBS Paperboard" },
      { label: "Print",      value: "Full Color Branding" },
      { label: "Sizes",      value: "Small / Medium / Large" },
      { label: "Min Order",  value: "500 pcs" },
    ],
  },

  // ─── PAPER CUPS ─────────────────────────────────────────────────────────────
  {
    id: "paper-cups-coffee",
    categoryId: "paper-cups",
    name: "Printed Paper Cups",
    image: "/images/products/paper-cups-coffee.png",
    description: "Custom-printed double-wall paper cups in multiple sizes – ideal for coffee, tea & hot drinks.",
    specs: [
      { label: "Sizes",        value: "4 oz – 16 oz" },
      { label: "Type",         value: "Single / Double Wall" },
      { label: "Insulation",   value: "High (Double Wall)" },
      { label: "Custom Print", value: "Full Color" },
    ],
  },

  // ─── BUSINESS CARDS ─────────────────────────────────────────────────────────
  {
    id: "biz-card-black-gold",
    categoryId: "business-cards",
    name: "Luxury Black & Gold Card",
    image: "/images/products/biz-card-black-gold.png",
    description: "Premium matte black business card with gold foil text and wave emboss pattern.",
    specs: [
      { label: "Size",     value: "90×55 mm" },
      { label: "Paper",    value: "600 GSM" },
      { label: "Finish",   value: "Soft-Touch Matte + Gold Foil" },
      { label: "Min Qty",  value: "100 pcs" },
    ],
  },
  {
    id: "biz-card-luxury-1",
    categoryId: "business-cards",
    name: "Luxury Card – Gold Foliage",
    image: "/images/products/biz-card-luxury-1.png",
    description: "Elegant black card with golden palm-leaf foil design – perfect for high-end brands.",
    specs: [
      { label: "Size",     value: "90×55 mm" },
      { label: "Paper",    value: "600 GSM" },
      { label: "Finish",   value: "Soft-Touch Matte + Gold Foil" },
      { label: "Min Qty",  value: "100 pcs" },
    ],
  },
  {
    id: "biz-card-luxury-2",
    categoryId: "business-cards",
    name: "Luxury Card – Gold Lotus",
    image: "/images/products/biz-card-luxury-2.png",
    description: "Sleek black business card with a gold lotus foil logo – premium feel.",
    specs: [
      { label: "Size",     value: "90×55 mm" },
      { label: "Paper",    value: "600 GSM" },
      { label: "Finish",   value: "Gloss Lamination + Gold Foil" },
      { label: "Min Qty",  value: "100 pcs" },
    ],
  },
  {
    id: "biz-card-dark-luxury",
    categoryId: "business-cards",
    name: "Dark Luxury Business Card",
    image: "/images/products/biz-card-dark-luxury.png",
    description: "Ultra-dark matte card with embossed gold text – commands attention instantly.",
    specs: [
      { label: "Size",     value: "90×55 mm" },
      { label: "Paper",    value: "600 GSM" },
      { label: "Finish",   value: "Soft-Touch Matte + Spot UV" },
      { label: "Min Qty",  value: "100 pcs" },
    ],
  },
  {
    id: "biz-card-standard-blue",
    categoryId: "business-cards",
    name: "Standard Business Card – Blue",
    image: "/images/products/biz-card-standard-blue.png",
    description: "Clean corporate blue business card with two-sided full-color printing.",
    specs: [
      { label: "Size",     value: "90×55 mm" },
      { label: "Paper",    value: "350 GSM" },
      { label: "Finish",   value: "Gloss / Matte Lamination" },
      { label: "Min Qty",  value: "250 pcs" },
    ],
  },
  {
    id: "biz-card-full-color",
    categoryId: "business-cards",
    name: "Full Color Photographic Card",
    image: "/images/products/biz-card-full-color.png",
    description: "Vivid full-bleed photo print business card – ideal for travel, hospitality & aviation.",
    specs: [
      { label: "Size",     value: "90×55 mm" },
      { label: "Paper",    value: "400 GSM" },
      { label: "Finish",   value: "Gloss Lamination" },
      { label: "Min Qty",  value: "250 pcs" },
    ],
  },
  {
    id: "biz-card-gold-foil",
    categoryId: "business-cards",
    name: "Gold Foil Card with Photo Slot",
    image: "/images/products/biz-card-gold-foil.png",
    description: "Prestige green & gold card with cut-out photo window – unique and memorable.",
    specs: [
      { label: "Size",     value: "90×55 mm" },
      { label: "Paper",    value: "600 GSM" },
      { label: "Finish",   value: "Gold Foil + Die-Cut Photo Slot" },
      { label: "Min Qty",  value: "100 pcs" },
    ],
  },
  {
    id: "biz-card-premium-auto",
    categoryId: "business-cards",
    name: "Premium Card – Auto / Luxury",
    image: "/images/products/biz-card-premium-auto.png",
    description: "Dark metallic-look card with silver edge – popular for auto, real estate & luxury sectors.",
    specs: [
      { label: "Size",     value: "90×55 mm" },
      { label: "Paper",    value: "600 GSM" },
      { label: "Finish",   value: "Metallic Lamination + Silver Edge" },
      { label: "Min Qty",  value: "100 pcs" },
    ],
  },
  {
    id: "biz-card-die-cut",
    categoryId: "business-cards",
    name: "Die-Cut Business Card – Skyline",
    image: "/images/products/biz-card-die-cut.png",
    description: "Custom die-cut card shaped like a city skyline – stand out from the crowd.",
    specs: [
      { label: "Size",     value: "Custom Shape" },
      { label: "Paper",    value: "400 GSM" },
      { label: "Finish",   value: "Gloss Lamination" },
      { label: "Min Qty",  value: "100 pcs" },
    ],
  },
  {
    id: "biz-card-square",
    categoryId: "business-cards",
    name: "Square Business Card",
    image: "/images/products/biz-card-square.png",
    description: "Trendy square-format card with rounded corners and vibrant full-color print.",
    specs: [
      { label: "Size",     value: "55×55 mm" },
      { label: "Paper",    value: "400 GSM" },
      { label: "Finish",   value: "Gloss / Matte / Soft-Touch" },
      { label: "Min Qty",  value: "250 pcs" },
    ],
  },
  {
    id: "biz-card-colorful",
    categoryId: "business-cards",
    name: "Colorful Business Card",
    image: "/images/products/biz-card-colorful.png",
    description: "Bright multi-color card with photo on one side – great for retail and food businesses.",
    specs: [
      { label: "Size",     value: "90×55 mm" },
      { label: "Paper",    value: "350 GSM" },
      { label: "Finish",   value: "Gloss Lamination" },
      { label: "Min Qty",  value: "250 pcs" },
    ],
  },
  {
    id: "biz-card-medical",
    categoryId: "business-cards",
    name: "Medical / Professional Card",
    image: "/images/products/biz-card-medical.png",
    description: "Bold illustrated card for medical & dental professionals – fun and memorable design.",
    specs: [
      { label: "Size",     value: "90×55 mm" },
      { label: "Paper",    value: "350 GSM" },
      { label: "Finish",   value: "Gloss Lamination" },
      { label: "Min Qty",  value: "250 pcs" },
    ],
  },
  {
    id: "biz-card-music",
    categoryId: "business-cards",
    name: "Business Card – Music / Arts",
    image: "/images/products/biz-card-music.png",
    description: "Striking piano-key themed card – ideal for music schools and creative artists.",
    specs: [
      { label: "Size",     value: "90×55 mm" },
      { label: "Paper",    value: "350 GSM" },
      { label: "Finish",   value: "Gloss Lamination" },
      { label: "Min Qty",  value: "250 pcs" },
    ],
  },
  {
    id: "biz-card-auto",
    categoryId: "business-cards",
    name: "Business Card – Auto Repair",
    image: "/images/products/biz-card-auto.png",
    description: "Full-bleed automotive photo card, front & back design with service menu.",
    specs: [
      { label: "Size",     value: "90×55 mm" },
      { label: "Paper",    value: "400 GSM" },
      { label: "Finish",   value: "Gloss Lamination" },
      { label: "Min Qty",  value: "250 pcs" },
    ],
  },
  {
    id: "biz-card-photo",
    categoryId: "business-cards",
    name: "Business Card with Photo",
    image: "/images/products/biz-card-photo.png",
    description: "Landscape card with full-bleed photography background and minimal text layout.",
    specs: [
      { label: "Size",     value: "90×55 mm" },
      { label: "Paper",    value: "400 GSM" },
      { label: "Finish",   value: "Gloss Lamination" },
      { label: "Min Qty",  value: "250 pcs" },
    ],
  },
  {
    id: "biz-card-chef",
    categoryId: "business-cards",
    name: "Business Card – Chef / Restaurant",
    image: "/images/products/biz-card-chef.png",
    description: "Elegant two-sided card for chefs and restaurants – foil logo on pearlescent stock.",
    specs: [
      { label: "Size",     value: "90×55 mm" },
      { label: "Paper",    value: "400 GSM" },
      { label: "Finish",   value: "Pearl Lamination + Gold Foil" },
      { label: "Min Qty",  value: "100 pcs" },
    ],
  },
  {
    id: "biz-card-teal",
    categoryId: "business-cards",
    name: "Business Card – Ocean Theme",
    image: "/images/products/biz-card-teal.png",
    description: "Vibrant teal ocean-print card – stand out for hospitality and marine businesses.",
    specs: [
      { label: "Size",     value: "90×55 mm" },
      { label: "Paper",    value: "400 GSM" },
      { label: "Finish",   value: "Gloss Lamination" },
      { label: "Min Qty",  value: "250 pcs" },
    ],
  },

  // ─── DOOR HANGERS ──────────────────────────────────────────────────────────
  {
    id: "door-hanger-party",
    categoryId: "door-hangers",
    name: "Door Hanger – Party Time",
    image: "/images/products/door-hanger-party.png",
    description: "Vibrant full-color party-themed door hanger – perfect for restaurants and event venues.",
    specs: [
      { label: "Size",       value: "99×210 mm" },
      { label: "Paper",      value: "350 GSM" },
      { label: "Finish",     value: "Gloss Lamination" },
      { label: "Custom Design", value: "Available" },
    ],
  },
  {
    id: "door-hanger-restaurant",
    categoryId: "door-hangers",
    name: "Door Hanger – Restaurant",
    image: "/images/products/door-hanger-restaurant.png",
    description: "Branded restaurant door hanger with offer text and food photography.",
    specs: [
      { label: "Size",       value: "99×210 mm" },
      { label: "Paper",      value: "350 GSM" },
      { label: "Finish",     value: "Gloss Lamination" },
      { label: "Custom Design", value: "Available" },
    ],
  },
  {
    id: "door-hanger-dnd-red",
    categoryId: "door-hangers",
    name: "Door Hanger – Do Not Disturb (Red)",
    image: "/images/products/door-hanger-dnd-red.png",
    description: "Classic red Do Not Disturb door hanger – ideal for hotels and offices.",
    specs: [
      { label: "Size",       value: "99×210 mm" },
      { label: "Paper",      value: "350 GSM" },
      { label: "Finish",     value: "Gloss Lamination" },
      { label: "Custom Design", value: "Available" },
    ],
  },
  {
    id: "door-hanger-dnd-coffee",
    categoryId: "door-hangers",
    name: "Door Hanger – Do Not Disturb (Coffee)",
    image: "/images/products/door-hanger-dnd-coffee.png",
    description: "Rustic coffee-themed Do Not Disturb hanger – elegant boutique hotel style.",
    specs: [
      { label: "Size",       value: "99×210 mm" },
      { label: "Paper",      value: "350 GSM" },
      { label: "Finish",     value: "Matte Lamination" },
      { label: "Custom Design", value: "Available" },
    ],
  },
  {
    id: "door-hanger-beach-1",
    categoryId: "door-hangers",
    name: "Door Hanger – Beach / Resort",
    image: "/images/products/door-hanger-beach-1.png",
    description: "Summer beach-themed door hanger with watercolor artwork – perfect for resorts.",
    specs: [
      { label: "Size",       value: "99×210 mm" },
      { label: "Paper",      value: "350 GSM" },
      { label: "Finish",     value: "Gloss Lamination" },
      { label: "Custom Design", value: "Available" },
    ],
  },
  {
    id: "door-hanger-beach-2",
    categoryId: "door-hangers",
    name: "Door Hanger – Summer Theme",
    image: "/images/products/door-hanger-beach-2.png",
    description: "Bright summer-palette door hanger with illustrated flip-flop artwork.",
    specs: [
      { label: "Size",       value: "99×210 mm" },
      { label: "Paper",      value: "350 GSM" },
      { label: "Finish",     value: "Gloss Lamination" },
      { label: "Custom Design", value: "Available" },
    ],
  },

  // ─── FLYERS & POSTERS ───────────────────────────────────────────────────────
  {
    id: "flyer-car-wash",
    categoryId: "flyers-posters",
    name: "Flyer – Car Wash / Auto Service",
    image: "/images/products/flyer-car-wash.png",
    description: "Bold A5 flyer with dark navy design – great for car wash and detailing services.",
    specs: [
      { label: "Size",        value: "A5 (148×210 mm)" },
      { label: "Paper",       value: "130 GSM" },
      { label: "Finish",      value: "Gloss / Matte" },
      { label: "Min Qty",     value: "500 pcs" },
    ],
  },
  {
    id: "flyer-auto-workshop",
    categoryId: "flyers-posters",
    name: "Flyer / Poster – Auto Workshop",
    image: "/images/products/flyer-auto-workshop.png",
    description: "Large-format green workshop poster – services list layout with branded logo.",
    specs: [
      { label: "Size",        value: "A4 / A3 / Custom" },
      { label: "Paper",       value: "130–170 GSM" },
      { label: "Finish",      value: "Gloss" },
      { label: "Min Qty",     value: "250 pcs" },
    ],
  },
  {
    id: "brochure-business",
    categoryId: "flyers-posters",
    name: "Business Brochure / Folder",
    image: "/images/products/brochure-business.png",
    description: "Professional bi-fold brochure with striking teal & dark geometric layout.",
    specs: [
      { label: "Size",        value: "A4 Bi-Fold" },
      { label: "Paper",       value: "170 GSM" },
      { label: "Finish",      value: "Soft-Touch Matte" },
      { label: "Min Qty",     value: "250 pcs" },
    ],
  },
  {
    id: "flyer-design-studio",
    categoryId: "flyers-posters",
    name: "Flyer – Creative / Design Agency",
    image: "/images/products/flyer-design-studio.png",
    description: "Eye-catching purple & gold agency flyer with city aerial background.",
    specs: [
      { label: "Size",        value: "A4 / A5" },
      { label: "Paper",       value: "130 GSM" },
      { label: "Finish",      value: "Gloss" },
      { label: "Min Qty",     value: "500 pcs" },
    ],
  },
  {
    id: "flyer-travel-1",
    categoryId: "flyers-posters",
    name: "Flyer – Travel & Tourism",
    image: "/images/products/flyer-travel-1.png",
    description: "Vibrant travel flyer with blue gradient and full-bleed destination photography.",
    specs: [
      { label: "Size",        value: "A4" },
      { label: "Paper",       value: "130–150 GSM" },
      { label: "Finish",      value: "Gloss" },
      { label: "Min Qty",     value: "500 pcs" },
    ],
  },
  {
    id: "flyer-travel-2",
    categoryId: "flyers-posters",
    name: "Flyer – Explore Asia Destination",
    image: "/images/products/flyer-travel-2.png",
    description: "Bold destination flyer with navy & orange palette and landmark photography.",
    specs: [
      { label: "Size",        value: "A4" },
      { label: "Paper",       value: "130–150 GSM" },
      { label: "Finish",      value: "Gloss" },
      { label: "Min Qty",     value: "500 pcs" },
    ],
  },

  // ─── STICKERS & LABELS ─────────────────────────────────────────────────────
  {
    id: "sticker-sign-label",
    categoryId: "stickers-labels",
    name: "Sign Board & Promotional Labels",
    image: "/images/products/sticker-sign-label.png",
    description: "Rigid sign board with custom label sticker overlay – for promotions and signage.",
    specs: [
      { label: "Material",   value: "BOPP / Vinyl" },
      { label: "Adhesive",   value: "Permanent" },
      { label: "Print",      value: "Full Color" },
      { label: "Min Qty",    value: "500 pcs" },
    ],
  },
  {
    id: "sticker-die-cut-shaped",
    categoryId: "stickers-labels",
    name: "Die-Cut Shaped Stickers",
    image: "/images/products/sticker-die-cut-shaped.png",
    description: "Custom die-cut stickers in any shape – supermarket cart, food, and more.",
    specs: [
      { label: "Material",   value: "BOPP / Paper" },
      { label: "Shape",      value: "Any Custom Shape" },
      { label: "Adhesive",   value: "Permanent" },
      { label: "Min Qty",    value: "500 pcs" },
    ],
  },
  {
    id: "sticker-round-square",
    categoryId: "stickers-labels",
    name: "Round & Square Stickers / Coasters",
    image: "/images/products/sticker-round-square.png",
    description: "Full-color round and square stickers – used for branding, coasters, and product labels.",
    specs: [
      { label: "Shapes",     value: "Round / Square / Oval" },
      { label: "Material",   value: "BOPP / Paper / Board" },
      { label: "Finish",     value: "Gloss / Matte" },
      { label: "Min Qty",    value: "500 pcs" },
    ],
  },
  {
    id: "sticker-die-cut",
    categoryId: "stickers-labels",
    name: "Die-Cut Stickers – Variety Pack",
    image: "/images/products/sticker-die-cut.png",
    description: "Various shaped die-cut stickers – food illustration, logo, and product designs.",
    specs: [
      { label: "Material",   value: "BOPP / Paper" },
      { label: "Shape",      value: "Custom Die-Cut" },
      { label: "Adhesive",   value: "Permanent" },
      { label: "Min Qty",    value: "500 pcs" },
    ],
  },
  {
    id: "sticker-beauty",
    categoryId: "stickers-labels",
    name: "Square Sticker – Beauty / Cosmetics",
    image: "/images/products/sticker-beauty.png",
    description: "Elegant peel-off square sticker with gold design – ideal for beauty product packaging.",
    specs: [
      { label: "Size",       value: "50×50 mm (Custom)" },
      { label: "Material",   value: "BOPP Gloss" },
      { label: "Adhesive",   value: "Permanent" },
      { label: "Min Qty",    value: "500 pcs" },
    ],
  },
  {
    id: "sticker-honey",
    categoryId: "stickers-labels",
    name: "Square Sticker – Product Label",
    image: "/images/products/sticker-honey.png",
    description: "Vibrant product label sticker with curved peel – great for food & honey jars.",
    specs: [
      { label: "Size",       value: "50×50 mm (Custom)" },
      { label: "Material",   value: "BOPP Gloss" },
      { label: "Adhesive",   value: "Permanent" },
      { label: "Min Qty",    value: "500 pcs" },
    ],
  },

  // ─── STATIONERY & CERTIFICATES ─────────────────────────────────────────────
  {
    id: "letterhead-envelope",
    categoryId: "stationery",
    name: "Letterhead + Envelope Set",
    image: "/images/products/letterhead-envelope.png",
    description: "Branded A4 letterhead paired with matching envelope – full corporate stationery kit.",
    specs: [
      { label: "Letterhead Size", value: "A4" },
      { label: "Paper (GSM)",     value: "90–100" },
      { label: "Envelope Size",   value: "DL / C4" },
      { label: "Min Qty",         value: "500 sets" },
    ],
  },
  {
    id: "letterhead-notepad",
    categoryId: "stationery",
    name: "Branded Letterhead / Notepad",
    image: "/images/products/letterhead-notepad.png",
    description: "Custom-printed notepad with header design – ideal for salons, clinics, and offices.",
    specs: [
      { label: "Size",        value: "A4 / A5" },
      { label: "Paper (GSM)", value: "80–100" },
      { label: "Sheets/Pad",  value: "50 / 100" },
      { label: "Min Qty",     value: "100 pads" },
    ],
  },
  {
    id: "notebook-branded",
    categoryId: "stationery",
    name: "Branded Notebook + Envelope",
    image: "/images/products/notebook-branded.png",
    description: "Hardcover branded notebook bundled with matching printed envelope for corporate gifts.",
    specs: [
      { label: "Size",        value: "A5" },
      { label: "Cover",       value: "Hard Cover, Full Color" },
      { label: "Pages",       value: "80–160 ruled" },
      { label: "Min Qty",     value: "50 pcs" },
    ],
  },
  {
    id: "table-mat",
    categoryId: "stationery",
    name: "Restaurant Table Mat / Placemat",
    image: "/images/products/table-mat.png",
    description: "Elegant full-color placemat for restaurant tables – branded or decorative designs.",
    specs: [
      { label: "Size",        value: "420×297 mm (A3)" },
      { label: "Paper (GSM)", value: "250–300" },
      { label: "Finish",      value: "Gloss / Matte" },
      { label: "Min Qty",     value: "500 pcs" },
    ],
  },
  {
    id: "certificate",
    categoryId: "stationery",
    name: "Custom Certificates",
    image: "/images/products/certificate.png",
    description: "Premium certificate printing on thick certificate board with ornate border design.",
    specs: [
      { label: "Size",        value: "A4 Landscape" },
      { label: "Paper (GSM)", value: "250–300" },
      { label: "Finish",      value: "Gloss / Matte" },
      { label: "Min Qty",     value: "50 pcs" },
    ],
  },

  // ─── EVENT & WEDDING STATIONERY ────────────────────────────────────────────
  {
    id: "loyalty-card",
    categoryId: "event-cards",
    name: "Loyalty / Membership Card",
    image: "/images/products/loyalty-card.png",
    description: "Scratch-off or stamp loyalty card – front & back full-color with custom branding.",
    specs: [
      { label: "Size",     value: "90×55 mm" },
      { label: "Paper",    value: "350 GSM" },
      { label: "Finish",   value: "Gloss Lamination" },
      { label: "Min Qty",  value: "250 pcs" },
    ],
  },
  {
    id: "wedding-card-gold",
    categoryId: "event-cards",
    name: "Wedding Thank You Card – Gold",
    image: "/images/products/wedding-card-gold.png",
    description: "Luxurious gold-swirl wedding thank-you card with foil finish on both sides.",
    specs: [
      { label: "Size",     value: "130×130 mm (Square)" },
      { label: "Paper",    value: "350 GSM" },
      { label: "Finish",   value: "Soft-Touch + Gold Foil" },
      { label: "Min Qty",  value: "50 pcs" },
    ],
  },
  {
    id: "wedding-sticker",
    categoryId: "event-cards",
    name: "Wedding Sticker / Thank You Label",
    image: "/images/products/wedding-sticker.png",
    description: "Elegant square wedding sticker with floral design and custom couple's names.",
    specs: [
      { label: "Size",     value: "70×70 mm (Custom)" },
      { label: "Material", value: "BOPP / Paper" },
      { label: "Finish",   value: "Gloss / Matte" },
      { label: "Min Qty",  value: "100 pcs" },
    ],
  },
  {
    id: "event-sticker",
    categoryId: "event-cards",
    name: "Event / Occasion Sticker",
    image: "/images/products/event-sticker.png",
    description: "Custom occasion sticker with gold foil peel – suitable for any celebration or event.",
    specs: [
      { label: "Size",     value: "Custom" },
      { label: "Material", value: "Paper / BOPP" },
      { label: "Finish",   value: "Gloss / Gold Foil" },
      { label: "Min Qty",  value: "100 pcs" },
    ],
  },

  // ─── NEW PRODUCTS (added from client photos) ────────────────────────────
  {
    id: "cutlery-sets-1",
    categoryId: "cutlery-sets",
    name: "Fork #1",
    image: "/images/products/cutlery-sets-1.jpg",
    description: "Sturdy disposable fork — heat-resistant and break-free for everyday food service.",
    specs: [
      { label: "Material", value: "Food-Grade PS Plastic" },
      { label: "Color", value: "Black / White" },
      { label: "Pack Options", value: "Individually Wrapped / Bulk" },
      { label: "Min Order", value: "1000 pcs" },
    ],
  },

  {
    id: "cutlery-sets-2",
    categoryId: "cutlery-sets",
    name: "Knife #2",
    image: "/images/products/cutlery-sets-2.jpg",
    description: "Sturdy disposable knife — heat-resistant and break-free for everyday food service.",
    specs: [
      { label: "Material", value: "Food-Grade PS Plastic" },
      { label: "Color", value: "Black / White" },
      { label: "Pack Options", value: "Individually Wrapped / Bulk" },
      { label: "Min Order", value: "1000 pcs" },
    ],
  },

  {
    id: "cutlery-sets-3",
    categoryId: "cutlery-sets",
    name: "Spoon #3",
    image: "/images/products/cutlery-sets-3.jpg",
    description: "Sturdy disposable spoon — heat-resistant and break-free for everyday food service.",
    specs: [
      { label: "Material", value: "Food-Grade PS Plastic" },
      { label: "Color", value: "Black / White" },
      { label: "Pack Options", value: "Individually Wrapped / Bulk" },
      { label: "Min Order", value: "1000 pcs" },
    ],
  },

  {
    id: "cutlery-sets-4",
    categoryId: "cutlery-sets",
    name: "Fork #4",
    image: "/images/products/cutlery-sets-4.jpg",
    description: "Sturdy disposable fork — heat-resistant and break-free for everyday food service.",
    specs: [
      { label: "Material", value: "Food-Grade PS Plastic" },
      { label: "Color", value: "Black / White" },
      { label: "Pack Options", value: "Individually Wrapped / Bulk" },
      { label: "Min Order", value: "1000 pcs" },
    ],
  },

  {
    id: "cutlery-sets-5",
    categoryId: "cutlery-sets",
    name: "Spoon #5",
    image: "/images/products/cutlery-sets-5.jpg",
    description: "Sturdy disposable spoon — heat-resistant and break-free for everyday food service.",
    specs: [
      { label: "Material", value: "Food-Grade PS Plastic" },
      { label: "Color", value: "Black / White" },
      { label: "Pack Options", value: "Individually Wrapped / Bulk" },
      { label: "Min Order", value: "1000 pcs" },
    ],
  },

  {
    id: "cutlery-sets-6",
    categoryId: "cutlery-sets",
    name: "Knife #6",
    image: "/images/products/cutlery-sets-6.jpg",
    description: "Sturdy disposable knife — heat-resistant and break-free for everyday food service.",
    specs: [
      { label: "Material", value: "Food-Grade PS Plastic" },
      { label: "Color", value: "Black / White" },
      { label: "Pack Options", value: "Individually Wrapped / Bulk" },
      { label: "Min Order", value: "1000 pcs" },
    ],
  },

  {
    id: "cutlery-sets-7",
    categoryId: "cutlery-sets",
    name: "Cutlery Set (Fork+Knife+Spoon) #7",
    image: "/images/products/cutlery-sets-7.jpg",
    description: "Sturdy disposable cutlery set (fork+knife+spoon) — heat-resistant and break-free for everyday food service.",
    specs: [
      { label: "Material", value: "Food-Grade PS Plastic" },
      { label: "Color", value: "Black / White" },
      { label: "Pack Options", value: "Individually Wrapped / Bulk" },
      { label: "Min Order", value: "1000 pcs" },
    ],
  },

  {
    id: "cutlery-sets-8",
    categoryId: "cutlery-sets",
    name: "Cutlery Set (Wrapped) #8",
    image: "/images/products/cutlery-sets-8.jpg",
    description: "Sturdy disposable cutlery set (wrapped) — heat-resistant and break-free for everyday food service.",
    specs: [
      { label: "Material", value: "Food-Grade PS Plastic" },
      { label: "Color", value: "Black / White" },
      { label: "Pack Options", value: "Individually Wrapped / Bulk" },
      { label: "Min Order", value: "1000 pcs" },
    ],
  },

  {
    id: "cutlery-sets-9",
    categoryId: "cutlery-sets",
    name: "Fork #9",
    image: "/images/products/cutlery-sets-9.jpg",
    description: "Sturdy disposable fork — heat-resistant and break-free for everyday food service.",
    specs: [
      { label: "Material", value: "Food-Grade PS Plastic" },
      { label: "Color", value: "Black / White" },
      { label: "Pack Options", value: "Individually Wrapped / Bulk" },
      { label: "Min Order", value: "1000 pcs" },
    ],
  },

  {
    id: "cutlery-sets-10",
    categoryId: "cutlery-sets",
    name: "Spoon #10",
    image: "/images/products/cutlery-sets-10.jpg",
    description: "Sturdy disposable spoon — heat-resistant and break-free for everyday food service.",
    specs: [
      { label: "Material", value: "Food-Grade PS Plastic" },
      { label: "Color", value: "Black / White" },
      { label: "Pack Options", value: "Individually Wrapped / Bulk" },
      { label: "Min Order", value: "1000 pcs" },
    ],
  },

  {
    id: "cutlery-sets-11",
    categoryId: "cutlery-sets",
    name: "Knife #11",
    image: "/images/products/cutlery-sets-11.jpg",
    description: "Sturdy disposable knife — heat-resistant and break-free for everyday food service.",
    specs: [
      { label: "Material", value: "Food-Grade PS Plastic" },
      { label: "Color", value: "Black / White" },
      { label: "Pack Options", value: "Individually Wrapped / Bulk" },
      { label: "Min Order", value: "1000 pcs" },
    ],
  },

  {
    id: "microwave-containers-1",
    categoryId: "microwave-containers",
    name: "Microwave Food Containers – Style 1",
    image: "/images/products/microwave-containers-1.jpg",
    description: "Durable microwave-safe food container with secure clear lid — ideal for takeaway and meal-prep.",
    specs: [
      { label: "Material", value: "PP (Microwave-Safe)" },
      { label: "Lid", value: "Clear Snap-Fit Lid" },
      { label: "Compartments", value: "1 / 2 / 3 Section Options" },
      { label: "Min Order", value: "500 pcs" },
    ],
  },

  {
    id: "microwave-containers-2",
    categoryId: "microwave-containers",
    name: "Microwave Food Containers – Style 2",
    image: "/images/products/microwave-containers-2.jpg",
    description: "Durable microwave-safe food container with secure clear lid — ideal for takeaway and meal-prep.",
    specs: [
      { label: "Material", value: "PP (Microwave-Safe)" },
      { label: "Lid", value: "Clear Snap-Fit Lid" },
      { label: "Compartments", value: "1 / 2 / 3 Section Options" },
      { label: "Min Order", value: "500 pcs" },
    ],
  },

  {
    id: "microwave-containers-3",
    categoryId: "microwave-containers",
    name: "Microwave Food Containers – Style 3",
    image: "/images/products/microwave-containers-3.jpg",
    description: "Durable microwave-safe food container with secure clear lid — ideal for takeaway and meal-prep.",
    specs: [
      { label: "Material", value: "PP (Microwave-Safe)" },
      { label: "Lid", value: "Clear Snap-Fit Lid" },
      { label: "Compartments", value: "1 / 2 / 3 Section Options" },
      { label: "Min Order", value: "500 pcs" },
    ],
  },

  {
    id: "microwave-containers-4",
    categoryId: "microwave-containers",
    name: "Microwave Food Containers – Style 4",
    image: "/images/products/microwave-containers-4.jpg",
    description: "Durable microwave-safe food container with secure clear lid — ideal for takeaway and meal-prep.",
    specs: [
      { label: "Material", value: "PP (Microwave-Safe)" },
      { label: "Lid", value: "Clear Snap-Fit Lid" },
      { label: "Compartments", value: "1 / 2 / 3 Section Options" },
      { label: "Min Order", value: "500 pcs" },
    ],
  },

  {
    id: "microwave-containers-5",
    categoryId: "microwave-containers",
    name: "Microwave Food Containers – Style 5",
    image: "/images/products/microwave-containers-5.jpg",
    description: "Durable microwave-safe food container with secure clear lid — ideal for takeaway and meal-prep.",
    specs: [
      { label: "Material", value: "PP (Microwave-Safe)" },
      { label: "Lid", value: "Clear Snap-Fit Lid" },
      { label: "Compartments", value: "1 / 2 / 3 Section Options" },
      { label: "Min Order", value: "500 pcs" },
    ],
  },

  {
    id: "microwave-containers-6",
    categoryId: "microwave-containers",
    name: "Microwave Food Containers – Style 6",
    image: "/images/products/microwave-containers-6.jpg",
    description: "Durable microwave-safe food container with secure clear lid — ideal for takeaway and meal-prep.",
    specs: [
      { label: "Material", value: "PP (Microwave-Safe)" },
      { label: "Lid", value: "Clear Snap-Fit Lid" },
      { label: "Compartments", value: "1 / 2 / 3 Section Options" },
      { label: "Min Order", value: "500 pcs" },
    ],
  },

  {
    id: "microwave-containers-7",
    categoryId: "microwave-containers",
    name: "Microwave Food Containers – Style 7",
    image: "/images/products/microwave-containers-7.jpg",
    description: "Durable microwave-safe food container with secure clear lid — ideal for takeaway and meal-prep.",
    specs: [
      { label: "Material", value: "PP (Microwave-Safe)" },
      { label: "Lid", value: "Clear Snap-Fit Lid" },
      { label: "Compartments", value: "1 / 2 / 3 Section Options" },
      { label: "Min Order", value: "500 pcs" },
    ],
  },

  {
    id: "microwave-containers-8",
    categoryId: "microwave-containers",
    name: "Microwave Food Containers – Style 8",
    image: "/images/products/microwave-containers-8.jpg",
    description: "Durable microwave-safe food container with secure clear lid — ideal for takeaway and meal-prep.",
    specs: [
      { label: "Material", value: "PP (Microwave-Safe)" },
      { label: "Lid", value: "Clear Snap-Fit Lid" },
      { label: "Compartments", value: "1 / 2 / 3 Section Options" },
      { label: "Min Order", value: "500 pcs" },
    ],
  },

  {
    id: "microwave-containers-9",
    categoryId: "microwave-containers",
    name: "Microwave Food Containers – Style 9",
    image: "/images/products/microwave-containers-9.jpg",
    description: "Durable microwave-safe food container with secure clear lid — ideal for takeaway and meal-prep.",
    specs: [
      { label: "Material", value: "PP (Microwave-Safe)" },
      { label: "Lid", value: "Clear Snap-Fit Lid" },
      { label: "Compartments", value: "1 / 2 / 3 Section Options" },
      { label: "Min Order", value: "500 pcs" },
    ],
  },

  {
    id: "microwave-containers-10",
    categoryId: "microwave-containers",
    name: "Microwave Food Containers – Style 10",
    image: "/images/products/microwave-containers-10.jpg",
    description: "Durable microwave-safe food container with secure clear lid — ideal for takeaway and meal-prep.",
    specs: [
      { label: "Material", value: "PP (Microwave-Safe)" },
      { label: "Lid", value: "Clear Snap-Fit Lid" },
      { label: "Compartments", value: "1 / 2 / 3 Section Options" },
      { label: "Min Order", value: "500 pcs" },
    ],
  },

  {
    id: "microwave-containers-11",
    categoryId: "microwave-containers",
    name: "Microwave Food Containers – Style 11",
    image: "/images/products/microwave-containers-11.jpg",
    description: "Durable microwave-safe food container with secure clear lid — ideal for takeaway and meal-prep.",
    specs: [
      { label: "Material", value: "PP (Microwave-Safe)" },
      { label: "Lid", value: "Clear Snap-Fit Lid" },
      { label: "Compartments", value: "1 / 2 / 3 Section Options" },
      { label: "Min Order", value: "500 pcs" },
    ],
  },

  {
    id: "microwave-containers-12",
    categoryId: "microwave-containers",
    name: "Microwave Food Containers – Style 12",
    image: "/images/products/microwave-containers-12.jpg",
    description: "Durable microwave-safe food container with secure clear lid — ideal for takeaway and meal-prep.",
    specs: [
      { label: "Material", value: "PP (Microwave-Safe)" },
      { label: "Lid", value: "Clear Snap-Fit Lid" },
      { label: "Compartments", value: "1 / 2 / 3 Section Options" },
      { label: "Min Order", value: "500 pcs" },
    ],
  },

  {
    id: "microwave-containers-13",
    categoryId: "microwave-containers",
    name: "Microwave Food Containers – Style 13",
    image: "/images/products/microwave-containers-13.jpg",
    description: "Durable microwave-safe food container with secure clear lid — ideal for takeaway and meal-prep.",
    specs: [
      { label: "Material", value: "PP (Microwave-Safe)" },
      { label: "Lid", value: "Clear Snap-Fit Lid" },
      { label: "Compartments", value: "1 / 2 / 3 Section Options" },
      { label: "Min Order", value: "500 pcs" },
    ],
  },

  {
    id: "microwave-containers-14",
    categoryId: "microwave-containers",
    name: "Microwave Food Containers – Style 14",
    image: "/images/products/microwave-containers-14.jpg",
    description: "Durable microwave-safe food container with secure clear lid — ideal for takeaway and meal-prep.",
    specs: [
      { label: "Material", value: "PP (Microwave-Safe)" },
      { label: "Lid", value: "Clear Snap-Fit Lid" },
      { label: "Compartments", value: "1 / 2 / 3 Section Options" },
      { label: "Min Order", value: "500 pcs" },
    ],
  },

  {
    id: "microwave-containers-15",
    categoryId: "microwave-containers",
    name: "Microwave Food Containers – Style 15",
    image: "/images/products/microwave-containers-15.jpg",
    description: "Durable microwave-safe food container with secure clear lid — ideal for takeaway and meal-prep.",
    specs: [
      { label: "Material", value: "PP (Microwave-Safe)" },
      { label: "Lid", value: "Clear Snap-Fit Lid" },
      { label: "Compartments", value: "1 / 2 / 3 Section Options" },
      { label: "Min Order", value: "500 pcs" },
    ],
  },

  {
    id: "microwave-containers-16",
    categoryId: "microwave-containers",
    name: "Microwave Food Containers – Style 16",
    image: "/images/products/microwave-containers-16.jpg",
    description: "Durable microwave-safe food container with secure clear lid — ideal for takeaway and meal-prep.",
    specs: [
      { label: "Material", value: "PP (Microwave-Safe)" },
      { label: "Lid", value: "Clear Snap-Fit Lid" },
      { label: "Compartments", value: "1 / 2 / 3 Section Options" },
      { label: "Min Order", value: "500 pcs" },
    ],
  },

  {
    id: "microwave-containers-17",
    categoryId: "microwave-containers",
    name: "Microwave Food Containers – Style 17",
    image: "/images/products/microwave-containers-17.jpg",
    description: "Durable microwave-safe food container with secure clear lid — ideal for takeaway and meal-prep.",
    specs: [
      { label: "Material", value: "PP (Microwave-Safe)" },
      { label: "Lid", value: "Clear Snap-Fit Lid" },
      { label: "Compartments", value: "1 / 2 / 3 Section Options" },
      { label: "Min Order", value: "500 pcs" },
    ],
  },

  {
    id: "microwave-containers-18",
    categoryId: "microwave-containers",
    name: "Microwave Food Containers – Style 18",
    image: "/images/products/microwave-containers-18.jpg",
    description: "Durable microwave-safe food container with secure clear lid — ideal for takeaway and meal-prep.",
    specs: [
      { label: "Material", value: "PP (Microwave-Safe)" },
      { label: "Lid", value: "Clear Snap-Fit Lid" },
      { label: "Compartments", value: "1 / 2 / 3 Section Options" },
      { label: "Min Order", value: "500 pcs" },
    ],
  },

  {
    id: "microwave-containers-19",
    categoryId: "microwave-containers",
    name: "Microwave Food Containers – Style 19",
    image: "/images/products/microwave-containers-19.jpg",
    description: "Durable microwave-safe food container with secure clear lid — ideal for takeaway and meal-prep.",
    specs: [
      { label: "Material", value: "PP (Microwave-Safe)" },
      { label: "Lid", value: "Clear Snap-Fit Lid" },
      { label: "Compartments", value: "1 / 2 / 3 Section Options" },
      { label: "Min Order", value: "500 pcs" },
    ],
  },

  {
    id: "microwave-containers-20",
    categoryId: "microwave-containers",
    name: "Microwave Food Containers – Style 20",
    image: "/images/products/microwave-containers-20.jpg",
    description: "Durable microwave-safe food container with secure clear lid — ideal for takeaway and meal-prep.",
    specs: [
      { label: "Material", value: "PP (Microwave-Safe)" },
      { label: "Lid", value: "Clear Snap-Fit Lid" },
      { label: "Compartments", value: "1 / 2 / 3 Section Options" },
      { label: "Min Order", value: "500 pcs" },
    ],
  },

  {
    id: "microwave-containers-21",
    categoryId: "microwave-containers",
    name: "Microwave Food Containers – Style 21",
    image: "/images/products/microwave-containers-21.jpg",
    description: "Durable microwave-safe food container with secure clear lid — ideal for takeaway and meal-prep.",
    specs: [
      { label: "Material", value: "PP (Microwave-Safe)" },
      { label: "Lid", value: "Clear Snap-Fit Lid" },
      { label: "Compartments", value: "1 / 2 / 3 Section Options" },
      { label: "Min Order", value: "500 pcs" },
    ],
  },

  {
    id: "microwave-containers-22",
    categoryId: "microwave-containers",
    name: "Microwave Food Containers – Style 22",
    image: "/images/products/microwave-containers-22.jpg",
    description: "Durable microwave-safe food container with secure clear lid — ideal for takeaway and meal-prep.",
    specs: [
      { label: "Material", value: "PP (Microwave-Safe)" },
      { label: "Lid", value: "Clear Snap-Fit Lid" },
      { label: "Compartments", value: "1 / 2 / 3 Section Options" },
      { label: "Min Order", value: "500 pcs" },
    ],
  },

  {
    id: "deli-tubs-1",
    categoryId: "deli-tubs",
    name: "Deli & Ice Cream Tubs – Style 1",
    image: "/images/products/deli-tubs-1.jpg",
    description: "Leak-resistant deli tub with secure lid — perfect for takeaway soups, dips, and frozen desserts.",
    specs: [
      { label: "Material", value: "PP / Food-Grade Paper" },
      { label: "Sizes", value: "8oz – 32oz" },
      { label: "Lid", value: "Clear / Matching Color" },
      { label: "Min Order", value: "500 pcs" },
    ],
  },

  {
    id: "deli-tubs-2",
    categoryId: "deli-tubs",
    name: "Deli & Ice Cream Tubs – Style 2",
    image: "/images/products/deli-tubs-2.jpg",
    description: "Leak-resistant deli tub with secure lid — perfect for takeaway soups, dips, and frozen desserts.",
    specs: [
      { label: "Material", value: "PP / Food-Grade Paper" },
      { label: "Sizes", value: "8oz – 32oz" },
      { label: "Lid", value: "Clear / Matching Color" },
      { label: "Min Order", value: "500 pcs" },
    ],
  },

  {
    id: "deli-tubs-3",
    categoryId: "deli-tubs",
    name: "Deli & Ice Cream Tubs – Style 3",
    image: "/images/products/deli-tubs-3.jpg",
    description: "Leak-resistant deli tub with secure lid — perfect for takeaway soups, dips, and frozen desserts.",
    specs: [
      { label: "Material", value: "PP / Food-Grade Paper" },
      { label: "Sizes", value: "8oz – 32oz" },
      { label: "Lid", value: "Clear / Matching Color" },
      { label: "Min Order", value: "500 pcs" },
    ],
  },

  {
    id: "deli-tubs-4",
    categoryId: "deli-tubs",
    name: "Deli & Ice Cream Tubs – Style 4",
    image: "/images/products/deli-tubs-4.jpg",
    description: "Leak-resistant deli tub with secure lid — perfect for takeaway soups, dips, and frozen desserts.",
    specs: [
      { label: "Material", value: "PP / Food-Grade Paper" },
      { label: "Sizes", value: "8oz – 32oz" },
      { label: "Lid", value: "Clear / Matching Color" },
      { label: "Min Order", value: "500 pcs" },
    ],
  },

  {
    id: "deli-tubs-5",
    categoryId: "deli-tubs",
    name: "Deli & Ice Cream Tubs – Style 5",
    image: "/images/products/deli-tubs-5.jpg",
    description: "Leak-resistant deli tub with secure lid — perfect for takeaway soups, dips, and frozen desserts.",
    specs: [
      { label: "Material", value: "PP / Food-Grade Paper" },
      { label: "Sizes", value: "8oz – 32oz" },
      { label: "Lid", value: "Clear / Matching Color" },
      { label: "Min Order", value: "500 pcs" },
    ],
  },

  {
    id: "deli-tubs-6",
    categoryId: "deli-tubs",
    name: "Deli & Ice Cream Tubs – Style 6",
    image: "/images/products/deli-tubs-6.jpg",
    description: "Leak-resistant deli tub with secure lid — perfect for takeaway soups, dips, and frozen desserts.",
    specs: [
      { label: "Material", value: "PP / Food-Grade Paper" },
      { label: "Sizes", value: "8oz – 32oz" },
      { label: "Lid", value: "Clear / Matching Color" },
      { label: "Min Order", value: "500 pcs" },
    ],
  },

  {
    id: "deli-tubs-7",
    categoryId: "deli-tubs",
    name: "Deli & Ice Cream Tubs – Style 7",
    image: "/images/products/deli-tubs-7.jpg",
    description: "Leak-resistant deli tub with secure lid — perfect for takeaway soups, dips, and frozen desserts.",
    specs: [
      { label: "Material", value: "PP / Food-Grade Paper" },
      { label: "Sizes", value: "8oz – 32oz" },
      { label: "Lid", value: "Clear / Matching Color" },
      { label: "Min Order", value: "500 pcs" },
    ],
  },

  {
    id: "deli-tubs-8",
    categoryId: "deli-tubs",
    name: "Deli & Ice Cream Tubs – Style 8",
    image: "/images/products/deli-tubs-8.jpg",
    description: "Leak-resistant deli tub with secure lid — perfect for takeaway soups, dips, and frozen desserts.",
    specs: [
      { label: "Material", value: "PP / Food-Grade Paper" },
      { label: "Sizes", value: "8oz – 32oz" },
      { label: "Lid", value: "Clear / Matching Color" },
      { label: "Min Order", value: "500 pcs" },
    ],
  },

  {
    id: "deli-tubs-9",
    categoryId: "deli-tubs",
    name: "Deli & Ice Cream Tubs – Style 9",
    image: "/images/products/deli-tubs-9.jpg",
    description: "Leak-resistant deli tub with secure lid — perfect for takeaway soups, dips, and frozen desserts.",
    specs: [
      { label: "Material", value: "PP / Food-Grade Paper" },
      { label: "Sizes", value: "8oz – 32oz" },
      { label: "Lid", value: "Clear / Matching Color" },
      { label: "Min Order", value: "500 pcs" },
    ],
  },

  {
    id: "deli-tubs-10",
    categoryId: "deli-tubs",
    name: "Deli & Ice Cream Tubs – Style 10",
    image: "/images/products/deli-tubs-10.jpg",
    description: "Leak-resistant deli tub with secure lid — perfect for takeaway soups, dips, and frozen desserts.",
    specs: [
      { label: "Material", value: "PP / Food-Grade Paper" },
      { label: "Sizes", value: "8oz – 32oz" },
      { label: "Lid", value: "Clear / Matching Color" },
      { label: "Min Order", value: "500 pcs" },
    ],
  },

  {
    id: "deli-tubs-11",
    categoryId: "deli-tubs",
    name: "Deli & Ice Cream Tubs – Style 11",
    image: "/images/products/deli-tubs-11.jpg",
    description: "Leak-resistant deli tub with secure lid — perfect for takeaway soups, dips, and frozen desserts.",
    specs: [
      { label: "Material", value: "PP / Food-Grade Paper" },
      { label: "Sizes", value: "8oz – 32oz" },
      { label: "Lid", value: "Clear / Matching Color" },
      { label: "Min Order", value: "500 pcs" },
    ],
  },

  {
    id: "deli-tubs-12",
    categoryId: "deli-tubs",
    name: "Deli & Ice Cream Tubs – Style 12",
    image: "/images/products/deli-tubs-12.jpg",
    description: "Leak-resistant deli tub with secure lid — perfect for takeaway soups, dips, and frozen desserts.",
    specs: [
      { label: "Material", value: "PP / Food-Grade Paper" },
      { label: "Sizes", value: "8oz – 32oz" },
      { label: "Lid", value: "Clear / Matching Color" },
      { label: "Min Order", value: "500 pcs" },
    ],
  },

  {
    id: "deli-tubs-13",
    categoryId: "deli-tubs",
    name: "Deli & Ice Cream Tubs – Style 13",
    image: "/images/products/deli-tubs-13.jpg",
    description: "Leak-resistant deli tub with secure lid — perfect for takeaway soups, dips, and frozen desserts.",
    specs: [
      { label: "Material", value: "PP / Food-Grade Paper" },
      { label: "Sizes", value: "8oz – 32oz" },
      { label: "Lid", value: "Clear / Matching Color" },
      { label: "Min Order", value: "500 pcs" },
    ],
  },

  {
    id: "deli-tubs-14",
    categoryId: "deli-tubs",
    name: "Deli & Ice Cream Tubs – Style 14",
    image: "/images/products/deli-tubs-14.jpg",
    description: "Leak-resistant deli tub with secure lid — perfect for takeaway soups, dips, and frozen desserts.",
    specs: [
      { label: "Material", value: "PP / Food-Grade Paper" },
      { label: "Sizes", value: "8oz – 32oz" },
      { label: "Lid", value: "Clear / Matching Color" },
      { label: "Min Order", value: "500 pcs" },
    ],
  },

  {
    id: "deli-tubs-15",
    categoryId: "deli-tubs",
    name: "Deli & Ice Cream Tubs – Style 15",
    image: "/images/products/deli-tubs-15.jpg",
    description: "Leak-resistant deli tub with secure lid — perfect for takeaway soups, dips, and frozen desserts.",
    specs: [
      { label: "Material", value: "PP / Food-Grade Paper" },
      { label: "Sizes", value: "8oz – 32oz" },
      { label: "Lid", value: "Clear / Matching Color" },
      { label: "Min Order", value: "500 pcs" },
    ],
  },

  {
    id: "deli-tubs-16",
    categoryId: "deli-tubs",
    name: "Deli & Ice Cream Tubs – Style 16",
    image: "/images/products/deli-tubs-16.jpg",
    description: "Leak-resistant deli tub with secure lid — perfect for takeaway soups, dips, and frozen desserts.",
    specs: [
      { label: "Material", value: "PP / Food-Grade Paper" },
      { label: "Sizes", value: "8oz – 32oz" },
      { label: "Lid", value: "Clear / Matching Color" },
      { label: "Min Order", value: "500 pcs" },
    ],
  },

  {
    id: "deli-tubs-17",
    categoryId: "deli-tubs",
    name: "Deli & Ice Cream Tubs – Style 17",
    image: "/images/products/deli-tubs-17.jpg",
    description: "Leak-resistant deli tub with secure lid — perfect for takeaway soups, dips, and frozen desserts.",
    specs: [
      { label: "Material", value: "PP / Food-Grade Paper" },
      { label: "Sizes", value: "8oz – 32oz" },
      { label: "Lid", value: "Clear / Matching Color" },
      { label: "Min Order", value: "500 pcs" },
    ],
  },

  {
    id: "deli-tubs-18",
    categoryId: "deli-tubs",
    name: "Deli & Ice Cream Tubs – Style 18",
    image: "/images/products/deli-tubs-18.jpg",
    description: "Leak-resistant deli tub with secure lid — perfect for takeaway soups, dips, and frozen desserts.",
    specs: [
      { label: "Material", value: "PP / Food-Grade Paper" },
      { label: "Sizes", value: "8oz – 32oz" },
      { label: "Lid", value: "Clear / Matching Color" },
      { label: "Min Order", value: "500 pcs" },
    ],
  },

  {
    id: "kraft-bowls-1",
    categoryId: "kraft-bowls",
    name: "Kraft Salad Bowls – Style 1",
    image: "/images/products/kraft-bowls-1.jpg",
    description: "Eco-friendly kraft paper bowl with clear dome lid — great for salads, noodles, and fresh bowls.",
    specs: [
      { label: "Material", value: "Kraft Paper (PE Lined)" },
      { label: "Lid", value: "Clear PET Dome / Flat Lid" },
      { label: "Sizes", value: "500ml – 1500ml" },
      { label: "Min Order", value: "500 pcs" },
    ],
  },

  {
    id: "kraft-bowls-2",
    categoryId: "kraft-bowls",
    name: "Kraft Salad Bowls – Style 2",
    image: "/images/products/kraft-bowls-2.jpg",
    description: "Eco-friendly kraft paper bowl with clear dome lid — great for salads, noodles, and fresh bowls.",
    specs: [
      { label: "Material", value: "Kraft Paper (PE Lined)" },
      { label: "Lid", value: "Clear PET Dome / Flat Lid" },
      { label: "Sizes", value: "500ml – 1500ml" },
      { label: "Min Order", value: "500 pcs" },
    ],
  },

  {
    id: "kraft-bowls-3",
    categoryId: "kraft-bowls",
    name: "Kraft Salad Bowls – Style 3",
    image: "/images/products/kraft-bowls-3.jpg",
    description: "Eco-friendly kraft paper bowl with clear dome lid — great for salads, noodles, and fresh bowls.",
    specs: [
      { label: "Material", value: "Kraft Paper (PE Lined)" },
      { label: "Lid", value: "Clear PET Dome / Flat Lid" },
      { label: "Sizes", value: "500ml – 1500ml" },
      { label: "Min Order", value: "500 pcs" },
    ],
  },

  {
    id: "kraft-bowls-4",
    categoryId: "kraft-bowls",
    name: "Kraft Salad Bowls – Style 4",
    image: "/images/products/kraft-bowls-4.jpg",
    description: "Eco-friendly kraft paper bowl with clear dome lid — great for salads, noodles, and fresh bowls.",
    specs: [
      { label: "Material", value: "Kraft Paper (PE Lined)" },
      { label: "Lid", value: "Clear PET Dome / Flat Lid" },
      { label: "Sizes", value: "500ml – 1500ml" },
      { label: "Min Order", value: "500 pcs" },
    ],
  },

  {
    id: "kraft-bowls-5",
    categoryId: "kraft-bowls",
    name: "Kraft Salad Bowls – Style 5",
    image: "/images/products/kraft-bowls-5.jpg",
    description: "Eco-friendly kraft paper bowl with clear dome lid — great for salads, noodles, and fresh bowls.",
    specs: [
      { label: "Material", value: "Kraft Paper (PE Lined)" },
      { label: "Lid", value: "Clear PET Dome / Flat Lid" },
      { label: "Sizes", value: "500ml – 1500ml" },
      { label: "Min Order", value: "500 pcs" },
    ],
  },

  {
    id: "kraft-bowls-6",
    categoryId: "kraft-bowls",
    name: "Kraft Salad Bowls – Style 6",
    image: "/images/products/kraft-bowls-6.jpg",
    description: "Eco-friendly kraft paper bowl with clear dome lid — great for salads, noodles, and fresh bowls.",
    specs: [
      { label: "Material", value: "Kraft Paper (PE Lined)" },
      { label: "Lid", value: "Clear PET Dome / Flat Lid" },
      { label: "Sizes", value: "500ml – 1500ml" },
      { label: "Min Order", value: "500 pcs" },
    ],
  },

  {
    id: "kraft-bowls-7",
    categoryId: "kraft-bowls",
    name: "Kraft Salad Bowls – Style 7",
    image: "/images/products/kraft-bowls-7.jpg",
    description: "Eco-friendly kraft paper bowl with clear dome lid — great for salads, noodles, and fresh bowls.",
    specs: [
      { label: "Material", value: "Kraft Paper (PE Lined)" },
      { label: "Lid", value: "Clear PET Dome / Flat Lid" },
      { label: "Sizes", value: "500ml – 1500ml" },
      { label: "Min Order", value: "500 pcs" },
    ],
  },

  {
    id: "kraft-bowls-8",
    categoryId: "kraft-bowls",
    name: "Kraft Salad Bowls – Style 8",
    image: "/images/products/kraft-bowls-8.jpg",
    description: "Eco-friendly kraft paper bowl with clear dome lid — great for salads, noodles, and fresh bowls.",
    specs: [
      { label: "Material", value: "Kraft Paper (PE Lined)" },
      { label: "Lid", value: "Clear PET Dome / Flat Lid" },
      { label: "Sizes", value: "500ml – 1500ml" },
      { label: "Min Order", value: "500 pcs" },
    ],
  },

  {
    id: "kraft-bowls-9",
    categoryId: "kraft-bowls",
    name: "Kraft Salad Bowls – Style 9",
    image: "/images/products/kraft-bowls-9.jpg",
    description: "Eco-friendly kraft paper bowl with clear dome lid — great for salads, noodles, and fresh bowls.",
    specs: [
      { label: "Material", value: "Kraft Paper (PE Lined)" },
      { label: "Lid", value: "Clear PET Dome / Flat Lid" },
      { label: "Sizes", value: "500ml – 1500ml" },
      { label: "Min Order", value: "500 pcs" },
    ],
  },

  {
    id: "kraft-bowls-10",
    categoryId: "kraft-bowls",
    name: "Kraft Salad Bowls – Style 10",
    image: "/images/products/kraft-bowls-10.jpg",
    description: "Eco-friendly kraft paper bowl with clear dome lid — great for salads, noodles, and fresh bowls.",
    specs: [
      { label: "Material", value: "Kraft Paper (PE Lined)" },
      { label: "Lid", value: "Clear PET Dome / Flat Lid" },
      { label: "Sizes", value: "500ml – 1500ml" },
      { label: "Min Order", value: "500 pcs" },
    ],
  },

  {
    id: "kraft-bowls-11",
    categoryId: "kraft-bowls",
    name: "Kraft Salad Bowls – Style 11",
    image: "/images/products/kraft-bowls-11.jpg",
    description: "Eco-friendly kraft paper bowl with clear dome lid — great for salads, noodles, and fresh bowls.",
    specs: [
      { label: "Material", value: "Kraft Paper (PE Lined)" },
      { label: "Lid", value: "Clear PET Dome / Flat Lid" },
      { label: "Sizes", value: "500ml – 1500ml" },
      { label: "Min Order", value: "500 pcs" },
    ],
  },

  {
    id: "kraft-bowls-12",
    categoryId: "kraft-bowls",
    name: "Kraft Salad Bowls – Style 12",
    image: "/images/products/kraft-bowls-12.jpg",
    description: "Eco-friendly kraft paper bowl with clear dome lid — great for salads, noodles, and fresh bowls.",
    specs: [
      { label: "Material", value: "Kraft Paper (PE Lined)" },
      { label: "Lid", value: "Clear PET Dome / Flat Lid" },
      { label: "Sizes", value: "500ml – 1500ml" },
      { label: "Min Order", value: "500 pcs" },
    ],
  },

  {
    id: "kraft-bowls-13",
    categoryId: "kraft-bowls",
    name: "Kraft Salad Bowls – Style 13",
    image: "/images/products/kraft-bowls-13.jpg",
    description: "Eco-friendly kraft paper bowl with clear dome lid — great for salads, noodles, and fresh bowls.",
    specs: [
      { label: "Material", value: "Kraft Paper (PE Lined)" },
      { label: "Lid", value: "Clear PET Dome / Flat Lid" },
      { label: "Sizes", value: "500ml – 1500ml" },
      { label: "Min Order", value: "500 pcs" },
    ],
  },

  {
    id: "kraft-bowls-14",
    categoryId: "kraft-bowls",
    name: "Kraft Salad Bowls – Style 14",
    image: "/images/products/kraft-bowls-14.jpg",
    description: "Eco-friendly kraft paper bowl with clear dome lid — great for salads, noodles, and fresh bowls.",
    specs: [
      { label: "Material", value: "Kraft Paper (PE Lined)" },
      { label: "Lid", value: "Clear PET Dome / Flat Lid" },
      { label: "Sizes", value: "500ml – 1500ml" },
      { label: "Min Order", value: "500 pcs" },
    ],
  },

  {
    id: "buckets-pails-1",
    categoryId: "buckets-pails",
    name: "Buckets & Pails – Style 1",
    image: "/images/products/buckets-pails-1.jpg",
    description: "Heavy-duty food-grade plastic bucket with secure lid and wire handle — for bulk storage and packing.",
    specs: [
      { label: "Material", value: "Food-Grade HDPE" },
      { label: "Sizes", value: "5L – 20L" },
      { label: "Handle", value: "Wire with Grip" },
      { label: "Min Order", value: "100 pcs" },
    ],
  },

  {
    id: "buckets-pails-2",
    categoryId: "buckets-pails",
    name: "Buckets & Pails – Style 2",
    image: "/images/products/buckets-pails-2.jpg",
    description: "Heavy-duty food-grade plastic bucket with secure lid and wire handle — for bulk storage and packing.",
    specs: [
      { label: "Material", value: "Food-Grade HDPE" },
      { label: "Sizes", value: "5L – 20L" },
      { label: "Handle", value: "Wire with Grip" },
      { label: "Min Order", value: "100 pcs" },
    ],
  },

  {
    id: "buckets-pails-3",
    categoryId: "buckets-pails",
    name: "Buckets & Pails – Style 3",
    image: "/images/products/buckets-pails-3.jpg",
    description: "Heavy-duty food-grade plastic bucket with secure lid and wire handle — for bulk storage and packing.",
    specs: [
      { label: "Material", value: "Food-Grade HDPE" },
      { label: "Sizes", value: "5L – 20L" },
      { label: "Handle", value: "Wire with Grip" },
      { label: "Min Order", value: "100 pcs" },
    ],
  },

  {
    id: "buckets-pails-4",
    categoryId: "buckets-pails",
    name: "Buckets & Pails – Style 4",
    image: "/images/products/buckets-pails-4.jpg",
    description: "Heavy-duty food-grade plastic bucket with secure lid and wire handle — for bulk storage and packing.",
    specs: [
      { label: "Material", value: "Food-Grade HDPE" },
      { label: "Sizes", value: "5L – 20L" },
      { label: "Handle", value: "Wire with Grip" },
      { label: "Min Order", value: "100 pcs" },
    ],
  },

  {
    id: "buckets-pails-5",
    categoryId: "buckets-pails",
    name: "Buckets & Pails – Style 5",
    image: "/images/products/buckets-pails-5.jpg",
    description: "Heavy-duty food-grade plastic bucket with secure lid and wire handle — for bulk storage and packing.",
    specs: [
      { label: "Material", value: "Food-Grade HDPE" },
      { label: "Sizes", value: "5L – 20L" },
      { label: "Handle", value: "Wire with Grip" },
      { label: "Min Order", value: "100 pcs" },
    ],
  },

  {
    id: "buckets-pails-6",
    categoryId: "buckets-pails",
    name: "Buckets & Pails – Style 6",
    image: "/images/products/buckets-pails-6.jpg",
    description: "Heavy-duty food-grade plastic bucket with secure lid and wire handle — for bulk storage and packing.",
    specs: [
      { label: "Material", value: "Food-Grade HDPE" },
      { label: "Sizes", value: "5L – 20L" },
      { label: "Handle", value: "Wire with Grip" },
      { label: "Min Order", value: "100 pcs" },
    ],
  },

  {
    id: "buckets-pails-7",
    categoryId: "buckets-pails",
    name: "Buckets & Pails – Style 7",
    image: "/images/products/buckets-pails-7.jpg",
    description: "Heavy-duty food-grade plastic bucket with secure lid and wire handle — for bulk storage and packing.",
    specs: [
      { label: "Material", value: "Food-Grade HDPE" },
      { label: "Sizes", value: "5L – 20L" },
      { label: "Handle", value: "Wire with Grip" },
      { label: "Min Order", value: "100 pcs" },
    ],
  },

  {
    id: "buckets-pails-8",
    categoryId: "buckets-pails",
    name: "Buckets & Pails – Style 8",
    image: "/images/products/buckets-pails-8.jpg",
    description: "Heavy-duty food-grade plastic bucket with secure lid and wire handle — for bulk storage and packing.",
    specs: [
      { label: "Material", value: "Food-Grade HDPE" },
      { label: "Sizes", value: "5L – 20L" },
      { label: "Handle", value: "Wire with Grip" },
      { label: "Min Order", value: "100 pcs" },
    ],
  },

  {
    id: "buckets-pails-9",
    categoryId: "buckets-pails",
    name: "Buckets & Pails – Style 9",
    image: "/images/products/buckets-pails-9.jpg",
    description: "Heavy-duty food-grade plastic bucket with secure lid and wire handle — for bulk storage and packing.",
    specs: [
      { label: "Material", value: "Food-Grade HDPE" },
      { label: "Sizes", value: "5L – 20L" },
      { label: "Handle", value: "Wire with Grip" },
      { label: "Min Order", value: "100 pcs" },
    ],
  },

  {
    id: "buckets-pails-10",
    categoryId: "buckets-pails",
    name: "Buckets & Pails – Style 10",
    image: "/images/products/buckets-pails-10.jpg",
    description: "Heavy-duty food-grade plastic bucket with secure lid and wire handle — for bulk storage and packing.",
    specs: [
      { label: "Material", value: "Food-Grade HDPE" },
      { label: "Sizes", value: "5L – 20L" },
      { label: "Handle", value: "Wire with Grip" },
      { label: "Min Order", value: "100 pcs" },
    ],
  },

  {
    id: "buckets-pails-11",
    categoryId: "buckets-pails",
    name: "Buckets & Pails – Style 11",
    image: "/images/products/buckets-pails-11.jpg",
    description: "Heavy-duty food-grade plastic bucket with secure lid and wire handle — for bulk storage and packing.",
    specs: [
      { label: "Material", value: "Food-Grade HDPE" },
      { label: "Sizes", value: "5L – 20L" },
      { label: "Handle", value: "Wire with Grip" },
      { label: "Min Order", value: "100 pcs" },
    ],
  },

  {
    id: "buckets-pails-12",
    categoryId: "buckets-pails",
    name: "Buckets & Pails – Style 12",
    image: "/images/products/buckets-pails-12.jpg",
    description: "Heavy-duty food-grade plastic bucket with secure lid and wire handle — for bulk storage and packing.",
    specs: [
      { label: "Material", value: "Food-Grade HDPE" },
      { label: "Sizes", value: "5L – 20L" },
      { label: "Handle", value: "Wire with Grip" },
      { label: "Min Order", value: "100 pcs" },
    ],
  },

  {
    id: "produce-trays-1",
    categoryId: "produce-trays",
    name: "Egg & Produce Trays – Style 1",
    image: "/images/products/produce-trays-1.jpg",
    description: "Clear rigid tray for eggs, fruit, or produce — strong cavity structure to protect contents in transit.",
    specs: [
      { label: "Material", value: "Clear PET / PVC" },
      { label: "Cavities", value: "2 / 6 / 10 / 24 / 30 Cell" },
      { label: "Use", value: "Eggs / Fruit / Produce" },
      { label: "Min Order", value: "500 pcs" },
    ],
  },

  {
    id: "produce-trays-2",
    categoryId: "produce-trays",
    name: "Egg & Produce Trays – Style 2",
    image: "/images/products/produce-trays-2.jpg",
    description: "Clear rigid tray for eggs, fruit, or produce — strong cavity structure to protect contents in transit.",
    specs: [
      { label: "Material", value: "Clear PET / PVC" },
      { label: "Cavities", value: "2 / 6 / 10 / 24 / 30 Cell" },
      { label: "Use", value: "Eggs / Fruit / Produce" },
      { label: "Min Order", value: "500 pcs" },
    ],
  },

  {
    id: "produce-trays-3",
    categoryId: "produce-trays",
    name: "Egg & Produce Trays – Style 3",
    image: "/images/products/produce-trays-3.jpg",
    description: "Clear rigid tray for eggs, fruit, or produce — strong cavity structure to protect contents in transit.",
    specs: [
      { label: "Material", value: "Clear PET / PVC" },
      { label: "Cavities", value: "2 / 6 / 10 / 24 / 30 Cell" },
      { label: "Use", value: "Eggs / Fruit / Produce" },
      { label: "Min Order", value: "500 pcs" },
    ],
  },

  {
    id: "produce-trays-4",
    categoryId: "produce-trays",
    name: "Egg & Produce Trays – Style 4",
    image: "/images/products/produce-trays-4.jpg",
    description: "Clear rigid tray for eggs, fruit, or produce — strong cavity structure to protect contents in transit.",
    specs: [
      { label: "Material", value: "Clear PET / PVC" },
      { label: "Cavities", value: "2 / 6 / 10 / 24 / 30 Cell" },
      { label: "Use", value: "Eggs / Fruit / Produce" },
      { label: "Min Order", value: "500 pcs" },
    ],
  },

  {
    id: "produce-trays-5",
    categoryId: "produce-trays",
    name: "Egg & Produce Trays – Style 5",
    image: "/images/products/produce-trays-5.jpg",
    description: "Clear rigid tray for eggs, fruit, or produce — strong cavity structure to protect contents in transit.",
    specs: [
      { label: "Material", value: "Clear PET / PVC" },
      { label: "Cavities", value: "2 / 6 / 10 / 24 / 30 Cell" },
      { label: "Use", value: "Eggs / Fruit / Produce" },
      { label: "Min Order", value: "500 pcs" },
    ],
  },

  {
    id: "produce-trays-6",
    categoryId: "produce-trays",
    name: "Egg & Produce Trays – Style 6",
    image: "/images/products/produce-trays-6.jpg",
    description: "Clear rigid tray for eggs, fruit, or produce — strong cavity structure to protect contents in transit.",
    specs: [
      { label: "Material", value: "Clear PET / PVC" },
      { label: "Cavities", value: "2 / 6 / 10 / 24 / 30 Cell" },
      { label: "Use", value: "Eggs / Fruit / Produce" },
      { label: "Min Order", value: "500 pcs" },
    ],
  },

  {
    id: "produce-trays-7",
    categoryId: "produce-trays",
    name: "Egg & Produce Trays – Style 7",
    image: "/images/products/produce-trays-7.jpg",
    description: "Clear rigid tray for eggs, fruit, or produce — strong cavity structure to protect contents in transit.",
    specs: [
      { label: "Material", value: "Clear PET / PVC" },
      { label: "Cavities", value: "2 / 6 / 10 / 24 / 30 Cell" },
      { label: "Use", value: "Eggs / Fruit / Produce" },
      { label: "Min Order", value: "500 pcs" },
    ],
  },

  {
    id: "produce-trays-8",
    categoryId: "produce-trays",
    name: "Egg & Produce Trays – Style 8",
    image: "/images/products/produce-trays-8.jpg",
    description: "Clear rigid tray for eggs, fruit, or produce — strong cavity structure to protect contents in transit.",
    specs: [
      { label: "Material", value: "Clear PET / PVC" },
      { label: "Cavities", value: "2 / 6 / 10 / 24 / 30 Cell" },
      { label: "Use", value: "Eggs / Fruit / Produce" },
      { label: "Min Order", value: "500 pcs" },
    ],
  },

  {
    id: "produce-trays-9",
    categoryId: "produce-trays",
    name: "Egg & Produce Trays – Style 9",
    image: "/images/products/produce-trays-9.jpg",
    description: "Clear rigid tray for eggs, fruit, or produce — strong cavity structure to protect contents in transit.",
    specs: [
      { label: "Material", value: "Clear PET / PVC" },
      { label: "Cavities", value: "2 / 6 / 10 / 24 / 30 Cell" },
      { label: "Use", value: "Eggs / Fruit / Produce" },
      { label: "Min Order", value: "500 pcs" },
    ],
  },

  {
    id: "produce-trays-10",
    categoryId: "produce-trays",
    name: "Egg & Produce Trays – Style 10",
    image: "/images/products/produce-trays-10.jpg",
    description: "Clear rigid tray for eggs, fruit, or produce — strong cavity structure to protect contents in transit.",
    specs: [
      { label: "Material", value: "Clear PET / PVC" },
      { label: "Cavities", value: "2 / 6 / 10 / 24 / 30 Cell" },
      { label: "Use", value: "Eggs / Fruit / Produce" },
      { label: "Min Order", value: "500 pcs" },
    ],
  },

  {
    id: "produce-trays-11",
    categoryId: "produce-trays",
    name: "Egg & Produce Trays – Style 11",
    image: "/images/products/produce-trays-11.jpg",
    description: "Clear rigid tray for eggs, fruit, or produce — strong cavity structure to protect contents in transit.",
    specs: [
      { label: "Material", value: "Clear PET / PVC" },
      { label: "Cavities", value: "2 / 6 / 10 / 24 / 30 Cell" },
      { label: "Use", value: "Eggs / Fruit / Produce" },
      { label: "Min Order", value: "500 pcs" },
    ],
  },

  {
    id: "produce-trays-12",
    categoryId: "produce-trays",
    name: "Egg & Produce Trays – Style 12",
    image: "/images/products/produce-trays-12.jpg",
    description: "Clear rigid tray for eggs, fruit, or produce — strong cavity structure to protect contents in transit.",
    specs: [
      { label: "Material", value: "Clear PET / PVC" },
      { label: "Cavities", value: "2 / 6 / 10 / 24 / 30 Cell" },
      { label: "Use", value: "Eggs / Fruit / Produce" },
      { label: "Min Order", value: "500 pcs" },
    ],
  },

  {
    id: "produce-trays-13",
    categoryId: "produce-trays",
    name: "Egg & Produce Trays – Style 13",
    image: "/images/products/produce-trays-13.jpg",
    description: "Clear rigid tray for eggs, fruit, or produce — strong cavity structure to protect contents in transit.",
    specs: [
      { label: "Material", value: "Clear PET / PVC" },
      { label: "Cavities", value: "2 / 6 / 10 / 24 / 30 Cell" },
      { label: "Use", value: "Eggs / Fruit / Produce" },
      { label: "Min Order", value: "500 pcs" },
    ],
  },

  {
    id: "produce-trays-14",
    categoryId: "produce-trays",
    name: "Egg & Produce Trays – Style 14",
    image: "/images/products/produce-trays-14.jpg",
    description: "Clear rigid tray for eggs, fruit, or produce — strong cavity structure to protect contents in transit.",
    specs: [
      { label: "Material", value: "Clear PET / PVC" },
      { label: "Cavities", value: "2 / 6 / 10 / 24 / 30 Cell" },
      { label: "Use", value: "Eggs / Fruit / Produce" },
      { label: "Min Order", value: "500 pcs" },
    ],
  },

  {
    id: "produce-trays-15",
    categoryId: "produce-trays",
    name: "Egg & Produce Trays – Style 15",
    image: "/images/products/produce-trays-15.jpg",
    description: "Clear rigid tray for eggs, fruit, or produce — strong cavity structure to protect contents in transit.",
    specs: [
      { label: "Material", value: "Clear PET / PVC" },
      { label: "Cavities", value: "2 / 6 / 10 / 24 / 30 Cell" },
      { label: "Use", value: "Eggs / Fruit / Produce" },
      { label: "Min Order", value: "500 pcs" },
    ],
  },

  {
    id: "produce-trays-16",
    categoryId: "produce-trays",
    name: "Egg & Produce Trays – Style 16",
    image: "/images/products/produce-trays-16.jpg",
    description: "Clear rigid tray for eggs, fruit, or produce — strong cavity structure to protect contents in transit.",
    specs: [
      { label: "Material", value: "Clear PET / PVC" },
      { label: "Cavities", value: "2 / 6 / 10 / 24 / 30 Cell" },
      { label: "Use", value: "Eggs / Fruit / Produce" },
      { label: "Min Order", value: "500 pcs" },
    ],
  },

  {
    id: "produce-trays-17",
    categoryId: "produce-trays",
    name: "Egg & Produce Trays – Style 17",
    image: "/images/products/produce-trays-17.jpg",
    description: "Clear rigid tray for eggs, fruit, or produce — strong cavity structure to protect contents in transit.",
    specs: [
      { label: "Material", value: "Clear PET / PVC" },
      { label: "Cavities", value: "2 / 6 / 10 / 24 / 30 Cell" },
      { label: "Use", value: "Eggs / Fruit / Produce" },
      { label: "Min Order", value: "500 pcs" },
    ],
  },

  {
    id: "produce-trays-18",
    categoryId: "produce-trays",
    name: "Egg & Produce Trays – Style 18",
    image: "/images/products/produce-trays-18.jpg",
    description: "Clear rigid tray for eggs, fruit, or produce — strong cavity structure to protect contents in transit.",
    specs: [
      { label: "Material", value: "Clear PET / PVC" },
      { label: "Cavities", value: "2 / 6 / 10 / 24 / 30 Cell" },
      { label: "Use", value: "Eggs / Fruit / Produce" },
      { label: "Min Order", value: "500 pcs" },
    ],
  },

  {
    id: "produce-trays-19",
    categoryId: "produce-trays",
    name: "Egg & Produce Trays – Style 19",
    image: "/images/products/produce-trays-19.jpg",
    description: "Clear rigid tray for eggs, fruit, or produce — strong cavity structure to protect contents in transit.",
    specs: [
      { label: "Material", value: "Clear PET / PVC" },
      { label: "Cavities", value: "2 / 6 / 10 / 24 / 30 Cell" },
      { label: "Use", value: "Eggs / Fruit / Produce" },
      { label: "Min Order", value: "500 pcs" },
    ],
  },

  {
    id: "produce-trays-20",
    categoryId: "produce-trays",
    name: "Egg & Produce Trays – Style 20",
    image: "/images/products/produce-trays-20.jpg",
    description: "Clear rigid tray for eggs, fruit, or produce — strong cavity structure to protect contents in transit.",
    specs: [
      { label: "Material", value: "Clear PET / PVC" },
      { label: "Cavities", value: "2 / 6 / 10 / 24 / 30 Cell" },
      { label: "Use", value: "Eggs / Fruit / Produce" },
      { label: "Min Order", value: "500 pcs" },
    ],
  },

  {
    id: "nursery-trays-1",
    categoryId: "nursery-trays",
    name: "Nursery & Seedling Trays – Style 1",
    image: "/images/products/nursery-trays-1.jpg",
    description: "Durable multi-cell nursery tray for seedlings and plant propagation — reusable and rigid.",
    specs: [
      { label: "Material", value: "Rigid PS Plastic" },
      { label: "Cells", value: "72 / 98 / 128 Cell" },
      { label: "Use", value: "Seedlings / Nursery" },
      { label: "Min Order", value: "50 pcs" },
    ],
  },

  {
    id: "nursery-trays-2",
    categoryId: "nursery-trays",
    name: "Nursery & Seedling Trays – Style 2",
    image: "/images/products/nursery-trays-2.jpg",
    description: "Durable multi-cell nursery tray for seedlings and plant propagation — reusable and rigid.",
    specs: [
      { label: "Material", value: "Rigid PS Plastic" },
      { label: "Cells", value: "72 / 98 / 128 Cell" },
      { label: "Use", value: "Seedlings / Nursery" },
      { label: "Min Order", value: "50 pcs" },
    ],
  },

  {
    id: "nursery-trays-3",
    categoryId: "nursery-trays",
    name: "Nursery & Seedling Trays – Style 3",
    image: "/images/products/nursery-trays-3.jpg",
    description: "Durable multi-cell nursery tray for seedlings and plant propagation — reusable and rigid.",
    specs: [
      { label: "Material", value: "Rigid PS Plastic" },
      { label: "Cells", value: "72 / 98 / 128 Cell" },
      { label: "Use", value: "Seedlings / Nursery" },
      { label: "Min Order", value: "50 pcs" },
    ],
  },

  {
    id: "clamshell-containers-1",
    categoryId: "clamshell-containers",
    name: "Clamshell Containers – Style 1",
    image: "/images/products/clamshell-containers-1.jpg",
    description: "Hinged clear clamshell container — tamper-evident and ideal for bakery, salads, and deli items.",
    specs: [
      { label: "Material", value: "Clear PET / RPET" },
      { label: "Style", value: "Hinged Lid" },
      { label: "Sizes", value: "Small / Medium / Large" },
      { label: "Min Order", value: "500 pcs" },
    ],
  },

  {
    id: "clamshell-containers-2",
    categoryId: "clamshell-containers",
    name: "Clamshell Containers – Style 2",
    image: "/images/products/clamshell-containers-2.jpg",
    description: "Hinged clear clamshell container — tamper-evident and ideal for bakery, salads, and deli items.",
    specs: [
      { label: "Material", value: "Clear PET / RPET" },
      { label: "Style", value: "Hinged Lid" },
      { label: "Sizes", value: "Small / Medium / Large" },
      { label: "Min Order", value: "500 pcs" },
    ],
  },

  {
    id: "clamshell-containers-3",
    categoryId: "clamshell-containers",
    name: "Clamshell Containers – Style 3",
    image: "/images/products/clamshell-containers-3.jpg",
    description: "Hinged clear clamshell container — tamper-evident and ideal for bakery, salads, and deli items.",
    specs: [
      { label: "Material", value: "Clear PET / RPET" },
      { label: "Style", value: "Hinged Lid" },
      { label: "Sizes", value: "Small / Medium / Large" },
      { label: "Min Order", value: "500 pcs" },
    ],
  },

  {
    id: "clamshell-containers-4",
    categoryId: "clamshell-containers",
    name: "Clamshell Containers – Style 4",
    image: "/images/products/clamshell-containers-4.jpg",
    description: "Hinged clear clamshell container — tamper-evident and ideal for bakery, salads, and deli items.",
    specs: [
      { label: "Material", value: "Clear PET / RPET" },
      { label: "Style", value: "Hinged Lid" },
      { label: "Sizes", value: "Small / Medium / Large" },
      { label: "Min Order", value: "500 pcs" },
    ],
  },

  {
    id: "clamshell-containers-5",
    categoryId: "clamshell-containers",
    name: "Clamshell Containers – Style 5",
    image: "/images/products/clamshell-containers-5.jpg",
    description: "Hinged clear clamshell container — tamper-evident and ideal for bakery, salads, and deli items.",
    specs: [
      { label: "Material", value: "Clear PET / RPET" },
      { label: "Style", value: "Hinged Lid" },
      { label: "Sizes", value: "Small / Medium / Large" },
      { label: "Min Order", value: "500 pcs" },
    ],
  },

  {
    id: "clamshell-containers-6",
    categoryId: "clamshell-containers",
    name: "Clamshell Containers – Style 6",
    image: "/images/products/clamshell-containers-6.jpg",
    description: "Hinged clear clamshell container — tamper-evident and ideal for bakery, salads, and deli items.",
    specs: [
      { label: "Material", value: "Clear PET / RPET" },
      { label: "Style", value: "Hinged Lid" },
      { label: "Sizes", value: "Small / Medium / Large" },
      { label: "Min Order", value: "500 pcs" },
    ],
  },

  {
    id: "clamshell-containers-7",
    categoryId: "clamshell-containers",
    name: "Clamshell Containers – Style 7",
    image: "/images/products/clamshell-containers-7.jpg",
    description: "Hinged clear clamshell container — tamper-evident and ideal for bakery, salads, and deli items.",
    specs: [
      { label: "Material", value: "Clear PET / RPET" },
      { label: "Style", value: "Hinged Lid" },
      { label: "Sizes", value: "Small / Medium / Large" },
      { label: "Min Order", value: "500 pcs" },
    ],
  },

  {
    id: "clamshell-containers-8",
    categoryId: "clamshell-containers",
    name: "Clamshell Containers – Style 8",
    image: "/images/products/clamshell-containers-8.jpg",
    description: "Hinged clear clamshell container — tamper-evident and ideal for bakery, salads, and deli items.",
    specs: [
      { label: "Material", value: "Clear PET / RPET" },
      { label: "Style", value: "Hinged Lid" },
      { label: "Sizes", value: "Small / Medium / Large" },
      { label: "Min Order", value: "500 pcs" },
    ],
  },

  {
    id: "clamshell-containers-9",
    categoryId: "clamshell-containers",
    name: "Clamshell Containers – Style 9",
    image: "/images/products/clamshell-containers-9.jpg",
    description: "Hinged clear clamshell container — tamper-evident and ideal for bakery, salads, and deli items.",
    specs: [
      { label: "Material", value: "Clear PET / RPET" },
      { label: "Style", value: "Hinged Lid" },
      { label: "Sizes", value: "Small / Medium / Large" },
      { label: "Min Order", value: "500 pcs" },
    ],
  },

  {
    id: "clamshell-containers-10",
    categoryId: "clamshell-containers",
    name: "Clamshell Containers – Style 10",
    image: "/images/products/clamshell-containers-10.jpg",
    description: "Hinged clear clamshell container — tamper-evident and ideal for bakery, salads, and deli items.",
    specs: [
      { label: "Material", value: "Clear PET / RPET" },
      { label: "Style", value: "Hinged Lid" },
      { label: "Sizes", value: "Small / Medium / Large" },
      { label: "Min Order", value: "500 pcs" },
    ],
  },

  {
    id: "clamshell-containers-11",
    categoryId: "clamshell-containers",
    name: "Clamshell Containers – Style 11",
    image: "/images/products/clamshell-containers-11.jpg",
    description: "Hinged clear clamshell container — tamper-evident and ideal for bakery, salads, and deli items.",
    specs: [
      { label: "Material", value: "Clear PET / RPET" },
      { label: "Style", value: "Hinged Lid" },
      { label: "Sizes", value: "Small / Medium / Large" },
      { label: "Min Order", value: "500 pcs" },
    ],
  },

  {
    id: "clamshell-containers-12",
    categoryId: "clamshell-containers",
    name: "Clamshell Containers – Style 12",
    image: "/images/products/clamshell-containers-12.jpg",
    description: "Hinged clear clamshell container — tamper-evident and ideal for bakery, salads, and deli items.",
    specs: [
      { label: "Material", value: "Clear PET / RPET" },
      { label: "Style", value: "Hinged Lid" },
      { label: "Sizes", value: "Small / Medium / Large" },
      { label: "Min Order", value: "500 pcs" },
    ],
  },

  {
    id: "clamshell-containers-13",
    categoryId: "clamshell-containers",
    name: "Clamshell Containers – Style 13",
    image: "/images/products/clamshell-containers-13.jpg",
    description: "Hinged clear clamshell container — tamper-evident and ideal for bakery, salads, and deli items.",
    specs: [
      { label: "Material", value: "Clear PET / RPET" },
      { label: "Style", value: "Hinged Lid" },
      { label: "Sizes", value: "Small / Medium / Large" },
      { label: "Min Order", value: "500 pcs" },
    ],
  },

  {
    id: "clamshell-containers-14",
    categoryId: "clamshell-containers",
    name: "Clamshell Containers – Style 14",
    image: "/images/products/clamshell-containers-14.jpg",
    description: "Hinged clear clamshell container — tamper-evident and ideal for bakery, salads, and deli items.",
    specs: [
      { label: "Material", value: "Clear PET / RPET" },
      { label: "Style", value: "Hinged Lid" },
      { label: "Sizes", value: "Small / Medium / Large" },
      { label: "Min Order", value: "500 pcs" },
    ],
  },

  {
    id: "clamshell-containers-15",
    categoryId: "clamshell-containers",
    name: "Clamshell Containers – Style 15",
    image: "/images/products/clamshell-containers-15.jpg",
    description: "Hinged clear clamshell container — tamper-evident and ideal for bakery, salads, and deli items.",
    specs: [
      { label: "Material", value: "Clear PET / RPET" },
      { label: "Style", value: "Hinged Lid" },
      { label: "Sizes", value: "Small / Medium / Large" },
      { label: "Min Order", value: "500 pcs" },
    ],
  },

  {
    id: "cup-lid-1",
    categoryId: "paper-cups",
    name: "Disposable Cup & Lid – Style 1",
    image: "/images/products/cups-lids-1.jpg",
    description: "Custom disposable cup with secure lid — suited for hot or cold drinks and takeaway service.",
    specs: [
      { label: "Sizes", value: "8oz – 24oz" },
      { label: "Type", value: "Hot Paper Cup / Cold PET Cup" },
      { label: "Lid", value: "Sip Lid / Dome Lid" },
      { label: "Custom Print", value: "Available" },
    ],
  },

  {
    id: "cup-lid-2",
    categoryId: "paper-cups",
    name: "Disposable Cup & Lid – Style 2",
    image: "/images/products/cups-lids-2.jpg",
    description: "Custom disposable cup with secure lid — suited for hot or cold drinks and takeaway service.",
    specs: [
      { label: "Sizes", value: "8oz – 24oz" },
      { label: "Type", value: "Hot Paper Cup / Cold PET Cup" },
      { label: "Lid", value: "Sip Lid / Dome Lid" },
      { label: "Custom Print", value: "Available" },
    ],
  },

  {
    id: "cup-lid-3",
    categoryId: "paper-cups",
    name: "Disposable Cup & Lid – Style 3",
    image: "/images/products/cups-lids-3.jpg",
    description: "Custom disposable cup with secure lid — suited for hot or cold drinks and takeaway service.",
    specs: [
      { label: "Sizes", value: "8oz – 24oz" },
      { label: "Type", value: "Hot Paper Cup / Cold PET Cup" },
      { label: "Lid", value: "Sip Lid / Dome Lid" },
      { label: "Custom Print", value: "Available" },
    ],
  },

  {
    id: "cup-lid-4",
    categoryId: "paper-cups",
    name: "Disposable Cup & Lid – Style 4",
    image: "/images/products/cups-lids-4.jpg",
    description: "Custom disposable cup with secure lid — suited for hot or cold drinks and takeaway service.",
    specs: [
      { label: "Sizes", value: "8oz – 24oz" },
      { label: "Type", value: "Hot Paper Cup / Cold PET Cup" },
      { label: "Lid", value: "Sip Lid / Dome Lid" },
      { label: "Custom Print", value: "Available" },
    ],
  },

  {
    id: "cup-lid-5",
    categoryId: "paper-cups",
    name: "Disposable Cup & Lid – Style 5",
    image: "/images/products/cups-lids-5.jpg",
    description: "Custom disposable cup with secure lid — suited for hot or cold drinks and takeaway service.",
    specs: [
      { label: "Sizes", value: "8oz – 24oz" },
      { label: "Type", value: "Hot Paper Cup / Cold PET Cup" },
      { label: "Lid", value: "Sip Lid / Dome Lid" },
      { label: "Custom Print", value: "Available" },
    ],
  },

  {
    id: "cup-lid-6",
    categoryId: "paper-cups",
    name: "Disposable Cup & Lid – Style 6",
    image: "/images/products/cups-lids-6.jpg",
    description: "Custom disposable cup with secure lid — suited for hot or cold drinks and takeaway service.",
    specs: [
      { label: "Sizes", value: "8oz – 24oz" },
      { label: "Type", value: "Hot Paper Cup / Cold PET Cup" },
      { label: "Lid", value: "Sip Lid / Dome Lid" },
      { label: "Custom Print", value: "Available" },
    ],
  },

  {
    id: "cup-lid-7",
    categoryId: "paper-cups",
    name: "Disposable Cup & Lid – Style 7",
    image: "/images/products/cups-lids-7.jpg",
    description: "Custom disposable cup with secure lid — suited for hot or cold drinks and takeaway service.",
    specs: [
      { label: "Sizes", value: "8oz – 24oz" },
      { label: "Type", value: "Hot Paper Cup / Cold PET Cup" },
      { label: "Lid", value: "Sip Lid / Dome Lid" },
      { label: "Custom Print", value: "Available" },
    ],
  },

  {
    id: "cup-lid-8",
    categoryId: "paper-cups",
    name: "Disposable Cup & Lid – Style 8",
    image: "/images/products/cups-lids-8.jpg",
    description: "Custom disposable cup with secure lid — suited for hot or cold drinks and takeaway service.",
    specs: [
      { label: "Sizes", value: "8oz – 24oz" },
      { label: "Type", value: "Hot Paper Cup / Cold PET Cup" },
      { label: "Lid", value: "Sip Lid / Dome Lid" },
      { label: "Custom Print", value: "Available" },
    ],
  },

  {
    id: "cup-lid-9",
    categoryId: "paper-cups",
    name: "Disposable Cup & Lid – Style 9",
    image: "/images/products/cups-lids-9.jpg",
    description: "Custom disposable cup with secure lid — suited for hot or cold drinks and takeaway service.",
    specs: [
      { label: "Sizes", value: "8oz – 24oz" },
      { label: "Type", value: "Hot Paper Cup / Cold PET Cup" },
      { label: "Lid", value: "Sip Lid / Dome Lid" },
      { label: "Custom Print", value: "Available" },
    ],
  },

  {
    id: "cup-lid-10",
    categoryId: "paper-cups",
    name: "Disposable Cup & Lid – Style 10",
    image: "/images/products/cups-lids-10.jpg",
    description: "Custom disposable cup with secure lid — suited for hot or cold drinks and takeaway service.",
    specs: [
      { label: "Sizes", value: "8oz – 24oz" },
      { label: "Type", value: "Hot Paper Cup / Cold PET Cup" },
      { label: "Lid", value: "Sip Lid / Dome Lid" },
      { label: "Custom Print", value: "Available" },
    ],
  },

  {
    id: "cup-lid-11",
    categoryId: "paper-cups",
    name: "Disposable Cup & Lid – Style 11",
    image: "/images/products/cups-lids-11.jpg",
    description: "Custom disposable cup with secure lid — suited for hot or cold drinks and takeaway service.",
    specs: [
      { label: "Sizes", value: "8oz – 24oz" },
      { label: "Type", value: "Hot Paper Cup / Cold PET Cup" },
      { label: "Lid", value: "Sip Lid / Dome Lid" },
      { label: "Custom Print", value: "Available" },
    ],
  },

  {
    id: "cup-lid-12",
    categoryId: "paper-cups",
    name: "Disposable Cup & Lid – Style 12",
    image: "/images/products/cups-lids-12.jpg",
    description: "Custom disposable cup with secure lid — suited for hot or cold drinks and takeaway service.",
    specs: [
      { label: "Sizes", value: "8oz – 24oz" },
      { label: "Type", value: "Hot Paper Cup / Cold PET Cup" },
      { label: "Lid", value: "Sip Lid / Dome Lid" },
      { label: "Custom Print", value: "Available" },
    ],
  },

  {
    id: "cup-lid-13",
    categoryId: "paper-cups",
    name: "Disposable Cup & Lid – Style 13",
    image: "/images/products/cups-lids-13.jpg",
    description: "Custom disposable cup with secure lid — suited for hot or cold drinks and takeaway service.",
    specs: [
      { label: "Sizes", value: "8oz – 24oz" },
      { label: "Type", value: "Hot Paper Cup / Cold PET Cup" },
      { label: "Lid", value: "Sip Lid / Dome Lid" },
      { label: "Custom Print", value: "Available" },
    ],
  },

  {
    id: "cup-lid-14",
    categoryId: "paper-cups",
    name: "Disposable Cup & Lid – Style 14",
    image: "/images/products/cups-lids-14.jpg",
    description: "Custom disposable cup with secure lid — suited for hot or cold drinks and takeaway service.",
    specs: [
      { label: "Sizes", value: "8oz – 24oz" },
      { label: "Type", value: "Hot Paper Cup / Cold PET Cup" },
      { label: "Lid", value: "Sip Lid / Dome Lid" },
      { label: "Custom Print", value: "Available" },
    ],
  },

  {
    id: "cup-lid-15",
    categoryId: "paper-cups",
    name: "Disposable Cup & Lid – Style 15",
    image: "/images/products/cups-lids-15.jpg",
    description: "Custom disposable cup with secure lid — suited for hot or cold drinks and takeaway service.",
    specs: [
      { label: "Sizes", value: "8oz – 24oz" },
      { label: "Type", value: "Hot Paper Cup / Cold PET Cup" },
      { label: "Lid", value: "Sip Lid / Dome Lid" },
      { label: "Custom Print", value: "Available" },
    ],
  },

  {
    id: "cup-lid-16",
    categoryId: "paper-cups",
    name: "Disposable Cup & Lid – Style 16",
    image: "/images/products/cups-lids-16.jpg",
    description: "Custom disposable cup with secure lid — suited for hot or cold drinks and takeaway service.",
    specs: [
      { label: "Sizes", value: "8oz – 24oz" },
      { label: "Type", value: "Hot Paper Cup / Cold PET Cup" },
      { label: "Lid", value: "Sip Lid / Dome Lid" },
      { label: "Custom Print", value: "Available" },
    ],
  },

  {
    id: "cup-lid-17",
    categoryId: "paper-cups",
    name: "Disposable Cup & Lid – Style 17",
    image: "/images/products/cups-lids-17.jpg",
    description: "Custom disposable cup with secure lid — suited for hot or cold drinks and takeaway service.",
    specs: [
      { label: "Sizes", value: "8oz – 24oz" },
      { label: "Type", value: "Hot Paper Cup / Cold PET Cup" },
      { label: "Lid", value: "Sip Lid / Dome Lid" },
      { label: "Custom Print", value: "Available" },
    ],
  },

  {
    id: "cup-lid-18",
    categoryId: "paper-cups",
    name: "Disposable Cup & Lid – Style 18",
    image: "/images/products/cups-lids-18.jpg",
    description: "Custom disposable cup with secure lid — suited for hot or cold drinks and takeaway service.",
    specs: [
      { label: "Sizes", value: "8oz – 24oz" },
      { label: "Type", value: "Hot Paper Cup / Cold PET Cup" },
      { label: "Lid", value: "Sip Lid / Dome Lid" },
      { label: "Custom Print", value: "Available" },
    ],
  },

  {
    id: "cup-lid-19",
    categoryId: "paper-cups",
    name: "Disposable Cup & Lid – Style 19",
    image: "/images/products/cups-lids-19.jpg",
    description: "Custom disposable cup with secure lid — suited for hot or cold drinks and takeaway service.",
    specs: [
      { label: "Sizes", value: "8oz – 24oz" },
      { label: "Type", value: "Hot Paper Cup / Cold PET Cup" },
      { label: "Lid", value: "Sip Lid / Dome Lid" },
      { label: "Custom Print", value: "Available" },
    ],
  },

  {
    id: "cup-lid-20",
    categoryId: "paper-cups",
    name: "Disposable Cup & Lid – Style 20",
    image: "/images/products/cups-lids-20.jpg",
    description: "Custom disposable cup with secure lid — suited for hot or cold drinks and takeaway service.",
    specs: [
      { label: "Sizes", value: "8oz – 24oz" },
      { label: "Type", value: "Hot Paper Cup / Cold PET Cup" },
      { label: "Lid", value: "Sip Lid / Dome Lid" },
      { label: "Custom Print", value: "Available" },
    ],
  },
];
