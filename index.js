const fs = require ('fs');
const intro = require('./intro');
const nudo = require('./nudo');
const final = require('./final');


// const edad = Math.floor(Math.random() * 100);
const edad = 15;


let transporte2 = "Bus";
let postSentimient= "Mejor";
let durmio ="durmio";

let personaje = "Oscar";
let bebidas = "cervezas";

let lugar = "Bar de mala muerte";
let estado = "cool";
let estado02 = "mala copa";

const introhistoria = intro.inicio(transporte2, postSentimient, durmio);
const nudohistoria = nudo.historia(personaje, bebidas);
const finalhistoria = final.historiafinal(lugar, estado, estado02,edad);

console.log (historiacompleta = (introhistoria + nudohistoria + finalhistoria));


// se resumieron las variables con una función primero de inicio luego del nudo y luego del final
// console.log(intro.inicio(transporte2, postSentimient, durmio) + nudo.historia(personaje, bebidas) + final.historiafinal(lugar, estado, estado02,edad));

// console.log(cowsay.say({
//     text: texto,
//     e: ojoVaca,
//     T: "v "
// }));
