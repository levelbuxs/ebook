# The Walmart Glitch — Sales Page Kit

A complete, ready-to-fill landing page for your **Walmart reviewer program guide**.
Everything is placeholder copy; you swap in your real numbers, photos, and video.

---

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
| `playbook.html` | **Identity lab** (18 name options), section starters, ad copy, component cheat sheet. |
| `site.config.js` | **Your only file to edit for the basics** — brand, price, links, proof items, AI settings. |
| `styles.css` | Design system. Change the 3 accent colors at the top to re-skin everything. |
| `script.js` | Slot machine, receipt, proof grid, edit mode, export. Rarely needs touching. |
| `COPY-BANK.md` | All the section starter + ad copy in plain markdown, for easy pasting. |

---

## Your unique angle: The AI Assistant

The key differentiator in your offer is **free AI access**. Most "free stuff" guides are just
repackaged information. Yours includes:

- **1 year of unlimited AI access** (no caps, no limits)
- **The exact prompt** you use to generate perfect reviews
- **Automation of 90% of the work**

This is what makes your $29.99 guide feel like a no-brainer — they're getting a $200+ tool
for free.

---

## Fill it in — 15 minutes

### 1. Pick the identity
Open `playbook.html#names`. **My recommendation: The Walmart Glitch / @walmartglitch**.

- Direct, searchable, frames it as a discovery
- People are already searching "Walmart glitch"
- Puts you at the top of those searches
- Check the handle is free on TikTok + Instagram before you commit

Click any card to shortlist it; it copies the whole set to your clipboard.

### 2. Set your brand and AI in config
In `site.config.js`:

```js
// Brand
brand:        "The Walmart Glitch",
handle:       "@walmartglitch",
tagline:     "Your lifetime pass to free products.",
logoMark:    "$0",

// AI Assistant (your free gift)
aiName:       "Arena AI",
aiGift:       "FREE: 1 year of unlimited AI access (no caps, no limits)",
aiPrompt:     "Take this review and turn it into a 700-character review...",

// Price
priceNow:     "$29.99",
priceWas:     "$99",
checkoutUrl:  "https://your-checkout-link",
```

The name, page title, nav, footer, exported filename all update automatically.

### 3. Turn on Edit mode
On the landing page, press **E** (or click *Edit mode*, top right).

- **Amber dashed boxes** appear with instructions — "say this here," "photo proof goes here."
- **Blue dashed outlines** mark every piece of text — click and retype in place.
- **Click any proof tile** (hero receipt, big-ticket wall, or photo grid) to drop in your image.
- **Click the video frame** to drop in your clip.
- Press **E** again and it all vanishes — that's the real page.

### 4. Replace the placeholders

**Hero:**
- Your biggest, most impressive total ($10,000+)
- Mention the AI assistant as your secret weapon

**Receipt:**
- Screenshot your real Walmart order summary showing multiple items with `$0.00` total
- Blur the order number, keep "Walmart.com" visible

**Big-ticket wall:**
- Your 6 most visually impressive items (TV, mattress, iPad, etc.)
- Shoot each one in your home, with your `@handle` in the corner of the frame

**Slot machine:**
- Replace the list in `site.config.js → drops` with real items you've received

**Photo proof (9 slots):**
1. Order screen showing a big-ticket item with `$0.00`
2. That item's real retail price on Walmart.com
3. Delivery confirmation / tracking, dated
4. The item physically in your home, out of the box
5. Your `@handle` visible in frame on a real screen
6. Several big items side by side
7. A date-stamped recent one
8. Shipping label / box, address blurred
9. The "Congratulations" email (censor personal details)

**Video proof:**
- Uncut: say date + handle, scroll the list slowly, claim one, show $0.00 confirmation, cut to item in your house
- Or paste a YouTube/`.mp4` URL into `site.config.js → videoUrl`

**TOC:**
- Your real chapter names, written as outcomes
- Include the AI assistant chapter (Chapter 4)
- Include the community chapter (Chapter 8)

