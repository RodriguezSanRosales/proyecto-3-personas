//Modulos
const fs = require ('fs');
const cowsay = require ('cowsay')
const intro = require('./intro');
const nudo = require('./nudo');
const final = require('./final');


// const edad = Math.floor(Math.random() * 100);
const edad = 50;

// variables de generacion de historia
let transporte2 = "Bus";
let postSentimient= "Mejor";
let durmio ="durmio";

let personaje = "Oscar";
let bebidas = "cervezas";

let lugar = "CentraalAcademy";
let estado = "cool";
let estado02 = "mala copa";


// inicia scope
 fs.readFile('personajes.txt', 'utf-8', function(err, contenido){
  if(err){
   throw err;
  }
  const personajes = contenido.split(','); //separa en lista a los personajes que tenemos en el archivo txt
  const numeroPersonaje = Math.floor(Math.random() * personajes.length); //jala un personaje aleatoriode nuestra lista en personajes.txt. Sin rebasar la longitud de personajes para que no nos salga error
  const personajeRandom = personajes[numeroPersonaje];//variable del arreglo. Me arrojará un personaje de acuerdo a la posición random

  const historiacompleta = juntarHistoria(personajeRandom);

  console.log(personajes);
  console.log(numeroPersonaje);
  console.log(personajeRandom);

   // const personajesRandom = personajes [Math.floor(Math.random() * personajes.length)];

  console.log(historiacompleta);


   // console.log(personajes[0]);
   // console.log(personajes[personajes.length -1]);
   // console.log(contenido.split(','));

   fs.writeFile('historia.txt', historiacompleta, function(err){
     if (err) {
       throw err;
     }
   });
 });
 //termina scope

// //
// fs.readFile('personajes.txt', 'utf-8', leerArchivo)


//parte de la historia

function juntarHistoria(personaje){
  const introinicio = intro.inicio(transporte2, postSentimient, durmio);
  const nudohistoria = nudo.historia(personaje, bebidas);
  const finalhistoria = final.historiafinal(lugar, estado, estado02,edad);

  const historiacompleta = introinicio + nudohistoria + finalhistoria;
  return historiacompleta;


    // Escribir historia
    // console.log (historiacompleta = (introinicio + nudohistoria + finalhistoria));

}









// se resumieron las variables con una función primero de inicio luego del nudo y luego del final
// console.log(intro.inicio(transporte2, postSentimient, durmio) + nudo.historia(personaje, bebidas) + final.historiafinal(lugar, estado, estado02,edad));

console.log(cowsay.say({
text : 'Yeeeiiiii',
e : "oO",
T : "U "
}));
