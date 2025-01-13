import { Icons } from "@/components/icons";
import { HomeIcon, NotebookIcon } from "lucide-react";

export const DATA = {
    name: "Aurel GEORGES",
    initials: "AG",
    url: "http://localhost:3000/",
    location: "Montpellier, France",
    locationLink: "https://www.google.com/maps/place/montpellier",
    cvUrl: "/CV/CV.pdf",
    description:
        "Alternant en 3eme année de BUT informatique à l'IUT Montpellier et developpeur chez Poisson Soluble.",
    summary:
        "Hello ! J’aime développer des applications utiles et amusantes, je suis attentif et inspiré par les nouvelles technologies. A l’aise avec le travail d’équipe j’accorde beaucoup d’importance à la communication entre coéquipier.",
    avatarUrl: "/aurel.png",
    skills: [
        "Java 17",
        "PHP 7 & 8",
        "Symfony 6.4",
        "Python 2 & 3",
        "VueJS 3",
        "React"
    ],
    navbar: [
        { href: "/", icon: HomeIcon, label: "Home" },
    ],
    contact: {
        email: "aurelgeorges@hotmail.fr",
        tel: "0652584523",
        social: {
            CV: {
                name: "CV",
                url: "/CV/CV.pdf",
                icon: Icons.cv,
                navbar: true,
            },
            GitHub: {
                name: "GitHub",
                url: "https://github.com/Unmoriel",
                icon: Icons.github,

                navbar: true,
            },
            LinkedIn: {
                name: "LinkedIn",
                url: "https://fr.linkedin.com/in/aurel-georges",
                icon: Icons.linkedin,

                navbar: true,
            },
            email: {
                name: "Send Email",
                url: "mailto:aurelgeorges@hotmail.fr",
                icon: Icons.email,

                navbar: true,
            },
        },
    },

    work: [
        {
            company: "Poisson soluble",
            href: "https://www.poisson-soluble.com/",
            badges: [],
            location: "Montpellier, FR",
            title: "Alternant Developpeur",
            logoUrl: "/poisson_soluble_logo.svg",
            start: "Septembre 2024",
            end: "Août 2025",
            description:
                "Suite à mon stage, Poisson Soluble m'a proposé un contrat d'alternance pour ma 3eme année de BUT informatique. J'ai repris mon projet de conversion de fichier géographique afin de corriger quelques bugs et d'ajouter des fonctionnalités. J'ai ensuite intégré leur équipe de developpement pour travailler sur des projets de clients",
        },
        {
            company: "Poisson Soluble",
            href: "https://www.poisson-soluble.com/",
            badges: [],
            location: "Montpellier, FR",
            title: "Stagiaire Developpeur",
            logoUrl: "/poisson_soluble_logo.svg",
            start: "Avril 2024",
            end: "Juin 2024",
            description:
                "Developpement d'une appplication de conversion de fichier géographique en Symfony et Javascript. Le but est de convertir des fichiers SHAPE (.shp) en fichier GeoJSON (.json). Pendant ce stage j'ai découvert docker, symfony et beaucoup de concept pour apréhender des données géographiques. Le projet à aboutis et l'application est utilisée en interne par l'entreprise.",
        },
    ],
    projects: [
        {
            title: "Shape2PCS",
            href: "/projects/shape2pcs",
            dates: "Avril 2024 - Fevrier 2025",
            active: false,
            description:
                "Un projet développé en stage puis en alternance au sein de l'entreprise Poisson Soluble pour répondre à un besoin interne. L'application permet de convertir des fichiers SHAPE (.shp) en fichier GeoJSON (.json) ainsi que de modifier les données",
            technologies: [
                "Symfony 6.4",
                "Javascript vanilla",
                "Boostrap 5",
                "Docker",
                "PostgreSQL",
            ],
            links: [],
            image: "",
            video:
                "/project/shape2pcs/video/homepage_shape2pcs.mp4",
        },
        {
            title: "Organisateur d'evenement",
            href: "/projects/eventPlanner",
            dates: "Septembre 2024 - decembre 2024",
            active: true,
            description:
                "Un projet scolaire qui prend la forme d'une application symfony API Platform pour le back ainsi qu'un front en VUEJS 3.",
            technologies: [
                "VueJS 3",
                "Typescript",
                "Symfony 7",
                "API Platform",
                "MySQL",
                "Bootstrap 5",
            ],
            links: [],
            image: "",
            video: "/project/eventPlanner/video/conferenceFront_original.mp4",
        },
        {
            title: "Wisp Madness",
            href: "/projects/wispMadness",
            dates: "Janvier 2024",
            active: true,
            description:
                "Un jeu réalisé en 30h pour la Code Game Jam 2024 qui a remporté la seconde place sur une trentaine d'équipe.",
            technologies: [
                "Godot",
                "C#",
            ],
            links: [],
            image: "",
            video: "/project/wispMadness/video/wispMadnessTrailer.mp4",
        },
        {
            title: "Bot Discord",
            href: "/projects/discordBot",
            dates: "Juin 2023 - Janvier 2024",
            active: true,
            description:
                "Un bot discord réalisé en python pour suivre les victoires ou défaite de mes amis sur le jeu League of Legends.",
            technologies: [
                "Python 3",
                "MySQL",
                "API"
            ],
            links: [],
            image: "/project/discordBot/img/gameWon.png",
            video: "",
        },
    ],
    school:[
        {
            title: "BUT Informatique",
            dates: "2022 - 2025",
            location: "IUT Montpellier-Sète",
            description:
                "Parcours Intégration d'Application et Management du Système d'Information",
            image:
                "/iut_logo.jpeg",
            links: [],
        },
        {
            title: "Classe Préparatoire MP2I",
            dates: "2021 - 2022",
            location: "Lycée Claude Fauriel St-Etienne",
            description:
                "Première année de Classe Préparatoire aux Grandes Ecoles en Mathématiques, Physique, Informatique et Ingénierie",
            image:
                "/claude-fauriel_logo.png",
            links: [],
        },
        {
            title: "Baccalauréat Général",
            dates: "2020 - 2021",
            location: "Lycée Dhuoda Nîmes",
            description:
                "Spécialité Mathématiques, Numérique et Sciences Informatiques avec l'option Maths Expertes",
            image:
                "/dhuoda_logo.png",
            links: [],
        },
    ],
} as const;
