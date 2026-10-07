/* ==========================================================================
   ZeroDrop page engine
   - injects config, builds the receipt / slot machine / stats / proof grid
   - click-to-edit text, click-to-drop photos + video
   - exports a clean, finished index.html with all editor scaffolding removed
   ========================================================================== */

(function () {
  "use strict";

  var S = window.SITE || {};
  var $ = function (s, r) { return (r || document).querySelector(s); };
  var $$ = function (s, r) { return Array.prototype.slice.call((r || document).querySelectorAll(s)); };
  var money = function (n) { return "$" + Number(n).toLocaleString("en-US"); };

  /* ==================================================== 1. BRAND INJECTION */
  function applyBrand() {
    if (S.brand) {
      document.title = S.brand + " — " + (S.tagline || "") + " $0 for items up to $699.";
      setText("#brandNav", S.brand);
      setText("#brandFoot", S.brand);
      setText("#brandCopy", S.brand);
    }
    if (S.logoMark) {
      setText("#logoMark", S.logoMark);
      setText("#logoMark2", S.logoMark);
    }
    if (S.handle) setText("#handleFoot", S.handle);
  }
  function setText(sel, txt) { var e = $(sel); if (e) e.textContent = txt; }

  /* ========================================================== 2. TICKER */
  function buildTicker() {
    var m = $("#marq");
    if (!m || !S.ticker || !S.ticker.length) return;
    var once = S.ticker.map(function (t) { return "<span>" + t + "</span>"; }).join("");
    m.innerHTML = once + once; // duplicated for a seamless loop
  }

  /* ========================================================= 3. RECEIPT */
  function buildReceipt() {
    var box = $("#receiptLines");
    if (!box) return;
    var items = S.receiptItems || [];
    box.innerHTML = items.map(function (i) {
      return '<div class="rline"><span class="ed">' + i.name +
             '</span><span class="strike">' + money(i.was) + "</span></div>";
    }).join("") +
    '<div class="rline"><span class="ed">DISCOUNT APPLIED</span><span class="ed">-' +
    money(items.reduce(function (a, b) { return a + b.was; }, 0)) + "</span></div>" +
    '<div class="rline"><span class="ed">YOU PAY</span><span class="ed">$0.00</span></div>';

    var h = $("#receipt .receipt-head b");
    if (h && S.receiptStore) h.textContent = S.receiptStore;
  }

  /* ==================================================== 4. DROP SLOT MACHINE */
  function initSlot() {
    var btn = $("#slotBtn"), item = $("#slotItem"), was = $("#slotWas");
    if (!btn || !item || !was || !S.drops || !S.drops.length) return;

    var rolling = false;
    btn.addEventListener("click", function () {
      if (rolling) return;
      rolling = true;
      item.classList.add("rolling");
      btn.style.opacity = ".6";
      var ticks = 22, i = 0;
      var iv = setInterval(function () {
        var d = S.drops[Math.floor(Math.random() * S.drops.length)];
        item.textContent = d.item;
        was.textContent = money(d.was);
        if (++i >= ticks) {
          clearInterval(iv);
          item.classList.remove("rolling");
          btn.style.opacity = "1";
          rolling = false;
          if (item.animate) {
            item.animate(
              [{ transform: "scale(1)" }, { transform: "scale(1.06)" }, { transform: "scale(1)" }],
              { duration: 420, easing: "ease-out" }
            );
          }
        }
      }, 65);
    });
  }

  /* ==================================================== 5. ANIMATED STATS */
  function buildStats() {
    var band = $("#statBand");
    if (!band || !S.stats) return;
    band.innerHTML = S.stats.map(function (s) {
      return '<div class="callout co-stat" style="margin:0">' +
        '<span class="n ' + (s.color || "acid") + '" data-count="' + s.n + '">0</span>' +
        '<span class="muted" style="font-size:.88rem">' +
        (s.label || "").replace(/\n/g, "<br>") + "</span></div>";
    }).join("");

    // count up when scrolled into view
    var nums = $$("#statBand .n");
    var done = false;
    function run() {
      if (done) return;
      done = true;
      nums.forEach(function (el) {
        var target = parseFloat(el.getAttribute("data-count"));
        var cfg = S.stats[nums.indexOf(el)] || {};
        var start = performance.now(), dur = 1100;
        function tick(now) {
          var p = Math.min((now - start) / dur, 1);
          var eased = 1 - Math.pow(1 - p, 3);
          var v = Math.round(target * eased);
          el.textContent = (cfg.prefix || "") + v + (cfg.suffix || "");
          if (p < 1) requestAnimationFrame(tick);
        }
        requestAnimationFrame(tick);
      });
    }
    if ("IntersectionObserver" in window) {
      var io = new IntersectionObserver(function (e) {
        if (e[0].isIntersecting) { run(); io.disconnect(); }
      }, { threshold: 0.35 });
      io.observe(band);
    } else { run(); }
  }

  /* ================================================== 6. BIG-TICKET WALL */
  function buildWall() {
    var g = $("#wallGrid");
    if (!g || !S.bigTicket) return;
    g.innerHTML = S.bigTicket.map(function (b, i) {
      return '<div class="wall-item">' +
        '<span class="wall-badge">$0.00</span>' +
        '<div class="wall-photo" data-zone="wall" data-i="' + i + '">your photo</div>' +
        '<button class="x" title="Remove">✕</button>' +
        '<div class="wall-meta">' +
          '<div class="nm ed">' + b.item + "</div>" +
          '<div class="note ed">' + (b.note || "") + "</div>" +
          '<div class="wall-price"><span class="was">' + money(b.was) +
          '</span><span class="now">$0.00</span></div>' +
        "</div></div>";
    }).join("");
  }

  /* =========================================================== 7. BADGES */
  function buildBadges() {
    var chips = [];
    var noun = S.memberNoun || "Whitelisted";
    var n = (S.bigTicket || []).length;

    chips.push('say it out loud → <b>' + (S.memberPhrase || ("I'm " + noun + ".")) + "</b>");
    chips.push("<b>" + n + "</b> big-ticket items · <b>$0</b> spent");
    if (S.hashtag) chips.push("<b>" + S.hashtag + "</b>");
    chips.push('<span class="fire">free</span> — not discounted, not 90% off');

    var html = chips.map(function (c) {
      return '<span class="badge-chip">' + c + "</span>";
    }).join("");
    ["#badgeStrip", "#badgeStrip2"].forEach(function (sel) {
      var el = $(sel);
      if (el) el.innerHTML = html;
    });
  }

  /* ===================================================== 8. PHOTO PROOF GRID */
  var SHOT_CAPTIONS = [
    "Queen mattress — order total $0.00",
    "Retail on that mattress: $399",
    "Delivered, 11 days later",
    "The $499 e-bike, in my garage",
    "My @handle in frame — it's really me",
    "Date stamped. Still working.",
    "The wine fridge. $499.",
    "Shipping label, address blurred",
    "Everything from the last 90 days"
  ];

  function buildShots() {
    var g = $("#shotGrid");
    if (!g) return;
    g.innerHTML = SHOT_CAPTIONS.map(function (cap, i) {
      return '<div class="shot" data-zone="shot" data-i="' + i + '">' +
        '<div class="ph"><b>' + String(i + 1).padStart(2, "0") + "</b>your photo</div>" +
        '<div class="cap ed">' + cap + "</div>" +
        '<span class="tag">$0.00</span>' +
        '<button class="x" title="Remove">✕</button></div>';
    }).join("");

    // click any drop zone -> upload a photo (preview only)
    $$('[data-zone="shot"], [data-zone="wall"]').forEach(function (tile) {
      tile.addEventListener("click", function (e) {
        if (e.target.classList.contains("x")) {
          var im = tile.querySelector("img");
          if (im) im.remove();
          e.stopPropagation();
          return;
        }
        if (!document.body.classList.contains("editing")) return;
        var picker = $("#filePicker");
        picker.dataset.zone = tile.getAttribute("data-zone");
        picker.dataset.target = tile.getAttribute("data-i");
        picker.value = "";
        picker.click();
      });
    });

    $("#filePicker").addEventListener("change", function (e) {
      var f = e.target.files && e.target.files[0];
      if (!f) return;
      var zone = e.target.dataset.zone || "shot";
      var i = e.target.dataset.target;
      var tile = $('[data-zone="' + zone + '"][data-i="' + i + '"]');
      if (!tile) return;
      var fr = new FileReader();
      fr.onload = function (ev) {
        var img = tile.querySelector("img") || document.createElement("img");
        img.src = ev.target.result;
        if (!img.parentNode) tile.appendChild(img);
      };
      fr.readAsDataURL(f);
    });
  }

  /* ============================================================ 9. VIDEO */
  function initVideo() {
    var frame = $("#vidFrame"), play = $("#vidPlay");
    if (!frame || !play) return;

    function embed() {
      var url = (S.videoUrl || "").trim();
      if (!url) return;
      var html = "";
      if (/youtube\.com|youtu\.be/.test(url)) {
        var id = url.match(/(?:v=|\/|embed\/)([A-Za-z0-9_-]{11})/);
        if (id) html = '<iframe src="https://www.youtube.com/embed/' + id[1] +
          '?autoplay=1&rel=0" allow="autoplay; encrypted-media" allowfullscreen></iframe>';
      } else if (/vimeo\.com/.test(url)) {
        var v = url.match(/vimeo\.com\/(\d+)/);
        if (v) html = '<iframe src="https://player.vimeo.com/video/' + v[1] +
          '?autoplay=1" allow="autoplay" allowfullscreen></iframe>';
      } else {
        html = '<video src="' + url + '" controls autoplay playsinline></video>';
      }
      if (html) { frame.insertAdjacentHTML("beforeend", html); play.style.display = "none"; }
    }

    play.addEventListener("click", function () {
      if (document.body.classList.contains("editing") && !S.videoUrl) {
        $("#videoPicker").click();
        return;
      }
      embed();
    });

    $("#videoPicker").addEventListener("change", function (e) {
      var f = e.target.files && e.target.files[0];
      if (!f) return;
      var url = URL.createObjectURL(f);
      var v = document.createElement("video");
      v.src = url; v.controls = true; v.autoplay = true; v.playsInline = true;
      frame.appendChild(v);
      play.style.display = "none";
    });
  }

  /* ====================================================== 10. SCROLL + BAR */
  function initScroll() {
    var bar = $("#progress"), sticky = $("#stickybar");
    var heroBottom = 0;
    function measure() {
      var h = $(".hero");
      heroBottom = h ? h.offsetTop + h.offsetHeight : 600;
    }
    measure();
    window.addEventListener("resize", measure);

    var raf = null;
    window.addEventListener("scroll", function () {
      if (raf) return;
      raf = requestAnimationFrame(function () {
        raf = null;
        var y = window.scrollY || window.pageYOffset;
        var max = document.documentElement.scrollHeight - window.innerHeight;
        if (bar) bar.style.width = (max > 0 ? (y / max) * 100 : 0) + "%";
        if (sticky) sticky.classList.toggle("show", y > heroBottom);
      });
    }, { passive: true });
  }

  /* ======================================================= 11. COUNTDOWN */
  function initCountdown() {
    // Optional. Only renders if site.config.js -> countdownTo is set.
    // Leave it null unless the deadline is real.
  }

  /* ======================================================= 12. EDITOR MODE */
  function initEditor() {
    var body = document.body, btn = $("#btnEdit");

    function setMode(on) {
      body.classList.toggle("editing", on);
      $$(".ed").forEach(function (el) {
        el.setAttribute("contenteditable", on ? "true" : "false");
      });
      if (btn) btn.textContent = on ? "✎ Edit mode: ON" : "✎ Edit mode: OFF";
      if (btn) btn.style.borderColor = on ? "var(--acid)" : "";
    }

    if (btn) btn.addEventListener("click", function () {
      setMode(!body.classList.contains("editing"));
    });

    document.addEventListener("keydown", function (e) {
      if (e.key.toLowerCase() !== "e" || e.metaKey || e.ctrlKey || e.altKey) return;
      var t = e.target;
      if (t && (t.isContentEditable || /input|textarea|select/i.test(t.tagName))) return;
      setMode(!body.classList.contains("editing"));
    });

    // paste as plain text so pasted Word/Google formatting can't wreck the design
    document.addEventListener("paste", function (e) {
      if (!e.target.isContentEditable) return;
      e.preventDefault();
      var txt = (e.clipboardData || window.clipboardData).getData("text/plain");
      document.execCommand("insertText", false, txt);
    });

    setMode(false);

    var pb = $("#btnPlaybook");
    if (pb) pb.addEventListener("click", function () {
      window.location.href = "playbook.html";
    });
  }

  /* ========================================================== 13. EXPORT */
  function initExport() {
    var btn = $("#btnExport");
    if (!btn) return;

    btn.addEventListener("click", function () {
      var original = btn.textContent;
      btn.textContent = "⏳ building…";

      // make sure all three source files are cached before we inline them
      Promise.all([
        window.__CSS__    ? Promise.resolve(window.__CSS__)    : grab("styles.css"),
        window.__CONFIG__ ? Promise.resolve(window.__CONFIG__) : grab("site.config.js"),
        window.__APP__    ? Promise.resolve(window.__APP__)    : grab("script.js")
      ]).then(function (files) {
        var css = files[0], cfg = files[1], app = files[2];
        window.__CSS__ = css; window.__CONFIG__ = cfg; window.__APP__ = app;

        var clone = document.documentElement.cloneNode(true);
        var doc = clone.ownerDocument;

        // 1. strip every trace of the editor scaffolding
        Array.prototype.slice.call(clone.querySelectorAll("[data-editor-only]"))
          .forEach(function (n) { n.remove(); });
        Array.prototype.slice.call(clone.querySelectorAll("[contenteditable]"))
          .forEach(function (n) { n.removeAttribute("contenteditable"); });
        Array.prototype.slice.call(clone.querySelectorAll(".ed"))
          .forEach(function (n) { n.classList.remove("ed"); });

        // 2. inline the stylesheet so the file works from anywhere
        var link = Array.prototype.slice.call(clone.querySelectorAll("link"))
          .filter(function (l) { return (l.getAttribute("href") || "").indexOf("styles.css") > -1; })[0];
        if (link && css) {
          var style = doc.createElement("style");
          style.textContent = css;
          link.parentNode.replaceChild(style, link);
        }

        // 3. inline both scripts so the slot machine / receipt / grid still work
        Array.prototype.slice.call(clone.querySelectorAll("script")).forEach(function (n) {
          var src = n.getAttribute("src") || "";
          if (src.indexOf("site.config.js") > -1 && cfg) {
            var s1 = doc.createElement("script"); s1.textContent = cfg;
            n.parentNode.replaceChild(s1, n);
          } else if (src.indexOf("script.js") > -1 && app) {
            var s2 = doc.createElement("script"); s2.textContent = app;
            n.parentNode.replaceChild(s2, n);
          }
        });

        download(clone);
        btn.textContent = "✓ downloaded";
        setTimeout(function () { btn.textContent = original; }, 2200);
      }).catch(function () {
        btn.textContent = "✕ run it from a local server";
        setTimeout(function () { btn.textContent = original; }, 2600);
      });
    });

    function grab(url) {
      return fetch(url).then(function (r) {
        if (!r.ok) throw new Error(url);
        return r.text();
      });
    }

    function download(clone) {
      var html = "<!DOCTYPE html>\n" + clone.outerHTML;
      var blob = new Blob([html], { type: "text/html" });
      var a = document.createElement("a");
      a.href = URL.createObjectURL(blob);
      a.download = (S.brand || "ebook").toLowerCase().replace(/\s+/g, "-") + "-sales-page.html";
      document.body.appendChild(a);
      a.click();
      a.remove();
      setTimeout(function () { URL.revokeObjectURL(a.href); }, 4000);
    }
  }

  /* ============================================================= 14. BOOT */
  function boot() {
    var y = $("#year"); if (y) y.textContent = new Date().getFullYear();
    applyBrand();
    buildTicker();
    buildReceipt();
    initSlot();
    buildStats();
    buildWall();
    buildBadges();
    buildShots();
    initVideo();
    initScroll();
    initCountdown();
    initEditor();
    initExport();
  }

  // cache the three source files so "Export" can inline them into one standalone file
  ["styles.css|__CSS__", "site.config.js|__CONFIG__", "script.js|__APP__"]
    .forEach(function (pair) {
      var p = pair.split("|");
      fetch(p[0]).then(function (r) { return r.text(); })
        .then(function (t) { window[p[1]] = t; }).catch(function () {});
    });

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", boot);
  } else { boot(); }
})();
