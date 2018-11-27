const fs = require("fs-extra");

const list = fs.readFileJson("../public/words.json")

console.log(list);