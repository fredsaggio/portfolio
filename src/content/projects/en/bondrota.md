---
title: BondRota
subtitle: University transport management
description: "A university transport platform for small inland cities: students book round trips by shift, the system plans the trips on its own and the team tracks drivers in real time. Go API and a Next.js dashboard."
highlights:
  - Automatic trip planning from shift bookings, assigning vehicles and drivers, with dynamic routes calculated via OSRM.
  - REST API in Go with Chi, pgx and Goose, role-based JWT authentication (admin, driver and client) and rate-limited logins.
  - Admin dashboard in Next.js with feature-based Clean Architecture, driver monitoring and end-to-end tests with Playwright.
  - CI/CD on GitHub Actions with unit and integration tests; the API ships to Render and the dashboard to Vercel only after everything passes.
image: ../../../assets/projects/bondrota-desktop.png
mobileImage: ../../../assets/projects/bondrota-mobile.png
imageAlt: BondRota admin dashboard with trip, booking and fleet indicators, and the mobile login screen with a bus illustration.
year: 2025
status: em-desenvolvimento
order: 2
stack: [Go, PostgreSQL, Next.js, React, TypeScript, Docker, Supabase, OSRM, Playwright]
links:
  repo: https://github.com/fredsaggio/bondrota-api
---
