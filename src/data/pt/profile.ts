import type { Profile } from '../types';

/** Dados pessoais e textos fixos em português. Fonte: currículo (cv-ptbr.pdf). */
export const profile: Profile = {
  name: 'Frederico Saggio',
  fullName: 'Frederico Santos Saggio',
  logo: 'fred',
  title: 'Engenheiro de Software',
  heroStack: ['Go', 'Python', 'PostgreSQL', 'React', 'TypeScript', 'AI Agents'],
  // Baseado no "Sobre" do LinkedIn
  intro:
    'Construo sistemas completos, do banco de dados à interface: APIs escaláveis em Go e Python, modelagem de dados com PostgreSQL e interfaces em React e TypeScript. Hoje venho me aprofundando em AI Agents aplicados a problemas reais, além de cuidar de infraestrutura em nuvem, containers e pipelines de CI/CD.',
  about: [
    "Durante minha trajetória em Ciência da Computação, participei de eventos que agregaram muito à minha formação e realizei estágios que me proporcionaram experiência prática na resolução de problemas reais.",
  ],
  photoNote: 'Graduando em Ciência da Computação pela UNIMA',
  email: 'saggiofrederico@gmail.com',
  links: {
    github: 'https://github.com/fredsaggio',
    linkedin: 'https://linkedin.com/in/fredericosaggio',
  },
  cvUrl: '/frederico-saggio-cv.pdf',
  skillGroups: [
    {
      title: 'Backend',
      items: ['Go', 'Python', 'FastAPI', 'APIs RESTful', 'SpiceDB'],
    },
    {
      title: 'Dados e mensageria',
      items: ['PostgreSQL', 'Redis', 'RabbitMQ'],
    },
    {
      title: 'Frontend',
      items: ['React', 'TypeScript', 'JavaScript', 'HTML', 'CSS'],
    },
    {
      title: 'Infraestrutura',
      items: ['Docker', 'Podman', 'CI/CD', 'Caddy', 'Git', 'GitHub'],
    },
    {
      title: 'Engenharia e qualidade',
      items: ['Princípios SOLID', 'Design Patterns', 'Domain-Driven Design'],
    },
    {
      title: 'IA aplicada',
      items: ['LangChain', 'Agentes de IA', 'SerpAPI'],
    },
  ],
  languages: [
    { name: 'Português', level: 'nativo' },
    { name: 'Inglês', level: 'B1' },
    { name: 'Italiano', level: 'B1' },
  ],
  services: [
    { title: 'Sistemas completos', text: 'Do modelo de dados à interface e ao deploy: API, banco, front-end e infraestrutura de um mesmo produto.' },
    { title: 'APIs e backend', text: 'APIs RESTful em Go e Python, com regras de negócio bem definidas, testadas e fáceis de manter.' },
    { title: 'Dados e infraestrutura', text: 'Modelagem de dados SQL, cache com Redis, filas com RabbitMQ, containers Docker, CI/CD e proxy reverso com Caddy.' },
    { title: 'Agentes de IA', text: 'Integração de agentes com LangChain e automação de coleta e auditoria de dados.' },
  ],
};
