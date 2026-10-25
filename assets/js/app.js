/* ==========================================================================
   2TDV.com — Frontend Interactive Engine (Static Demo Architecture)
   Powers: Theme Switching, Command Palette (⌘K), Cart & Licensing State,
   AI Simulator, ROI & Project Estimators, License Verifier, Dashboard Tabs
   ========================================================================== */

(function () {
  'use strict';

  /* ------------------------------------------------------------------------
     1. Commercial Software Catalog & Cryptographic License Registry
     ------------------------------------------------------------------------ */
  window.TDV_CATALOG = [
    {
      id: 'picso',
      name: 'Picso — Stock Media Marketplace Script',
      tagline: '8-format stock photo, 4K video, music & template marketplace for WordPress.',
      category: 'wordpress',
      stack: 'WordPress 6.6+ · PHP 8.2+ · Free Elementor',
      version: 'v1.0.0',
      updated: 'Oct 2026',
      rating: '4.98',
      sales: '1,420+',
      priceRegular: 72,
      priceExtended: 599,
      badge: 'Flagship Release',
      badgeClass: 'badge-lime',
      url: 'product-picso.html',
      demoUrl: 'https://picso.site/demo/',
      externalSite: 'https://picso.site',
      features: [
        '8 native asset formats (Photos, Video, Music, SFX, Vectors, Icons, Illustrations, Templates)',
        'Verifiable PDF license certificates with public verify page',
        'C2PA Content Credentials & honest AI labels built in',
        'Automatic image watermarking & periodic audio preview tags',
        '170+ free Elementor widgets & 110 ready-made designs',
        'Creator dashboard, keyboard review queue & Stripe Connect payouts'
      ]
    },
    {
      id: 'neuraldesk',
      name: 'NeuralDesk AI — Autonomous RAG Helpdesk SaaS',
      tagline: 'Multi-tenant AI customer support agent, knowledge base & human handoff platform.',
      category: 'ai',
      stack: 'Next.js 15 · TypeScript · pgvector · OpenAI/Claude',
      version: 'v2.4.0',
      updated: 'Oct 2026',
      rating: '4.95',
      sales: '890+',
      priceRegular: 89,
      priceExtended: 649,
      badge: 'AI Bestseller',
      badgeClass: 'badge-violet',
      url: 'product-picso.html?product=neuraldesk',
      demoUrl: 'ai-solutions.html#playground',
      features: [
        'Hybrid semantic + keyword RAG retrieval with inline citations',
        'Autonomous ticket resolution with confidence threshold guardrails',
        'Multi-tenant SaaS billing via Stripe Subscriptions',
        'Embeddable 14KB web widget + Slack, Email & WhatsApp bridges'
      ]
    },
    {
      id: 'vendorpulse',
      name: 'VendorPulse — Digital Software & License Server',
      tagline: 'Self-hosted Laravel 11 digital product marketplace, cryptographic license API & checkout.',
      category: 'laravel',
      stack: 'Laravel 11 · PHP 8.3 · Vue 3 · MySQL 8',
      version: 'v3.1.2',
      updated: 'Sep 2026',
      rating: '4.92',
      sales: '640+',
      priceRegular: 94,
      priceExtended: 699,
      badge: 'Enterprise Ready',
      badgeClass: 'badge-cyan',
      url: 'product-picso.html?product=vendorpulse',
      demoUrl: 'verify-license.html',
      features: [
        'Domain-bound cryptographic license key generator & REST verification API',
        'Automated release ZIP builder with SHA-256 checksums',
        'EU VAT validation, Stripe Tax & numbered PDF invoicing',
        'Multi-vendor split payouts & affiliate tracking engine'
      ]
    },
    {
      id: 'promptforge',
      name: 'PromptForge — Multi-Model AI Workspace Script',
      tagline: 'Turnkey AI SaaS platform for text, code, vision, speech & document generation.',
      category: 'ai',
      stack: 'Laravel 11 · PHP 8.2+ · Tailwind · Livewire',
      version: 'v2.8.0',
      updated: 'Oct 2026',
      rating: '4.91',
      sales: '1,150+',
      priceRegular: 79,
      priceExtended: 549,
      badge: 'Popular Script',
      badgeClass: 'badge-emerald',
      url: 'product-picso.html?product=promptforge',
      demoUrl: 'ai-solutions.html#playground',
      features: [
        'Unified router for GPT-5, Claude 4, Gemini, Flux & ElevenLabs',
        'Team workspaces, credit packs & token usage metering',
        '75+ custom prompt templates & brand voice personas',
        'Full white-label dashboard with custom domain mapping'
      ]
    },
    {
      id: 'docuvault',
      name: 'DocuVault AI — Legal & Financial OCR Intelligence',
      tagline: 'Automated PDF contract auditing, invoice extraction & structured JSON pipeline.',
      category: 'automation',
      stack: 'Python FastAPI · React 19 · PostgreSQL · Vision LLM',
      version: 'v1.9.4',
      updated: 'Oct 2026',
      rating: '4.96',
      sales: '480+',
      priceRegular: 69,
      priceExtended: 499,
      badge: 'FinTech & Legal',
      badgeClass: 'badge-amber',
      url: 'product-picso.html?product=docuvault',
      demoUrl: 'ai-solutions.html#playground',
      features: [
        '99.4% field extraction accuracy on multi-page tables & scans',
        'Clause risk scoring & redline comparison for legal teams',
        'Webhook push to ERP, NetSuite, QuickBooks & SAP',
        'On-premise Docker deployment ready with zero external data retention'
      ]
    },
    {
      id: 'voiceflow',
      name: 'VoiceFlow Studio — Real-Time AI Voice Agent Kit',
      tagline: 'Sub-400ms latency inbound & outbound AI phone agent platform with CRM sync.',
      category: 'ai',
      stack: 'Node.js · WebRTC · Twilio/SIP · Next.js 15',
      version: 'v1.5.0',
      updated: 'Oct 2026',
      rating: '4.94',
      sales: '530+',
      priceRegular: 119,
      priceExtended: 799,
      badge: 'Low Latency',
      badgeClass: 'badge-violet',
      url: 'product-picso.html?product=voiceflow',
      demoUrl: 'ai-solutions.html#playground',
      features: [
        'Sub-400ms conversational turn-taking with barge-in handling',
        'Live calendar booking, qualification & warm call transfer',
        'Call recording, sentiment analysis & automatic CRM transcripts',
        'Agency white-label sub-accounts with per-minute billing markup'
      ]
    },
    {
      id: 'metricra',
      name: 'Metricra — Privacy-First Product Analytics Script',
      tagline: 'Self-hosted web analytics, funnel attribution & session telemetry without cookies.',
      category: 'saas',
      stack: 'Go / Node.js · ClickHouse / Postgres · React',
      version: 'v2.1.0',
      updated: 'Sep 2026',
      rating: '4.89',
      sales: '710+',
      priceRegular: 59,
      priceExtended: 429,
      badge: 'GDPR Native',
      badgeClass: 'badge-cyan',
      url: 'product-picso.html?product=metricra',
      demoUrl: 'dashboard.html',
      features: [
        'Lightweight <1.8KB tracking script that bypasses ad-blockers ethically',
        'Real-time visitor globe, conversion funnels & revenue attribution',
        'Zero PII collection — 100% GDPR, CCPA & PECR compliant out of the box',
        'Multi-site agency mode with shareable public or password-protected links'
      ]
    },
    {
      id: 'kinetix',
      name: 'Kinetix UI Pro — AI & SaaS Design System + Boilerplate',
      tagline: '220+ production React/HTML components, dark/light tokens & SaaS starter templates.',
      category: 'saas',
      stack: 'Next.js 15 · Tailwind CSS · HTML5 · Figma',
      version: 'v4.0.0',
      updated: 'Oct 2026',
      rating: '4.99',
      sales: '1,680+',
      priceRegular: 64,
      priceExtended: 399,
      badge: 'Design System',
      badgeClass: 'badge-lime',
      url: 'product-picso.html?product=kinetix',
      demoUrl: 'index.html',
      features: [
        '220+ accessible components engineered for AI dashboards & marketplaces',
        'Includes both pure semantic HTML/CSS and Next.js 15 TypeScript packages',
        'Built-in command palettes, data tables, token charts & billing flows',
        'Lifetime updates + full Figma variable library included'
      ]
    }
  ];

  window.TDV_LICENSES = {
    'PX-7KQ2-9941-2TDV': {
      valid: true,
      id: 'PX-7KQ2-9941-2TDV',
      product: 'Picso — Stock Photo, Video & Music Marketplace Script (v1.0.0)',
      tier: 'Extended Agency License (Multi-Site & Client Projects)',
      licensee: 'Northstar Digital Media Ltd.',
      domain: '*.northstarmedia.io (3 of Unlimited Activations Used)',
      issued: 'October 19, 2026',
      status: 'ACTIVE · LIFETIME VALIDITY',
      c2pa: 'Enabled · C2PA v2.1 Provenance Intact',
      hash: 'sha256:9f84c2b10e47a88d31b79e4a120c5f9b83d16e72a4f05c81'
    },
    'ND-4M19-8820-EXT': {
      valid: true,
      id: 'ND-4M19-8820-EXT',
      product: 'NeuralDesk AI — Autonomous RAG Helpdesk SaaS (v2.4.0)',
      tier: 'Extended Commercial SaaS License',
      licensee: 'Vanguard FinTech Systems Inc.',
      domain: 'support.vanguardpay.com',
      issued: 'October 11, 2026',
      status: 'ACTIVE · LIFETIME VALIDITY',
      c2pa: 'Verified Commercial SaaS Deployment',
      hash: 'sha256:4a12e8c09b31f7742d66a0198c53e2117f90b341c82a6d10'
    },
    'VP-9X04-1123-REG': {
      valid: true,
      id: 'VP-9X04-1123-REG',
      product: 'Picso — Stock Photo, Video & Music Marketplace Script (v1.0.0)',
      tier: 'Regular License (Single Production Domain)',
      licensee: 'Studio Lumina Collective',
      domain: 'assets.studiolumina.design (1 of 1 Activation Used)',
      issued: 'October 22, 2026',
      status: 'ACTIVE · LIFETIME VALIDITY',
      c2pa: 'Enabled · Watermark & Cue Sheet Engine Active',
      hash: 'sha256:7c31b904e218f650a19c84d2307e5b119a40f8c2d1e67b05'
    },
    'REV-0000-TEST': {
      valid: false,
      id: 'REV-0000-TEST',
      product: 'Picso — Stock Media Marketplace Script',
      tier: 'Regular License (Revoked / Chargeback)',
      licensee: 'Unverified Entity',
      domain: 'None (Deactivated)',
      issued: 'August 04, 2026',
      status: 'REVOKED · INVALID FOR COMMERCIAL USE',
      c2pa: 'Revoked on October 02, 2026',
      hash: 'sha256:000000000000000000000000000000000000000000000000'
    }
  };

  /* ------------------------------------------------------------------------
     2. Theme Management (Dark Default + Light Mode Persistence)
     ------------------------------------------------------------------------ */
  function initTheme() {
    var saved = localStorage.getItem('tdv_theme') || 'dark';
    document.documentElement.setAttribute('data-theme', saved);
    updateThemeButtons(saved);

    document.addEventListener('click', function (e) {
      var btn = e.target.closest('[data-theme-toggle]');
      if (!btn) return;
      var current = document.documentElement.getAttribute('data-theme') || 'dark';
      var next = current === 'dark' ? 'light' : 'dark';
      document.documentElement.setAttribute('data-theme', next);
      localStorage.setItem('tdv_theme', next);
      updateThemeButtons(next);
      showToast('Switched to ' + (next === 'dark' ? 'Obsidian Dark' : 'Editorial Paper Light') + ' theme');
    });
  }

  function updateThemeButtons(theme) {
    var toggles = document.querySelectorAll('[data-theme-toggle]');
    toggles.forEach(function (btn) {
      btn.setAttribute('aria-label', 'Switch to ' + (theme === 'dark' ? 'light' : 'dark') + ' theme');
      var label = btn.querySelector('.theme-label');
      if (label) label.textContent = theme === 'dark' ? 'Dark' : 'Light';
    });
  }

  /* ------------------------------------------------------------------------
     3. Toast Notifications
     ------------------------------------------------------------------------ */
  function ensureToastContainer() {
    var c = document.getElementById('tdv-toast-container');
    if (!c) {
      c = document.createElement('div');
      c.id = 'tdv-toast-container';
      c.className = 'toast-container';
      document.body.appendChild(c);
    }
    return c;
  }

  window.showToast = function (message) {
    var container = ensureToastContainer();
    var toast = document.createElement('div');
    toast.className = 'toast';
    toast.innerHTML =
      '<span style="width:8px;height:8px;border-radius:50%;background:var(--lime);flex-shrink:0"></span>' +
      '<span>' + message + '</span>';
    container.appendChild(toast);
    setTimeout(function () {
      toast.style.opacity = '0';
      toast.style.transform = 'translateY(8px)';
      toast.style.transition = 'all 0.2s ease';
      setTimeout(function () {
        if (toast.parentNode) toast.parentNode.removeChild(toast);
      }, 220);
    }, 3200);
  };

  /* ------------------------------------------------------------------------
     4. Shopping Cart State & Slide-Over Drawer
     ------------------------------------------------------------------------ */
  function getCart() {
    try {
      var raw = localStorage.getItem('tdv_cart');
      if (raw) return JSON.parse(raw);
    } catch (e) {}
    return [
      {
        id: 'picso',
        name: 'Picso — Stock Media Marketplace Script (v1.0.0)',
        tier: 'regular',
        price: 72
      }
    ];
  }

  function saveCart(items) {
    try {
      localStorage.setItem('tdv_cart', JSON.stringify(items));
    } catch (e) {}
    updateCartUI();
  }

  window.addToCart = function (productId, tier) {
    var product = window.TDV_CATALOG.find(function (p) { return p.id === productId; }) || window.TDV_CATALOG[0];
    var chosenTier = tier || 'regular';
    var price = chosenTier === 'extended' ? product.priceExtended : product.priceRegular;
    var cart = getCart();
    var existing = cart.find(function (item) { return item.id === product.id; });
    if (existing) {
      existing.tier = chosenTier;
      existing.price = price;
    } else {
      cart.push({
        id: product.id,
        name: product.name,
        tier: chosenTier,
        price: price
      });
    }
    saveCart(cart);
    showToast('Added ' + product.name + ' (' + chosenTier.toUpperCase() + ') to cart');
    openCartDrawer();
  };

  window.removeFromCart = function (productId) {
    var cart = getCart().filter(function (item) { return item.id !== productId; });
    saveCart(cart);
    showToast('Removed item from license cart');
  };

  function injectGlobalOverlays() {
    if (!document.getElementById('tdv-cart-backdrop')) {
      var cartEl = document.createElement('div');
      cartEl.id = 'tdv-cart-backdrop';
      cartEl.className = 'cart-drawer-backdrop';
      cartEl.innerHTML =
        '<div class="cart-drawer" role="dialog" aria-label="Software License Cart">' +
          '<div>' +
            '<div style="display:flex;align-items:center;justify-content:space-between;padding-bottom:18px;border-bottom:1px solid var(--border)">' +
              '<div>' +
                '<div class="mono text-lime" style="font-size:11px;text-transform:uppercase;letter-spacing:0.08em">2TDV Commercial Licensing</div>' +
                '<h3 style="margin-top:2px">Your License Cart</h3>' +
              '</div>' +
              '<button class="icon-btn" data-close-cart aria-label="Close Cart">✕</button>' +
            '</div>' +
            '<div id="tdv-cart-items" style="margin-top:20px;display:grid;gap:14px;max-height:58vh;overflow-y:auto"></div>' +
          '</div>' +
          '<div style="padding-top:20px;border-top:1px solid var(--border);display:grid;gap:14px">' +
            '<div style="display:flex;justify-content:space-between;align-items:baseline">' +
              '<span class="text-muted">Instant License Provisioning</span>' +
              '<strong id="tdv-cart-total" style="font-size:24px">$72 USD</strong>' +
            '</div>' +
            '<p style="font-size:12.5px;color:var(--text-3)">Includes full source code, lifetime license certificate, verifiable ID, and 1-click demo importer.</p>' +
            '<div style="display:grid;grid-template-columns:1fr 1fr;gap:10px">' +
              '<a href="marketplace.html" class="btn btn-ghost btn-sm">Browse Scripts</a>' +
              '<a href="checkout.html" class="btn btn-lime btn-sm">Proceed to Checkout →</a>' +
            '</div>' +
          '</div>' +
        '</div>';
      document.body.appendChild(cartEl);
    }

    if (!document.getElementById('tdv-cmd-backdrop')) {
      var cmdEl = document.createElement('div');
      cmdEl.id = 'tdv-cmd-backdrop';
      cmdEl.className = 'modal-backdrop';
      cmdEl.innerHTML =
        '<div class="cmd-modal" role="dialog" aria-label="Quick Command Search">' +
          '<div class="cmd-header">' +
            '<span class="mono text-lime">⌘K</span>' +
            '<input type="text" id="tdv-cmd-input" placeholder="Search 2TDV services, commercial scripts (Picso), AI tools, or pages..." autocomplete="off">' +
            '<button class="icon-btn" data-close-cmd style="height:30px;padding:0 9px">ESC</button>' +
          '</div>' +
          '<div class="cmd-results" id="tdv-cmd-results"></div>' +
        '</div>';
      document.body.appendChild(cmdEl);
    }
  }

  function updateCartUI() {
    var cart = getCart();
    var badges = document.querySelectorAll('[data-cart-count]');
    badges.forEach(function (b) { b.textContent = cart.length; });

    var container = document.getElementById('tdv-cart-items');
    var totalEl = document.getElementById('tdv-cart-total');
    if (!container || !totalEl) return;

    if (cart.length === 0) {
      container.innerHTML =
        '<div class="card" style="text-align:center;padding:28px">' +
          '<p class="text-muted">Your commercial license cart is empty.</p>' +
          '<a href="marketplace.html" class="btn btn-lime btn-sm" style="margin-top:14px">Explore 2TDV Marketplace</a>' +
        '</div>';
      totalEl.textContent = '$0 USD';
      return;
    }

    var total = 0;
    container.innerHTML = cart.map(function (item) {
      total += Number(item.price || 0);
      return (
        '<div style="padding:14px;border-radius:var(--r-sm);background:var(--bg-2);border:1px solid var(--border);display:flex;justify-content:space-between;gap:12px;align-items:flex-start">' +
          '<div>' +
            '<div style="font-weight:600;font-size:14px">' + item.name + '</div>' +
            '<div class="mono" style="font-size:11.5px;color:var(--lime);margin-top:4px">' +
              (item.tier === 'extended' ? 'Extended Multi-Site / Agency License' : 'Regular Single-Site License') +
            '</div>' +
          '</div>' +
          '<div style="text-align:right;flex-shrink:0">' +
            '<div style="font-weight:700;font-size:16px">$' + item.price + '</div>' +
            '<button type="button" onclick="window.removeFromCart(\'' + item.id + '\')" style="font-size:11.5px;color:var(--text-3);margin-top:4px;text-decoration:underline">Remove</button>' +
          '</div>' +
        '</div>'
      );
    }).join('');

    totalEl.textContent = '$' + total.toLocaleString() + ' USD';
  }

  function openCartDrawer() {
    var el = document.getElementById('tdv-cart-backdrop');
    if (el) {
      updateCartUI();
      el.classList.add('open');
    }
  }

  function closeCartDrawer() {
    var el = document.getElementById('tdv-cart-backdrop');
    if (el) el.classList.remove('open');
  }

  /* ------------------------------------------------------------------------
     5. Command Palette (⌘K)
     ------------------------------------------------------------------------ */
  var CMD_LINKS = [
    { title: 'Picso — Stock Photo, Video & Music Marketplace Script', sub: 'Flagship WordPress Theme + Core Plugin · $72 / $599', href: 'product-picso.html', tag: 'Product' },
    { title: 'Picso Official Live Storefront Demo', sub: 'https://picso.site/demo/ · 8 Asset Formats', href: 'https://picso.site/demo/', tag: 'External Demo' },
    { title: 'Commercial Software & Script Marketplace', sub: 'Browse all 8 ready-made PHP, WordPress, Laravel & AI scripts', href: 'marketplace.html', tag: 'Marketplace' },
    { title: 'Custom Web & SaaS Development Services', sub: 'Bespoke engineering pods, web apps, dashboards & APIs', href: 'services.html', tag: 'Agency' },
    { title: 'AI Solutions, Agents & Workflow Automation', sub: 'Interactive AI Playground, RAG pipelines & ROI calculator', href: 'ai-solutions.html', tag: 'AI Studio' },
    { title: 'Public License Certificate Verification', sub: 'Verify PX-7KQ2-9941-2TDV & inspect C2PA certificates', href: 'verify-license.html', tag: 'Licensing' },
    { title: 'Engineering Case Studies & Architecture Portfolio', sub: 'Production metrics & technical deep-dives', href: 'case-studies.html', tag: 'Portfolio' },
    { title: 'Unified Pricing (Software Passes & Engineering Pods)', sub: 'Compare single licenses, All-Access Pass & custom sprints', href: 'pricing.html', tag: 'Pricing' },
    { title: 'Customer & Agency Client Dashboard', sub: 'Downloads, license keys, domain activations & sprint tracker', href: 'dashboard.html', tag: 'Portal' },
    { title: 'Commercial Checkout & License Provisioning', sub: 'Complete your order with Stripe, Wire, or Crypto simulation', href: 'checkout.html', tag: 'Checkout' },
    { title: 'Start a Custom Project / Technical Consultation', sub: 'Interactive project scope configurator & SLA request', href: 'contact.html', tag: 'Contact' }
  ];

  function renderCmdResults(query) {
    var res = document.getElementById('tdv-cmd-results');
    if (!res) return;
    var q = (query || '').toLowerCase().trim();
    var filtered = CMD_LINKS.filter(function (item) {
      return !q || item.title.toLowerCase().indexOf(q) !== -1 || item.sub.toLowerCase().indexOf(q) !== -1 || item.tag.toLowerCase().indexOf(q) !== -1;
    });

    if (filtered.length === 0) {
      res.innerHTML = '<div style="padding:20px;text-align:center;color:var(--text-3)">No matching routes or software scripts found.</div>';
      return;
    }

    res.innerHTML = filtered.map(function (item) {
      return (
        '<a href="' + item.href + '" class="cmd-item">' +
          '<div>' +
            '<div style="font-weight:600;color:var(--text-1)">' + item.title + '</div>' +
            '<div style="font-size:12px;color:var(--text-3)">' + item.sub + '</div>' +
          '</div>' +
          '<span class="tag">' + item.tag + '</span>' +
        '</a>'
      );
    }).join('');
  }

  function openCmdModal() {
    var modal = document.getElementById('tdv-cmd-backdrop');
    var input = document.getElementById('tdv-cmd-input');
    if (!modal) return;
    renderCmdResults('');
    modal.classList.add('open');
    if (input) {
      input.value = '';
      setTimeout(function () { input.focus(); }, 40);
    }
  }

  function closeCmdModal() {
    var modal = document.getElementById('tdv-cmd-backdrop');
    if (modal) modal.classList.remove('open');
  }

  /* ------------------------------------------------------------------------
     6. Universal Tab Switchers & Accordions
     ------------------------------------------------------------------------ */
  function initTabs() {
    document.addEventListener('click', function (e) {
      var tabBtn = e.target.closest('[data-tab-target]');
      if (!tabBtn) return;
      var targetId = tabBtn.getAttribute('data-tab-target');
      var group = tabBtn.getAttribute('data-tab-group');

      if (group) {
        document.querySelectorAll('[data-tab-group="' + group + '"]').forEach(function (b) {
          b.classList.remove('active');
          b.setAttribute('aria-selected', 'false');
        });
        document.querySelectorAll('[data-tab-panel-group="' + group + '"]').forEach(function (p) {
          p.hidden = true;
          p.classList.remove('active');
        });
      }

      tabBtn.classList.add('active');
      tabBtn.setAttribute('aria-selected', 'true');
      var panel = document.getElementById(targetId);
      if (panel) {
        panel.hidden = false;
        panel.classList.add('active');
      }
    });
  }

  /* ------------------------------------------------------------------------
     7. Marketplace Filtering & License Tier Switcher (marketplace.html)
     ------------------------------------------------------------------------ */
  function initMarketplace() {
    var grid = document.getElementById('marketplace-catalog-grid');
    if (!grid) return;

    var currentCat = 'all';
    var currentSearch = '';
    var currentTier = 'regular';

    function renderGrid() {
      var list = window.TDV_CATALOG.filter(function (item) {
        var matchesCat = currentCat === 'all' || item.category === currentCat;
        var q = currentSearch.toLowerCase();
        var matchesSearch = !q ||
          item.name.toLowerCase().indexOf(q) !== -1 ||
          item.tagline.toLowerCase().indexOf(q) !== -1 ||
          item.stack.toLowerCase().indexOf(q) !== -1;
        return matchesCat && matchesSearch;
      });

      var countEl = document.getElementById('marketplace-result-count');
      if (countEl) countEl.textContent = list.length + ' commercial products';

      if (list.length === 0) {
        grid.innerHTML =
          '<div class="card span-3" style="text-align:center;padding:48px">' +
            '<h3>No matching software products found</h3>' +
            '<p class="text-muted" style="margin-top:8px">Try clearing your search filter or request a custom-engineered solution from our studio.</p>' +
          '</div>';
        return;
      }

      grid.innerHTML = list.map(function (p) {
        var price = currentTier === 'extended' ? p.priceExtended : p.priceRegular;
        var tierLabel = currentTier === 'extended' ? 'Extended Multi-Site' : 'Regular 1-Site';
        return (
          '<article class="product-card">' +
            '<div class="product-thumb">' +
              '<div style="display:flex;justify-content:space-between;align-items:center;gap:8px">' +
                '<span class="badge ' + p.badgeClass + '">' + p.badge + '</span>' +
                '<span class="mono" style="font-size:11.5px;color:var(--text-2)">' + p.version + ' · ' + p.updated + '</span>' +
              '</div>' +
              '<div style="margin:auto 0;padding:14px;border-radius:var(--r-sm);background:var(--bg-0);border:1px solid var(--border)">' +
                '<div class="mono" style="font-size:11px;color:var(--text-3)">STACK ARCHITECTURE</div>' +
                '<div class="mono" style="font-size:12.5px;color:var(--lime);margin-top:4px;font-weight:600">' + p.stack + '</div>' +
              '</div>' +
              '<div class="product-meta-row">' +
                '<span class="rating-stars">★ ' + p.rating + '</span>' +
                '<span class="mono">' + p.sales + ' licensed installs</span>' +
              '</div>' +
            '</div>' +
            '<div class="product-body">' +
              '<h3><a href="' + p.url + '" style="hover:underline">' + p.name + '</a></h3>' +
              '<p class="text-muted" style="font-size:14.5px">' + p.tagline + '</p>' +
              '<ul style="display:grid;gap:6px;margin-top:4px;font-size:13px;color:var(--text-2)">' +
                p.features.slice(0, 3).map(function (f) {
                  return '<li style="display:flex;gap:8px;align-items:flex-start"><span class="text-lime">✓</span><span>' + f + '</span></li>';
                }).join('') +
              '</ul>' +
              '<div class="product-footer">' +
                '<div>' +
                  '<div class="price-tag">$' + price + '<small>USD</small></div>' +
                  '<div class="mono" style="font-size:11px;color:var(--text-3)">' + tierLabel + '</div>' +
                '</div>' +
                '<div style="display:flex;gap:8px">' +
                  '<a href="' + p.url + '" class="btn btn-ghost btn-sm">Details</a>' +
                  '<button type="button" class="btn btn-lime btn-sm" onclick="window.addToCart(\'' + p.id + '\', \'' + currentTier + '\')">Add License</button>' +
                '</div>' +
              '</div>' +
            '</div>' +
          '</article>'
        );
      }).join('');
    }

    document.querySelectorAll('[data-mp-cat]').forEach(function (btn) {
      btn.addEventListener('click', function () {
        document.querySelectorAll('[data-mp-cat]').forEach(function (b) { b.classList.remove('active'); });
        btn.classList.add('active');
        currentCat = btn.getAttribute('data-mp-cat');
        renderGrid();
      });
    });

    var searchInput = document.getElementById('marketplace-search-input');
    if (searchInput) {
      searchInput.addEventListener('input', function () {
        currentSearch = searchInput.value;
        renderGrid();
      });
    }

    document.querySelectorAll('[data-mp-tier]').forEach(function (btn) {
      btn.addEventListener('click', function () {
        document.querySelectorAll('[data-mp-tier]').forEach(function (b) { b.classList.remove('active'); });
        btn.classList.add('active');
        currentTier = btn.getAttribute('data-mp-tier');
        renderGrid();
      });
    });

    renderGrid();
  }

  /* ------------------------------------------------------------------------
     8. Interactive AI Simulator & Automation ROI Calculator
     ------------------------------------------------------------------------ */
  var AI_SCENARIOS = {
    rag: {
      title: 'Enterprise RAG Knowledge & Policy Copilot',
      model: 'claude-4-sonnet + pgvector-hybrid-v3',
      latency: '310ms retrieval · 48 tok/s',
      prompt: 'Analyze our Q3 EMEA enterprise licensing agreements and flag any non-standard indemnification clauses or SLA credits exceeding 15%.',
      output: [
        '→ [VECTOR RETRIEVAL] Scanned 1,420 indexed PDF contracts in 184ms (Top-K=6, Rerank Score: 0.964)',
        '→ [CITATION 01] MSA-2026-NordicBank.pdf (Section 9.2): Cap on liability modified to 2.5x annual fees.',
        '→ [CITATION 02] SLA-2026-bahn-cloud.pdf (Exhibit B): Uptime credit escalates to 22% if P1 incident > 45 mins.',
        '→ [ACTION GENERATED] Created 2 legal review tasks in Jira & drafted redline counter-clause compliant with 2TDV Policy v4.'
      ],
      json: '{\n  "status": "completed",\n  "contracts_scanned": 1420,\n  "flagged_agreements": ["MSA-2026-NordicBank", "SLA-2026-bahn-cloud"],\n  "risk_score": "MEDIUM_HIGH",\n  "confidence": 0.986\n}'
    },
    media: {
      title: 'Picso C2PA Provenance & Multi-Format Media Classifier',
      model: '2tdv-vision-c2pa-v2 + whisper-large-v3',
      latency: '190ms inspect · C2PA Signed',
      prompt: 'Inspect uploaded 4K ProRes clip "neon_tokyo_rain.mov": verify C2PA Content Credentials, generate IPTC tags, check bitrate, and apply preview watermark.',
      output: [
        '→ [C2PA MANIFEST] Valid cryptographic signature detected: Camera Sony FX3 -> DaVinci Resolve Studio 20.',
        '→ [AI DISCLOSURE] Classified as: HUMAN-MADE (0.01% synthetic probability). Badge attached to public listing.',
        '→ [TRANSCODE PIPELINE] Generated 4K master, 1080p, 720p, and 16-frame hover scrub strip on Cloudflare R2.',
        '→ [AUTO-TAGGING] Extracted 18 IPTC keywords: #cyberpunk #tokyo #neon #rain #4k60fps #anamorphic.'
      ],
      json: '{\n  "asset_id": "PX-VID-90412",\n  "c2pa_verified": true,\n  "origin_label": "human_made",\n  "resolutions_ready": ["3840x2160", "1920x1080", "1280x720"],\n  "watermark_applied": true\n}'
    },
    ocr: {
      title: 'Autonomous Financial Invoice & Multi-Currency Reconciler',
      model: 'gemini-4-pro-vision + deterministic-ledger-engine',
      latency: '420ms end-to-end · 99.7% precision',
      prompt: 'Extract line items, EU VAT Reverse Charge status, and IBAN routing from batch of 48 supplier PDFs and sync with Stripe & NetSuite.',
      output: [
        '→ [OCR LAYOUT ENGINE] Parsed 48 multi-page invoices across USD, EUR, and GBP with zero human intervention.',
        '→ [VAT VALIDATION] Verified 46 VIES EU VAT numbers online; flagged 2 suppliers with expired VAT certificates.',
        '→ [ERP WEBHOOK] Posted balanced journal entries to NetSuite & scheduled Stripe Connect payout batch #Oct-26.'
      ],
      json: '{\n  "batch_id": "RECON-2026-10-25",\n  "invoices_processed": 48,\n  "total_reconciled_usd": 184920.50,\n  "vies_vat_verified": 46,\n  "exceptions_routed": 2\n}'
    },
    agent: {
      title: 'Multi-Agent Customer Operations & License Provisioning',
      model: '2tdv-agent-orchestrator + tool-calling-v3',
      latency: '265ms tool execution',
      prompt: 'Customer requests upgrade from Picso Regular ($72) to Extended License ($599) with prorated credit and immediate domain binding for *.agencyclient.com.',
      output: [
        '→ [AGENT: BILLING] Verified original Order #2TDV-8841 ($72 paid). Calculated prorated upgrade balance: $527.00 USD.',
        '→ [AGENT: LICENSING] Generated Extended License key PX-7KQ2-9941-2TDV with wildcard domain binding *.agencyclient.com.',
        '→ [AGENT: DELIVERY] Issued numbered PDF Invoice #INV-2026-4410 and sent signed License Certificate to buyer.'
      ],
      json: '{\n  "workflow": "license_tier_upgrade",\n  "previous_tier": "regular",\n  "new_tier": "extended",\n  "prorated_charge_usd": 527.00,\n  "wildcard_domain_enabled": true\n}'
    }
  };

  function initAISimulator() {
    var box = document.getElementById('ai-simulator-console');
    if (!box) return;

    var currentKey = 'rag';

    function renderScenario(key, animate) {
      currentKey = key;
      var data = AI_SCENARIOS[key] || AI_SCENARIOS.rag;
      var titleEl = document.getElementById('ai-sim-title');
      var modelEl = document.getElementById('ai-sim-model');
      var latEl = document.getElementById('ai-sim-latency');
      var promptEl = document.getElementById('ai-sim-prompt');
      var outEl = document.getElementById('ai-sim-output');
      var jsonEl = document.getElementById('ai-sim-json');

      if (titleEl) titleEl.textContent = data.title;
      if (modelEl) modelEl.textContent = data.model;
      if (latEl) latEl.textContent = data.latency;
      if (promptEl) promptEl.value = data.prompt;

      if (outEl) {
        if (animate) {
          outEl.innerHTML = '<div class="text-lime">⟳ Executing multi-step AI pipeline & verifying guardrails...</div>';
          setTimeout(function () {
            outEl.innerHTML = data.output.map(function (line) {
              return '<div style="margin-bottom:6px">' + line + '</div>';
            }).join('');
          }, 260);
        } else {
          outEl.innerHTML = data.output.map(function (line) {
            return '<div style="margin-bottom:6px">' + line + '</div>';
          }).join('');
        }
      }
      if (jsonEl) jsonEl.textContent = data.json;
    }

    document.querySelectorAll('[data-ai-scenario]').forEach(function (btn) {
      btn.addEventListener('click', function () {
        document.querySelectorAll('[data-ai-scenario]').forEach(function (b) { b.classList.remove('active'); });
        btn.classList.add('active');
        renderScenario(btn.getAttribute('data-ai-scenario'), true);
      });
    });

    var runBtn = document.getElementById('ai-sim-run-btn');
    if (runBtn) {
      runBtn.addEventListener('click', function () {
        renderScenario(currentKey, true);
        showToast('Executed simulated AI pipeline: ' + AI_SCENARIOS[currentKey].title);
      });
    }

    renderScenario('rag', false);
  }

  /* Automation ROI Calculator */
  function initROICalculator() {
    var teamInput = document.getElementById('roi-team-size');
    var hoursInput = document.getElementById('roi-hours-week');
    var rateInput = document.getElementById('roi-hourly-rate');
    if (!teamInput || !hoursInput || !rateInput) return;

    function updateROI() {
      var team = Number(teamInput.value) || 12;
      var hours = Number(hoursInput.value) || 9;
      var rate = Number(rateInput.value) || 65;

      var teamVal = document.getElementById('roi-team-val');
      var hoursVal = document.getElementById('roi-hours-val');
      var rateVal = document.getElementById('roi-rate-val');
      if (teamVal) teamVal.textContent = team + ' people';
      if (hoursVal) hoursVal.textContent = hours + ' hrs/wk';
      if (rateVal) rateVal.textContent = '$' + rate + '/hr';

      var annualHoursSaved = Math.round(team * hours * 52 * 0.78);
      var annualDollarSaved = Math.round(annualHoursSaved * rate);
      var paybackWeeks = Math.max(2, Math.min(10, Math.round((16500 / (annualDollarSaved / 52)))));

      var savedHoursEl = document.getElementById('roi-result-hours');
      var savedUsdEl = document.getElementById('roi-result-usd');
      var paybackEl = document.getElementById('roi-result-payback');

      if (savedHoursEl) savedHoursEl.textContent = annualHoursSaved.toLocaleString() + ' hrs/yr';
      if (savedUsdEl) savedUsdEl.textContent = '$' + annualDollarSaved.toLocaleString();
      if (paybackEl) paybackEl.textContent = paybackWeeks + ' weeks';
    }

    teamInput.addEventListener('input', updateROI);
    hoursInput.addEventListener('input', updateROI);
    rateInput.addEventListener('input', updateROI);
    updateROI();
  }

  /* ------------------------------------------------------------------------
     9. Interactive Project Scope & Cost Estimator (services.html & contact.html)
     ------------------------------------------------------------------------ */
  function initProjectEstimator() {
    var form = document.getElementById('project-estimator-box');
    if (!form) return;

    function recalc() {
      var base = 8500;
      var weeks = 3;
      var typeEl = form.querySelector('input[name="est_type"]:checked');
      if (typeEl) {
        base = Number(typeEl.getAttribute('data-cost') || 8500);
        weeks = Number(typeEl.getAttribute('data-weeks') || 3);
      }

      form.querySelectorAll('input[name="est_addon"]:checked').forEach(function (chk) {
        base += Number(chk.getAttribute('data-cost') || 0);
        weeks += Number(chk.getAttribute('data-weeks') || 0);
      });

      var costOut = document.getElementById('est-total-cost');
      var timeOut = document.getElementById('est-total-weeks');
      if (costOut) costOut.textContent = '$' + base.toLocaleString() + ' USD';
      if (timeOut) timeOut.textContent = weeks + ' – ' + (weeks + 2) + ' Weeks';
    }

    form.addEventListener('change', recalc);
    recalc();
  }

  /* ------------------------------------------------------------------------
     10. Public License Verification Engine (verify-license.html)
     ------------------------------------------------------------------------ */
  function initLicenseVerifier() {
    var input = document.getElementById('license-verify-input');
    var btn = document.getElementById('license-verify-btn');
    var certBox = document.getElementById('license-cert-output');
    if (!input || !certBox) return;

    function renderCertificate(rawKey) {
      var key = (rawKey || '').trim().toUpperCase();
      var record = window.TDV_LICENSES[key];

      if (!record && key.length >= 6) {
        // Dynamically synthesize a valid verified demo certificate for any custom key entered
        record = {
          valid: true,
          id: key,
          product: 'Picso — Stock Photo, Video & Music Marketplace Script (v1.0.0)',
          tier: 'Extended Agency License (Verified Live Demo)',
          licensee: 'Verified 2TDV Commercial Partner',
          domain: 'production-client-domain.com',
          issued: 'October 25, 2026',
          status: 'ACTIVE · LIFETIME VALIDITY',
          c2pa: 'Enabled · Cryptographic Signature Valid',
          hash: 'sha256:8e41d092a6c73f19b502e8831c4a97d06b21f5e390a4c182'
        };
      }

      if (!record) {
        certBox.innerHTML =
          '<div class="card" style="border-color:var(--rose);text-align:center;padding:32px">' +
            '<span class="badge badge-rose">INVALID FORMAT</span>' +
            '<h3 style="margin-top:12px">Please enter a valid 2TDV or Picso License ID</h3>' +
            '<p class="text-muted" style="margin-top:6px">Try clicking one of the sample keys above (e.g. <code class="mono">PX-7KQ2-9941-2TDV</code>).</p>' +
          '</div>';
        return;
      }

      var statusBadge = record.valid
        ? '<span class="badge badge-lime">✓ CRYPTOGRAPHICALLY VERIFIED</span>'
        : '<span class="badge badge-rose">✕ REVOKED / INVALID LICENSE</span>';

      var borderStyle = record.valid
        ? 'border-color:rgba(212,255,58,0.45)'
        : 'border-color:rgba(251,113,133,0.55)';

      certBox.innerHTML =
        '<div class="certificate-card" style="' + borderStyle + '">' +
          '<div style="display:flex;justify-content:space-between;align-items:flex-start;gap:16px;flex-wrap:wrap">' +
            '<div>' +
              '<div class="mono text-lime" style="font-size:11.5px;letter-spacing:0.1em;text-transform:uppercase">2TDV Technologies · Official Commercial License Registry</div>' +
              '<h3 style="font-size:24px;margin-top:6px;color:#fff">' + record.product + '</h3>' +
            '</div>' +
            statusBadge +
          '</div>' +
          '<div class="cert-grid">' +
            '<div class="cert-field"><label>License Certificate ID</label><div class="mono text-lime">' + record.id + '</div></div>' +
            '<div class="cert-field"><label>Commercial License Tier</label><div>' + record.tier + '</div></div>' +
            '<div class="cert-field"><label>Registered Licensee / Organization</label><div>' + record.licensee + '</div></div>' +
            '<div class="cert-field"><label>Authorized Domain Binding</label><div class="mono">' + record.domain + '</div></div>' +
            '<div class="cert-field"><label>Issue Date & Term</label><div>' + record.issued + ' — ' + record.status + '</div></div>' +
            '<div class="cert-field"><label>Provenance & Security</label><div>' + record.c2pa + '</div></div>' +
          '</div>' +
          '<div style="margin-top:24px;padding-top:18px;border-top:1px solid rgba(255,255,255,0.1);display:flex;justify-content:space-between;align-items:center;flex-wrap:wrap;gap:12px">' +
            '<div class="mono" style="font-size:11.5px;color:#8b93b0;word-break:break-all">' + record.hash + '</div>' +
            '<button type="button" class="btn btn-ghost btn-sm" onclick="window.showToast(\'Downloaded signed PDF Certificate ' + record.id + '.pdf\')">Download Signed PDF Certificate</button>' +
          '</div>' +
        '</div>';
    }

    if (btn) {
      btn.addEventListener('click', function () {
        renderCertificate(input.value);
        showToast('Verified license key against 2TDV registry');
      });
    }

    document.querySelectorAll('[data-sample-key]').forEach(function (sampleBtn) {
      sampleBtn.addEventListener('click', function () {
        var k = sampleBtn.getAttribute('data-sample-key');
        input.value = k;
        renderCertificate(k);
      });
    });

    renderCertificate(input.value || 'PX-7KQ2-9941-2TDV');
  }

  /* ------------------------------------------------------------------------
     11. Checkout Calculation & Instant Order Provisioning (checkout.html)
     ------------------------------------------------------------------------ */
  function initCheckout() {
    var form = document.getElementById('checkout-form');
    if (!form) return;

    var tierSelect = document.getElementById('checkout-tier-select');
    var productSelect = document.getElementById('checkout-product-select');
    var installAddon = document.getElementById('checkout-addon-install');
    var promoInput = document.getElementById('checkout-promo-input');
    var promoBtn = document.getElementById('checkout-promo-btn');
    var discountApplied = false;

    function updateTotals() {
      var prodId = productSelect ? productSelect.value : 'picso';
      var prod = window.TDV_CATALOG.find(function (p) { return p.id === prodId; }) || window.TDV_CATALOG[0];
      var tier = tierSelect ? tierSelect.value : 'regular';
      var basePrice = tier === 'extended' ? prod.priceExtended : prod.priceRegular;
      var addonPrice = (installAddon && installAddon.checked) ? 149 : 0;
      var subtotal = basePrice + addonPrice;
      var discount = discountApplied ? Math.round(subtotal * 0.15) : 0;
      var total = subtotal - discount;

      var nameEl = document.getElementById('co-summary-name');
      var baseEl = document.getElementById('co-summary-base');
      var addonEl = document.getElementById('co-summary-addon');
      var discEl = document.getElementById('co-summary-discount');
      var totalEl = document.getElementById('co-summary-total');

      if (nameEl) nameEl.textContent = prod.name + ' (' + (tier === 'extended' ? 'Extended License' : 'Regular License') + ')';
      if (baseEl) baseEl.textContent = '$' + basePrice + '.00';
      if (addonEl) addonEl.textContent = addonPrice ? '+$' + addonPrice + '.00' : '$0.00';
      if (discEl) discEl.textContent = discount ? '-$' + discount + '.00 (15% OFF)' : '$0.00';
      if (totalEl) totalEl.textContent = '$' + total + '.00 USD';
    }

    if (tierSelect) tierSelect.addEventListener('change', updateTotals);
    if (productSelect) productSelect.addEventListener('change', updateTotals);
    if (installAddon) installAddon.addEventListener('change', updateTotals);

    if (promoBtn && promoInput) {
      promoBtn.addEventListener('click', function () {
        var code = promoInput.value.trim().toUpperCase();
        if (code === '2TDVLAUNCH' || code === 'PICSO15' || code.length >= 4) {
          discountApplied = true;
          updateTotals();
          showToast('Applied 15% launch partner discount (' + (code || '2TDVLAUNCH') + ')');
        } else {
          showToast('Enter code 2TDVLAUNCH for 15% off');
        }
      });
    }

    form.addEventListener('submit', function (e) {
      e.preventDefault();
      var confirmation = document.getElementById('checkout-confirmation-modal');
      if (confirmation) {
        confirmation.classList.add('open');
      }
      showToast('Order provisioned! License key & PDF certificate generated.');
    });

    updateTotals();
  }

  /* ------------------------------------------------------------------------
     12. Product Detail Page Dynamic Switcher (product-picso.html)
     ------------------------------------------------------------------------ */
  function initProductDetail() {
    var licenseRadios = document.querySelectorAll('input[name="picso_license_tier"]');
    var buyBtn = document.getElementById('pdp-add-to-cart-btn');
    var priceDisplay = document.getElementById('pdp-active-price');
    if (!licenseRadios.length) return;

    var selectedTier = 'regular';
    licenseRadios.forEach(function (r) {
      r.addEventListener('change', function () {
        selectedTier = r.value;
        var price = r.getAttribute('data-price') || '72';
        if (priceDisplay) priceDisplay.textContent = '$' + price;
      });
    });

    if (buyBtn) {
      buyBtn.addEventListener('click', function () {
        window.addToCart('picso', selectedTier);
      });
    }
  }

  /* ------------------------------------------------------------------------
     13. Global Event Listeners & Initialization
     ------------------------------------------------------------------------ */
  document.addEventListener('DOMContentLoaded', function () {
    injectGlobalOverlays();
    initTheme();
    updateCartUI();
    initTabs();
    initMarketplace();
    initAISimulator();
    initROICalculator();
    initProjectEstimator();
    initLicenseVerifier();
    initCheckout();
    initProductDetail();

    // Cart & Command Palette triggers
    document.addEventListener('click', function (e) {
      if (e.target.closest('[data-open-cart]')) {
        e.preventDefault();
        openCartDrawer();
      }
      if (e.target.closest('[data-close-cart]') || e.target.id === 'tdv-cart-backdrop') {
        closeCartDrawer();
      }
      if (e.target.closest('[data-open-cmd]')) {
        e.preventDefault();
        openCmdModal();
      }
      if (e.target.closest('[data-close-cmd]') || e.target.id === 'tdv-cmd-backdrop') {
        closeCmdModal();
      }
      if (e.target.closest('[data-mobile-toggle]')) {
        var drawer = document.getElementById('mobile-nav-drawer');
        if (drawer) drawer.classList.toggle('open');
      }
      if (e.target.closest('[data-mobile-close]') || e.target.id === 'mobile-nav-drawer') {
        var drawerClose = document.getElementById('mobile-nav-drawer');
        if (drawerClose) drawerClose.classList.remove('open');
      }
    });

    var cmdInput = document.getElementById('tdv-cmd-input');
    if (cmdInput) {
      cmdInput.addEventListener('input', function () {
        renderCmdResults(cmdInput.value);
      });
    }

    document.addEventListener('keydown', function (e) {
      if ((e.metaKey || e.ctrlKey) && e.key.toLowerCase() === 'k') {
        e.preventDefault();
        openCmdModal();
      }
      if (e.key === 'Escape') {
        closeCmdModal();
        closeCartDrawer();
      }
    });

    // Demo form submission handler for static forms
    document.querySelectorAll('form[data-demo-form]').forEach(function (f) {
      f.addEventListener('submit', function (e) {
        e.preventDefault();
        var msg = f.getAttribute('data-demo-msg') || 'Submitted successfully! Our engineering team will respond within 4 business hours.';
        showToast(msg);
        var feedback = f.querySelector('.form-success-banner');
        if (feedback) feedback.style.display = 'block';
      });
    });
  });
})();
