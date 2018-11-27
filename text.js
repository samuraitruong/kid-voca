const fs = require("fs-extra");

let list = fs.readJsonSync("./public/words.json")

const input = process.argv[2];
const array = input.split(" ");
list = list.concat(array);

// console.log(list);

fs.writeJsonSync("./public/words.json", list, {
    space: 4
});