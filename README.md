# Whitelisted — sales page kit

A complete, ready-to-fill landing page for the **"$500 e-bikes, queen mattresses, wine fridges —
all for $0.00"** guide. Everything is placeholder copy; you swap in your real numbers, photos,
and video.

## Preview

Start a local server and open it:

```bash
python3 -m http.server 8000
```

- **Landing page** → `http://localhost:8000/index.html`
- **Playbook** (names + copy bank) → `http://localhost:8000/playbook.html`

> Run it through a server, not by double-clicking the file — the export button needs to fetch
> the CSS/JS to inline them.

---

## What's in here

| File | What it is |
|---|---|
| `index.html` | The sales page. 12 sections, fully built. |
| `playbook.html` | **Identity lab** (18 name systems), section starters, ad copy, component cheat sheet. |
| `site.config.js` | **Your only file to edit for the basics** — brand, member noun, price, links, proof items. |
| `styles.css` | Design system. Change the 3 accent colors at the top to re-skin everything. |
| `script.js` | Slot machine, receipt, proof grid, edit mode, export. Rarely needs touching. |
| `COPY-BANK.md` | All the section starter + ad copy in plain markdown, for easy pasting. |

---

## Fill it in — 15 minutes

### 1. Pick the identity
Open `playbook.html#names`. **This is now an identity system, not just a brand name.**

- **Brand** = what you call it publicly (`Whitelisted`)
- **Member noun** = what members call themselves (`"I'm Whitelisted"`)
- **Handle** = your social handle (`@imwhitelisted`)
- **Hashtag** = the tag you want to trend (`#imwhitelisted`)

Click any card to shortlist it; it copies the whole set to your clipboard.

**My pick: Whitelisted / @imwhitelisted / "I'm Whitelisted" / #imwhitelisted**
- It means you got approved and let in.
- It sounds technical and a little exclusive.
- It reveals **nothing** about the retailer.

### 2. Set your brand and identity in config
In `site.config.js`:

```js
brand:        "Whitelisted",
memberNoun:   "Whitelisted",   // what they call themselves
memberPhrase: "I'm Whitelisted.",
hashtag:      "#imwhitelisted",
handle:       "@imwhitelisted",
priceNow:     "$29.99",
priceWas:     "$99",
checkoutUrl:  "https://your-checkout-link",
```

The name, page title, nav, footer, exported filename, and badge strip all update automatically.

### 3. Turn on Edit mode
On the landing page, press **E** (or click *Edit mode*, top right).

- **Amber dashed boxes** appear with instructions — "say this here," "photo proof goes here."
- **Blue dashed outlines** mark every piece of text — click and retype in place.
- **Click any proof tile** (hero receipt, big-ticket wall, or photo grid) to drop in your image.
- **Click the video frame** to drop in your clip.
- Press **E** again and it all vanishes — that's the real page.

### 4. Replace the placeholders
The boxes tell you what goes where, but the short version:

- **Hero** — your three biggest, most specific items + real dollar amounts.
- **Receipt** — screenshot a real order screen showing a big-ticket item with `$0.00` total.
  Blur your address, keep the item and the total.
- **Big-ticket wall** — your 6 most visually impressive items. Shoot each one in your home,
  with your `@handle` in the corner of the frame. That single detail kills the "stolen photo"
  objection.
- **Slot machine** — replace the list in `site.config.js → drops` with real items you received.
- **Photo proof** — 9 screenshots: order screens, retail prices, delivery confirmations,
  unboxings, your handle in frame, date-stamped ones.
- **Video proof** — one uncut take: say the date, scroll the list, claim one, show the $0.00
  confirmation, cut to the item in your house. Or paste a YouTube/`.mp4` URL into
  `site.config.js → videoUrl`.
- **Table of contents** — your real chapter names, written as outcomes, not topics.
- **FAQ** — real questions you've been asked. The "why won't you name the store" goes first
  and starts **open** — that's the hook.

### 5. Export
Click **⬇ Export finished page**. You get a single standalone `.html` file with the editor
scaffolding stripped out and the CSS/JS inlined. Upload it anywhere.

---

## The attention-keeping bits

1. **The receipt** (hero) — animates in like it's printing. Instantly communicates the whole
   concept without a word of copy.
2. **The big-ticket wall** — six big, beautiful photos of items worth $300-$500. That's what
   stops the scroll.
3. **The drop slot machine** — visitors poke things before they read things. This gets them
   interacting in the first 5 seconds.
4. **Animated stat band** — numbers count up as they scroll into view.
5. **Sticky bottom CTA + scroll progress bar** — the buy button is never off-screen.

---

## The identity system

You're not just selling a guide — you're starting a club. The member noun (`"I'm Whitelisted"`)
lets people self-identify. That single phrase does three jobs:

- **Creates community** — members defend you in the comments.
- **Protects the secret** — the name reveals nothing about the retailer.
- **Justifies the price** — "I'm paying to get in" feels different than "I'm paying for a PDF."

Words to **avoid** in your public copy: *sampler, tester, reviewer, panel, sample, box, review
club, freebie, VIP program.* Any one of those gives it away in one search.

---

## One honest note

Every number on this page is a placeholder. Don't ship a claim you can't back with a screenshot —
one fake receipt found in your comments is worse than having no proof at all. That also means:

- No countdown timer (it ships off by default)
- Keep the "skip this if" column — it's what keeps refunds near zero
- Keep the "why won't you name the store" answer open — it's your strongest hook
