import portalViagens from "../assets/images/Portal-Viagens.png";
import microfrontend from "../assets/images/Microfrontend-Wepack.png";
import blogNext from "../assets/images/Blog-Next.png";
import listaTarefas from "../assets/images/Lista-Tarefas.png";
import catalogoLivros from "../assets/images/Catalogo-Livros.png";


const projects = [
  {
    id: 1,
    title: "Portal Viagens",
    description:
      "Aplicação desenvolvida em Next.js com foco em otimização de desempenho utilizando Lighthouse, imagens WebP, lazy loading e boas práticas de SEO.",

    technologies: [
      "Next.js",
      "React",
      "TypeScript",
      "Tailwind CSS"
    ],

    github: "https://github.com/vinidev05/Portal-Viagens-Otimizado",

    demo: "",

    image: portalViagens
  },

  {
    id: 2,
    title: "Micro Frontends",

    description:
      "Projeto utilizando Module Federation para dividir a aplicação em micros independentes, integrando Cardápio, Pedido e Container.",

    technologies: [
      "React",
      "Module Federation",
      "JavaScript",
      "Vite"
    ],

    github: "https://github.com/vinidev05/microfrontend-wepack",

    demo: "",

    image: microfrontend
  },

  {
    id: 3,

    title: "Blog Next.js",

    description:
      "Blog desenvolvido em Next.js utilizando rotas dinâmicas, geração estática de páginas e otimizações para SEO.",

    technologies: [
      "Next.js",
      "React",
      "TypeScript"
    ],

    github: "https://github.com/vinidev05/blog-nextjs",

    demo: "",

    image: blogNext
  },

  {
    id: 4,

    title: "Lista de Tarefas",

    description:
      "Aplicação para gerenciamento de tarefas desenvolvida em React utilizando componentes reutilizáveis.",

    technologies: [
      "React",
      "JavaScript",
      "Styled Components"
    ],

    github: "https://github.com/vinidev05/Lista-Tarefas-Next15",

    demo: "",

    image: listaTarefas
  },

  {
    id: 5,

    title: "Catálogo de Produtos",

    description:
      "Projeto desenvolvido em React apresentando um catálogo de produtos organizado em componentes reutilizáveis.",

    technologies: [
      "React",
      "Styled Components",
      "JavaScript"
    ],

    github: "https://github.com/vinidev05/Catalogo-Livros",

    demo: "",

    image: catalogoLivros
  }
];

export default projects;