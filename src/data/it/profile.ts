import type { Profile } from '../types';
import { profile as pt } from '../pt/profile';

/** Testi in italiano. I dati condivisi (nome, link, email) vengono dal profilo in portoghese. */
export const profile: Profile = {
  ...pt,
  title: 'Ingegnere del Software',
  heroStack: ['Go', 'Python', 'PostgreSQL', 'React', 'TypeScript', 'AI Agents'],
  focus: 'Full stack e AI Agents',
  location: 'Maceió, Brasile',
  status: 'Stage presso Propitank',
  intro:
    'Costruisco sistemi completi, dal database all’interfaccia: API scalabili in Go e Python, dati in PostgreSQL e front-end in React e TypeScript. Attualmente sto approfondendo gli AI Agents applicati a problemi reali, oltre a occuparmi di infrastruttura cloud, container e pipeline CI/CD.',
  about: [
    'Sono appassionato di tecnologia e di capire come funzionano le cose dall’interno. Oggi trasformo questa curiosità in una professione come Ingegnere del Software, mentre studio Informatica presso UNIMA, a Maceió.',
    'Quello che mi motiva di più è vedere un’idea passare dalla carta a qualcosa che le persone usano davvero. Per questo mi piacciono i progetti personali, gli hackathon e imparare sempre qualcosa di nuovo. Ecco alcuni momenti di questo percorso.',
  ],
  photoNote: 'Studente di Informatica presso UNIMA',
  skillGroups: [
    {
      title: 'Backend',
      text: 'API RESTful, regole di business e integrazioni. Go in ShortBit e MSPA, FastAPI in Propitank.',
      items: ['Go', 'Python', 'FastAPI', 'API RESTful', 'SpiceDB'],
    },
    {
      title: 'Dati e messaggistica',
      text: 'Modellazione multi-tenant, ottimizzazione delle query, migrazioni, cache ed elaborazione asincrona.',
      items: ['PostgreSQL', 'SQLAlchemy', 'Alembic', 'Redis', 'RabbitMQ'],
    },
    {
      title: 'Frontend',
      text: 'Interfacce web per la visualizzazione di dati operativi e la dashboard di ShortBit.',
      items: ['React', 'Next.js', 'TypeScript', 'JavaScript', 'HTML', 'CSS'],
    },
    {
      title: 'Infrastruttura',
      text: 'Applicazioni in container, pipeline di rilascio e reverse proxy.',
      items: ['Docker', 'Podman', 'CI/CD', 'Caddy', 'Git', 'GitHub'],
    },
    {
      title: 'Ingegneria e qualità',
      text: 'Soluzioni robuste, testabili e facili da mantenere, con test unitari e di integrazione su un database reale.',
      items: ['SOLID', 'Clean Code', 'Clean Architecture', 'Test unitari', 'Testcontainers', 'Playwright'],
    },
    {
      title: 'IA applicata',
      text: 'AI Agents applicati a problemi reali: chatbot, monitoraggio in tempo reale e raccolta automatica di dati.',
      items: ['LangChain', 'AI Agents', 'SerpAPI'],
    },
  ],
  languages: [
    { name: 'Portoghese', level: 'madrelingua' },
    { name: 'Inglese', level: 'B1' },
    { name: 'Italiano', level: 'B1' },
  ],
  services: [
    { title: 'Sistemi completi', text: 'Dal modello dei dati all’interfaccia e al deploy: API, database, front-end e infrastruttura dello stesso prodotto, come in ShortBit e BondRota.' },
    { title: 'API e backend', text: 'API RESTful in Go e Python (FastAPI), con regole di business testate e attenzione a requisiti come la LGPD (legge brasiliana sulla protezione dei dati).' },
    { title: 'Interfacce web', text: 'Front-end in React e TypeScript collegati alle API, come dashboard e schermate di visualizzazione dei dati.' },
    { title: 'Dati e infrastruttura', text: 'PostgreSQL multi-tenant, cache con Redis, code con RabbitMQ, container Docker, CI/CD e reverse proxy con Caddy.' },
    { title: 'AI Agents', text: 'Integrazione di agenti con LangChain e automazione della raccolta e dell’audit dei dati.' },
  ],
};
