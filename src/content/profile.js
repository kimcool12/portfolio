// ✏️  EDIT YOUR PERSONAL DETAILS HERE
const profile = {
  name: "Olatunde",
  status: "Frontend Developer",
  headline: {
    line1: "Building interfaces",
    line2: "that feel",
    accent: "alive.",
  },
  roles: ["React Developer", "UI Builder", "Creative Coder"],
  intro: "Hi, I’m Olatunde. I build fast, animated web experiences.",

  // Put your photo in public/images and change the file name here
  photo: "/images/profile.jpeg",
  // Put your CV in public/cv.pdf
  cvUrl: "/OlatundeCV.pdf",

  about:
    "Frontend developer with a Graphic Design background. I care about spacing, rhythm and motion as much as clean code.",
  stats: [
    { value: "10+", label: "Projects built" },
    { value: "12+", label: "Technologies" },
    { value: "2+", label: "Years learning" },
  ],

  // Contact
  email: "olatundeafolayan419@gmail.com",
  formEndpoint: "https://api.web3forms.com/submit",
  web3formsKey: import.meta.env.VITE_WEB3FORMS_KEY,
  footerText: "Send a message or find me online.",

  // Navbar links
  nav: [
    { label: "Home", to: "/" },
    { label: "About", to: "/#about" },
    { label: "Skills", to: "/#skills" },
    { label: "Projects", to: "/projects" },
    { label: "Contact", to: "/#contact" },
  ],
};

export default profile;
