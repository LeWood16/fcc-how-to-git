"use strict";
var fs = require('fs');

fs.readFile(process.argv[2], 'utf8', totalNewlines);


function totalNewlines(err, data){
    // handle any error
    if (err) return err;
    
    let arr = data.split("");
    let sum = 0;
    
    // increment counter variable by number of newlines
    for (let i = 0; i < arr.length; i++){
        if (arr[i] == "\n") sum++;
    }
    
    // return sum of newlines
    console.log(sum);
    
}

