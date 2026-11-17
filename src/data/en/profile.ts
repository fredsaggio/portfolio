import type { Profile } from '../types';
import { profile as pt } from '../pt/profile';

/** English texts. Shared data (name, links, email) comes from the Portuguese profile. */
export const profile: Profile = {
  ...pt,
  title: 'Software Engineer',
  heroStack: ['Go', 'Python', 'PostgreSQL', 'React', 'TypeScript', 'AI Agents'],
  intro:
    'I build complete systems, from the database to the interface: scalable APIs in Go and Python, data modeling with PostgreSQL and interfaces in React and TypeScript. I am currently going deeper into AI Agents applied to real-world problems, while also taking care of cloud infrastructure, containers and CI/CD pipelines.',
  about: [
    "Throughout my journey in Computer Science, I have had the chance to take part in events that added a lot to my career and to who I am as a professional. I have also done internships that gave me hands-on experience in the field, dealing with real day-to-day problems.",
  ],
  photoNote: 'Computer Science student at UNIMA',
  skillGroups: [
    {
      title: 'Backend',
      items: ['Go', 'Python', 'FastAPI', 'RESTful APIs', 'SpiceDB'],
    },
    {
      title: 'Data and messaging',
      items: ['PostgreSQL', 'Redis', 'RabbitMQ'],
    },
    {
      title: 'Frontend',
      items: ['React', 'TypeScript', 'JavaScript', 'HTML', 'CSS'],
    },
    {
      title: 'Infrastructure',
      items: ['Docker', 'Podman', 'CI/CD', 'Caddy', 'Git', 'GitHub'],
    },
    {
      title: 'Engineering and quality',
      items: ['SOLID principles', 'Design Patterns', 'Domain-Driven Design'],
    },
    {
      title: 'Applied AI',
      items: ['LangChain', 'AI Agents', 'SerpAPI', 'Graphify'],
    },
  ],
  languages: [
    { name: 'Portuguese', level: 'native' },
    { name: 'English', level: 'B1' },
    { name: 'Italian', level: 'B1' },
  ],
  services: [
    { title: 'End-to-end systems', text: 'From the data model to the interface and deployment: API, database, front end and infrastructure of the same product.' },
    { title: 'APIs and backend', text: 'RESTful APIs in Go and Python, with well-defined business rules that are tested and easy to maintain.' },
    { title: 'Data and infrastructure', text: 'SQL data modeling, Redis caching, RabbitMQ queues, Docker containers, CI/CD and a Caddy reverse proxy.' },
    { title: 'AI Agents', text: 'Agent integration with LangChain and automated data collection and auditing.' },
  ],
  experience: [
    {
      company: 'MSPA',
      role: 'Backend Developer · Intern',
      period: 'Feb 2026 – Aug 2026',
      place: 'Maceió · Hybrid',
      text: 'I worked on the Compass backend in Go and PostgreSQL: endpoints for LGPD requirements, isolating each client\'s data (multi-tenant), audit automation with AI agents and integration tests.',
      stack: ['Go', 'PostgreSQL', 'SpiceDB', 'Podman', 'SerpAPI'],
    },
    {
      company: 'Propitank',
      role: 'Software Engineer · Intern',
      period: 'Sep 2026 – Present',
      place: 'Maceió · Hybrid',
      text: 'Together with another developer, I built from scratch the web platform that manages the stations, from the code to the deploy. It receives sensor data, raises an alert when something goes wrong and includes an AI agent with a WhatsApp bot that speeds up the operators\' work, with everything recorded on the platform. I also set up and maintain the infrastructure: Docker containers, CI/CD pipelines and a Caddy reverse proxy.',
      stack: ['Python', 'FastAPI', 'LangChain', 'React', 'TypeScript', 'Docker', 'Caddy'],
      current: true,
    },
  ],
};
