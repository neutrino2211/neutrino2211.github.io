type Social = {
  label: string;
  link: string;
};

type Presentation = {
  mail: string;
  title: string;
  description: string;
  socials: Social[];
  profile?: string;
};

const presentation: Presentation = {
  mail: "tsowamainasara@gmail.com",
  title: "Hi, I’m Mainasara 👋",
  profile: "https://res.cloudinary.com/practicaldev/image/fetch/s--sqLLTrfj--/c_fill,f_auto,fl_progressive,h_640,q_auto,w_640/https://dev-to-uploads.s3.amazonaws.com/uploads/user/profile_image/134911/76ef9492-59b9-4126-a757-7a2d64b12cec.jpeg",
  description:
    "Hello, i'm a *Backend/DevOps engineer* and *Malware Reverse Engineer* with over *5 years* of experience with *Go, Python, Node.js and Typescript* and *2 years* of experience in *Professional Cybersecurity*. Outside of work I work on my hobby projects and play a lot of Football Manager",
  socials: [
    {
      label: "Twitter",
      link: "https://twitter.com/neutrino2211",
    },
    {
      label: "Dev.to",
      link: "https://dev.to/neutrino2211",
    },
    {
      label: "Github",
      link: "https://github.com/neutrino2211",
    },
    {
      label: "LinkedIn",
      link: "https://www.linkedin.com/in/mainasara-tsowa-17098b214/"
    },
    {
      label: "Resume",
      link: "https://docs.google.com/document/d/1xkgsk4Ncag63HQnNj-dK1GDYSAVaZnPJ8N4gulwGssY/edit?usp=sharing"
    }
  ],
};

export default presentation;
