import Education from "../components/about_section/Education";

export const info = {
  name:" Nour Chamas",
  brief_description:
    "une développeuse front-end passionnée",
  role: "Développeuse front-end",
  picture: "/public/nour photo.jpg",
  picture_alt: "Chamas Nour",
  location: "France",
  cv: "/resume chamas nour .pdf",

   
     about: {
      description: `Bienvenue sur mon portfolio ! Je m'appelle Nour,
      et je suis une développeuse front-end passionnée ainsi qu'une intégratrice web, 
      formée par OpenClassrooms. Ce portfolio présente mes compétences, mes projets et mon parcours professionnel. Mon objectif est de créer des expériences utilisateur intuitives et visuellement attrayantes tout en assurant des sites web performants et accessibles.`,
      education: [
        {
          title: "formation integrateur web /front-end",
          date: "2023-2024",
          location: "openclassroom a distance",
          
        }
      ],

  
      experience: [{

      }, {

      }, {

      }],
    skills: ["Html","Css","JavaScript", "React", "Node.js",], 
  },

  projects: [
    {
      projet1: " Portfolio",
      date: "2024",
      description:
        "An interactive portfolio website showcasing my mischievous coding projects.",
      
      tech: ["React", "Node.js",],
      img_alt: "portfolio",
      img_path: "/public/screenshot nour.png",
    },
    { 
      projet2: "Debuggez le site ",
      date: "2023",
      description:
        ":Débugger un site web 724 events.",
      link: "https://github.com/nourchamas/Debuggez-le-site_projet10.git",
      tech: ["React", "test unitaires"],
      img_alt: "724events",
      img_path:"/public/724 events .png"
    },
    {
      projet3: "projet 3 Booki",
      date: "2023",
      description:
        "Description :Créez la page d'accueil d'une agence de voyage avec HTML & css",
      link: "https://github.com/nourchamas/Booki.git",
      tech: ["Html", "css",],
      img_alt: "Booki",
      img_path: "/public/booki projet.png",
    },
    {
       title:"Kaza",
       date: "2024",
       description:
         "Créez une application web de location immobilière avec React",
         link:"https://github.com/nourchamas/kasa.git",
         tech:"Html , Css ,React,Javascript",
        img_alt:"Kaza",
        img_path:"/public/kasa photo.png",
    }
  ],

  contact: {
    email: "nour.chamas@outlook.com",
    github: "https://github.com/nourchamas",
   
  },
};
