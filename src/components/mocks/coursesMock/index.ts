import { CourseType, ICourse } from './tipes';

export const coursesMock: ICourse[] = [
  {
    id: 1,
    title: "Curso de React com YouTube",
    description: "Fundamentos do React com vídeos do YouTube.",
    rating: 5,
    type: "frontend",
    videos: [
      {
        id: "yt1",
        name: "React em 100 segundos",
        url: "https://www.youtube.com/watch?v=Tn6-PIqc4UM",
        description: "Resumo rápido do React JS.",
      },
      {
        id: "yt2",
        name: "Componentes React",
        url: "https://www.youtube.com/watch?v=SqcY0GlETPk",
        description: "Criando componentes reutilizáveis no React.",
      },
      {
        id: "yt3",
        name: "useEffect no React",
        url: "https://www.youtube.com/watch?v=0ZJgIjIuY7U",
        description: "Entendendo o hook useEffect.",
      },
    ],
  },
  {
    id: 2,
    title: "Curso de JavaScript com YouTube",
    description: "Aprofundamento em JavaScript moderno com vídeos do YouTube.",
    rating: 4,
    type: "fullstack",
    videos: [
      {
        id: "yt4",
        name: "JavaScript para Iniciantes",
        url: "https://www.youtube.com/watch?v=PkZNo7MFNFg",
        description: "Curso completo de JS por freeCodeCamp.",
      },
      {
        id: "yt5",
        name: "Closures em JavaScript",
        url: "https://www.youtube.com/watch?v=CQqwU2Ixu-U",
        description: "Entendendo closures na prática.",
      },
      {
        id: "yt6",
        name: "Promises e Async/Await",
        url: "https://www.youtube.com/watch?v=PoRJizFvM7s",
        description: "Programação assíncrona moderna com JS.",
      },
      {
        id: "yt7",
        name: "Promises e Async/Await",
        url: "https://www.youtube.com/watch?v=PoRJizFvM7s",
        description: "Programação assíncrona moderna com JS.",
      },
      {
        id: "yt8",
        name: "Promises e Async/Await",
        url: "https://www.youtube.com/watch?v=PoRJizFvM7s",
        description: "Programação assíncrona moderna com JS.",
      },
      {
        id: "yt9",
        name: "Promises e Async/Await",
        url: "https://www.youtube.com/watch?v=PoRJizFvM7s",
        description: "Programação assíncrona moderna com JS.",
      },
    ],
  },
  {
    id: 3,
    title: "Curso de TypeScript com YouTube",
    description: "Domine TypeScript com ajuda de vídeos do YouTube.",
    rating: 3,
    type: "backend",
    videos: [
      {
        id: "yt7",
        name: "Introdução ao TypeScript",
        url: "https://www.youtube.com/watch?v=BwuLxPH8IDs",
        description: "Curso completo de introdução ao TS.",
      },
      {
        id: "yt8",
        name: "Interfaces e Tipagem",
        url: "https://www.youtube.com/watch?v=Z5iWr6Srsj8",
        description: "Como tipar corretamente com TypeScript.",
      },
      {
        id: "yt9",
        name: "TypeScript com React",
        url: "https://www.youtube.com/watch?v=jrKcJxF0lAU",
        description: "React com TypeScript moderno.",
      },
    ],
  },
  ...Array.from({ length: 20 }, (_, i) => ({
    id: i + 4,
    title: `Curso YouTube Extra ${i + 4}`,
    description: "Curso gerado com vídeos do YouTube.",
    rating: (i % 5) + 1,
    type: ["frontend", "backend", "fullstack", "mobile", "devops"][
      i % 5
    ] as CourseType,
    videos: [
      {
        id: `ytx${i + 10}`,
        name: "Vídeo YouTube 1",
        url: "https://www.youtube.com/watch?v=Ke90Tje7VS0",
        description: "Curso oficial do React - parte 1.",
      },
      {
        id: `ytx${i + 11}`,
        name: "Vídeo YouTube 2",
        url: "https://www.youtube.com/watch?v=Oe421EPjeBE",
        description: "Curso oficial do React - parte 2.",
      },
    ],
  })),
];
