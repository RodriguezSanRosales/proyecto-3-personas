const intro = require('./intro');
const nudo = require('./nudo');
const final = require('./final');


// const edad = Math.floor(Math.random() * 100);
const edad = 19;


let transporte2 = "Bus";
let postSentimient= "Mejor";
let durmio ="durmio";

let personaje = "Oscar";
let bebidas = "cervezas";

let lugar = "Bar de mala muerte";
let estado = "cool";

console.log(intro.inicio(transporte2, postSentimient, durmio) + nudo.historia(personaje, bebidas) + final.historiafinal(lugar, estado));

// console.log(cowsay.say({
//     text: texto,
//     e: ojoVaca,
//     T: "v "
// }));
