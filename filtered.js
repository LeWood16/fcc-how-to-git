"use strict";
var fs = require('fs');
var path = require('path');

var directoryName = process.argv[2];
var ext = "." + process.argv[3];

fs.readdir(directoryName, filterFiles);

function filterFiles(err, files){
    if (err) return err;

    for (let i = 0; i < files.length; i++){
        let file = files[i].toString();

        if (path.extname(file) == ext){
            console.log(file);
        }
    }
}
