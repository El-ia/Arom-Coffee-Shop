import * as dataMapper from "../dataMapper.js";

// Function to render the home page
export async function renderHomePage(req, res) {
  
  try{
    
    // Fetch the latest coffee products (news)
    const coffees = await dataMapper.getLastNewsProducts();

    // Render the home page with the latest coffee products
    res.render("home", { coffees });

  } catch (error) {

    // Handle errors by logging them and rendering a 500 error page
    console.error(error);
    res.status(500).render("500");
  }
}
  
// Function to render the catalog page
export async function renderCatalogPage(req, res){

  try{

    // Fetch all coffee products
    const coffees = await dataMapper.getAllProducts();

    // Render the catalog page with all coffee products
    res.render("catalog", { coffees });

  } catch (error) {

    // Handle errors by logging them and rendering a 500 error page
    console.error(error);
    res.status(500).render("500");
  }
}


// Function to render a single product page
export async function renderProductPage(req, res){

  try {
    
    const coffeeId = parseInt(req.params.id); // Get the coffee ID from the URL params
    // Fetch the specific coffee by its ID

    const coffee = await dataMapper.getCoffeeById(coffeeId);

    // If no coffee is found, render a 404 error page
    if(!coffee){return res.status(404).render("404");}

    // Render the product page with the specific coffee details
    res.render("product", { coffee });

  } catch (error) {

    // Handle errors by logging them and rendering a 500 error page
    console.error(error);
    res.status(500).render("500");
  }
}

// Function to render the about shop page
export function renderAboutShopPage(req, res){

  // Render the about shop page (static page)
  res.render("aboutShop");
}