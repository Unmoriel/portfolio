"use client";

import { useState } from "react";

export default function PortfolioApprentissage() {
    const [activeTab, setActiveTab] = useState("realiser");

    const tabs = [
        { id: "realiser", label: "Réaliser", project: "/projet-1", image: "/path/to/image1.jpg", video: "/path/to/video1.mp4", description: "Description détaillée de la compétence et des apprentissages critiques associés." },
        { id: "conduire", label: "Conduire", project: "/projet-2", image: "/path/to/image2.jpg", video: "/path/to/video2.mp4", description: "Explication des éléments de validation et des méthodes utilisées pour y parvenir." },
        { id: "collaborer", label: "Collaborer", project: "/projet-3", image: "/path/to/image3.jpg", video: "/path/to/video3.mp4", description: "Justification des éléments validés avec des traces concrètes." },
    ];

    return (
        <div className="relative isolate overflow-hidden bg-white dark:bg-gray-900 px-6 py-24 sm:py-32 lg:px-0">
            <div className="absolute inset-0 -z-10 overflow-hidden">
                <svg
                    aria-hidden="true"
                    className="absolute left-[max(50%,25rem)] top-0 h-[48rem] w-[128rem] -translate-x-1/2 stroke-gray-200 dark:stroke-gray-700 [mask-image:radial-gradient(48rem_48rem_at_top,white,transparent)]"
                >
                    <defs>
                        <pattern id="grid-pattern" x="50%" y={-1} width={200} height={200} patternUnits="userSpaceOnUse">
                            <path d="M100 200V.5M.5 .5H200" fill="none" />
                        </pattern>
                    </defs>
                    <rect fill="url(#grid-pattern)" width="100%" height="100%" strokeWidth={0} />
                </svg>
            </div>

            <div className="mx-auto max-w-7xl text-center lg:text-left">
                <h1 className="text-4xl font-bold tracking-tight text-gray-900 dark:text-white sm:text-6xl">
                    Portfolio d'apprentissage
                </h1>
                <p className="mt-6 text-lg leading-8 text-gray-600 dark:text-gray-300 max-w-2xl">
                    Analyse et justification de la validation des compétences essentielles du niveau 3 du parcours IAMSI.
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
                            <h2 className="text-4xl font-bold text-gray-900 dark:text-white">{tab.label}</h2>
                            <p className="mt-4 text-lg text-gray-600 dark:text-gray-300">{tab.description}</p>
                            <div className="mt-6 space-y-4">
                                <a href={tab.project} className="text-blue-600 dark:text-blue-400 hover:underline">
                                    Lien vers un projet associé
                                </a>
                            </div>
                        </div>
                    ) : null
                )}
            </div>
        </div>
    );
}
