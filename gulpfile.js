const {series,parallel} = require("gulp");

function t1(){
    console.log("Hola Mundo");
}

function t2(){
    console.log("Adios Mundo");
}

exports.paralelo = parallel(t1,t2);
exports.adiosmundo = adiosmundo;
exports.default = holamundo;

/*let gulp = require("gulp");

function holamundo(){
    console.log("Hola Mundo");
}

function adiosmundo(){
    console.log("Adios Mundo");
}

exports.holamundo = holamundo;
exports.adiosmundo = adiosmundo;
exports.default = holamundo;
*/