const mysql = require('mysql');

class DBManager {

    _db;
   
    constructor() {
        // Paramètres de connexion à la base de donnée
        this._db = mysql.createConnection({
        host: "localhost",
        user: "root",
        password: "",
        database: "classicmodels"
        });


        // Connexion à la base de donnée
        this._db.connect(function (err) {
        if(err) throw err;
            console.log("Connexion à la DBB réussie");
        });
    }
    


    // Getter et Setter
    get db() {
        return this._db;
    }

    set db(value) {
        this._db = value;
    }



    // Méthode query qui permettra de faire la requête sur la BDD.
    query(sql, args) {
        return new Promise( ( resolve, reject ) => {
            this.db.query( sql, args, ( err, rows ) => {
                if ( err )
                    return reject( err );
                resolve( rows );
            });
        });
    }

}

module.exports = DBManager;