**FAQ:**
- Real questions you've been asked
- "Is this legal?" goes first and starts **open**
- "Do I need to spend money first?" — answer honestly (yes, for new accounts, but they're already spending it)

### 5. Export
Click **⬇ Export finished page**. You get a single standalone `.html` file with the editor
scaffolding stripped out and the CSS/JS inlined. Upload it anywhere.

---

## The method (for your guide)

Your guide should cover these **8 chapters**:

### Chapter 1: The Golden Ticket (Introduction)
- Your story: "Three months ago, I was sleeping on an air mattress..."
- Showcase the proof upfront (censored screenshot of $0.00 purchase history)
- Explain it's a legitimate program, not a glitch or exploit
- **Image:** High-quality photo of you with expensive items, holding a whiteboard with your handle

### Chapter 2: Your Setup for Success (Requirements)
- **The Three Paths:**
  1. **The Veteran (Easiest):** Aged account (12+ months) with review history — 80% there already
  2. **The Newcomer (Standard):** New account — 2-3 months of consistency
  3. **The Pro (Optional):** Walmart+ member — boosts early progress
- **Your Toolkit:** Walmart account, smartphone with camera, internet connection
- **Secret Weapon:** Tease the AI assistant (revealed in Chapter 4)

### Chapter 3: The Glitch Engine — Becoming a Power User
- **The Mission:** Generate specific activity flags in Walmart's system
- **Phase 1: The Micro-Purchase Strategy**
  - "If you eat, you can do this for free"
  - Shift regular grocery/household shopping to Walmart.com
  - Create many small orders with lots of individual items
  - Aim for $35 free shipping threshold if no Walmart+
  - "For new accounts, your goal for the first 2 months: place as many orders as you can and review every single item"
- **Phase 2: The Perfect Review**
  1. **The Photo Rule (Non-Negotiable):** 3-5 clear, original photos per item
  2. **The Character Count:** 500-1,250 characters (short reviews ignored)
  3. **The Humor Hack:** Funny title + hilarious first two sentences = more thumbs up
- **Image:** Screenshot of a review you've written, highlighting the funny title, character count, and multiple photos

### Chapter 4: Your Secret Weapon — The AI Assistant
- **The Big Reveal:** "How can you possibly write 100 detailed, funny, 1000-character reviews? You don't. You let an AI do it for you."
- **Your FREE GIFT:** 1 year of unlimited AI access (no caps, no limits)
- **The AI Workflow:**
  1. Go to [AI Platform]
  2. Write two simple lines about your item
  3. Use the provided prompt
  4. AI generates perfect review instantly
  5. Copy, paste, add photos, submit
  6. "You've just done 30 minutes of work in 30 seconds."
- **Image:** Graphic: "SECRET GIFT INSIDE: UNLIMITED AI USAGE" with AI logo

### Chapter 5: The Final Push & The Payoff
- **The Numbers That Matter:**
  - 100+ Approved Reviews
  - 250,000+ Total Views on your reviews
  - 25-75+ Thumbs Up across all your reviews
- **Applying for Activation:**
  - Once you're close to the numbers, signal the system
  - Use the direct application link (provided in guide)
- **The Waiting Game:**
  - New accounts: ~7 days after applying
  - Aged accounts: Even faster
  - **Image:** Screenshot of the application page
  - **Image:** The "Congratulations" email (censored)

### Chapter 6: Staying In The Program
- How to maintain your access
- What to do when you get free items (review them too!)
- Mistakes that get people removed

### Chapter 7: Rejection Reasons & Fixes
- Why applications get rejected
- How to fix each one
- What to do if you hear nothing back

### Chapter 8: The Inner Circle — Private Community
- Exclusive invite to private Discord/Subreddit
- Stay updated on program changes
- Share your wins
- Gold mine of member tips
- **Your invite code:** [Create a unique code system, e.g., WALMARTGLITCH-XXXX]

---

## The attention-keeping bits

1. **The receipt** (hero) — animates in like it's printing. Instantly communicates the whole concept.
2. **The big-ticket wall** — six big, beautiful photos of items worth $200-$500. That's what stops the scroll.
3. **The drop slot machine** — visitors poke things before they read things. This gets them interacting in the first 5 seconds.
4. **Animated stat band** — numbers count up as they scroll into view ($10,000+, 150+ items, $0 spent).
5. **Sticky bottom CTA** — the buy button is never off-screen.

---

## Words to avoid (they sound scammy)

| Avoid | Use Instead |
|---|---|
| glitch (as a negative) | reviewer program |
| hack | method |
| exploit | system |
| loophole | program |
| scam | legitimate |
| free stuff | free products / free merchandise |
| trick | strategy |

---

## One honest note

Every number on this page is a placeholder. **Don't ship a claim you can't back with a screenshot** —
one fake receipt found in your comments is worse than having no proof at all. That also means:

- No countdown timer (it ships off by default)
- Keep the "skip this if" column — it's what keeps refunds near zero
- Keep the guarantee tied to a specific outcome ("not approved in 30 days")
- The AI access is your strongest selling point — **lead with it**

---

## The community

Your private community (Discord/Subreddit) is your **retention tool**. It turns one-time buyers
into long-term members who will:

- Defend you in comments
- Share their wins (social proof)
- Report program changes
- Generate word-of-mouth referrals

**Invite code system:** Create unique codes (e.g., WALMARTGLITCH-ABCD) that you include in
each guide. This lets you track where buyers came from and prevents code sharing.

---

## Support

Need help? The playbook has everything. For technical issues with the page itself, check:

- Are you running it through a server? (not double-clicking the file)
- Did you update `site.config.js` with your real info?
- Are your images in the right format? (JPG/PNG, not HEIC)

Everything is committed to `arena/de7fb0e1-ebook`. The preview server is running at
`http://localhost:8000` — open `index.html` to see it live, press `E` to start editing.
