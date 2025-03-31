const express = require('express');
const app = express();
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const userApiRoutes = require('./routes/userApiRoutes');

// charge le fichier .env
dotenv.config();

mongoose.connect(process.env.MONGO_CONNECTION)
    .then(() => console.log("connexion à la db réussie"))
    .catch(() => console.log("connexion à la db échouée"));

app.get("/", (req, res) => {
    res.send("Accueil");
})

app.use(express.json());
app.use(express.urlencoded({ extended:true }))

app.use("/api/user", userApiRoutes);

app.listen(8080, () => {
    console.log("Le serveur a démarré sur le port 8080");
})