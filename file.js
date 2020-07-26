const fs = require("fs");
const path = require("path");

fs.writeFileSync(path.join(__dirname, "myFile.txt"), "HelloWorld");

let myText = fs.readFileSync(path.join(__dirname, "myFile.txt"));
console.log(myText.toString());

