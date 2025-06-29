
# Mastercode - Plataforma de Cursos Online

Seja bem-vindo(a) ao desafio técnico do projeto **Mastercode**!  
Este projeto simula uma plataforma em crescimento que oferece:

- Cursos online
- Desenvolvimento de softwares personalizados (sistemas, apps, sites, e-commerces)
- Streaming de vídeos
- Gestão de clientes e produtos

A missão deste desafio é propor e implementar soluções reais, como se você estivesse ingressando em uma equipe de produto de uma startup em expansão. Além das tarefas técnicas, serão avaliadas sua visão criativa, capacidade de propor melhorias e boas práticas.

---

## Objetivos do desafio Frontend Developer

- Refatorar a dashboard para exibir dados dinâmicos reais via API:
  - Total de cursos
  - Total de clientes contratantes
  - Total de alunos ativos
  - Total de produtos
- Criar sistema de avaliação por estrelas (nota + comentário)
- Criar componente de streaming com CRUD básico de vídeos (listar, exibir, editar, excluir)
- Utilizar Web Components e um Design System limpo e responsivo
- Aplicar princípios de Clean Code e Design Patterns (Observer, Singleton ou outros onde fizer sentido)

---

## Funcionalidades implementadas

- Dashboard dinâmica com dados reais conectados à API
- Listagem de cursos e visualização dos vídeos de cada curso
- Adição, edição e remoção de vídeos no streaming
- Sistema de avaliação por estrelas com comentários
- Filtro por tipo de produto (criatividade)
- Modo claro/escuro
- Skeleton loading para melhor experiência durante carregamento

---

## Tecnologias

- Next.js — Framework React moderno para aplicações web
- React
- TypeScript
- React Query — Gerenciamento de dados assíncronos e cache
- Axios — Cliente HTTP
- Web Components para componentes reutilizáveis
- Design System customizado e responsivo com Tailwind CSS

---

## Como executar o projeto

### Pré-requisitos

- Node.js (versão 16 ou superior recomendada)
- npm ou yarn
- Git
- Navegador moderno

### Passos para rodar localmente

```bash
# Clone este repositório
git clone https://github.com/yago0901/mastercode.git

# Entre na pasta do projeto
cd mastercode

# Instale as dependências
npm install
# ou
yarn install

# Rode o servidor de desenvolvimento
npm run dev
# ou
yarn dev
```

Abra http://localhost:3000 no seu navegador para visualizar a aplicação.

---

## Estrutura do projeto

- /app — Páginas do Next.js incluindo dashboard, cursos e gerenciamento de vídeos
- /components — Componentes React, incluindo VideoPlayer, VideoList, AddVideoModal
- /hooks — Hooks customizados para gerenciamento de vídeos, estados e lógica
- /services — APIs para comunicação com backend ou mocks
- /public — Arquivos estáticos como imagens e ícones

---

## Autor

Yago Gigeck

- [GitHub](https://github.com/yago0901)
- [Portfólio](https://yago0901.github.io/yago-desenvolvedor-site/)
- [LinkedIn](https://www.linkedin.com/in/yagogigeck/)

---

## Licença

Este projeto está sob a licença MIT. Veja o arquivo LICENSE para mais detalhes.

Feito com ❤️ por Yago Gigeck  
[Entre em contato!](https://www.linkedin.com/in/yagogigeck/)
