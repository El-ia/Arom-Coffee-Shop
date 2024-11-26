import * as dataMapper from "../dataMapper.js";

// Function to handle search by category
export async function searchCategory(req, res) {

  const category = req.query.category; // Get category from query parameters
    
  try {
    
    let coffees;

    // If category is 'all', fetch all coffee products
    if (category === "all") {

      coffees = await dataMapper.getAllProducts();
    } else {
      // Otherwise, fetch coffee products by specific category
      coffees = await dataMapper.getCoffeeByCategory(category);
    }
    // Render the 'catalog' view with the filtered coffees
    res.render('catalog', { coffees });

  } catch (error) {

    // Handle errors by logging and rendering an error page
    console.error(error);
    res.status(500).render("500");
  }
}


// Function to handle search by coffee name
export async function searchName(req, res) {

  const name = req.query.name; // Get name from query parameters
  
  try {
    
    // Fetch coffees based on the name
    const coffees = await dataMapper.getCoffeeByName(name);

    // Render the 'catalog' view with the search results
    res.render('catalog', { coffees });

  } catch (error) {

    // Handle errors by logging and rendering an error page
    console.error(error);
    res.status(500).render("500");
  }
}
