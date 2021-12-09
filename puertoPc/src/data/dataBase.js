let fs = require('fs');

module.exports = {
    getProducts : JSON.parse(fs.readFileSync('./data/products.json', 'utf-8')),
    getUsers : JSON.parse(fs.readFileSync('./data/users.json', 'utf-8')),
    getCategories : JSON.parse(fs.readFileSync('./data/categories.json', 'utf-8')),
    writeJson : (dataBase, file) => {
        fs.writeFileSync(`./data/${file}.json`, JSON.stringify(dataBase), "utf-8")
    },
}

