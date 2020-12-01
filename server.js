// Constantes des Librairies
const express = require('express');
const exphbs = require('express-handlebars');

const DBManager = require('./DBManager.js');
const ProductRepository = require('./product-repository.js');

const dbManager = new DBManager();
const productRepository = new ProductRepository(dbManager);



// Engine de Express (extansion prise en compte)
const app = express();
app.set('view engine', 'hbs');
app.engine('hbs', exphbs({ extname: '.hbs' })); 

// On expose le dossier public et ses ressources
app.use(express.static('public'));


// Requête sur la base de donnée
app.get('/', (req, resp) => {
    productRepository.findAll().then((products) => {
        resp.render('home', {
            products
        });
    });
});


app.get('/search', (req, resp) => {
    const search = req.query.search;

    productRepository.searchByName(search).then((results) => {
        resp.send(results);
    });
});




// Définition du port et écoute du serveur
const port = process.env.PORT || 8800;
app.listen(port, () => {
    console.log('Server app listening on port ' + port);
});