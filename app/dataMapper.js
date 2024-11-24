import client from "./database.js";

export async function getLastNewsProducts(){

  const promise = client.query('SELECT * FROM "coffee" ORDER BY "id" DESC LIMIT 3'); 
  const result = await promise; 
  const coffees = result.rows;  
  return coffees;

}

export async function getAllProducts(){ 

  const promise = client.query('SELECT * FROM "coffee"');
  const result = await promise;
  const coffees = result.rows;
  return coffees;
}

export async function getCoffeeById(coffeeId){

  const result = await client.query(`SELECT * FROM "coffee" WHERE "id" = $1`, [coffeeId]);
  const coffee = result.rows[0];
  return coffee;
}

export async function getCoffeesByIds(coffeeIds) { 
  const result = await client.query(`SELECT * FROM "coffee" WHERE "id" = ANY($1::int[])`, [coffeeIds]); 
  const coffees = result.rows;
  return coffees;
  // WHERE "id" = ANY($1::int[]) : Cela permet de filtrer les résultats en fonction des IDs fournis. 
}





