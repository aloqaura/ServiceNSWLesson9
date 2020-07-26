const fs = require("fs");
const path = require("path");

/* 1 Create a function that takes 2 arguments. The first should be a file name and the second should be content. 
The function should create a file with the given name in the current directory with content equal to the content argument */
const writeFile = (fileName, content) => {
    fs.writeFileSync(path.join(__dirname, fileName), content); // writeFileSync is used to create a file and the "content" parameter is the content of the file.
}

writeFile("Alex.json", "{\"HelloAlex\"}"); //

/* 2 Create a function that takes 1 argument, a file name. The function should return a string that is the whole file. */
const readFile = fileName => {
    return fs.readFileSync(path.join(__dirname, fileName)).toString(); // readFileSync passes the path through the __dirname and the file is "fileName". It will return it as a string with the toString function
}

let myFile = readFile("Alex.json");
console.log(myFile);