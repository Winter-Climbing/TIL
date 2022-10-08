const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";

let input = fs.readFileSync(filePath).toString().split("\n");

const count = new Set(input.map((x) => x % 42)).size;

console.log(count);
