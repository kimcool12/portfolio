// ✏️  EDIT YOUR SKILLS HERE. Each skill is { name, icon }.
// Find icons at https://react-icons.github.io/react-icons/ and import them below.
import {
  SiHtml5,
  SiCss,
  SiJavascript,
  SiReact,
  SiNextdotjs,
  SiTailwindcss,
  SiSass,
  SiGit,
  SiGithub,
  SiFigma,
  SiVite,
} from "react-icons/si";
import { VscVscode } from "react-icons/vsc";
import { LuSparkles, LuSmartphone } from "react-icons/lu";
import { TbApi } from "react-icons/tb";

const skills = [
  {
    title: "Languages",
    items: [
      { name: "HTML5", icon: SiHtml5 },
      { name: "CSS3", icon: SiCss },
      { name: "JavaScript", icon: SiJavascript },
    ],
  },
  {
    title: "Frameworks & Styling",
    items: [
      { name: "React", icon: SiReact },
      { name: "Next.js", icon: SiNextdotjs },
      { name: "Tailwind CSS", icon: SiTailwindcss },
      { name: "Sass", icon: SiSass },
    ],
  },
  {
    title: "Tools",
    items: [
      { name: "VS Code", icon: VscVscode },
      { name: "Git", icon: SiGit },
      { name: "GitHub", icon: SiGithub },
      { name: "Figma", icon: SiFigma },
      { name: "Claude", icon: LuSparkles },
      { name: "Gemini", icon: LuSparkles },
      { name: "Lovable", icon: LuSparkles },
      { name: "Antigravity", image: "/images/icons/antigravity.svg" },
    ],
  },
  {
    title: "Others",
    items: [
      { name: "Responsive design", icon: LuSmartphone },
      { name: "REST APIs", icon: TbApi },
      { name: "Vite", icon: SiVite },
    ],
  },
];

export default skills;
