class DataService {
    static file = require("fs");
    static products = require("../data/data.json").products;
    static productsBill = [];


    static getProducts() {
        return DataService.products;
    }
    static setProduct(p) {
        DataService.products = p;
        DataService.addToFile();
    }
    static addProduct(p) {
        DataService.products = DataService.products.concat(p);
        DataService.addToFile();
    }


    static getProductsBill() {
        return DataService.productsBill;
    }
    static setProductBill(pb) {
        DataService.productsBill = pb;
    }
    static addProductBill(pb) {
        DataService.productsBill = DataService.productsBill.concat(pb);
    }


    static addToFile() {
        DataService.file.writeFile('../data/data.json', JSON.stringify(DataService.getProducts()));
    }
}

module.exports = DataService;