// ✏️  EDIT YOUR PROJECTS HERE.
// - Add a project: copy one block, change the values.
// - Delete a project: remove its block.
// - image: put the screenshot in public/images/projects and use that path.
// - featured: true  -> shows on the Home page (the first 3 featured are used).
// - github / live: paste your links. Leave '' to hide that button.
// - category: used for the filter tabs on the Projects page.
const projects = [
  {
    title: "NACOS OAU Website",
    description: "Student association website.",
    category: "Next.js",
    tags: ["Next.js", "Tailwind"],
    image: "/images/projects/nacos.svg",
    github: "",
    live: "",
    featured: true,
  },
  {
    title: "Travel-list",
    description: "Packing Planner App.",
    category: "React",
    tags: ["React", "js"],
    image: "/images/projects/bbcc.svg",
    github: "https://github.com/kimcool12/travel-list",
    live: "https://travel-list-eta-eight.vercel.app/",
    featured: true,
  },
  {
    title: "Birmingham Food Basket",
    description: "Food ordering app.",
    category: "Next.js",
    tags: ["Next.js", "Prisma"],
    image: "/images/projects/food-basket.svg",
    github: "https://github.com/kimcool12/birmingham-food-basket",
    live: "",
    featured: true,
  },
  {
    title: "Forkify",
    description: "Recipe search app.",
    category: "JavaScript",
    tags: ["JavaScript", "SCSS"],
    image: "/images/projects/forkify.svg",
    github: "https://github.com/kimcool12/Forkify",
    live: "https://forkifyy-six.vercel.app/",
    featured: false,
  },
  {
    title: "Mapty",
    description: "Workout tracker on a map.",
    category: "JavaScript",
    tags: ["JavaScript", "Leaflet", "Css"],
    image: "/images/projects/mapty.svg",
    github: "https://github.com/kimcool12/Maphy",
    live: "https://maphy-six.vercel.app/",
    featured: false,
  },
];

export default projects;
