import { Injectable } from '@angular/core';
import {IProject} from "../../interfaces/iproject";

@Injectable({
  providedIn: 'root'
})
export class ProjectsService {

  constructor() { }

  private projectList:IProject[] = [
    {name:"Symesis",
      shortDescription:"Prototype de Jeu vidéo sur PC. RPG Open-World développé en équipe.",
      description: "Symesis est mon premier vrai projet de jeu vidéo en équipe. Le but était de réaliser un jeu RPG Open-World dans un univers fantastique. Le jeu inclu un système d'inventaire, une météo dynamique (déclenchement de la pluie de manière aléatoire, et cycle jour/nuit), un système de combat contre des cibles d'entrainement ainsi que quelques énemies basique.",
      languages:["C#"],
      technos:["Unity Engine", "Prototype"],
      date:"2018-2019",
      pictures:["symesis_01.webp", "symesis_02.webp", "symesis_03.webp"]
    },
    {name:"Kronophase",
      shortDescription:"Prototype de Jeu vidéo sur PC. Die and Retry développé en équipe.",
      description: "Kronophase est un jeu de type Die and Retry. Il inclu des technologies comme la génération procédurale de niveaux, un système d'énemies, et l'intégration de Discord Rich Presence. Le jeu est un prototype. Une démo est disponible.",
      languages:["C#"],
      technos:["Unity Engine", "Prototype"],
      date:"2019-2020",
      pictures:['kronophase_01.webp', 'kronophase_02.webp', 'kronophase_03.webp']
    },
    {name:"WordDrop",
      shortDescription:"Jeu Vidéo mobile et PC développé avec le moteur de jeu Unity Engine.",
      description:"WordDrop est un jeu de lettres. Le principe est simple : des lettres tombent, une fois qu'elles ont touchées le sol, il faut créer des mots plus ou moins complexes pour générer des points. Le but est de faire le score le plus élevé.Le jeu inclu un système de tableau des scores en ligne. WordDrop est disponible sur le Windows Store (Windows 10 et Windows 11).",
      languages:["C#"],
      technos:["Unity Engine", "Android", "UWP", "WIP"],
      pictures:['worddrop_01.webp', 'worddrop_02.webp', 'worddrop_03.webp', 'worddrop_04.webp', 'worddrop_05.webp'],
      date:"2020-2021"
    },
    {name:"Editeur de mugs",
      shortDescription:"Un editeur conçu pour la personnalisation de mugs pour Design&Concept.",
      description:"Un logiciel web éditeur de mug, permettant de mettre n'importe quels photos sur le mug. L'éditeur inclu des outils tels que : le redimensionnement d'image, la rotation, le déplacement, et la gestion de \"profondeur\", l'ajout de QR Code et la modification de la position du Filigrane Design&Concept. Le générateur d'aperçu est réalisé en CSS, il permet de voir une représentation du mug (représentation presque identique à la réalitée).",
      languages:["TypeScript", "CSS"],
      technos:["Angular", "TailwindCSS"],
      date:"2021-2022",
      pictures:["mug_01.webp", "mug_02.webp"]
    },
    // {name:"Trace Colmar : Chatbot",
    //   shortDescription:"Un chatbot avec espace administrateur (gestion du chatbot et statistiques) conçu pour le site internet de la compagnie de transport Trace à Colmar.",
    //   description:"Un Chabot sur-mesure personnalisable avec un espace administrateur. L'espace administrateur permet des réglages avancés du chatbot (Message de bienvenue, message d'erreur, message de non compréhension, ainsi que touts les autres messages). Chaque requête au chabot génère des statistiques visualisables dans l'espace administrateur.",
    //   languages:["TypeScript", "CSS"],
    //   technos:["Angular", "TailwindCSS", "MySQL", "NestJS", "TypeORM", "Swagger"],
    //   date:"2022"
    // },
    {
      name:"Portfolio",
      shortDescription:"Mon portfolio.",
      description:"Projet de portfolio, réalisé avec Angular et Tailwindcss.",
      languages:["TypeScript", "CSS"],
      technos:["Angular", "TailwindCSS"],
      date:"2022"
    },
    {
      name:"Fil-Rouge 4.0.1",
      shortDescription:"Projet réalisé dans le cadre du fil-rouge de la formation UHA 4.0.1 . Le projet à été réalisé une fois totalement en PHP et Javascript, puis une seconde fois en PHP et Angular.",
      description: "Le but était de comprendre les bases du Web. Plusieurs API étaient fournies pour que l'on s'en serve dans le but de les afficher sur un site fais nous même. On devais y intégrer : Base de données, pagination, dynamisation en js. Il était ensuite possible d'approfondir en refaisant la même chose avec un Framework, dans mon cas Angular.",
      languages: ['TypeScript', 'JavaScript','PHP', "SQL", "CSS"],
      technos: ['Angular', 'MySQL', 'Bootstrap', "API Rest"],
      date:"Septembre 2021",
      pictures:['401_01.webp', '401_02.webp'],
      links:[
        {
          url: "https://gitlab.com/uha40/401/fil-rouge",
          title: "Git Fil-Rouge"
        },
        {
          url: "https://gitlab.com/uha40/401/fil-rouge-angular",
          title: "Git Fil-Rouge Angular"
        }
      ]
    }
  ]

  public getAllProjects(){
    return this.projectList;
  }
}
