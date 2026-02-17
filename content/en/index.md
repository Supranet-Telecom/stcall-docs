---
title: stCall - Call Center Software
description: stCall documentation - optimized call center software with WebRTC and Asterisk integration.
navigation: false
---

::u-page-hero
---
title: stCall Documentation
description: Welcome to the stCall documentation.
links:
  - label: Documentação em Português
    to: /pt-BR
    icon: i-lucide-arrow-right
    size: xl
---
::

::u-page-section
---
title: About stCall
description: stCall is a production-grade call center application designed for 60+ concurrent agents.
---

  :::callout{type="info" title="Language"}
  The documentation is currently available in **Portuguese (PT-BR)** only. English translation is coming soon.
  :::

  :::card-group
    ::::card{title="WebRTC Calling" icon="i-lucide-phone"}
    Direct browser-based calling via SIP.js and Asterisk PJSIP.
    ::::

    ::::card{title="Real-time Updates" icon="i-lucide-radio"}
    Instant updates via WebSocket for agent coordination and call routing.
    ::::

    ::::card{title="Admin Dashboard" icon="i-lucide-layout-dashboard"}
    Live agent monitoring and performance analytics.
    ::::

    ::::card{title="High Performance" icon="i-lucide-zap"}
    Built with Bun, Nuxt 3, and PrimeVue.
    ::::
  :::
::

::u-page-section
---
title: Tech Stack
---

| Component | Technology |
|---|---|
| **Frontend** | Nuxt 3, Vue 3, PrimeVue 4, Tailwind CSS |
| **WebRTC** | SIP.js, Asterisk PJSIP |
| **WebSocket Server** | Bun native, Asterisk ARI |
| **Database** | PostgreSQL (app), MySQL (FreePBX) |
| **ORM** | Prisma 7 with adapters |
| **Auth** | JWT (shared between frontend and WS) |
| **Containers** | Docker + Docker Compose |
::
