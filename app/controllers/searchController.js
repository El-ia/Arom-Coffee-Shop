import * as dataMapper from "../dataMapper.js";

export async function searchCategory(req, res) {
  
  const category = req.query.category;
    
  try {
    
    let coffees;
    if (category === "all") {

      coffees = await dataMapper.getAllProducts();
    } else {
    
      coffees = await dataMapper.getCoffeeByCategory(category);
    }
    res.render('catalog', { coffees });

  } catch (error) {
    console.error(error);
    res.status(500).render("500");
  }
}

export async function searchName(req, res) {

  const name = req.query.name;
  try {

    const coffees = await dataMapper.getCoffeeByName(name);
    res.render('catalog', { coffees });

  } catch (error) {
    console.error(error);
    res.status(500).render("500");
  }
}
