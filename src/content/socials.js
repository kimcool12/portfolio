// ✏️  EDIT YOUR LINKS HERE. Add, remove or reorder freely.
// Icons come from react-icons: https://react-icons.github.io/react-icons/
import {
  FaGithub,
  FaLinkedinIn,
  FaXTwitter,
  FaWhatsapp,
  FaEnvelope,
} from "react-icons/fa6";
import profile from "./profile";

const socials = [
  { name: "GitHub", url: "https://github.com/kimcool12", icon: FaGithub },
  {
    name: "LinkedIn",
    url: "https://www.linkedin.com/in/afolayan-olatunde-518089341/",
    icon: FaLinkedinIn,
  },
  { name: "X", url: "https://x.com/AfolayanOl93009", icon: FaXTwitter },
  { name: "WhatsApp", url: "https://wa.me/2349162997567", icon: FaWhatsapp },
  { name: "Email", url: `mailto:${profile.email}`, icon: FaEnvelope },
];

export default socials;
