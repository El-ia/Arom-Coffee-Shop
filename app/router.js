import { Router } from "express";

import * as mainController from "./controllers/mainController.js";
import * as basketController from "./controllers/basketController.js";

export const router = Router();


router.get('/', mainController.renderHomePage);

router.get('/catalogue', mainController.renderCatalogPage);

router.get('/produit/:id', mainController.renderProductPage);

router.get('/boutique', mainController.renderAboutShopPage);


router.get('/basket', basketController.basketPage);
router.get('/basket/add/:id', basketController.addProductToBasket);
router.get('/basket/remove/:id', basketController.removeProductFromBasket);