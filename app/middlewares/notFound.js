
// Function for handle 404 errors by rendering a custom 404 page
export const notFound = (req, res) => {

  // Set the HTTP response status to 404
  res.status(404).render("404"); // Render the "404" view for the user
  
};
  