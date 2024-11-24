import * as dataMapper from "../dataMapper.js";

export async function basketPage(req, res) {

  const coffeeIds = req.session.coffeeIds;
  const coffees = await dataMapper.getCoffeesByIds(coffeeIds);

  res.render("basket", { coffees });
}

export async function addProductToBasket(req, res){

  try{
    
    const coffeeId = parseInt(req.params.id);

    if (! req.session.coffeeIds) {
      req.session.coffeeIds = [];
    }
    if (! req.session.coffeeIds.includes(coffeeId)) { 
      req.session.coffeeIds.push(coffeeId); 
    }

    res.redirect("/basket");

  } catch (error) {
    console.error(error);
    res.status(500).render("500");
  }
}

export async function removeProductFromBasket(req, res){

  try{

    const coffeeIdToRemove = parseInt(req.params.id);
    req.session.coffeeIds = req.session.coffeeIds.filter(coffeeId => coffeeId !== coffeeIdToRemove);

    res.redirect("/basket");
    
  } catch (error) {
    console.error(error);
    res.status(500).render("500");
  }
}