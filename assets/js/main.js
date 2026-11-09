/* ============================================================
   PK Entertainment — Site scripts & shared layout
   ============================================================ */

(function () {
  "use strict";

  const $ = (sel, ctx = document) => ctx.querySelector(sel);
  const $$ = (sel, ctx = document) => Array.from(ctx.querySelectorAll(sel));

  const NAV = [
    { key: "home", label: "Home", href: "index.html" },
    { key: "theater", label: "Theater", href: "theater.html" },
    { key: "about", label: "About Us", href: "about.html" },
    { key: "contact", label: "Contact", href: "contact.html" },
  ];

  const PHONE_1 = "+91 90001 35543";
  const PHONE_1_LINK = "+919000135543";
  const EMAIL = "hello@pkentertainment.in";
  const ADDRESS =
    "48-3-55/1, Day & Night Hospital Road, Near Rama Talkies, Srinagar, VISAKHAPATNAM -530016";
  const WA = "https://wa.me/919000135543";

  /* ---------------- Icons ---------------- */
  const ICONS = {
    arrow: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round"><path d="M5 12h14M13 6l6 6-6 6"/></svg>',
    phone:
      '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"><path d="M22 16.9v3a2 2 0 0 1-2.2 2 19.8 19.8 0 0 1-8.6-3.1 19.5 19.5 0 0 1-6-6A19.8 19.8 0 0 1 2.1 4.2 2 2 0 0 1 4.1 2h3a2 2 0 0 1 2 1.7c.1 1 .4 2 .7 2.9a2 2 0 0 1-.5 2.1L8.1 9.9a16 16 0 0 0 6 6l1.2-1.2a2 2 0 0 1 2.1-.5c.9.3 1.9.6 2.9.7a2 2 0 0 1 1.7 2Z"/></svg>',
    mail: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"><rect x="2" y="4" width="20" height="16" rx="2"/><path d="m22 7-10 6L2 7"/></svg>',
    pin: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"><path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z"/><circle cx="12" cy="10" r="3"/></svg>',
    instagram:
      '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"><rect x="2" y="2" width="20" height="20" rx="5"/><circle cx="12" cy="12" r="4"/><circle cx="17.5" cy="6.5" r=".6" fill="currentColor"/></svg>',
    facebook:
      '<svg viewBox="0 0 24 24" fill="currentColor"><path d="M14 9h3V6h-3c-2.2 0-4 1.8-4 4v2H7v3h3v7h3v-7h3l1-3h-4v-2c0-.6.4-1 1-1Z"/></svg>',
    linkedin:
      '<svg viewBox="0 0 24 24" fill="currentColor"><path d="M6.9 8.5H3.7V21h3.2V8.5ZM5.3 3a1.9 1.9 0 1 0 0 3.8 1.9 1.9 0 0 0 0-3.8ZM20.3 13.8c0-3.5-1.9-5.1-4.4-5.1-2 0-2.9 1.1-3.4 1.9V8.5H9.3V21h3.2v-6.6c0-1.7.6-2.8 2.1-2.8 1.4 0 2.1 1 2.1 2.8V21h3.6v-7.2Z"/></svg>',
    youtube:
      '<svg viewBox="0 0 24 24" fill="currentColor"><path d="M23 12s0-3.6-.5-5.3a2.8 2.8 0 0 0-2-2C18.8 4.2 12 4.2 12 4.2s-6.8 0-8.5.5a2.8 2.8 0 0 0-2 2C1 8.4 1 12 1 12s0 3.6.5 5.3a2.8 2.8 0 0 0 2 2c1.7.5 8.5.5 8.5.5s6.8 0 8.5-.5a2.8 2.8 0 0 0 2-2C23 15.6 23 12 23 12ZM9.8 15.5v-7l6 3.5-6 3.5Z"/></svg>',
    whatsapp:
      '<svg viewBox="0 0 24 24" fill="currentColor"><path d="M17.5 14.4c-.3-.2-1.8-.9-2-1-.3-.1-.5-.2-.7.1-.2.3-.8 1-.9 1.2-.2.2-.3.2-.6.1-.3-.2-1.3-.5-2.4-1.5-.9-.8-1.5-1.8-1.7-2.1-.2-.3 0-.5.1-.6l.5-.5c.1-.2.2-.3.3-.5.1-.2 0-.4 0-.5 0-.2-.7-1.6-.9-2.2-.2-.6-.5-.5-.7-.5h-.6c-.2 0-.5.1-.8.4-.3.3-1 1-1 2.5s1.1 2.9 1.2 3.1c.2.2 2.1 3.2 5.1 4.5.7.3 1.3.5 1.7.6.7.2 1.4.2 1.9.1.6-.1 1.8-.7 2-1.4.3-.7.3-1.3.2-1.4-.1-.2-.3-.2-.6-.4ZM12 21.5c-1.7 0-3.3-.5-4.7-1.3l-3.3.9.9-3.2A9.4 9.4 0 0 1 2.5 12 9.5 9.5 0 1 1 12 21.5ZM12 1a11 11 0 0 0-9.4 16.6L1 23l5.6-1.5A11 11 0 1 0 12 1Z"/></svg>',
    close:
      '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round"><path d="M18 6 6 18M6 6l12 12"/></svg>',
    menu: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"><path d="M3 7h18M3 12h18M3 17h12"/></svg>',
  };

  const socials = (extra = "") => `
    <a href="https://instagram.com" target="_blank" rel="noopener" aria-label="Instagram" class="${extra}">${ICONS.instagram}</a>
    <a href="https://facebook.com" target="_blank" rel="noopener" aria-label="Facebook" class="${extra}">${ICONS.facebook}</a>`;

  const logo = (size = "normal") => `
    <a href="index.html" class="flex items-center gap-3 group" aria-label="PK Entertainment home">
      <img src="assets/img/Logo.png" alt="PK Entertainment" class="navbar-logo" />
      <span class="brand-word">
        <strong>PK ENTERTAINMENT</strong>
        <em>PRIVATE CINEMA STUDIO</em>
      </span>
    </a>`;

  const pageKey = document.body.dataset.page || "home";

  /* ---------------- Header ---------------- */
  const headerMount = $("#site-header");
  if (headerMount) {
    headerMount.innerHTML = `
      <div class="mx-auto flex max-w-7xl items-center justify-between gap-6 px-5 py-2 lg:px-6 lg:py-2">
        ${logo()}
        <nav class="primary-nav hidden items-center gap-1 lg:flex" aria-label="Primary">
          ${NAV.map(
            (n) =>
              `<a href="${n.href}" class="nav-link ${n.key === pageKey ? "is-active" : ""}">${n.label}</a>`
          ).join("")}
        </nav>
        <div class="flex items-center gap-4">
          <button id="menu-open" class="grid h-11 w-11 place-items-center border border-white/15 text-white/80 transition hover:border-[#FF8500] hover:text-[#FF8500] lg:hidden" aria-label="Open menu" aria-expanded="false">
            ${ICONS.menu}
          </button>
        </div>
      </div>
      <div class="hairline opacity-40"></div>
    `;
  }

  const drawer = document.createElement("div");
  drawer.className = "mobile-drawer";
  drawer.id = "mobile-drawer";
  drawer.setAttribute("aria-hidden", "true");
  drawer.innerHTML = `
    <div class="flex items-center justify-between px-6 py-5 border-b border-white/10">
      ${logo()}
      <button id="menu-close" class="grid h-11 w-11 place-items-center border border-white/15 text-white/80 hover:border-[#FF8500] hover:text-[#FF8500] transition" aria-label="Close menu">
        ${ICONS.close}
      </button>
    </div>
    <div class="flex-1 px-6 py-8">
      <p class="eyebrow mb-6">Menu</p>
      <nav aria-label="Mobile">
        ${NAV.map(
          (n, i) =>
            `<a href="${n.href}" class="drawer-link ${n.key === pageKey ? "is-active" : ""}"><span>0${i + 1}</span>${n.label}</a>`
        ).join("")}
      </nav>
      <div class="mt-10 grid gap-3">
        <a href="${WA}" target="_blank" rel="noopener" class="btn btn-gold w-full">Book a Consultation ${ICONS.arrow}</a>
      </div>
      <div class="mt-10 flex items-center justify-between border-t border-white/10 pt-6">
        <div class="flex items-center gap-3 text-white/50">${socials("hover:text-[#FF8500] transition")}</div>
      </div>
    </div>
  `;
  document.body.appendChild(drawer);

  const openMenu = () => {
    drawer.classList.add("is-open");
    drawer.setAttribute("aria-hidden", "false");
    document.body.classList.add("menu-open");
    const btn = $("#menu-open");
    if (btn) btn.setAttribute("aria-expanded", "true");
  };
  const closeMenu = () => {
    drawer.classList.remove("is-open");
    drawer.setAttribute("aria-hidden", "true");
    document.body.classList.remove("menu-open");
    const btn = $("#menu-open");
    if (btn) btn.setAttribute("aria-expanded", "false");
  };
  $("#menu-open")?.addEventListener("click", openMenu);
  $("#menu-close")?.addEventListener("click", closeMenu);
  $$("a", drawer).forEach((a) => a.addEventListener("click", closeMenu));
  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape") closeMenu();
  });

  /* ---------------- Footer ---------------- */
  const footerMount = $("#site-footer");
  if (footerMount) {
    footerMount.innerHTML = `
      <footer class="relative overflow-hidden border-t border-white/10 bg-[#21232E]">
        <div class="pointer-events-none absolute -top-40 right-0 h-96 w-96 rounded-full bg-[#105BFF]/5 blur-3xl"></div>
        <div class="relative mx-auto max-w-7xl px-6 pt-20 pb-10">
          <div class="grid gap-14 lg:grid-cols-[1.4fr_1fr_1.2fr]">
            <div>
              ${logo()}
              <p class="mt-6 max-w-sm text-sm leading-relaxed text-white/45">
                Acoustically tuned private cinemas, smart homes and immersive spaces — designed, engineered and calibrated by a team that lives for the movies.
              </p>
              <div class="mt-7 flex items-center gap-3">${socials("social-btn")}</div>
            </div>

            <div class="lg:-mr-8">
              <h4 class="mb-5 text-[10px] font-semibold uppercase tracking-[0.3em] text-[#FF8500]">Company</h4>
              <ul class="space-y-3">
                ${NAV.map((n) => `<li><a class="footer-link" href="${n.href}">${n.label}</a></li>`).join("")}
              </ul>
            </div>

            <div>
              <h4 class="mb-5 text-[10px] font-semibold uppercase tracking-[0.3em] text-[#FF8500]">Contact</h4>
              <ul class="space-y-4 text-sm text-white/50">
                <li class="flex gap-3">
                  <span class="mt-0.5 text-[#FF8500]">${ICONS.phone.replace('<svg','<svg class="w-4 h-4"')}</span>
                  <span>
                    <a href="tel:${PHONE_1_LINK}" class="block hover:text-[#FF8500]">${PHONE_1}</a>
                  </span>
                </li>
                <li class="flex gap-3">
                  <span class="mt-0.5 text-[#FF8500]">${ICONS.mail.replace('<svg','<svg class="w-4 h-4"')}</span>
                  <a href="mailto:${EMAIL}" class="hover:text-[#FF8500]">${EMAIL}</a>
                </li>
                <li class="flex gap-3">
                  <span class="mt-0.5 shrink-0 text-[#FF8500]">${ICONS.pin.replace('<svg','<svg class="w-4 h-4"')}</span>
                  <span class="leading-relaxed">48-3-55/1, Day &amp; Night Hospital Road,<br/>Near Rama Talkies, Srinagar,<br/>VISAKHAPATNAM -530016</span>
                </li>
              </ul>
            </div>
          </div>

          <div class="mt-16 flex flex-col items-center justify-between gap-4 border-t border-white/8 pt-7 text-[11px] text-white/30 md:flex-row">
            <p>© ${new Date().getFullYear()} PK Entertainment. All rights reserved.</p>
            <p class="tracking-[0.18em] uppercase">Crafted for the love of cinema</p>
            <div class="flex items-center gap-5">
              <a href="privacy-policy.html" class="hover:text-[#FF8500]">Privacy</a>
              <a href="terms-conditions.html" class="hover:text-[#FF8500]">Terms</a>
            </div>
          </div>
        </div>
      </footer>
    `;
  }

  /* ---------------- Floating actions ---------------- */
  const floatWrap = document.createElement("div");
  floatWrap.innerHTML = `
    <a href="${WA}" target="_blank" rel="noopener" class="float-wa" aria-label="Chat on WhatsApp">${ICONS.whatsapp.replace('<svg','<svg class="w-7 h-7"')}</a>
    <button class="to-top" id="to-top" aria-label="Back to top">
      <svg class="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round"><path d="M12 19V5M5 12l7-7 7 7"/></svg>
    </button>
    <div class="toast" id="site-toast" role="status" aria-live="polite"></div>
  `;
  document.body.appendChild(floatWrap);

  let toastTimer;
  window.pkToast = function (msg) {
    const el = $("#site-toast");
    if (!el) return;
    el.textContent = msg;
    el.classList.add("is-visible");
    clearTimeout(toastTimer);
    toastTimer = setTimeout(() => el.classList.remove("is-visible"), 4200);
  };

  /* ---------------- Header on scroll + back to top ---------------- */
  const header = $(".site-header");
  const toTop = $("#to-top");
  let lastScrollY = window.scrollY;
  let navColorFrame = 0;
  const updateNavBackground = () => {
    if (!header) return;
    const sampleY = Math.min(header.offsetHeight || 72, 72);
    const sampleX = Math.min(window.innerWidth / 2, window.innerWidth - 1);
    const fallback = "rgba(33, 35, 46, 0.92)";
    let nextColor = fallback;

    document.elementsFromPoint(sampleX, sampleY).some((el) => {
      if (el === header || header.contains(el)) return false;
      const color = getComputedStyle(el).backgroundColor;
      if (!color || color === "transparent" || color === "rgba(0, 0, 0, 0)") return false;
      const match = color.match(/[\d.]+/g);
      if (!match || match.length < 3) return false;
      nextColor = `rgba(${match[0]}, ${match[1]}, ${match[2]}, 0.94)`;
      return true;
    });

    header.style.backgroundColor = nextColor;
  };
  const onScroll = () => {
    const y = window.scrollY;
    header?.classList.toggle("is-scrolled", y > 48);
    header?.classList.toggle("is-hidden", y > 48 && y > lastScrollY);
    toTop?.classList.toggle("is-visible", y > 600);
    lastScrollY = y;
    cancelAnimationFrame(navColorFrame);
    navColorFrame = requestAnimationFrame(updateNavBackground);
  };
  window.addEventListener("scroll", onScroll, { passive: true });
  onScroll();
  toTop?.addEventListener("click", () => window.scrollTo({ top: 0, behavior: "smooth" }));

  /* ---------------- Scroll reveal ---------------- */
  const revealEls = $$("[data-reveal]");
  if ("IntersectionObserver" in window && revealEls.length) {
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const delay = entry.target.dataset.delay || 0;
            entry.target.style.transitionDelay = `${delay}ms`;
            entry.target.classList.add("is-visible");
            io.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.12, rootMargin: "0px 0px -60px 0px" }
    );
    revealEls.forEach((el) => io.observe(el));
  } else {
    revealEls.forEach((el) => el.classList.add("is-visible"));
  }

  /* ---------------- Animated counters ---------------- */
  const counters = $$("[data-count]");
  if (counters.length && "IntersectionObserver" in window) {
    const co = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) return;
          const el = entry.target;
          const target = parseInt(el.dataset.count, 10);
          const suffix = el.dataset.suffix || "";
          const duration = 1600;
          const start = performance.now();
          const tick = (now) => {
            const p = Math.min((now - start) / duration, 1);
            const eased = 1 - Math.pow(1 - p, 3);
            el.textContent = Math.round(target * eased) + suffix;
            if (p < 1) requestAnimationFrame(tick);
          };
          requestAnimationFrame(tick);
          co.unobserve(el);
        });
      },
      { threshold: 0.5 }
    );
    counters.forEach((el) => co.observe(el));
  }

  /* ---------------- Project filters ---------------- */
  $$("[data-filter-group]").forEach((group) => {
    const buttons = $$("[data-filter]", group);
    const targetSel = group.dataset.filterGroup;
    const items = $$(`${targetSel} [data-category]`);
    buttons.forEach((btn) => {
      btn.addEventListener("click", () => {
        buttons.forEach((b) => b.classList.remove("is-active"));
        btn.classList.add("is-active");
        const cat = btn.dataset.filter;
        items.forEach((item) => {
          const show = cat === "all" || item.dataset.category.includes(cat);
          item.classList.toggle("is-hidden", !show);
        });
      });
    });
  });

  /* ---------------- Lightbox ---------------- */
  const lightbox = document.createElement("div");
  lightbox.className = "lightbox";
  lightbox.innerHTML = `
    <button class="lightbox-close" aria-label="Close gallery">${ICONS.close}</button>
    <button class="lightbox-nav prev" aria-label="Previous image">
      <svg class="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round"><path d="m15 18-6-6 6-6"/></svg>
    </button>
    <img alt="" />
    <button class="lightbox-nav next" aria-label="Next image">
      <svg class="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round"><path d="m9 18 6-6-6-6"/></svg>
    </button>
    <p class="lightbox-caption"></p>
  `;
  document.body.appendChild(lightbox);

  const lbImg = $("img", lightbox);
  const lbCap = $(".lightbox-caption", lightbox);
  let lbItems = [];
  let lbIndex = 0;

  const renderLb = () => {
    const item = lbItems[lbIndex];
    if (!item) return;
    lbImg.src = item.src;
    lbImg.alt = item.title || "PK Entertainment project";
    lbCap.textContent = `${item.title || ""} — ${String(lbIndex + 1).padStart(2, "0")} / ${String(
      lbItems.length
    ).padStart(2, "0")}`;
  };
  const openLb = (items, index) => {
    lbItems = items;
    lbIndex = index;
    renderLb();
    lightbox.classList.add("is-open");
    document.body.style.overflow = "hidden";
  };
  const closeLb = () => {
    lightbox.classList.remove("is-open");
    document.body.style.overflow = "";
  };

  $$("[data-lightbox]").forEach((card) => {
    card.addEventListener("click", () => {
      const gallery = $$(`[data-lightbox="${card.dataset.lightbox}"]`);
      const items = gallery
        .filter((el) => !el.classList.contains("is-hidden"))
        .map((el) => ({ src: el.dataset.src || $("img", el).src, title: el.dataset.title }));
      const visibleCard = items.findIndex((it) => it.src === (card.dataset.src || $("img", card).src));
      openLb(items, Math.max(0, visibleCard));
    });
  });

  $(".lightbox-close", lightbox).addEventListener("click", closeLb);
  lightbox.addEventListener("click", (e) => {
    if (e.target === lightbox) closeLb();
  });
  $(".lightbox-nav.prev", lightbox).addEventListener("click", () => {
    lbIndex = (lbIndex - 1 + lbItems.length) % lbItems.length;
    renderLb();
  });
  $(".lightbox-nav.next", lightbox).addEventListener("click", () => {
    lbIndex = (lbIndex + 1) % lbItems.length;
    renderLb();
  });
  window.addEventListener("keydown", (e) => {
    if (!lightbox.classList.contains("is-open")) return;
    if (e.key === "Escape") closeLb();
    if (e.key === "ArrowLeft") $(".lightbox-nav.prev", lightbox).click();
    if (e.key === "ArrowRight") $(".lightbox-nav.next", lightbox).click();
  });

  /* ---------------- Testimonials ---------------- */
  $$("[data-quotes]").forEach((wrap) => {
    const slides = $$(".quote-slide", wrap);
    const dots = $$("[data-quote-dot]", wrap);
    if (slides.length < 2) return;
    let index = 0;
    let timer;
    const go = (i) => {
      index = (i + slides.length) % slides.length;
      slides.forEach((s, n) => s.classList.toggle("is-active", n === index));
      dots.forEach((d, n) => d.classList.toggle("is-active", n === index));
    };
    const auto = () => {
      clearInterval(timer);
      timer = setInterval(() => go(index + 1), 7000);
    };
    dots.forEach((dot, i) =>
      dot.addEventListener("click", () => {
        go(i);
        auto();
      })
    );
    go(0);
    auto();
    wrap.addEventListener("mouseenter", () => clearInterval(timer));
    wrap.addEventListener("mouseleave", auto);
  });

  /* ---------------- Accordion ---------------- */
  $$("[data-accordion]").forEach((acc) => {
    const items = $$(".acc-item", acc);
    items.forEach((item) => {
      const trigger = $(".acc-trigger", item);
      const panel = $(".acc-panel", item);
      trigger.addEventListener("click", () => {
        const isOpen = item.classList.contains("is-open");
        items.forEach((other) => {
          other.classList.remove("is-open");
          $(".acc-panel", other).style.maxHeight = null;
          $(".acc-trigger", other).setAttribute("aria-expanded", "false");
        });
        if (!isOpen) {
          item.classList.add("is-open");
          panel.style.maxHeight = panel.scrollHeight + "px";
          trigger.setAttribute("aria-expanded", "true");
        }
      });
    });
    if (!acc.hasAttribute("data-start-closed")) {
      const first = items.find((i) => i.classList.contains("is-open")) || items[0];
      if (first) {
        first.classList.add("is-open");
        $(".acc-panel", first).style.maxHeight = $(".acc-panel", first).scrollHeight + "px";
      }
    }
  });

  /* ---------------- Sound signature equalizers ---------------- */
  $$("[data-eq]").forEach((eq) => {
    const count = parseInt(eq.dataset.eq, 10) || 30;
    let bars = "";
    for (let i = 0; i < count; i++) {
      const centre = Math.exp(-Math.pow((i - (count - 1) / 2) / (count * 0.34), 2));
      const height = Math.round(16 + centre * 62 + Math.random() * 20);
      const duration = (0.85 + Math.random() * 1.05).toFixed(2);
      const delay = (-Math.random() * 1.8).toFixed(2);
      bars += `<span style="--h:${height}%;--d:${duration}s;--delay:${delay}s"></span>`;
    }
    eq.innerHTML = bars;
  });

  /* ---------------- Cursor glow on service cards ---------------- */
  $$(".service-card").forEach((card) => {
    card.addEventListener("mousemove", (e) => {
      const rect = card.getBoundingClientRect();
      card.style.setProperty("--mx", `${e.clientX - rect.left}px`);
      card.style.setProperty("--my", `${e.clientY - rect.top}px`);
    });
  });

  /* ---------------- Counter resets / package preselect ---------------- */
  const params = new URLSearchParams(window.location.search);
  const pkg = params.get("package");
  if (pkg) {
    const select = $("#package-select");
    if (select) {
      const aliases = {
        seating: "Products / Furniture",
        audio: "Products / Furniture",
        projection: "Products / Furniture",
        ceiling: "Products / Furniture",
      };
      const wanted = aliases[pkg.toLowerCase()] || pkg;
      const opt = Array.from(select.options).find((o) =>
        o.value.toLowerCase().includes(wanted.toLowerCase())
      );
      if (opt) select.value = opt.value;
    }
  }

  /* ---------------- Forms ---------------- */
  $$("form[data-contact-form]").forEach((form) => {
    form.addEventListener("submit", (e) => {
      e.preventDefault();
      let valid = true;
      $$("[required]", form).forEach((field) => {
        const ok = field.type === "email" ? /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(field.value.trim()) : field.value.trim().length > 0;
        field.classList.toggle("field-error", !ok);
        if (!ok) valid = false;
      });
      if (!valid) {
        window.pkToast("Please complete the highlighted fields.");
        return;
      }
      const btn = $('button[type="submit"]', form);
      const original = btn.innerHTML;
      btn.disabled = true;
      btn.innerHTML = "Sending…";
      setTimeout(() => {
        form.reset();
        btn.disabled = false;
        btn.innerHTML = original;
        window.pkToast("Thank you! Our team will call you within 24 hours.");
      }, 1100);
    });
  });

  /* ---------------- Remove field error on input ---------------- */
  document.addEventListener("input", (e) => {
    if (e.target.classList?.contains("field")) e.target.classList.remove("field-error");
  });

  /* ---------------- Current year ---------------- */
  $$("[data-year]").forEach((el) => (el.textContent = new Date().getFullYear()));
})();
