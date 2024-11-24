// Chargement des variables d'environnement
import 'dotenv/config';

// Import des modules tiers
import express from 'express';
import session from 'express-session';

// Import des modules locaux
import { router } from "./app/router.js";
import { notFound } from "./app/middlewares/notFound.js";

// Création d'une app Express
const app = express();

// Mise en place du moteur de rendu
app.set("view engine", "ejs");
app.set("views", "./app/views");

// Service des données statiques
app.use(express.static('./public'));

//app.use("/favicon.ico", express.static("./public/images/logo.svg"));

// Configurer les sessions
app.use(session({
  secret: process.env.SESSION_SECRET,
  resave: false,
  saveUninitialized: true,
  cookie: { secure: false } 
}));

// Middleware pour visualiser la session
app.use((req, res, next) => {
  console.log(req.session);
  next();
});

// Configuration du router
app.use(router);

app.use(notFound);

// Lancement du serveur
const PORT = process.env.PORT || 3001;
app.listen(PORT, () => {
  console.log(`🚀 Server started on http://localhost:${PORT}`);
});