const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";

let input = fs.readFileSync(filePath).toString().split("\n");

const arr = input[1].split(" ").map((item) => +item);

console.log(`${Math.min(...arr)} ${Math.max(...arr)}`);
