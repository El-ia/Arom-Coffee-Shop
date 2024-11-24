import * as dataMapper from "../dataMapper.js";

export async function renderHomePage(req, res) {

  try{

    const coffees = await dataMapper.getLastNewsProducts();

    res.render("home", { coffees });

  } catch (error) {
    console.error(error);
    res.status(500).render("500");
  }
}
  
export async function renderCatalogPage(req, res){

  try{

    const coffees = await dataMapper.getAllProducts();

    res.render("catalog", { coffees });

  } catch (error) {
    console.error(error);
    res.status(500).render("500");
  }
}


export async function renderProductPage(req, res){

  try {
    
    const coffeeId = parseInt(req.params.id);

    const coffee = await dataMapper.getCoffeeById(coffeeId);

    if(!coffee){return res.status(404).render("404");}

    res.render("product", { coffee });

  } catch (error) {
    console.error(error);
    res.status(500).render("500");
  }
}


export function renderAboutShopPage(req, res){

  res.render("aboutShop");
}