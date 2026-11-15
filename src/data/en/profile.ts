import type { Profile } from '../types';
import { profile as pt } from '../pt/profile';

/** English texts. Shared data (name, links, email) comes from the Portuguese profile. */
export const profile: Profile = {
  ...pt,
  title: 'Software Engineer',
  heroStack: ['Go', 'Python', 'PostgreSQL', 'React', 'TypeScript', 'AI Agents'],
  focus: 'Full stack and AI Agents',
  location: 'Maceió, Brazil',
  status: 'Intern at Propitank',
  intro:
    'I build complete systems, from the database to the interface: scalable APIs in Go and Python, data in PostgreSQL and front ends in React and TypeScript. I am currently going deeper into AI Agents applied to real-world problems, while also taking care of cloud infrastructure, containers and CI/CD pipelines.',
  about: [
    'I am passionate about technology and about understanding how things work under the hood. Today I turn that curiosity into a career as a Software Engineer, while studying Computer Science at UNIMA, in Maceió, Brazil.',
    'What drives me most is seeing an idea leave the drawing board and become something people actually use. That is why I enjoy side projects, hackathons and always learning something new. Here are a few moments from that journey.',
  ],
  photoNote: 'Computer Science student at UNIMA',
  skillGroups: [
    {
      title: 'Backend',
      text: 'RESTful APIs, business rules and integrations. Go at ShortBit and MSPA, FastAPI at Propitank.',
      items: ['Go', 'Python', 'FastAPI', 'RESTful APIs', 'SpiceDB'],
    },
    {
      title: 'Data and messaging',
      text: 'Multi-tenant modeling, query optimization, migrations, caching and asynchronous processing.',
      items: ['PostgreSQL', 'SQLAlchemy', 'Alembic', 'Redis', 'RabbitMQ'],
    },
    {
      title: 'Frontend',
      text: 'Web interfaces for operational data visualization and the ShortBit dashboard.',
      items: ['React', 'Next.js', 'TypeScript', 'JavaScript', 'HTML', 'CSS'],
    },
    {
      title: 'Infrastructure',
      text: 'Containerized applications, delivery pipelines and reverse proxy.',
      items: ['Docker', 'Podman', 'CI/CD', 'Caddy', 'Git', 'GitHub'],
    },
    {
      title: 'Engineering and quality',
      text: 'Robust, testable and maintainable solutions, with unit tests and integration tests against a real database.',
      items: ['SOLID', 'Clean Code', 'Clean Architecture', 'Unit tests', 'Testcontainers', 'Playwright'],
    },
    {
      title: 'Applied AI',
      text: 'AI Agents applied to real-world problems: chatbot, real-time monitoring and automated data collection.',
      items: ['LangChain', 'AI Agents', 'SerpAPI'],
    },
  ],
  languages: [
    { name: 'Portuguese', level: 'native' },
    { name: 'English', level: 'B1' },
    { name: 'Italian', level: 'B1' },
  ],
  services: [
    { title: 'End-to-end systems', text: 'From the data model to the interface and deployment: API, database, front end and infrastructure of the same product, as in ShortBit and BondRota.' },
    { title: 'APIs and backend', text: 'RESTful APIs in Go and Python (FastAPI), with tested business rules and attention to requirements such as LGPD (Brazilian data protection law).' },
    { title: 'Web interfaces', text: 'React and TypeScript front ends connected to the APIs, such as dashboards and data visualization screens.' },
    { title: 'Data and infrastructure', text: 'Multi-tenant PostgreSQL, Redis caching, RabbitMQ queues, Docker containers, CI/CD and a Caddy reverse proxy.' },
    { title: 'AI Agents', text: 'Agent integration with LangChain and automated data collection and auditing.' },
  ],
};
