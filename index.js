// Moodulos
const intro = require('./intro');
const nudo = require('./nudo');
const final = require('./final');
const fs = require ("fs");


// const edad = Math.floor(Math.random() * 100);
// Variables de la historia
const edad = 19;
let transporte2 = "Bus";
let postSentimient= "Mejor";
let durmio ="durmio";
let dias =100;

let personaje = "Oscar";
let bebidas = "cervezas";

let lugar = "Bar de mala muerte";
let estado = "cool";

		fs.readFile("personajes.txt", "utf-8", function(err,contenido){
		if (err){
			throw err;
		}


		const personajes = contenido.split(",");
		const numeroPersonaje = Math.floor(Math.random() * personajes.length);
		const personajesRandom = personajes[numeroPersonaje];

		const historiaCompleta = juntarHistoria(personajesRandom);


		console.log(historiaCompleta);


			fs.writeFile("Historia.txt", historiaCompleta, function(err){
				if(err){
					throw err;
				}
			});
		


		// console.log(contenido.leght);
		// console.log(personajes[personajes.length -1]);

});

// Parte de la historia

function juntarHistoria(personaje){

	const introHistoria = intro.inicio (transporte2, postSentimient, durmio, dias);
	const nudoHistoria = nudo.historia (personaje, bebidas);
	const finalHistoria = final.historiafinal (lugar, estado);
	const historiaCompleta = introHistoria + nudoHistoria + finalHistoria;
	return historiaCompleta;


}


// const introInicio = intro.inicio (transporte2, postSentimient, durmio, dias);
// const nudoHistoria = nudo.historia (personaje, bebidas);
// const finalHistoria = final.historia (lugar, estado);

// console.log(introInicio, nudoHistoria, finalHistoria)


//Parte de Historia 
// console.log(intro.inicio(transporte2, postSentimient, durmio, dias) + nudo.historia(personaje, bebidas) + final.historiafinal(lugar, estado));

// console.log(cowsay.say({
//     text: texto,
//     e: ojoVaca,
//     T: "v "
// }));
