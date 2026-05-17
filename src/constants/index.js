export const WHATSAPP_NUMBER = "923001234567"
export const BRAND_NAME = "Luxe"
export const CATEGORIES = ["Watches", "Perfumes", "Wallets"]

export const CATEGORY_ICONS = {
  Watches: `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" viewBox="0 0 24 24"><circle cx="12" cy="12" r="7"/><path d="M12 9v3l2 2M8.5 2.5l1 3M15.5 2.5l-1 3M8.5 21.5l1-3M15.5 21.5l-1-3"/></svg>`,
  Perfumes: `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" viewBox="0 0 24 24"><path d="M9 3h6v3H9zM7 6h10l1 14H6L7 6z"/><path d="M12 3V1M10 1h4"/></svg>`,
  Wallets: `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" viewBox="0 0 24 24"><rect x="2" y="7" width="20" height="14" rx="2"/><path d="M16 14a1 1 0 1 0 2 0 1 1 0 0 0-2 0zM2 10h20M6 7V5a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v2"/></svg>`,
}

export const INITIAL_PRODUCTS = [
  {
    id: "w1",
    category: "Watches",
    name: "Chrono Noir I",
    price: 2450,
    shortDesc: "Automatic movement, sapphire crystal, 42mm titanium case.",
    desc: "The Chrono Noir I embodies timeless restraint. Crafted from aerospace-grade titanium and fitted with a Swiss automatic movement, every detail speaks to obsessive precision. The anti-reflective sapphire crystal lens reveals a midnight-black dial with luminous indices that glow softly in the dark.",
    features: [
      "Swiss ETA 2824 automatic movement",
      "Sapphire crystal glass, AR-coated",
      "42mm brushed titanium case",
      "5ATM water resistance",
      "72hr power reserve",
    ],
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTXCILmCsQYJC5RKpFy7hPyu7_fRMYTvj79RQ&s",
    badge: "Bestseller",
  },
  {
    id: "w2",
    category: "Watches",
    name: "Solaris Perpetual",
    price: 4100,
    shortDesc: "18K rose-gold case, perpetual calendar, diamond markers.",
    desc: "A sun-kissed masterpiece in 18K rose gold. The Solaris Perpetual features a perpetual calendar complication accurate until 2100, hand-applied diamond hour markers, and a salmon-coloured guilloché dial that catches light with every turn of the wrist.",
    features: [
      "18K rose gold case & bracelet",
      "Perpetual calendar complication",
      "Hand-applied diamond hour markers",
      "Salmon guilloché dial",
      "COSC-certified chronometer",
    ],
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRqSAw4t5eXc9yyBv_07KEo4Gkf6mXV52W9ww&s",
    badge: "Limited",
  },
  {
    id: "w3",
    category: "Watches",
    name: "Alpine Field",
    price: 890,
    shortDesc: "Minimalist field watch, 38mm steel, Milanese strap.",
    desc: "Stripped of everything superfluous. The Alpine Field distills watchmaking to its purest form: a clean white dial, cathedral hands, and a finely woven Milanese mesh bracelet that sits flat against the wrist with exceptional comfort.",
    features: [
      "Japanese NH35A automatic",
      "38mm polished 316L steel",
      "Milanese mesh bracelet",
      "Domed mineral crystal",
      "3ATM splash resistance",
    ],
    image:
      "https://images.unsplash.com/photo-1587836374828-4dbafa94cf0e?w=600&q=80",
    badge: null,
  },
  {
    id: "p1",
    category: "Perfumes",
    name: "Velvet Oud",
    price: 320,
    shortDesc: "Dark oriental, oud wood, amber & leather base notes.",
    desc: "Velvet Oud is an immersive journey into the ancient perfume trade routes of the Middle East. Opening with a burst of saffron and cardamom, the heart reveals precious Cambodian oud wood before settling into a warm embrace of amber, leather, and vetiver. Long-lasting, complex, unforgettable.",
    features: [
      "100ml Eau de Parfum",
      "Concentration: 20% aromatic compounds",
      "Top: Saffron, Cardamom",
      "Heart: Cambodian Oud, Rose",
      "Base: Amber, Leather, Vetiver",
    ],
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQIIl4TZh_DHlyg5ZciUy4vyguMs1DVwlUssA&s",
    badge: "Bestseller",
  },
  {
    id: "p2",
    category: "Perfumes",
    name: "Blanc de Soie",
    price: 195,
    shortDesc: "Sheer white floral, iris, white musk & sandalwood.",
    desc: "A whisper of white silk draped over warm skin. Blanc de Soie opens with dewy iris and white peony before softening into a signature trail of white musk and creamy sandalwood. Feminine, sophisticated, effortlessly modern.",
    features: [
      "75ml Eau de Parfum",
      "Concentration: 18%",
      "Top: White Peony, Bergamot",
      "Heart: Iris, Magnolia",
      "Base: White Musk, Sandalwood",
    ],
    image:
      "https://images.unsplash.com/photo-1592945403244-b3fbafd7f539?w=600&q=80",
    badge: "New",
  },
  {
    id: "p3",
    category: "Perfumes",
    name: "Midnight Tobacco",
    price: 275,
    shortDesc: "Smoky, rich tobacco accord with vanilla and oud.",
    desc: "For those who inhabit the late hours. Midnight Tobacco opens with sharp black pepper before revealing a smouldering heart of cured tobacco leaf and oud. The dry-down lingers with bourbon vanilla and dark patchouli — a scent that leaves rooms remembering you.",
    features: [
      "100ml Eau de Parfum",
      "Concentration: 22%",
      "Top: Black Pepper, Bergamot",
      "Heart: Tobacco, Oud",
      "Base: Bourbon Vanilla, Patchouli",
    ],
    image:
      "https://images.unsplash.com/photo-1585386959984-a4155224a1ad?w=600&q=80",
    badge: null,
  },
  {
    id: "wl1",
    category: "Wallets",
    name: "Obsidian Bifold",
    price: 285,
    shortDesc: "Full-grain Buttero leather, 8 card slots, RFID-shielded.",
    desc: "Constructed from Badalassi Carlo Buttero — the finest vegetable-tanned leather from Tuscany. The Obsidian Bifold develops a rich patina unique to the owner over time. Eight card slots, two cash compartments, and RFID shielding ensure function matches form.",
    features: [
      "Badalassi Carlo Buttero leather",
      "8 card slots, 2 cash sections",
      "RFID & NFC shielding",
      "Stitched with waxed linen thread",
      "Slim 8mm profile when loaded",
    ],
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQLZGRUtjf3Q6MYcvstB49slDvaHuVWkeTb4Q&s",
    badge: "Bestseller",
  },
  {
    id: "wl2",
    category: "Wallets",
    name: "Carbon Cardholder",
    price: 149,
    shortDesc: "Carbon fibre shell, titanium money clip, 6 card slots.",
    desc: "When every gram matters. The Carbon Cardholder pairs a lightweight carbon fibre shell with a precision-machined titanium money clip. Six card slots with thumb-notch access and an ultra-slim 6mm profile make this the go-to for the discerning minimalist.",
    features: [
      "Real woven carbon fibre shell",
      "Titanium alloy money clip",
      "6 card slots with thumb notch",
      "6mm slim profile",
      "Weighs only 28 grams",
    ],
    image:
      "https://images.unsplash.com/photo-1563013544-824ae1b704d3?w=600&q=80",
    badge: "New",
  },
  {
    id: "b1",
    category: "Bags",
    name: "Noir Weekender",
    price: 890,
    shortDesc: "Waxed canvas & full-grain leather, 40L capacity.",
    desc: "The bag for those who travel with intention. Our Noir Weekender pairs rugged waxed canvas with full-grain vegetable-tanned leather trims. A separate shoe compartment, padded laptop sleeve, and solid brass hardware complete this essential travel companion.",
    features: [
      "Waxed canvas body, leather trim",
      "Solid YKK brass zippers",
      'Padded 15" laptop sleeve',
      "Separate shoe compartment",
      "40L capacity, carry-on compliant",
    ],
    image:
      "https://images.unsplash.com/photo-1548036328-c9fa89d128fa?w=600&q=80",
    badge: "Bestseller",
  },
  {
    id: "b2",
    category: "Bags",
    name: "Studio Tote",
    price: 420,
    shortDesc: "Pebbled leather, open-top tote, brass rivets.",
    desc: 'From boardroom to gallery opening. The Studio Tote is crafted from Argentine pebbled leather with hand-set brass rivets at every stress point. Generously proportioned to carry a 13" laptop, documents, and everything else a full day demands.',
    features: [
      "Argentine pebbled leather",
      "Hand-set solid brass rivets",
      'Internal laptop sleeve (13")',
      "Suede lining",
      "Magnetic snap closure",
    ],
    image:
      "https://images.unsplash.com/photo-1590874103328-eac38a683ce7?w=600&q=80",
    badge: null,
  },
]
