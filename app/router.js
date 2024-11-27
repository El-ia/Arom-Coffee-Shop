
// Importing Router from express and controllers for various routes

import { Router } from "express";

import * as mainController from "./controllers/mainController.js";
import * as basketController from "./controllers/basketController.js";
import * as searchController from "./controllers/searchController.js";
import * as authController from "./controllers/authController.js";

// Creating a new instance of the Router
export const router = Router();

// Route for rendering the home page
router.get('/', mainController.renderHomePage);

// Route for rendering the catalog page
router.get('/catalogue', mainController.renderCatalogPage);

// Route for rendering a specific product page by product ID
router.get('/produit/:id', mainController.renderProductPage);

// Route for rendering the about the shop page
router.get('/boutique', mainController.renderAboutShopPage);


// Basket-related routes

// Route to display the shopping basket
router.get('/panier', basketController.basketPage);

// Route to add a product to the basket by product ID
router.get('/panier/ajouter/:id', basketController.addProductToBasket);

// Route to remove a product from the basket by product ID
router.get('/retirer/:id', basketController.removeProductFromBasket);


// Routes for searching products in the catalog

// Route to search products by category
router.get('/catalogue/categorie', searchController.searchCategory);

// Route to search products by name
router.get('/catalogue/name', searchController.searchName);

// Route to login and sing-up
router.get('/login', authController.loginPage);
