---
title: stCall - Software de Call Center
description: Documentação completa do stCall, software de call center com WebRTC e integração Asterisk.
navigation: false
---

::u-page-hero
---
title: stCall
description: Software de call center otimizado para **60+ agentes simultâneos**, com chamadas via WebRTC e integração nativa com Asterisk PBX.
links:
  - label: Começar
    to: /pt-BR/guia-inicio/introducao
    icon: i-lucide-arrow-right
    size: xl
  - label: Arquitetura
    to: /pt-BR/arquitetura/visao-geral
    icon: i-lucide-cpu
    size: xl
    color: neutral
    variant: subtle
---
::

::u-page-section
---
title: O que é o stCall?
description: O stCall é uma aplicação de call center de nível profissional que integra com Asterisk PBX para fornecer uma solução completa de atendimento. A aplicação utiliza WebRTC para chamadas diretamente no navegador, eliminando a necessidade de softphones externos.
---

  :::card-group
    ::::card{title="WebRTC Nativo" icon="i-lucide-phone"}
    Chamadas diretas pelo navegador usando SIP.js e Asterisk PJSIP. Áudio de alta qualidade com codec Opus.
    ::::

    ::::card{title="Tempo Real" icon="i-lucide-radio"}
    Atualizações instantâneas via WebSocket. Dashboard ao vivo, status de agentes e controle de chamadas em tempo real.
    ::::

    ::::card{title="Painel Administrativo" icon="i-lucide-layout-dashboard"}
    Monitoramento de agentes, analytics de desempenho, gerenciamento de equipe e acesso a gravações.
    ::::

    ::::card{title="Alta Performance" icon="i-lucide-zap"}
    Construído com Bun, Nuxt 3 e PrimeVue. Otimizado para suportar mais de 60 agentes simultâneos.
    ::::
  :::
::

::u-page-section
---
title: Começando
---

  :::card-group
    ::::card{title="Introdução" icon="i-lucide-book-open" to="/pt-BR/guia-inicio/introducao"}
    Visão geral do sistema, requisitos e conceitos fundamentais.
    ::::

    ::::card{title="Instalação" icon="i-lucide-download" to="/pt-BR/guia-inicio/instalacao"}
    Configure o ambiente de desenvolvimento com Docker.
    ::::

    ::::card{title="Guia do Usuário" icon="i-lucide-user" to="/pt-BR/guia-usuario/painel"}
    Aprenda a usar o painel, fazer chamadas e gerenciar configurações.
    ::::

    ::::card{title="Arquitetura" icon="i-lucide-cpu" to="/pt-BR/arquitetura/visao-geral"}
    Entenda a arquitetura do sistema, fluxo de dados e integrações.
    ::::
  :::
::

::u-page-section
---
title: Stack Tecnológica
---

| Componente | Tecnologia |
|---|---|
| **Frontend** | Nuxt 3, Vue 3, PrimeVue 4, Tailwind CSS |
| **WebRTC** | SIP.js, Asterisk PJSIP |
| **WebSocket Server** | Bun nativo, Asterisk ARI |
| **Banco de Dados** | PostgreSQL (app), MySQL (FreePBX) |
| **ORM** | Prisma 7 com adaptadores |
| **Autenticação** | JWT (compartilhado entre frontend e WS) |
| **Containerização** | Docker + Docker Compose |
::
