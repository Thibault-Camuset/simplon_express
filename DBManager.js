const mysql = require('mysql');

class DBManager {

    db;
   
    constructor() {
        // Paramètres de connexion à la base de donnée
        this.db = mysql.createConnection({
        host: "localhost",
        user: "root",
        password: "",
        database: "classicmodels"
        });


        // Connexion à la base de donnée
        this.db.connect(function (err) {
        if(err) throw err;
            console.log("Connexion à la DBB réussie");
        });
    }

}

module.exports = DBManager;