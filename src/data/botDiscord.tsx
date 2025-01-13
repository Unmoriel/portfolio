
export const botDiscordData = {
    title: "Bot Discord : LoLcam",
    dates: "Juin 2023 - Janvier 2024",
    context: "Le projet Bot Discord : LoLCam a vu le jour dans le but d’explorer la communication entre différentes API, notamment l’API de Riot Games, et de répondre à un besoin ludique pour un serveur Discord axé sur le jeu League of Legends. À l’origine, ce projet a commencé comme une expérience personnelle pour me familiariser avec les concepts de programmation asynchrone et la gestion d’un bot interactif. La première version, bien que rudimentaire, a suscité un réel engouement parmi mes amis, ce qui m’a motivé à poursuivre son développement. Avec le temps, j’ai identifié les limites d’une architecture monolithique et non optimisée. Cela m’a conduit à concevoir une seconde version du bot, cette fois en appliquant les principes de SOLID et DRY, tout en intégrant une base de données MariaDB pour gérer de manière pérenne les données des utilisateurs et des serveurs.",
    progression: "La première version du bot a été développée de manière simple pour fonctionner sur un unique serveur Discord. Toutes les données, comme les pseudonymes des joueurs ou l’historique des parties, étaient stockées dans des fichiers JSON. Cette version m’a permis de poser les bases du projet en gérant les appels à l’API de Riot Games pour obtenir des informations sur les matchs, en créant une image rassemblant tous les personnages présents dans une partie, et en utilisant Cloudinary pour héberger ces images. Les résultats étaient ensuite envoyés sur Discord sous forme d’\"embed\", c’est-à-dire des messages enrichis et stylisés. Cependant, cette première mouture a rapidement montré ses limites, notamment en termes de performance et de modularité. J’ai donc entrepris de développer une seconde version plus robuste et extensible. Cette nouvelle version utilise une base de données MariaDB pour stocker les informations essentielles, comme les pseudonymes des joueurs ou les noms des serveurs Discord. Cela a permis au bot de gérer plusieurs serveurs en parallèle. En outre, le code a été réorganisé en modules distincts, chaque fonctionnalité étant encapsulée pour faciliter les mises à jour et maintenir la lisibilité. Toutes les fonctions ont été définies comme asynchrones, garantissant un fonctionnement fluide même lorsque plusieurs utilisateurs sollicitent le bot simultanément. Ce projet a été réalisé en parallèle de mes études, ce qui m’a appris à organiser mon temps efficacement. Bien que le bot soit actuellement désactivé, je prévois de reprendre son développement pour ajouter de nouvelles fonctionnalités et améliorer son efficacité.",
    conclusion : "Le développement du Bot Discord : LoLCam a été une expérience formatrice et enrichissante, tant sur le plan technique qu’humain. Ce projet m’a permis de maîtriser des concepts clés comme la programmation asynchrone, la gestion de bases de données relationnelles avec MariaDB, et l’application de bonnes pratiques de développement, telles que les principes SOLID et DRY. En outre, il m’a donné une meilleure compréhension des défis liés à l’interaction avec des API tierces et à la gestion d’un projet en constante évolution. Si la première version m’a permis d’expérimenter et de poser les fondations, la seconde m’a appris à structurer mon code pour créer une application fiable et évolutive. Cette aventure m’a également sensibilisé à l’importance de l’expérience utilisateur, puisque les retours de mes amis ont été déterminants pour guider les évolutions du bot. Aujourd’hui, je considère ce projet comme une étape clé dans mon apprentissage du développement logiciel et je suis motivé à poursuivre son amélioration dans un avenir proche.",
    sourceURL: "https://github.com/Unmoriel/SpyGame-Discord-bot",
    liveURL: null,
    media: [
        { type: "image", src: "/project/discordBot/img/gameLost.png", alt: "Screenshot" },
        { type: "image", src: "/project/discordBot/img/gameWon.png", alt: "Screenshot" },
        { type: "image", src: "/project/discordBot/img/weekRecap.png", alt: "Screenshot" },

    ]
};