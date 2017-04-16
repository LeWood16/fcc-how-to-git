"use strict";
var fs = require('fs');

var fileBuffer = fs.readFileSync(process.argv[2]);
var str = fileBuffer.toString();
var arr = str.split("")

var newlineSum = 0;

for (let i = 0; i < arr.length; i++){
    if (arr[i] == "\n") newlineSum++;
}

console.log(newlineSum);