// Loading environment variables
import 'dotenv/config';

// Importing third-party modules
import express from 'express';
import session from 'express-session';

// Importing local modules
import { router } from "./app/router.js";
import { notFound } from "./app/middlewares/notFound.js";

// Creating an Express app
const app = express();

// Setting up the view engine
app.set("view engine", "ejs");
app.set("views", "./app/views");

// Serving static data
app.use(express.static('./public'));

// Configuring sessions
app.use(session({
  secret: process.env.SESSION_SECRET,
  resave: false,
  saveUninitialized: true,
  cookie: { secure: false } 
}));

// Middleware to log the session
app.use((req, res, next) => {
  console.log(req.session);
  next();
});

// Configuring the router
app.use(router);

// Middleware for not found error
app.use(notFound);

// Starting the server
const PORT = process.env.PORT || 3001;
app.listen(PORT, () => {
  console.log(`🚀 Server started on http://localhost:${PORT}`);
});