const express = require('express')
const userRouter = require('./routes/user')
const bodyParser = require('body-parser')
const path = require('path');


const app = express()
const port = process.env.PORT || 3000

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, '../views', 'index.html'));
});

const db = require('./dbClient')
db.on("error", (err) => {
  console.error(err)
})

app.use(bodyParser.urlencoded({
  extended: false
}))
app.use(bodyParser.json())

app.get('/', (req, res) => res.send('Hello World!'))

app.use('/user', userRouter)

app.post('/votre-route-cible', (req, res) => {
  // Traitement des données du formulaire
  console.log(req.body); // Assurez-vous d'avoir bodyParser configuré pour parser le corps de la requête
  res.send('Formulaire reçu');
});

const server = app.listen(port, (err) => {
  if (err) throw err
  console.log("Server listening the port " + port)
})





module.exports = server
