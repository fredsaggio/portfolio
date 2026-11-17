export interface Profile {
  name: string;
  fullName: string;
  /** Logo do cabeçalho (o ponto final sai em verde). */
  logo: string;
  /** Título principal, abaixo do nome. */
  title: string;
  /** Tecnologias em destaque na hero. */
  heroStack: string[];
  intro: string;
  /** Parágrafos da seção Sobre mim. */
  about: string[];
  /** Cartão sobreposto à foto. */
  photoNote: string;
  email: string;
  links: { github: string; linkedin: string };
  /** PDF em public/, ex.: '/frederico-saggio-cv.pdf'. Sem valor, o botão vira "Fale comigo". */
  cvUrl?: string;
  /** Skills agrupadas por área. Cada grupo vira um card na seção Skills. */
  skillGroups: { title: string; items: string[] }[];
  languages: { name: string; level: string }[];
  services: { title: string; text: string }[];
  /** Empresas, da mais antiga para a atual. A última com `current` ganha a bolinha acesa na linha do tempo. */
  experience: { company: string; role: string; period: string; place: string; text: string; stack: string[]; current?: boolean }[];
}
