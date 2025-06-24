export interface IVideo {
  id: string;
  name: string;
  url: string;
  description: string;
}

export type CourseType = "frontend" | "backend" | "fullstack" | "mobile" | "devops";

export interface ICourse {
  id: string;
  title: string;
  description: string;
  rating: number; // de 0 a 5
  type: CourseType;
  videos: IVideo[];
}

export const coursesMock: ICourse[] = [
  {
    id: "c1",
    title: "Curso de React Básico",
    description: "Aprenda os fundamentos do React com exemplos práticos.",
    rating: 4.5,
    type: "frontend",
    videos: [
      {
        id: "v1",
        name: "Introdução ao React",
        url: "https://videos.com/react/intro",
        description: "O que é React e por que usar?"
      },
      {
        id: "v2",
        name: "Componentes e Props",
        url: "https://videos.com/react/componentes",
        description: "Como criar componentes reutilizáveis."
      },
      {
        id: "v3",
        name: "Hooks e Estado",
        url: "https://videos.com/react/hooks",
        description: "Entenda useState, useEffect e outros hooks."
      }
    ]
  },
  {
    id: "c2",
    title: "Curso de JavaScript Avançado",
    description: "Aprofunde seus conhecimentos em JavaScript moderno.",
    rating: 4.8,
    type: "fullstack",
    videos: [
      {
        id: "v4",
        name: "Closures e Escopo",
        url: "https://videos.com/js/closures",
        description: "Compreenda como o escopo funciona em JS."
      },
      {
        id: "v5",
        name: "Programação Assíncrona",
        url: "https://videos.com/js/async",
        description: "Callbacks, Promises e async/await na prática."
      },
      {
        id: "v6",
        name: "Manipulação de DOM",
        url: "https://videos.com/js/dom",
        description: "Aprenda a acessar e alterar o DOM com JS."
      }
    ]
  },
  {
    id: "c3",
    title: "Curso de TypeScript",
    description: "Domine os tipos e recursos do TypeScript.",
    rating: 4.2,
    type: "backend",
    videos: [
      {
        id: "v7",
        name: "Configuração e Tipos Básicos",
        url: "https://videos.com/ts/setup",
        description: "Comece um projeto com TS e entenda os tipos primitivos."
      },
      {
        id: "v8",
        name: "Interfaces e Tipos Avançados",
        url: "https://videos.com/ts/interfaces",
        description: "Use interfaces, tipos genéricos e union types."
      },
      {
        id: "v9",
        name: "Integrando com React",
        url: "https://videos.com/ts/react",
        description: "Como usar TypeScript com projetos React."
      }
    ]
  }
];

