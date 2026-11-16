---
title: BondRota
subtitle: Gestione del trasporto universitario
description: "Una piattaforma di trasporto universitario per le città dell’entroterra: gli studenti prenotano andata e ritorno per turno, il sistema pianifica i viaggi da solo e il team segue gli autisti in tempo reale. API in Go e dashboard in Next.js."
highlights:
  - Pianificazione automatica dei viaggi a partire dalle prenotazioni per turno, con assegnazione di veicoli e autisti e percorso dinamico calcolato tramite OSRM.
  - API REST in Go con Chi, pgx e Goose, autenticazione JWT per ruoli (admin, autista e cliente) e rate limit sui login.
  - Dashboard amministrativa in Next.js con Clean Architecture per feature, monitoraggio degli autisti e test end-to-end con Playwright.
  - CI/CD su GitHub Actions con test unitari e di integrazione; l'API va su Render e la dashboard su Vercel solo dopo che tutto è passato.
image: ../../../assets/projects/bondrota-desktop.png
mobileImage: ../../../assets/projects/bondrota-mobile.png
imageAlt: "Dashboard amministrativa di BondRota con indicatori di viaggi, prenotazioni per turno e flotta, e la schermata di monitoraggio su mobile con la mappa di un viaggio in corso."
year: 2025
status: em-desenvolvimento
order: 2
privateSite: true
stack: [Go, PostgreSQL, React, TypeScript, Docker]
links:
  repo: https://github.com/fredsaggio/bondrota-api
---
