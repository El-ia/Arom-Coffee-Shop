import * as dataMapper from "../dataMapper.js";

// Function to render the basket page
export async function basketPage(req, res) {

  // Retrieve the array of coffee IDs from the session
  const coffeeIds = req.session.coffeeIds;

  // If there are coffee IDs, fetch the coffee details using those IDs
  const coffees = await dataMapper.getCoffeesByIds(coffeeIds);

  // Render the basket page with the list of selected coffees
  res.render("basket", { coffees });
}


// Function to add a product to the basket
export async function addProductToBasket(req, res){

  try{
    
    // Get the coffee ID from the URL parameters
    const coffeeId = parseInt(req.params.id);

    // Initialize the session's coffeeIds array if it doesn't exist
    if (! req.session.coffeeIds) {
      req.session.coffeeIds = [];
    }

    // Add the coffee ID to the basket (if it's not already there)
    if (! req.session.coffeeIds.includes(coffeeId)) { 
      req.session.coffeeIds.push(coffeeId); 
    }

    // Redirect the user to the basket page
    res.redirect("/panier");

  } catch (error) {

    // Handle errors by logging them and rendering a 500 error page
    console.error(error);
    res.status(500).render("500");
  }
}


// Function to remove a product from the basket
export async function removeProductFromBasket(req, res){

  try{

    // Get the coffee ID to remove from the URL parameters
    const coffeeIdToRemove = parseInt(req.params.id);

    // Filter the coffeeIds array to remove the selected coffee ID
    req.session.coffeeIds = req.session.coffeeIds.filter(coffeeId => coffeeId !== coffeeIdToRemove);

    // Redirect the user to the basket page
    res.redirect("/panier");
    
  } catch (error) {

    // Handle errors by logging them and rendering a 500 error page
    console.error(error);
    res.status(500).render("500");
  }
}