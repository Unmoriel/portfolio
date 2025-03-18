"use client";

import { useState } from "react";
import {tabs} from "@/data/apprentissage";
import {ProjectCard} from "@/components/project-card";

export default function PortfolioApprentissage() {
    const [activeTab, setActiveTab] = useState("realiser");


    return (
        <div className="relative isolate overflow-hidden bg-white dark:bg-gray-900 px-6 py-24 sm:py-32 lg:px-0">
            <div className="absolute inset-0 -z-10 overflow-hidden">
                <svg
                    aria-hidden="true"
                    className="absolute left-[max(50%,25rem)] top-0 h-[48rem] w-[128rem] -translate-x-1/2 stroke-gray-200 dark:stroke-gray-700 [mask-image:radial-gradient(48rem_48rem_at_top,white,transparent)]"
                >
                    <defs>
                        <pattern id="grid-pattern" x="50%" y={-1} width={200} height={200}
                                 patternUnits="userSpaceOnUse">
                            <path d="M100 200V.5M.5 .5H200" fill="none"/>
                        </pattern>
                    </defs>
                    <rect fill="url(#grid-pattern)" width="100%" height="100%" strokeWidth={0}/>
                </svg>
            </div>

            <div className="mx-auto max-w-7xl text-center lg:text-left">
                <h1 className="text-4xl font-bold tracking-tight text-gray-900 dark:text-white sm:text-6xl">
                    Portfolio d'apprentissage
                </h1>
                <p className="mt-6 text-lg leading-8 text-gray-600 dark:text-gray-300 max-w-2xl">
                    Analyse et justification de la validation des compétences essentielles du niveau 3 du parcours
                    IAMSI.
                </p>
            </div>

            <div className="text-base font-semibold text-center text-gray-500 dark:text-gray-400 mt-8">
                <ul className="flex flex-wrap justify-center border-b border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-900 shadow-md rounded-lg">
                    {tabs.map((tab) => (
                        <li key={tab.id} className="me-2">
                            <button
                                className={`p-5 text-lg border-b-2 rounded-t-lg transition-colors duration-300 ${
                                    activeTab === tab.id
                                        ? "text-blue-600 border-blue-600 dark:text-blue-500 dark:border-blue-500"
                                        : "border-transparent hover:text-gray-600 hover:border-gray-300 dark:hover:text-gray-300"
                                }`}
                                onClick={() => setActiveTab(tab.id)}
                            >
                                {tab.label}
                            </button>
                        </li>
                    ))}
                </ul>
            </div>

            <div className="mt-0 space-y-16">
                {tabs.map((tab) =>
                    activeTab === tab.id ? (
                        <div key={tab.id} className="bg-gray-100 dark:bg-gray-800 p-8 rounded-lg shadow-md">
                            <p className="mt-4 text-lg text-gray-600 dark:text-gray-300">{tab.description}</p>
                        </div>
                    ) : null
                )}
            </div>
            <div className="mt-16">
                <h2 className="text-3xl font-semibold text-center text-gray-900 dark:text-white">Preuves de Mes
                    Projets</h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mt-8">
                    <div
                        className="bg-white dark:bg-gray-800 shadow-lg rounded-lg overflow-hidden flex flex-col justify-between h-full">
                        <div className="p-6 flex-1">
                            <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
                                Projet Shape2PCS
                            </h3>
                            <p className="text-lg text-gray-600 dark:text-gray-300">
                                Ce projet a été développé pour faciliter la conversion de fichiers géospatiaux au format
                                Shape (.shp) en fichier GEOJSON (.json), dans le cadre de l'optimisation d'un processus
                                interne. J'ai utilisé Symfony pour le backend et React avec Bootstrap pour le frontend.
                                Le projet a également impliqué l'intégration d'une maquette réalisée par un graphiste
                                sur Figma pour garantir une interface utilisateur ergonomique.
                            </p>
                        </div>
                        <div className="p-6 flex justify-center">
                            <a
                                href="/projects/shape2pcs"
                                className="mt-4 inline-block px-6 py-2 text-lg font-medium text-white bg-gray-800 dark:bg-blue-900 hover:bg-gray-700 dark:hover:bg-blue-800 rounded-lg shadow-md transition duration-300"
                            >
                                Voir le projet
                            </a>
                        </div>
                    </div>

                    <div
                        className="bg-white dark:bg-gray-800 shadow-lg rounded-lg overflow-hidden flex flex-col justify-between h-full">
                        <div className="p-6 flex-1">
                            <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
                                Poisson Run
                            </h3>
                            <p className="text-lg text-gray-600 dark:text-gray-300">
                                Poisson Run est une application CI/CD interne développée pour surveiller les
                                microservices de l'entreprise. Le projet utilise Symfony pour la gestion du backend,
                                React pour l'interface utilisateur, et Tailwind CSS pour la mise en page. En cours de
                                développement, j'ai eu l'occasion de participer à l’ajout d'une fonctionnalité de suivi
                                du statut des microservices, ainsi qu'à une étude des bibliothèques JavaScript pour
                                l’affichage de graphiques en temps réel.
                            </p>
                        </div>
                        <div className="p-6 flex justify-center">
                            <div
                                className="mt-2 px-3 py-2 max-w-md text-sm text-gray-600 dark:text-gray-400 bg-gray-100 dark:bg-gray-900 rounded-md shadow-sm border border-gray-300 dark:border-gray-700">
                                Comme c'est un outils interne à Poisson Soluble, je ne peux pas partager ni le code, ni de screenshot.
                            </div>
                        </div>
                    </div>

                    <div
                        className="bg-white dark:bg-gray-800 shadow-lg rounded-lg overflow-hidden flex flex-col justify-between h-full">
                        <div className="p-6 flex-1">
                            <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
                                Système d'Information de Poisson Soluble
                            </h3>
                            <p className="text-lg text-gray-600 dark:text-gray-300">
                                Dans le cadre de ce projet, j'ai réalisé une analyse approfondie du Système
                                d'Information (SI) de mon entreprise pour en comprendre les points forts et les axes
                                d'amélioration. Ce travail m’a permis de proposer des améliorations visant à optimiser
                                la gestion des microservices et à renforcer la résilience du système informatique global
                                de l'entreprise.


                            </p>
                        </div>
                        <div className="p-6 flex justify-center">
                            <div
                                className="mt-2 px-3 py-2 max-w-md text-sm text-gray-600 dark:text-gray-400 bg-gray-100 dark:bg-gray-900 rounded-md shadow-sm border border-gray-300 dark:border-gray-700">
                                Ce travail n'est pas encore terminé.
                            </div>
                        </div>
                    </div>
                    <div
                        className="bg-white dark:bg-gray-800 shadow-lg rounded-lg overflow-hidden flex flex-col justify-between h-full">
                        <div className="p-6 flex-1">
                            <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
                                Organisateur d'evenement
                            </h3>
                            <p className="text-lg text-gray-600 dark:text-gray-300">
                                Ce projet académique consistait à développer une plateforme de gestion d'événements en
                                ligne. J'ai utilisé Symfony avec API Platform pour créer un backend robuste et sécurisé,
                                tandis que le frontend était développé avec Vue.js pour une interface dynamique et
                                réactive. L'application permet de créer, gérer et afficher des événements en temps réel.
                            </p>
                        </div>
                        <div className="p-6 flex justify-center">
                            <a
                                href="/projects/eventPlanner"
                                className="mt-4 inline-block px-6 py-2 text-lg font-medium text-white bg-gray-800 dark:bg-blue-900 hover:bg-gray-700 dark:hover:bg-blue-800 rounded-lg shadow-md transition duration-300"
                            >
                                Voir le projet
                            </a>
                        </div>
                    </div>
                    <div
                        className="bg-white dark:bg-gray-800 shadow-lg rounded-lg overflow-hidden flex flex-col justify-between h-full">
                        <div className="p-6 flex-1">
                            <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
                                Veille technologique
                            </h3>
                            <p className="text-lg text-gray-600 dark:text-gray-300">
                                Dans le cadre de ce projet, j'ai réalisé une veille technologique approfondie sur la
                                GreenTech, une industrie en pleine expansion visant à réduire l'impact écologique des
                                technologies. J'ai exploré les différentes innovations dans ce domaine, notamment les
                                technologies énergétiques, les solutions pour la gestion des déchets, et l'utilisation
                                de l'intelligence artificielle pour l'efficacité énergétique.
                            </p>
                        </div>
                        <div className="p-6 flex justify-center">
                            <a
                                href="https://docs.google.com/document/d/1tQ1RE0pYBWhWtl0pYDIDkYui9d8GAz_qUhUOU0IGcLo/edit?usp=sharing"
                                className="mt-4 inline-block px-6 py-2 text-lg font-medium text-white bg-gray-800 dark:bg-blue-900 hover:bg-gray-700 dark:hover:bg-blue-800 rounded-lg shadow-md transition duration-300"
                            >
                                Voir le document
                            </a>
                        </div>
                    </div>
                    <div
                        className="bg-white dark:bg-gray-800 shadow-lg rounded-lg overflow-hidden flex flex-col justify-between h-full">
                        <div className="p-6 flex-1">
                            <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
                                Bot Discord
                            </h3>
                            <p className="text-lg text-gray-600 dark:text-gray-300">
                                J'ai développé un bot Discord qui interagit avec l'API Riot Games pour afficher la
                                victoire ou la défaite d’un joueur de League of Legends. Ce bot, entièrement réalisé en
                                Python, utilise une base de données MariaDB pour stocker les informations des joueurs et
                                permettre des interactions en temps réel avec les utilisateurs sur Discord. Ce projet a
                                renforcé mes compétences en programmation Python et en gestion de bases de données.
                            </p>
                        </div>
                        <div className="p-6 flex justify-center">
                            <a
                                href="/projects/discordBot"
                                className="mt-4 inline-block px-6 py-2 text-lg font-medium text-white bg-gray-800 dark:bg-blue-900 hover:bg-gray-700 dark:hover:bg-blue-800 rounded-lg shadow-md transition duration-300"
                            >
                                Voir le projet
                            </a>
                        </div>
                    </div>

                    <div
                        className="bg-white dark:bg-gray-800 shadow-lg rounded-lg overflow-hidden flex flex-col justify-between h-full">
                        <div className="p-6 flex-1">
                            <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
                                Wisp Madness
                            </h3>
                            <p className="text-lg text-gray-600 dark:text-gray-300">
                                Ce projet a consisté à participer à une compétition de Code Game Jam de 30 heures où nous devions créer un jeu vidéo autour d'un thème précis en équipe de 6. Nous avons choisi le moteur Godot pour son approche open source et ses fonctionnalités robustes. Notre jeu a remporté la 2ᵉ place sur une trentaine d’équipes participantes, démontrant notre capacité à travailler sous pression et à livrer un produit de qualité en peu de temps.
                            </p>
                        </div>
                        <div className="p-6 flex justify-center">
                            <a
                                href="/projects/wispMadness"
                                className="mt-4 inline-block px-6 py-2 text-lg font-medium text-white bg-gray-800 dark:bg-blue-900 hover:bg-gray-700 dark:hover:bg-blue-800 rounded-lg shadow-md transition duration-300"
                            >
                                Voir le projet
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
        ;
}
