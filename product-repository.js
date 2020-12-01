class ProductRepository {

    _dbManager;

    constructor(dbManager) {
        this._dbManager = dbManager;
    }


    findAll() {
        let query = "SELECT * FROM products ccc";
        return this._dbManager.query(query);
    }


    searchByName(search) {
        let query = 'SELECT * FROM products WHERE productName LIKE "%'+search+'%"';
        return this._dbManager.query(query);
    }


}

module.exports = ProductRepository;