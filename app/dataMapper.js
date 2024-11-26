
// Importing the client instance to interact with the database
import client from "./database.js";

// Function to get the last 3 products from the "coffee" table, ordered by ID (descending)
export async function getLastNewsProducts(){

  const promise = client.query(
    'SELECT * FROM "coffee" ORDER BY "id" DESC LIMIT 3'); 
  const result = await promise; 
  const coffees = result.rows;  
  return coffees;

}

// Function to get all products from the "coffee" table
export async function getAllProducts(){ 

  const promise = client.query(
    'SELECT * FROM "coffee"');
  const result = await promise;
  const coffees = result.rows;
  return coffees;
}

// Function to get a single coffee by its ID
export async function getCoffeeById(coffeeId){

  const result = await client.query(
    `SELECT * FROM "coffee" WHERE "id" = $1`, [coffeeId]);
  const coffee = result.rows[0];
  return coffee;
}

// Function to get multiple coffees by their IDs
export async function getCoffeesByIds(coffeeIds) { 
  const result = await client.query(
    `SELECT * FROM "coffee" WHERE "id" = ANY($1::int[])`, [coffeeIds]); 
  const coffees = result.rows;
  return coffees;
  // WHERE "id" = ANY($1::int[]) : This allows filtering the results by the provided list of IDs.
}

// Function to get coffees filtered by their category ("main characteristic")
export async function getCoffeeByCategory(category) {
  const result = await client.query(
    `SELECT * FROM "coffee" WHERE "main_characteristic" = $1`, [category]);
  const coffees = result.rows;
  return coffees;
}

// Function to get coffees filtered by their name (case-insensitive search)
export async function getCoffeeByName(name) {
  const result = await client.query(
    `SELECT * FROM "coffee" WHERE "name" ILIKE $1`, [`%${name}%`]
  );
  const coffees = result.rows;
  return coffees;
}


