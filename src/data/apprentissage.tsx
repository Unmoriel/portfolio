export const tabs = [
    {
        id: "realiser",
        label: "Réaliser",
        description: (
            <>
                <h3 className="text-2xl font-semibold text-gray-900 dark:text-white mt-6">Adapter des applications sur un ensemble de supports (embarqué, web, mobile, IoT…)</h3>
                <h4 className="text-xl font-medium text-gray-800 dark:text-gray-200 mt-4">AC 31.01 | Choisir et implémenter les architectures adaptées</h4>
                <p className="mt-2 text-lg text-gray-600 dark:text-gray-300">
                    Lors du projet Shape2PCS, j’ai étudié et mis en place une architecture modulaire permettant la conversion de fichiers Shape (.shp) en GEOJSON (.json). J’ai utilisé Symfony pour le backend et React avec Bootstrap pour le frontend. J’ai également intégré un maquettage réalisé sur Figma.
                </p>

                <h4 className="text-xl font-medium text-gray-800 dark:text-gray-200 mt-4">AC 31.02 | Faire évoluer une application existante</h4>
                <p className="mt-2 text-lg text-gray-600 dark:text-gray-300">
                    Dans le cadre du projet Poisson Run, une application CI/CD interne à mon entreprise, j’ai rejoint le projet en cours et développé une fonctionnalité permettant de recenser tous les microservices de l’entreprise ainsi que leur statut dans le temps. Ce travail a nécessité une étude approfondie des bibliothèques JavaScript pour l'affichage des graphiques.
                </p>

                <h4 className="text-xl font-medium text-gray-800 dark:text-gray-200 mt-4">AC 31.03 | Intégrer des solutions dans un environnement de production</h4>
                <p className="mt-2 text-lg text-gray-600 dark:text-gray-300">
                    Tous mes projets en entreprise, notamment Shape2PCS et Poisson Run, ont été intégrés dans des environnements de production en utilisant Git, Docker et une base de données PostgreSQL, garantissant la scalabilité et la fiabilité du système.
                </p>

                {/* Composantes Essentielles */}
                <h3 className="text-2xl font-semibold text-gray-900 dark:text-white mt-6">Composantes essentielles</h3>
                <h4 className="text-xl font-medium text-gray-800 dark:text-gray-200 mt-4">CE1.01 | En expliquant et communiquant l’avancée au client et aux utilisateurs</h4>
                <p className="mt-2 text-lg text-gray-600 dark:text-gray-300">
                    Lors du projet Shape2PCS, j’ai régulièrement communiqué avec les parties prenantes pour assurer la transparence sur l’avancement du projet. Cela a impliqué des réunions hebdomadaires avec le lead développeuse et des points journaliers pour discuter des obstacles techniques et des ajustements nécessaires.
                </p>

                <h4 className="text-xl font-medium text-gray-800 dark:text-gray-200 mt-4">CE2.02 | En recensant les algorithmes et les structures de données usuels</h4>
                <p className="mt-2 text-lg text-gray-600 dark:text-gray-300">
                    Dans le cadre du projet Poisson Run, pour la gestion des microservices, j'ai recensé et appliqué des structures de données optimisées comme les tableaux associatifs pour suivre les statuts des services. De plus, j'ai exploré différents algorithmes de recherche pour traiter efficacement les états des services en temps réel.
                </p>

                <h4 className="text-xl font-medium text-gray-800 dark:text-gray-200 mt-4">CE2.03 | En s’appuyant sur des schémas de raisonnement</h4>
                <p className="mt-2 text-lg text-gray-600 dark:text-gray-300">
                    Lors du développement de l’application Poisson Run, j’ai structuré ma logique algorithmique à l’aide de diagrammes de flux et de schémas UML. Cela m’a permis de valider la logique du processus de suivi des microservices et d’optimiser l’interaction entre les différents composants de l’application.
                </p>

                <h4 className="text-xl font-medium text-gray-800 dark:text-gray-200 mt-4">CE2.04 | En justifiant les choix et validant les résultats</h4>
                <p className="mt-2 text-lg text-gray-600 dark:text-gray-300">
                    Dans le projet Shape2PCS, j'ai justifié le choix de la technologie Symfony pour le backend en expliquant sa robustesse et sa capacité à gérer des fichiers volumineux comme ceux des shapefiles. De plus, l’utilisation de React et Bootstrap pour le frontend a été validée par une validation avec l’équipe et l’intégration de la maquette Figma fournie.
                </p>

                <h4 className="text-xl font-medium text-gray-800 dark:text-gray-200 mt-4">CE1.03 | En appliquant les principes algorithmiques</h4>
                <p className="mt-2 text-lg text-gray-600 dark:text-gray-300">
                    Lors du projet Poisson Run, j'ai appliqué les principes algorithmiques pour créer un système de surveillance des microservices en temps réel, utilisant des algorithmes de gestion de l'état pour afficher les services en ligne ou hors ligne. Ce choix a permis d’optimiser les performances de l’application.
                </p>

                <h4 className="text-xl font-medium text-gray-800 dark:text-gray-200 mt-4">CE1.05 | En respectant la législation, les normes professionnelles et les enjeux sociétaux</h4>
                <p className="mt-2 text-lg text-gray-600 dark:text-gray-300">
                    Dans tous mes projets, y compris Shape2PCS, j’ai respecté les normes professionnelles et légales en matière de gestion des données personnelles, garantissant que les informations traitées étaient anonymisées ou conformes aux standards GDPR lorsque nécessaire.
                </p>
            </>
        )
    },
    {
        id: "conduire",
        label: "Conduire",
        description: (
            <>
                <h3 className="text-2xl font-semibold text-gray-900 dark:text-white mt-6">Participer à la conception et à la mise en œuvre d’un projet système d’information</h3>
                <h4 className="text-xl font-medium text-gray-800 dark:text-gray-200 mt-4">AC 35.01 | Mesurer les impacts économiques, sociétaux et technologiques d’un projet informatique</h4>
                <p className="mt-2 text-lg text-gray-600 dark:text-gray-300">
                    Dans le cadre de mon travail sur le Système d’Information de Poisson Soluble, j’ai réalisé une analyse critique du SI de mon entreprise en identifiant ses forces et ses axes d’amélioration.
                </p>

                <h4 className="text-xl font-medium text-gray-800 dark:text-gray-200 mt-4">AC 35.02 | Savoir intégrer un projet informatique dans le système d’information d’une organisation</h4>
                <p className="mt-2 text-lg text-gray-600 dark:text-gray-300">
                    J’ai travaillé sur l’intégration de Poisson Run au sein du SI de l’entreprise en interconnectant cette application avec les outils internes déjà en place.
                </p>

                <h4 className="text-xl font-medium text-gray-800 dark:text-gray-200 mt-4">AC 35.03 | Savoir adapter un système d’information</h4>
                <p className="mt-2 text-lg text-gray-600 dark:text-gray-300">
                    L’analyse du SI de mon entreprise m’a permis d’identifier des pistes d’évolution pour optimiser la gestion des microservices et renforcer la résilience du système global.
                </p>

                {/* Composantes Essentielles */}
                <h3 className="text-2xl font-semibold text-gray-900 dark:text-white mt-6">Composantes essentielles</h3>
                <h4 className="text-xl font-medium text-gray-800 dark:text-gray-200 mt-4">CE3.01 | En sécurisant le système d’information</h4>
                <p className="mt-2 text-lg text-gray-600 dark:text-gray-300">
                    Pour le projet Poisson Run, j’ai mis en place des protocoles de sécurité pour garantir la protection des informations liées à l’état des microservices. J’ai intégré des solutions de chiffrement pour les données sensibles et une gestion stricte des droits d’accès pour assurer la sécurité de l’environnement de production.
                </p>

                <h4 className="text-xl font-medium text-gray-800 dark:text-gray-200 mt-4">CE3.03 | En appliquant les normes en vigueur et les bonnes pratiques architecturales et de sécurité</h4>
                <p className="mt-2 text-lg text-gray-600 dark:text-gray-300">
                    Lors de l’intégration de Shape2PCS dans l’environnement de production, j’ai suivi les meilleures pratiques en matière d'architecture logicielle en utilisant des principes de découplage et en appliquant des stratégies de sécurité comme l’authentification par tokens pour le backend.
                </p>

                <h4 className="text-xl font-medium text-gray-800 dark:text-gray-200 mt-4">CE4.01 | En identifiant les problématiques du client et les enjeux économiques de l’organisation</h4>
                <p className="mt-2 text-lg text-gray-600 dark:text-gray-300">
                    Lors de l’élaboration du Système d’Information de mon entreprise, j'ai pris en compte les enjeux économiques et les problématiques liées à l’efficience des processus. Cela m’a permis d’identifier des leviers d’optimisation qui ont contribué à réduire les coûts tout en améliorant la performance du SI.
                </p>

                <h4 className="text-xl font-medium text-gray-800 dark:text-gray-200 mt-4">CE5.02 | En adoptant une démarche proactive, créative et critique</h4>
                <p className="mt-2 text-lg text-gray-600 dark:text-gray-300">
                    Dans le cadre du projet Poisson Run, j'ai adopté une démarche proactive en intégrant de nouvelles fonctionnalités basées sur des retours utilisateurs. J’ai proposé des améliorations créatives pour la gestion de la visualisation des services, et ai critiqué les choix précédents pour mieux répondre aux besoins de l’entreprise.
                </p>

                <h4 className="text-xl font-medium text-gray-800 dark:text-gray-200 mt-4">CE5.04 | En communiquant efficacement avec les différents acteurs d’un projet</h4>
                <p className="mt-2 text-lg text-gray-600 dark:text-gray-300">
                    Au cours des projets Shape2PCS et Poisson Run, j’ai travaillé étroitement avec les différentes équipes, y compris les développeurs et les responsables produit, en assurant une communication claire et continue. J’ai organisé des réunions régulières pour suivre l’avancée du projet et répondre à toute question technique.
                </p>

                <h4 className="text-xl font-medium text-gray-800 dark:text-gray-200 mt-4">CE5.05 | En sensibilisant à une gestion éthique, responsable, durable et interculturelle</h4>
                <p className="mt-2 text-lg text-gray-600 dark:text-gray-300">
                    Dans mes projets, je veille à respecter les normes éthiques et sociétales en garantissant la sécurité des utilisateurs et en tenant compte de l’impact environnemental des solutions proposées. J’ai également favorisé la diversité des opinions et des approches en collaborant avec des collègues de divers horizons culturels et professionnels.
                </p>
            </>
        )
    },

    {
        id: "collaborer",
        label: "Collaborer",
        description: (
            <>
                <h3 className="text-2xl font-semibold text-gray-900 dark:text-white mt-6">Manager une équipe informatique</h3>
                <h4 className="text-xl font-medium text-gray-800 dark:text-gray-200 mt-4">AC 36.01 | Organiser et partager une veille technologique et informationnelle</h4>
                <p className="mt-2 text-lg text-gray-600 dark:text-gray-300">
                    J’ai réalisé une veille technologique sur le sujet de la GreenTech et son impact sur l’industrie numérique, ce qui m’a permis d’élargir ma compréhension des enjeux environnementaux du développement logiciel.
                </p>

                <h4 className="text-xl font-medium text-gray-800 dark:text-gray-200 mt-4">AC 36.02 | Identifier les enjeux de l’économie de l’innovation numérique</h4>
                <p className="mt-2 text-lg text-gray-600 dark:text-gray-300">
                    Lors de mon projet universitaire sur la création d’événements avec Symfony et Vue.js, j’ai exploré les innovations technologiques autour des APIs et de la gestion des événements en ligne.
                </p>

                <h4 className="text-xl font-medium text-gray-800 dark:text-gray-200 mt-4">AC 36.03 | Guider la conduite du changement informatique au sein d’une organisation</h4>
                <p className="mt-2 text-lg text-gray-600 dark:text-gray-300">
                    J’ai participé à la formation et à l’accompagnement des utilisateurs lors de l’intégration de Shape2PCS, en m’assurant qu’ils comprennent et utilisent efficacement l’outil.
                </p>

                <h4 className="text-xl font-medium text-gray-800 dark:text-gray-200 mt-4">AC 36.04 | Accompagner le management de projet informatique</h4>
                <p className="mt-2 text-lg text-gray-600 dark:text-gray-300">
                    Lors de la Code Game Jam, j’ai joué un rôle clé dans la coordination de l’équipe de six développeurs. Nous avons utilisé le moteur Godot et terminé 2ᵉ sur une trentaine d’équipes en livrant un jeu vidéo en 30 heures.
                </p>

                {/* Composantes Essentielles */}
                <h3 className="text-2xl font-semibold text-gray-900 dark:text-white mt-6">Composantes essentielles</h3>
                <h4 className="text-xl font-medium text-gray-800 dark:text-gray-200 mt-4">CE6.01 | En développant une communication efficace et collaborative</h4>
                <p className="mt-2 text-lg text-gray-600 dark:text-gray-300">
                    Au sein des projets Shape2PCS et Poisson Run, j’ai collaboré étroitement avec les membres de l’équipe pour assurer une bonne communication. Cela a inclus des points réguliers avec le lead développeuse pour discuter des problèmes techniques et partager des solutions.
                </p>

                <h4 className="text-xl font-medium text-gray-800 dark:text-gray-200 mt-4">CE6.03 | En accompagnant la mise en œuvre des évolutions informatiques</h4>
                <p className="mt-2 text-lg text-gray-600 dark:text-gray-300">
                    Lors de l’évolution de l’application Poisson Run, j’ai accompagné l’intégration de nouvelles fonctionnalités, en travaillant avec l’équipe pour définir les priorités, en veillant à ce que les mises à jour soient réalisées sans perturber le service existant.
                </p>

                <h4 className="text-xl font-medium text-gray-800 dark:text-gray-200 mt-4">CE6.04 | En respectant les contraintes réglementaires et législatives</h4>
                <p className="mt-2 text-lg text-gray-600 dark:text-gray-300">
                    Dans le projet Shape2PCS, j’ai respecté les contraintes légales concernant la gestion des données, en veillant à ce que les processus de conversion de fichiers soient conformes aux régulations en matière de traitement des données géographiques.
                </p>

                <h4 className="text-xl font-medium text-gray-800 dark:text-gray-200 mt-4">CE6.05 | En organisant son travail en relation avec celui de son équipe</h4>
                <p className="mt-2 text-lg text-gray-600 dark:text-gray-300">
                    J’ai organisé mon travail dans le cadre de Poisson Run en fonction des priorités définies lors des réunions avec mon équipe. Cela a permis de respecter les délais tout en travaillant de manière coordonnée sur des tâches partagées, assurant ainsi la cohésion de l’équipe.
                </p>
            </>
        )
    }
];