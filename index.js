//modulos
const intro = require('./intro');
const nudo = require('./nudo');
const final = require('./final');
const fs = require('fs');

//variables de generacion
// const edad = Math.floor(Math.random() * 100);
const edad = 19;

let transporte2 = "Bus";
let postSentimient= "Mejor";
let durmio ="durmio";
let personaje = "Oscar";
let bebidas = "cervezas";
let bebidaNiño = "malteadas";
let lugar = "Bar de mala muerte";
let estado = "cool";

//leer archivo personajes
fs.readFile('personajes.txt', 'utf-8', function(err,contenido){
    if(err){
        throw err;
    }
    const personajes = contenido.split(',');
    const numerosPersonajes = Math.floor(Math.random() * personajes.length);
    const personajeRandom = personajes[numerosPersonajes];

    console.log(personajes);
    console.log(personajeRandom);

    const historiaCompleta = juntarHistoria(personajeRandom);

    //Escribir historia
    console.log(historiaCompleta);

    fs.writeFile('historia.txt', historiaCompleta, function(err){
        if(err){
            throw err;
        }
    });

});

// //leer archivo bebidas
// fs.readFile('bebidas.txt','utf-8', function(err,contenido){
//     if(err){
//         throw err;
//     }
//     const bebidasVarias = contenido.split(',');
//     const numerosBebidas = Math.floor(Math.random() * bebidasVarias.length);
//     const bebidasRandom = bebidasVarias[numerosBebidas];

//     console.log(bebidasRandom);
//     console.log(bebidasVarias);
// })

//partes de historia
function juntarHistoria(personaje){
    const introHistoria = intro.inicio(transporte2, postSentimient, durmio);
    const nudoHistoria = nudo.historia(personaje, bebidas, bebidaNiño, edad);
    const finalHistoria =  final.historiafinal(lugar, estado);
    const historiaCompleta = introHistoria + nudoHistoria + finalHistoria;
    return historiaCompleta;
}


// console.log(cowsay.say({
//     text: texto,
//     e: ojoVaca,
//     T: "v "
// }));
