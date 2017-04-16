"use strict";
var path = require('path');
var module = require('./module');
var directoryName = process.argv[2];
var ext = process.argv[3];

module(directoryName, ext, printToScreen);



function printToScreen(err, list){
    
    if (err) return err;

    list.forEach(function (file) {
        console.log(file);
    });
}