import type { Profile } from '../types';
import { profile as pt } from '../pt/profile';

/** Testi in italiano. I dati condivisi (nome, link, email) vengono dal profilo in portoghese. */
export const profile: Profile = {
  ...pt,
  title: 'Ingegnere del Software',
  heroStack: ['Go', 'Python', 'PostgreSQL', 'React', 'TypeScript', 'AI Agents'],
  intro:
    'Costruisco sistemi completi, dal database all’interfaccia: API scalabili in Go e Python, modellazione dei dati con PostgreSQL e interfacce in React e TypeScript. Attualmente sto approfondendo gli AI Agents applicati a problemi reali, oltre a occuparmi di infrastruttura cloud, container e pipeline CI/CD.',
  about: [
    "Durante il mio percorso in Informatica ho avuto l’opportunità di partecipare a eventi che hanno dato molto alla mia carriera e alla mia crescita professionale. Ho svolto stage che mi hanno dato esperienza pratica nel settore, affrontando i problemi di tutti i giorni.",
  ],
  photoNote: 'Studente di Informatica presso UNIMA',
  skillGroups: [
    {
      title: 'Backend',
      items: ['Go', 'Python', 'FastAPI', 'API RESTful', 'SpiceDB'],
    },
    {
      title: 'Dati e messaggistica',
      items: ['PostgreSQL', 'SQLAlchemy', 'Alembic', 'Redis', 'RabbitMQ'],
    },
    {
      title: 'Frontend',
      items: ['React', 'TypeScript', 'JavaScript', 'HTML', 'CSS'],
    },
    {
      title: 'Infrastruttura',
      items: ['Docker', 'Podman', 'CI/CD', 'Caddy', 'Git', 'GitHub'],
    },
    {
      title: 'Ingegneria e qualità',
      items: ['Principi SOLID', 'Design Pattern', 'Domain-Driven Design'],
    },
    {
      title: 'IA applicata',
      items: ['LangChain', 'AI Agents', 'SerpAPI'],
    },
  ],
  languages: [
    { name: 'Portoghese', level: 'madrelingua' },
    { name: 'Inglese', level: 'B1' },
    { name: 'Italiano', level: 'B1' },
  ],
  services: [
    { title: 'Sistemi completi', text: 'Dal modello dei dati all’interfaccia e al deploy: API, database, front-end e infrastruttura dello stesso prodotto.' },
    { title: 'API e backend', text: 'API RESTful in Go e Python, con regole di business ben definite, testate e facili da mantenere.' },
    { title: 'Interfacce web', text: 'Interfacce in React e TypeScript collegate alle API, come dashboard e schermate di visualizzazione dei dati.' },
    { title: 'Dati e infrastruttura', text: 'Modellazione dei dati SQL, cache con Redis, code con RabbitMQ, container Docker, CI/CD e reverse proxy con Caddy.' },
    { title: 'AI Agents', text: 'Integrazione di agenti con LangChain e automazione della raccolta e dell’audit dei dati.' },
  ],
};
