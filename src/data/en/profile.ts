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
      items: ['PostgreSQL', 'SQLAlchemy', 'Alembic', 'Redis', 'RabbitMQ'],
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
      items: ['LangChain', 'AI Agents', 'SerpAPI'],
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
    { title: 'Web interfaces', text: 'React and TypeScript interfaces connected to the APIs, such as dashboards and data visualization screens.' },
    { title: 'Data and infrastructure', text: 'SQL data modeling, Redis caching, RabbitMQ queues, Docker containers, CI/CD and a Caddy reverse proxy.' },
    { title: 'AI Agents', text: 'Agent integration with LangChain and automated data collection and auditing.' },
  ],
};
