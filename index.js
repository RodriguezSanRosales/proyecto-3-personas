const intro = require('./intro');
const nudo = require('./nudo');
const final = require('./final');


const nombre = "Julio";
const comida = "pasto";
const ojoVaca = "X-X";
const texto = "aaaa!";
// const edad = Math.floor(Math.random() * 100);
const edad = 19;


let transporte2 = "Bus";
let postSentimient= "Mejor";
let durmio ="durmio";




//string historia
// const historia = "Habia una vez una vaca llamada " + nombre +" y todo el tiempo comia " + comida + " con otras vacas hasta que se intoxico y murio."  ;
// console.log(historia);
console.log(intro.historia(personaje, lugar, edad) + nudo.historia(otroP, lugar) + final.historia(personaje, lugar));



console.log(cowsay.say({
    text: texto,
    e: ojoVaca,
    T: "v "
}));