# Site E-commerce de café, Arôm'Coffee

Ce projet est une application de commerce en ligne utilisant Node.js, Express, et un modèle DataMapper pour gérer les interactions avec la base de données.

## Table des matières

- [Technologies utilisées](#technologies-utilisées)
- [Installation](#installation)
- [Structure du projet](#structure-du-projet)
- [Fonctionnalités](#fonctionnalités)
- [Explication du code](#contrôleurs)
- [Améliorations possibles](#améliorations-possibles)

---

### Technologies utilisées

- **HTML, CSS** : Pour le front-end.
- **Node.js** : Pour l’exécution du serveur en Back-end.
- **Express.js** : Pour gérer les requêtes HTTP et la logique serveur.
- **EJS** : Pour le rendu des vues HTML.
- **Session** : Pour gérer les sessions utilisateur.
- **Postgres** : Pour la gestion des données et les interactions avec la base de données.

---

### Installation

1. Clonez ce repository :
    ```bash
    git clone git@github.com:El-ia/Arom-Coffee-Shop.git
    cd Arom-Coffee-Shop
    ```

2. Installez les dépendances :
    ```bash
    npm install -y
    ```

3. Installez la base de données (BDD) :
    - Depuis PostgreSQL, créez la BDD avec les informations suivantes :
        - Utilisateur : `ocoffee`
        - Mot de passe : `ocoffee`
        - Base de données : `ocoffee`
    - Insérez ensuite le fichier `coffee_db_sql` pour créer la structure de la base.

4. Lancez le serveur :
    ```bash
    npm run dev
    ```

Le serveur devrait maintenant être accessible sur [http://localhost:3000](http://localhost:3000).

### Structure du projet

Voici une vue d’ensemble de la structure des dossiers et fichiers appartenant au projet :

/app                                        # Dossier principal contenant l'application backend
  ├── /controllers                          # Fichiers contrôleurs (logique métier)
  │     ├── authController.js               # Gestion de l'authentification
  │     ├── basketController.js             # Gestion du panier d'achat
  │     ├── mainController.js               # Pages principales et routes générales
  │     └── searchController.js             # Gestion de la recherche
  │
  ├── /middlewares                          # Middlewares (exécutés entre requête et réponse)
  │     └── notFound.js                     # Gestion des erreurs 404
  │
  ├── /views                                # Templates pour le rendu des pages
  │     ├── /partials                       # Fragments réutilisables (header, footer, etc.)
  │     │     ├── font-and-style.ejs        # Polices et styles communs
  │     │     ├── footer.ejs                # Pied de page
  │     │     ├── header.ejs                # Structure de base HTML
  │     │     └── nav.ejs                   # Barre de navigation
  │     │
  │     ├── 404.ejs                         # Page d'erreur 404
  │     ├── 500.ejs                         # Page d'erreur 500
  │     ├── aboutShop.ejs                   # Page "À propos"
  │     ├── auth.ejs                        # Page d'authentification
  │     ├── basket.ejs                      # Page du panier
  │     ├── catalog.ejs                     # Catalogue des produits
  │     ├── home.ejs                        # Page d'accueil
  │     └── product.ejs                     # Détails d'un produit
  │
  ├── database.js                           # Configuration de la base de données
  ├── dataMapper.js                         # Gestion des requêtes SQL
  ├── router.js                             # Définition des routes
  │
/DB                                         # Fichiers liés à la base de données
  └── coffe_db.sql                          # Script SQL pour la base
│
/node_modules                               # Modules npm
│
/public                                     # Fichiers statiques
  ├── /css                                  # Feuilles de style
  │     ├── header-footer.css               # Styles pour header et footer
  │     ├── mediaQueries.css                # Responsivité
  │     ├── reset.css                       # Réinitialisation des styles
  │     └── style.css                       # Styles généraux
  │
  ├── /images                               # Images utilisées
  └── favicon.ico                           # Favicon
│
/.env                                       # Configuration des variables d'environnement
/.env.example                               # Exemple de fichier .env
/.gitignore                                 # Fichiers ignorés par Git
/.eslintrc.js                               # Configuration ESLint
/index.js                                   # Point d'entrée de l'application
/package.json                               # Dépendances du projet
/package-lock.json                          # Verrouillage des versions des dépendances
/README.md                                  # Documentation du projet


### Fonctionnalités

- **Page de panier** : Permet à un utilisateur de voir les produits ajoutés à son panier.
- **Ajout de produits** : Les utilisateurs peuvent ajouter des produits au panier à partir de la page de catalogue.
- **Suppression de produits** : Les utilisateurs peuvent retirer des produits du panier.
- **Filtrage de produits** : Barre de recherche et filtres par catégorie.

---

#### Contrôleurs

1. **authController.js**  
   Gère la logique d’inscription et de connexion des utilisateurs.  
   - Route incluse : rendu de la page d'authentification.

2. **basketController.js**  
   Gère les opérations liées au panier (ajout, suppression de produits dans la session utilisateur).  
   Principales fonctions :
   - `addProductToBasket` : Ajoute un produit au panier.
   - `removeProductFromBasket` : Retire un produit du panier.

3. **productController.js**  
   Gère l’affichage des produits disponibles dans le catalogue et leur ajout au panier.  
   Principale fonction :
   - `getProducts` : Récupère les produits depuis la base de données.

4. **mainController.js**  
   Gère le rendu des pages principales.  
   Principales fonctions :
   - `renderHomePage` : Affiche la page d'accueil avec les derniers produits (news).
   - `renderCatalogPage` : Affiche la page du catalogue contenant tous les produits.
   - `renderProductPage` : Affiche la page d’un produit spécifique, identifié par son ID.
     - Rend une page 404 si le produit n'est pas trouvé.
   - `renderAboutShopPage` : Affiche la page "À propos du magasin" (statique).

---

### Améliorations possibles

- **Amélioration de l'authentification** : Fonctionnement de la page d'authentification (manque d'expérience).
- **Mise à jour des quantités** : Gestion dynamique des quantités dans le panier (manque d'expérience).
- **Calcul dynamique du total** : Affichage du total en temps réel (manque d'expérience).
- **Passation de commande** : Validation du panier et enregistrement de la commande (manque d'expérience).
- **Ajout de JavaScript côté front** : Pour améliorer l'interactivité du site.
