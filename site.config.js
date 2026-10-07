/* ==========================================================================
   ONE FILE TO RULE THEM ALL.
   Change the values below and the whole page updates. Nothing else to touch.
   ========================================================================== */

window.SITE = {
  /* ---------- 1. YOUR BRAND ---------- */
  brand: "Whitelisted",
  handle: "@imwhitelisted",
  tagline: "Better than any coupon.",
  logoMark: "$0",

  /* ---------- 2. WHAT MEMBERS CALL THEMSELVES ---------- */
  // This is the badge. People should be able to say "I'm ___" out loud.
  memberNoun: "Whitelisted",
  memberPhrase: "I'm Whitelisted.",
  hashtag: "#imwhitelisted",

  /* ---------- 3. PRICE ---------- */
  priceNow: "$29.99",
  priceWas: "$99",
  saveTag: "SAVE 70% TODAY",

  /* ---------- 4. LINKS ---------- */
  checkoutUrl: "#buy",
  videoUrl: "",          // paste a YouTube/Vimeo URL or a direct .mp4 link

  /* ---------- 5. COUNTDOWN — leave null unless the deadline is real ---------- */
  countdownTo: null,

  /* ---------- 6. THE BIG-TICKET WALL (your strongest proof) ---------- */
  // Swap in what you ACTUALLY received, with real retail prices.
  // These are the items that make someone pull out a card.
  bigTicket: [
    { item: "Queen Mattress",       was: 399, note: "still sleeping on it" },
    { item: "E-Bike",               was: 499, note: "26\" · 20mph" },
    { item: "Wine Fridge",          was: 499, note: "18 bottle" },
    { item: "Podcast Setup",        was: 349, note: "mixer + mic + boom" },
    { item: "30mph RC Car",         was: 129, note: "brushless" },
    { item: "Smart Watch",          was: 199, note: "still in the box" }
  ],

  /* ---------- 7. THE DROP SLOT MACHINE ---------- */
  // Everything you've gotten, big and small. Real items only.
  drops: [
    { item: "Queen Mattress",       was: 399 },
    { item: "E-Bike",               was: 499 },
    { item: "Wine Fridge",          was: 499 },
    { item: "Podcast Setup",        was: 349 },
    { item: "Smart Watch",          was: 199 },
    { item: "30mph RC Car",         was: 129 },
    { item: "Espresso Machine",     was: 499 },
    { item: "Robot Vacuum",         was: 279 },
    { item: "Lingerie Set",         was: 89  },
    { item: "Running Shoes",        was: 119 },
    { item: "Air Fryer",            was: 149 },
    { item: "Standing Desk",        was: 289 },
    { item: "Bluetooth Speaker",    was: 129 },
    { item: "Winter Jacket",        was: 159 },
    { item: "Noise-Cancel Headphones", was: 349 }
  ],

  /* ---------- 8. RECEIPT (the hero visual) ---------- */
  receiptStore: "ORDER SUMMARY",
  receiptItems: [
    { name: "QUEEN MATTRESS",  was: 399 },
    { name: "SMART WATCH",     was: 199 },
    { name: "PODCAST MIC KIT", was: 349 }
  ],

  /* ---------- 9. LIVE TICKER ---------- */
  // Only use claims you can back up with a screenshot.
  ticker: [
    "Dana R. got approved in 9 days — first pick: queen mattress, $0.00",
    "Marcus T. pulled a $499 e-bike — paid $0.00",
    "Priya S. got a $499 wine fridge — paid $0.00",
    "Jenna K. got a full podcast setup — paid $0.00",
    "Ray D. got a $199 smart watch — paid $0.00",
    "Tom H. got a 30mph RC car — paid $0.00"
  ],

  /* ---------- 10. STATS ---------- */
  stats: [
    { n: 499, prefix: "$", suffix: "", label: "the most expensive\nsingle item I've gotten", color: "acid" },
    { n: 6, prefix: "", suffix: "", label: "big-ticket items in\nthe last 90 days", color: "mint" },
    { n: 0, prefix: "$", suffix: "", label: "what I paid, every\nsingle time", color: "fire" }
  ]
};
