/* ==========================================================================
   ONE FILE TO RULE THEM ALL.
   Change the values below and the whole page updates. Nothing else to touch.
   ========================================================================== */

window.SITE = {
  /* ---------- 1. YOUR BRAND ---------- */
  brand: "The Walmart Glitch",
  handle: "@walmartglitch",
  tagline: "Your lifetime pass to free products.",
  logoMark: "$0",

  /* ---------- 2. THE AI ASSISTANT (your free gift) ---------- */
  aiName: "Arena AI",
  aiGift: "FREE: 1 year of unlimited AI access (no caps, no limits)",
  aiPrompt: 'Take this review and turn it into a 700-character review for Walmart. Make the title and first two sentences hilarious and engaging, but keep the rest helpful.',

  /* ---------- 3. PRICE ---------- */
  priceNow: "$29.99",
  priceWas: "$99",
  saveTag: "SAVE 70% TODAY",

  /* ---------- 4. LINKS ---------- */
  checkoutUrl: "#buy",
  videoUrl: "",          // paste a YouTube/Vimeo URL or a direct .mp4 link
  communityUrl: "#community",  // Discord / private subreddit

  /* ---------- 5. COUNTDOWN — leave null unless the deadline is real ---------- */
  countdownTo: null,

  /* ---------- 6. THE BIG-TICKET WALL ---------- */
  bigTicket: [
    { item: "$200 Memory Foam Mattress", was: 200, note: "Still sleeping on it" },
    { item: "55" 4K Smart TV", was: 349, note: "Perfect for movie nights" },
    { item: "Ninja Air Fryer", was: 149, note: "Cooks everything" },
    { item: "Dyson Vacuum", was: 399, note: "Like new" },
    { item: "KitchenAid Stand Mixer", was: 279, note: "Bakes like a pro" },
    { item: "iPad Air", was: 549, note: "Latest model" }
  ],

  /* ---------- 7. THE DROP SLOT MACHINE ---------- */
  drops: [
    { item: "$200 Memory Foam Mattress", was: 200 },
    { item: "55" 4K Smart TV", was: 349 },
    { item: "Ninja Air Fryer", was: 149 },
    { item: "Dyson Vacuum", was: 399 },
    { item: "KitchenAid Stand Mixer", was: 279 },
    { item: "iPad Air", was: 549 },
    { item: "Instant Pot", was: 89 },
    { item: "Robot Vacuum", was: 279 },
    { item: "Espresso Machine", was: 499 },
    { item: "Gaming Headset", was: 159 },
    { item: "Bluetooth Speaker", was: 129 },
    { item: "Winter Jacket", was: 159 },
    { item: "Smart Watch", was: 199 },
    { item: "Running Shoes", was: 119 }
  ],

  /* ---------- 8. RECEIPT (the hero visual) ---------- */
  receiptStore: "Walmart.com",
  receiptItems: [
    { name: "MEMORY FOAM MATTRESS", was: 200 },
    { name: "4K SMART TV", was: 349 },
    { name: "NINJA AIR FRYER", was: 149 }
  ],

  /* ---------- 9. LIVE TICKER ---------- */
  ticker: [
    "Sarah J. just got approved — first claim: $200 mattress for $0.00",
    "Marcus T. claimed a $349 4K TV — paid $0.00",
    "Priya S. pulled a $399 Dyson vacuum — paid $0.00",
    "Jenna K. got a $549 iPad Air — paid $0.00",
    "Ray D. claimed a $279 KitchenAid mixer — paid $0.00",
    "Tom H. got a $149 Ninja Air Fryer — paid $0.00"
  ],

  /* ---------- 10. STATS ---------- */
  stats: [
    { n: 10000, prefix: "$", suffix: "+", label: "worth of free\nmerchandise I've received", color: "acid" },
    { n: 150, prefix: "", suffix: "+ items", label: "delivered to my\ndoor for $0.00", color: "mint" },
    { n: 0, prefix: "$", suffix: "", label: "what I paid for\neverything", color: "fire" }
  ]
};
