---
title: BondRota
subtitle: Gestão de transporte universitário
description: "Plataforma de transporte universitário para cidades do interior: os alunos reservam ida e volta por turno, o sistema planeja as viagens sozinho e a equipe acompanha os motoristas em tempo real. API em Go e painel em Next.js."
highlights:
  - Planejamento automático de viagens a partir das reservas por turno, com alocação de veículos e motoristas e rota dinâmica calculada via OSRM.
  - API REST em Go com Chi, pgx e Goose, autenticação JWT por papéis (admin, motorista e cliente) e rate limit nos logins.
  - Painel administrativo em Next.js com Clean Architecture por feature, monitoramento dos motoristas e testes end-to-end com Playwright.
  - CI/CD no GitHub Actions com testes unitários e de integração; a API sobe no Render e o painel na Vercel só depois que tudo passa.
image: ../../../assets/projects/bondrota-desktop.png
mobileImage: ../../../assets/projects/bondrota-mobile.png
imageAlt: "Painel administrativo do BondRota com indicadores de viagens, reservas por turno e frota, e a tela de monitoramento no celular com o mapa de uma viagem em andamento."
year: 2025
status: em-desenvolvimento
order: 2
privateSite: true
stack: [Go, PostgreSQL, React, TypeScript, Docker]
links:
  repo: https://github.com/fredsaggio/bondrota-api
---
