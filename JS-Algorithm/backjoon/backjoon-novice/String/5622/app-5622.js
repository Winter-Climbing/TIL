const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";

let input = fs.readFileSync(filePath).toString()

const obj = {
    3: 'ABC',
    4: 'DEF',
    5: 'GHI',
    6: 'JKL',
    7: 'MNO',
    8: 'PQRS',
    9: 'TUV',
    10: 'WXYZ'
}

let answer = 0

for (i = 3; i < 11; i++) {
    for (j = 0; j < input.length; j++) {
        if (obj[i].includes(input[j])){
            answer += i
        }
    }
}

console.log(answer);