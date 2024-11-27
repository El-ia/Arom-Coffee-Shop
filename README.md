# Site E-commerce de café, Arôm'Coffee

Ce projet est une application de commerce en ligne utilisant Node.js, Express, et un modèle DataMapper pour gérer les interactions avec la base de données.

## Table des matières

	•	Technologies utilisées
	•	Installation
	•	Structure du projet
	•	Fonctionnalités
	•	Explication du code

### Technologies utilisées

    .   HTML, CSS - Pour le front
	•	Node.js – Pour l’exécution du serveur en Back
	•	Express.js – Pour gérer les requêtes HTTP et la logique du serveur.
	•	EJS – Pour le rendu des vues HTML.
	•	Session – Pour gérer les sessions utilisateur.
	•	Postegres – Pour la gestion des données et les interactions avec la base de données.

### Installation

	1.	Clonez ce repository :
    git clone git@github.com:El-ia/Arom-Coffee-Shop.git
    cd rep
    
    2.	Installez les dépendances :
    npm install -y

    3. Installez la BDD  :
        depuis postgres
        créer la bdd avec :
            user : ocoffee, 
            mdp : ocoffee, 
            bdd : ocoffee
        Et insérer le fichier cofee_db_sql pour la créer.

    4.	Lancez le serveur :
    npm run dev

Le serveur devrait maintenant être accessible sur http://localhost:3000.

### Structure du projet

Voici une vue d’ensemble de la structure des dossiers et fichiers appartenant au projet :

/ app                                            # Dossier principal contenant l'application backend
    /controllers                                 # Contient les fichiers contrôleurs, responsables de la logique métier
        /authController.js                       # Gère l'authentification (connexion, déconnexion, etc.)
        /baskteController.js                     # Gère les fonctionnalités liées au panier d'achat
        /mainController.js                       # Gère les pages principales et autres routes générales
        /searchController.js                     # Gère les fonctionnalités de recherche dans l'application
    /middlewares                                 # Contient les middlewares, qui sont des fonctions exécutées entre la requête et la réponse
        notFound.js                              # Middleware pour gérer les erreurs 404 (page non trouvée)
    /views                                       # Contient les fichiers de vues (templates) pour le rendu des pages
        /partials                                # Contient les fragments de templates réutilisables (comme header, footer)
            /font-and-style.ejs                  # Inclut les polices et les link CSS communs
            /footer.ejs                          # Template pour le pied de page
            /header.ejs                          # Template pour la structure de base d'une page HTML
            /nav.ejs                             # Template pour la barre de navigation
        /404.ejs                                 # Page d'erreur 404 (non trouvée)
        /500.ejs                                 # Page d'erreur 500 (erreur serveur)
        /aboutShop.ejs                           # Page à propos du magasin
        /auth.ejs                                # Page pour l'authentification (connexion/inscription)
        /basket.ejs                              # Page du panier d'achat
        /catalog.ejs                             # Page du catalogue de produits
        /home.ejs                                # Page d'accueil
        /product.ejs                             # Page de détails d'un produit
/database.js                                     # Configuration pour la connexion à la base de données 
/dataMapper.js                                   # Fichier de gestion des requêtes à la base de données (modèle pour les données)
/router.js                                       # Définit et gère les routes de l'application
/DB                                              # Contient les fichiers liés à la base de données
    /coffe_db.sql                                # Script SQL pour créer et initialiser la base de données
/node_modules                                    # Modules npm                     
/public                                          # Dossier contenant les fichiers statiques
    /css                                         # Feuilles de styles pour la mise en forme du site
        /header-footer.css                       # Styles spécifiques à l'en-tête et au pied de page
        /mediaQueries.css                        # Styles pour les différents formats d'écran (responsivité)
        /reset.css                               # Réinitialisation des styles par défaut des navigateurs
        /style.css                               # Styles généraux de l'application
    /images                                      # Contient les images utilisées dans l'application
    /favicon.ico                                 # Fichier favicon pour l'icône de l'application
/.env                                            # Fichier de configuration des variables d'environnement
/.env.example                                    # Exemple de fichier .env, servant de modèle pour la configuration
/.gitignore                                      # Liste des fichiers et dossiers à exclure du contrôle de version Git
/.estlint.config.js                              # Configuration d'ESLint pour le linting du code JavaScript
/index.js                                        # Point d'entrée principal de l'application
/package-lock.json                               # Fichier généré automatiquement par npm, verrouille les versions des dépendances
/package.json                                    # Contient les informations du projet et ses dépendances
/README.md                                       # Documentation du projet (instructions d'installation, utilisation, etc.)


### Fonctionnalités

	•	Page de panier : Permet à un utilisateur de voir les produits ajoutés à son panier.
	•	Ajout de produits : Les utilisateurs peuvent ajouter des produits au panier à partir de la page de catalogue.
	•	Suppression de produits : Les utilisateurs peuvent retirer des produits du panier.
    .   Filtrage de produit par barre de recherche et filtre catégorie


### Contrôleurs

	1.	authController.js
Ce contrôleur gère la logique d’inscription et de connexion des utilisateurs. Il inclut une seule route : le rendu de la page d'authetification
	2.	basketController.js
Ce contrôleur gère les opérations liées au panier, telles que l’ajout et la suppression de produits dans la session de l’utilisateur. La logique principale inclut :
	•	addProductToBasket : Ajoute un produit au panier de l’utilisateur.
	•	removeProductFromBasket : Retire un produit du panier.
	3.	productController.js
Ce contrôleur gère l’affichage des produits disponibles dans le catalogue et leur ajout au panier. Il inclut une fonction getProducts pour récupérer les produits de la base de données.

## Améliorations possibles

	•	Fonctionnement de la page d'authentifiation (manque d'éxpérience).
    .   Mise à jour des quantités (manque d'éxpérience).
    .   Calcul dynamique du total(manque d'éxpérience).
    .   Passation de commande (Validation du panier, enregistrement de la commande)(manque d'éxpérience).
    .   Ajouter duJS coté front.


