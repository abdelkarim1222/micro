categoriResolver.js: Il définit un schéma GraphQL avec des types, des requêtes et des mutations pour gérer les catégories.

categoriSchema.js: Il établit une connexion à une base de données SQLite et crée une table pour stocker les catégories.

models.js: Il définit une classe "Categori" avec des méthodes pour interagir avec la base de données, telles que l'ajout, la recherche, la mise à jour et la suppression de catégories.

server.js: Il configure un serveur Express qui utilise à la fois GraphQL et des API REST pour gérer les catégories, en se basant sur le schéma GraphQL et la base de données SQLite. Il définit des points de terminaison pour les opérations CRUD sur les catégories.
***************************************************************************************************************************************
 (jobResolver.js): Ce code définit des résolveurs GraphQL qui interagissent avec une base de données pour récupérer, insérer, mettre à jour et supprimer des emplois. Il utilise des requêtes SQL pour effectuer ces opérations et retourne les résultats ou les erreurs sous forme de promesses.

 (jobSchema.js): Ce code crée un schéma GraphQL qui définit les types, les requêtes et les mutations pour gérer les emplois. Il spécifie les champs et les opérations disponibles, ainsi que le schéma de réponse pour la suppression d'un emploi.

models.js (SQLite Database Setup): Ce code configure une connexion à une base de données SQLite, crée une table "jobs" si elle n'existe pas déjà, et définit une classe Job pour interagir avec la base de données. La classe offre des méthodes pour enregistrer, rechercher, mettre à jour et supprimer des emplois dans la base de données.

server.js(Express Server Setup): Ce code crée un serveur Express qui gère les requêtes GraphQL et les requêtes API REST liées aux emplois. Il configure les routes et les middlewares nécessaires pour traiter les requêtes, et utilise les fonctions de résolveur et les requêtes de base de données correspondantes pour fournir les résultats attendus.