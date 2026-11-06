// ✏️  EDIT YOUR LINKS HERE. Add, remove or reorder freely.
// Icons come from react-icons: https://react-icons.github.io/react-icons/
import { FaGithub, FaLinkedinIn, FaXTwitter, FaWhatsapp, FaEnvelope } from 'react-icons/fa6'
import profile from './profile'

const socials = [
  { name: 'GitHub', url: 'https://github.com/your-username', icon: FaGithub },
  { name: 'LinkedIn', url: 'https://linkedin.com/in/your-username', icon: FaLinkedinIn },
  { name: 'X', url: 'https://x.com/your-username', icon: FaXTwitter },
  { name: 'WhatsApp', url: 'https://wa.me/234XXXXXXXXXX', icon: FaWhatsapp },
  { name: 'Email', url: `mailto:${profile.email}`, icon: FaEnvelope },
]

export default socials
