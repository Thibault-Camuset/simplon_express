// Constantes des Librairies
const express = require('express');
const exphbs = require('express-handlebars');


const DBManager = require('./DBManager.js');

const dbManager = new DBManager();




// Engine de Express (extansion prise en compte)
const app = express();
app.set('view engine', 'hbs');
app.engine('hbs', exphbs({ extname: '.hbs' })); 




// Requête sur la base de donnée
app.get('/', (req, resp) => {
    // Préparation de la recherche, et de la requête
    resp.set('Content-Type', 'text/html');
    const search = req.query.search;
    let query = "SELECT * FROM products";

    // Condition si la recherche n'est PAS vide qui change la requête
    if(search) {
        query += ' WHERE productName LIKE "%' +search+ '%"';
    }

    // Envoi de la requête, récupération de la réponde, et envoi de celle ci sur home.hbs
    dbManager.db.query(query, function(err, results) {
        if(err) throw err;
        // On envoie le résultat de la requête, et le contenu de la barre de recherche vers home.hbs
        resp.render('home', {
            products: results,
            search: search
        });
    });
});


// Définition du port et écoute du serveur
const port = process.env.PORT || 8000;
app.listen(port, () => {
    console.log('Server app listening on port ' + port);
});