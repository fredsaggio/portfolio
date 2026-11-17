import { profile as profilePt } from '../data/pt/profile';
import { profile as profileEn } from '../data/en/profile';
import { profile as profileIt } from '../data/it/profile';
import type { Profile } from '../data/types';

export const languages = {
  pt: { label: 'Português', short: 'PT', htmlLang: 'pt-BR', locale: 'pt-BR' },
  en: { label: 'English', short: 'EN', htmlLang: 'en', locale: 'en-US' },
  it: { label: 'Italiano', short: 'IT', htmlLang: 'it', locale: 'it-IT' },
} as const;
export type Lang = keyof typeof languages;
export const defaultLang: Lang = 'pt';

/** Textos de interface. Toda chave de `pt` precisa existir em `en` e `it` (o TypeScript avisa se faltar). */
const ui = {
  pt: {
    'meta.title': 'Frederico Saggio · Engenheiro de Software',
    'meta.description': 'Portfólio de Frederico Saggio, engenheiro de software full stack (Go, Python, PostgreSQL, React e TypeScript) e estudante de Ciência da Computação em Maceió.',
    'nav.home': 'Início',
    'nav.about': 'Sobre',
    'about.eyebrow': 'Quem sou eu',
    'about.title': 'Sobre mim',
    'journey.title': 'Trajetória',
    'journey.prev': 'Item anterior da trajetória',
    'journey.next': 'Próximo item da trajetória',
    'journey.of': 'de',
    'nav.projects': 'Projetos',
    'nav.experience': 'Trajetória',
    'nav.skills': 'Habilidades',
    'nav.services': 'O que eu faço',
    'nav.contact': 'Contato',
    'nav.menu': 'Abrir menu',
    'nav.close': 'Fechar menu',
    'nav.title': 'Navegação',
    'nav.cv': 'Baixar currículo',
    'nav.cvShort': 'Currículo',
    'nav.talk': 'Fale comigo',
    'theme.toggle': 'Alternar tema claro/escuro',
    'skip': 'Pular para o conteúdo',
    'top': 'Voltar ao topo',
    'logo.label': 'início',
    'lang.label': 'Idioma',
    'hero.photoAlt': 'Frederico Saggio de braços cruzados, sorrindo, com camisa polo preta.',
    'hero.cta.primary': 'Ver projetos',
    'hero.cta.contact': 'Contato',
    'proj.eyebrow': 'Trabalho selecionado',
    'proj.title': 'Projetos',
    'proj.sub': 'Ideias que viraram produtos funcionando.',
    'proj.count.one': 'projeto publicado',
    'proj.count.many': 'projetos publicados',
    'proj.site': 'Acessar site',
    'proj.repo': 'Código-fonte',
    'proj.private': 'Site privado',
    'proj.privateHint': 'Sistema de uso interno: o acesso exige login.',
    'proj.details': 'Detalhes técnicos',
    'proj.status.concluido': 'Concluído',
    'proj.status.em-desenvolvimento': 'Em desenvolvimento',
    'skills.eyebrow': 'Ferramentas',
    'exp.eyebrow': 'Por onde passei',
    'exp.title': 'Trajetória',
    'exp.sub': 'As empresas em que trabalhei até aqui.',
    'skills.title': 'Habilidades',
    'skills.sub': 'O que eu uso no dia a dia para construir e manter sistemas, separado por área.',
    'skills.languages': 'Idiomas',
    'services.eyebrow': 'O que eu faço',
    'services.title': 'Áreas de atuação',
    'services.sub': 'Onde eu posso contribuir em um time de produto.',
    'contact.eyebrow': 'Contato',
    'contact.title': 'Vamos construir algo juntos.',
    'contact.text': 'Se você tem um projeto ou uma ideia em andamento, me mande uma mensagem e vamos conversar.',
    'contact.copy': 'Copiar email',
    'contact.copied': 'Email copiado',
    'footer.rights': 'Todos os direitos reservados.',
  },
  en: {
    'meta.title': 'Frederico Saggio · Software Engineer',
    'meta.description': 'Portfolio of Frederico Saggio, a full stack software engineer (Go, Python, PostgreSQL, React and TypeScript) and Computer Science student in Maceió, Brazil.',
    'nav.home': 'Home',
    'nav.about': 'About',
    'about.eyebrow': 'Who I am',
    'about.title': 'About me',
    'journey.title': 'Journey',
    'journey.prev': 'Previous journey item',
    'journey.next': 'Next journey item',
    'journey.of': 'of',
    'nav.projects': 'Projects',
    'nav.experience': 'Journey',
    'nav.skills': 'Skills',
    'nav.services': 'What I do',
    'nav.contact': 'Contact',
    'nav.menu': 'Open menu',
    'nav.close': 'Close menu',
    'nav.title': 'Navigation',
    'nav.cv': 'Download resume',
    'nav.cvShort': 'Resume',
    'nav.talk': 'Get in touch',
    'theme.toggle': 'Toggle light/dark theme',
    'skip': 'Skip to content',
    'top': 'Back to top',
    'logo.label': 'home',
    'lang.label': 'Language',
    'hero.photoAlt': 'Frederico Saggio smiling with arms crossed, wearing a black polo shirt.',
    'hero.cta.primary': 'See projects',
    'hero.cta.contact': 'Contact',
    'proj.eyebrow': 'Selected work',
    'proj.title': 'Projects',
    'proj.sub': 'Ideas turned into working products.',
    'proj.count.one': 'project published',
    'proj.count.many': 'projects published',
    'proj.site': 'Visit site',
    'proj.repo': 'Source code',
    'proj.private': 'Private site',
    'proj.privateHint': 'Internal system: access requires a login.',
    'proj.details': 'Technical details',
    'proj.status.concluido': 'Completed',
    'proj.status.em-desenvolvimento': 'In progress',
    'skills.eyebrow': 'Toolkit',
    'exp.eyebrow': 'Where I have been',
    'exp.title': 'Journey',
    'exp.sub': 'The companies I have worked at so far.',
    'skills.title': 'Skills',
    'skills.sub': 'What I use every day to build and maintain systems, grouped by area.',
    'skills.languages': 'Languages',
    'services.eyebrow': 'What I do',
    'services.title': 'Areas of work',
    'services.sub': 'Where I can contribute to a product team.',
    'contact.eyebrow': 'Contact',
    'contact.title': 'Let’s build something together.',
    'contact.text': 'If you have a project or an idea in motion, send me a message and let’s talk.',
    'contact.copy': 'Copy email',
    'contact.copied': 'Email copied',
    'footer.rights': 'All rights reserved.',
  },
  it: {
    'meta.title': 'Frederico Saggio · Ingegnere del Software',
    'meta.description': 'Portfolio di Frederico Saggio, ingegnere del software full stack (Go, Python, PostgreSQL, React e TypeScript) e studente di Informatica a Maceió, Brasile.',
    'nav.home': 'Home',
    'nav.about': 'Chi sono',
    'about.eyebrow': 'Chi sono',
    'about.title': 'Su di me',
    'journey.title': 'Percorso',
    'journey.prev': 'Elemento precedente del percorso',
    'journey.next': 'Elemento successivo del percorso',
    'journey.of': 'di',
    'nav.projects': 'Progetti',
    'nav.experience': 'Percorso',
    'nav.skills': 'Competenze',
    'nav.services': 'Cosa faccio',
    'nav.contact': 'Contatti',
    'nav.menu': 'Apri menu',
    'nav.close': 'Chiudi menu',
    'nav.title': 'Navigazione',
    'nav.cv': 'Scarica il CV',
    'nav.cvShort': 'CV',
    'nav.talk': 'Contattami',
    'theme.toggle': 'Cambia tema chiaro/scuro',
    'skip': 'Vai al contenuto',
    'top': 'Torna su',
    'logo.label': 'home',
    'lang.label': 'Lingua',
    'hero.photoAlt': 'Frederico Saggio sorridente a braccia conserte, con una polo nera.',
    'hero.cta.primary': 'Vedi progetti',
    'hero.cta.contact': 'Contatti',
    'proj.eyebrow': 'Lavori selezionati',
    'proj.title': 'Progetti',
    'proj.sub': 'Idee diventate prodotti funzionanti.',
    'proj.count.one': 'progetto pubblicato',
    'proj.count.many': 'progetti pubblicati',
    'proj.site': 'Visita il sito',
    'proj.repo': 'Codice sorgente',
    'proj.private': 'Sito privato',
    'proj.privateHint': 'Sistema ad uso interno: l’accesso richiede il login.',
    'proj.details': 'Dettagli tecnici',
    'proj.status.concluido': 'Completato',
    'proj.status.em-desenvolvimento': 'In sviluppo',
    'skills.eyebrow': 'Strumenti',
    'exp.eyebrow': 'Dove sono stato',
    'exp.title': 'Percorso',
    'exp.sub': 'Le aziende in cui ho lavorato finora.',
    'skills.title': 'Competenze',
    'skills.sub': 'Quello che uso ogni giorno per costruire e mantenere sistemi, diviso per area.',
    'skills.languages': 'Lingue',
    'services.eyebrow': 'Cosa faccio',
    'services.title': 'Aree di lavoro',
    'services.sub': 'Dove posso contribuire in un team di prodotto.',
    'contact.eyebrow': 'Contatti',
    'contact.title': 'Costruiamo qualcosa insieme.',
    'contact.text': 'Se hai un progetto o un’idea in corso, scrivimi e parliamone.',
    'contact.copy': 'Copia email',
    'contact.copied': 'Email copiata',
    'footer.rights': 'Tutti i diritti riservati.',
  },
} as const;

export type UiKey = keyof (typeof ui)['pt'];

// Garante em tempo de compilação que en/it têm todas as chaves de pt
const _check: Record<Lang, Record<UiKey, string>> = ui;
void _check;

export function useTranslations(lang: Lang) {
  return (key: UiKey): string => ui[lang][key] ?? ui.pt[key];
}

/** Caminho da página inicial de cada idioma. */
export const homePath = (lang: Lang) => (lang === defaultLang ? '/' : `/${lang}/`);

const profiles: Record<Lang, Profile> = { pt: profilePt, en: profileEn, it: profileIt };
export function getProfile(lang: Lang): Profile {
  return profiles[lang];
}

/** "2026-09" -> "set 2026" */
export function formatMonth(value: string, lang: Lang): string {
  const [y, m] = value.split('-').map(Number);
  const d = new Date(Date.UTC(y, m - 1, 1));
  return d
    .toLocaleDateString(languages[lang].locale, { month: 'short', year: 'numeric', timeZone: 'UTC' })
    .replace('.', '')
    .replace(' de ', ' ');
}
