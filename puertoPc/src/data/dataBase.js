let fs = require('fs');
const path = require('path');


module.exports = {
    getProducts : JSON.parse(fs.readFileSync(path.join(__dirname, '../data/products.json'), 'utf-8')),
    getUsers : JSON.parse(fs.readFileSync(path.join(__dirname, '../data/users.json'), 'utf-8')),
    getCategories : JSON.parse(fs.readFileSync(path.join(__dirname, '../data/categories.json'), 'utf-8')),
    writeJson : (dataBase, file) => {
        fs.writeFileSync(`../data/${file}.json`, JSON.stringify(dataBase), "utf-8")
    },
}


