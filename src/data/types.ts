export interface Profile {
  name: string;
  fullName: string;
  /** Logo do cabeçalho (o ponto final sai em verde). */
  logo: string;
  /** Título principal, abaixo do nome. */
  title: string;
  /** Tecnologias em destaque na hero. */
  heroStack: string[];
  /** Texto do item "Foco" na faixa de informações da hero. */
  focus: string;
  location: string;
  /** Texto do indicador verde no topo da hero. */
  status: string;
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
  skillGroups: { title: string; text: string; items: string[] }[];
  languages: { name: string; level: string }[];
  services: { title: string; text: string }[];
}
