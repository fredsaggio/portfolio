import type { Profile } from '../types';

/** Dados pessoais e textos fixos em português. Fonte: currículo (cv-ptbr.pdf). */
export const profile: Profile = {
  name: 'Frederico Saggio',
  fullName: 'Frederico Santos Saggio',
  logo: 'fred',
  title: 'Engenheiro de Software',
  heroStack: ['Go', 'Python', 'PostgreSQL', 'React', 'TypeScript', 'AI Agents'],
  focus: 'Full stack e AI Agents',
  location: 'Maceió, Brasil',
  status: 'Estágio na Propitank',
  // Baseado no "Sobre" do LinkedIn
  intro:
    'Construo sistemas completos, do banco de dados à interface: APIs escaláveis em Go e Python, dados no PostgreSQL e front-ends em React e TypeScript. Hoje venho me aprofundando em AI Agents aplicados a problemas reais, além de cuidar de infraestrutura em nuvem, containers e pipelines de CI/CD.',
  // Rascunho da seção Sobre mim: refine à vontade.
  about: [
    'Sou apaixonado por tecnologia e por entender como as coisas funcionam por dentro. Hoje transformo essa curiosidade em profissão como Engenheiro de Software, enquanto curso Ciência da Computação na UNIMA, em Maceió.',
    'O que mais me motiva é ver uma ideia sair do papel e virar algo que as pessoas usam de verdade. Por isso gosto de projetos próprios, de hackathons e de estar sempre aprendendo algo novo. Aqui ficam alguns momentos dessa trajetória.',
  ],
  photoNote: 'Graduando em Ciência da Computação pela UNIMA',
  email: 'saggiofrederico@gmail.com',
  links: {
    github: 'https://github.com/fredsaggio',
    linkedin: 'https://linkedin.com/in/fredericosaggio',
  },
  cvUrl: undefined,
  skillGroups: [
    {
      title: 'Backend',
      text: 'APIs RESTful, regras de negócio e integrações. Go no ShortBit e na MSPA, FastAPI na Propitank.',
      items: ['Go', 'Python', 'FastAPI', 'APIs RESTful', 'SpiceDB'],
    },
    {
      title: 'Dados e mensageria',
      text: 'Modelagem multi-tenant, otimização de consultas, migrations, cache e processamento assíncrono.',
      items: ['PostgreSQL', 'SQLAlchemy', 'Alembic', 'Redis', 'RabbitMQ'],
    },
    {
      title: 'Frontend',
      text: 'Interfaces web para visualização de dados operacionais e o painel do ShortBit.',
      items: ['React', 'Next.js', 'TypeScript', 'JavaScript', 'HTML', 'CSS'],
    },
    {
      title: 'Infraestrutura',
      text: 'Aplicações em containers, pipelines de entrega e proxy reverso.',
      items: ['Docker', 'Podman', 'CI/CD', 'Caddy', 'Git', 'GitHub'],
    },
    {
      title: 'Engenharia e qualidade',
      text: 'Soluções robustas, testáveis e fáceis de manter, com testes unitários e de integração contra um banco real.',
      items: ['SOLID', 'Clean Code', 'Clean Architecture', 'Testes unitários', 'Testcontainers', 'Playwright'],
    },
    {
      title: 'IA aplicada',
      text: 'AI Agents aplicados a problemas reais: chatbot, monitoramento em tempo real e automação de coleta de dados.',
      items: ['LangChain', 'Agentes de IA', 'SerpAPI'],
    },
  ],
  languages: [
    { name: 'Português', level: 'nativo' },
    { name: 'Inglês', level: 'B1' },
    { name: 'Italiano', level: 'B1' },
  ],
  services: [
    { title: 'Sistemas completos', text: 'Do modelo de dados à interface e ao deploy: API, banco, front-end e infraestrutura de um mesmo produto, como no ShortBit e no BondRota.' },
    { title: 'APIs e backend', text: 'APIs RESTful em Go e Python (FastAPI), com regras de negócio testadas e atenção a requisitos como a LGPD.' },
    { title: 'Interfaces web', text: 'Front-ends em React e TypeScript conectados às APIs, como painéis e telas de visualização de dados.' },
    { title: 'Dados e infraestrutura', text: 'PostgreSQL multi-tenant, cache com Redis, filas com RabbitMQ, containers Docker, CI/CD e proxy reverso com Caddy.' },
    { title: 'Agentes de IA', text: 'Integração de agentes com LangChain e automação de coleta e auditoria de dados.' },
  ],
};
