const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";

let input = fs.readFileSync(filePath).toString();

const arr = [];

for (let i = "a".charCodeAt(); i <= "z".charCodeAt(); i++) {
  arr.push(input.indexOf(String.fromCharCode(i)));
}

console.log(arr.join(" "));
