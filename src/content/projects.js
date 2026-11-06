// ✏️  EDIT YOUR PROJECTS HERE.
// - Add a project: copy one block, change the values.
// - Delete a project: remove its block.
// - image: put the screenshot in public/images/projects and use that path.
// - featured: true  -> shows on the Home page (the first 3 featured are used).
// - github / live: paste your links. Leave '' to hide that button.
// - category: used for the filter tabs on the Projects page.
export const filters = [
  { label: "All" },
  { label: "React", match: ["React"] },
  { label: "Next.js", match: ["Next.js"] },
  { label: "JavaScript", match: ["Js"] },
  { label: "CSS", match: ["CSS", "Sass", "SCSS", "Tailwind"] },
];

const projects = [
  {
    title: "Fast React Pizza Co",
    description: "A static seamless online pizza ordering web application.",
    tags: ["React", "CSS", "Js"],
    image: "/images/projects/fastreact.png",
    github: "https://github.com/kimcool12/pizza-menu",
    live: "https://fast-pizza-blue.vercel.app/",
    featured: true,
  },
  {
    title: "Travel list",
    description: "Packing Planner App.",
    tags: ["React", "Js"],
    image: "/images/projects/travellist.png",
    github: "https://github.com/kimcool12/travel-list",
    live: "https://travel-list-eta-eight.vercel.app/",
    featured: false,
  },
  {
    title: "Birmingham Food Basket",
    description: "Food ordering app.",
    tags: ["Next.js", "Prisma", "React", "Js"],
    image: "/images/projects/foodbasket.png",
    github: "https://github.com/kimcool12/birmingham-food-basket",
    live: "",
    featured: true,
  },
  {
    title: "Course Companion",
    description: "Interactive student study companion.",
    tags: ["Scss", "Js", "CSS"],
    image: "/images/projects/coursecomp.png",
    github: "https://github.com/kimcool12/Course.Companion",
    live: "https://coursecompanion.netlify.app/",
    featured: false,
  },
  {
    title: "Forkify",
    description: "Recipe search app.",
    tags: ["Js", "SCSS"],
    image: "/images/projects/forkify.png",
    github: "https://github.com/kimcool12/Forkify",
    live: "https://forkifyy-six.vercel.app/",
    featured: true,
  },
  {
    title: "Guessing game",
    description: "Interactive number guessing game.",
    tags: ["Tailwind", "Js", "CSS", "HTML"],
    image: "/images/projects/guessgame.png",
    github: "https://github.com/kimcool12/Guessing-game",
    live: "https://guessing-game-seven-beryl.vercel.app/",
    featured: false,
  },
  {
    title: "Modupeola & Emozino Wedding Website",
    description: "Wedding celebration platform.",
    tags: ["Js", "Vercel", "CSS"],
    image: "/images/projects/mounion.png",
    github: "https://github.com/kimcool12/MonoUnion2025",
    live: "https://mono-union2025.vercel.app/",
    featured: false,
  },
  {
    title: "Trillo Booking App",
    description: "Modern hotel booking UI.",
    tags: ["SCSS", "Flexbox", "CSS Grid", "HTML"],
    image: "/images/projects/trillo.png",
    github: "https://github.com/kimcool12/Trilo",
    live: "https://trilo-seven.vercel.app/",
    featured: false,
  },
  {
    title: "Mapty",
    description: "Workout tracker on a map.",
    tags: ["Js", "Leaflet", "CSS"],
    image: "/images/projects/maphy.png",
    github: "https://github.com/kimcool12/Maphy",
    live: "https://maphy-six.vercel.app/",
    featured: false,
  },

  {
    title: "Bijou Luxe",
    description: "E-commerce de bijoux modernes.",
    tags: ["Tailwind", "Vercel", "CSS"],
    image: "/images/projects/bijou.png",
    github: "https://github.com/kimcool12/Bijou-Luxe",
    live: "https://bijou-luxe.vercel.app/",
    featured: false,
  },
];

export default projects;
