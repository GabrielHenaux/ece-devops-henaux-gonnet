const express = require('express');
const userRouter = require('./routes/user');
const bodyParser = require('body-parser');
const path = require('path');
const db = require('./dbClient');

const app = express();
const port = process.env.PORT || 3000;

// Set up database error handling
db.on("error", (err) => {
  console.error(err);
});

// Middleware pour parser le corps des requêtes
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// Servir les fichiers statiques du dossier 'public'
app.use(express.static(path.join(__dirname, '../public')));

// Route pour servir la page principale
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, '../public', 'index.html'));
});

// Routes supplémentaires
app.use('/user', userRouter);

// Exemple d'une route pour gérer les données d'un formulaire
app.post('/your-target-route', (req, res) => {
  // Gérer les données du formulaire
  console.log(req.body); // Assurez-vous que bodyParser est configuré pour parser le corps de la requête
  res.send('Formulaire reçu');
});

// Démarrer le serveur
const server = app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
  console.log(`http://localhost:${port}`);
});

// Gestion de SIGINT pour arrêter le serveur proprement
process.on('SIGINT', () => {
  console.log('Shutting down the server...');
  server.close(() => {
    console.log('Server shut down successfully');
    process.exit(0);
  });
});

module.exports = server;
