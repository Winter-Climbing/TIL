const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";

let input = fs.readFileSync(filePath).toString().split("\n");

let answer = input[1].split("").reduce((a, b) => +a + +b);
console.log(answer);
