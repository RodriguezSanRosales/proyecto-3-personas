module.exports = {
    historia: function (personaje, bebidas, bebidaNiño, edad) {
        if( edad >= 18){
            return `Entonces un día la vaquita llamada ${personaje} se bajo del autobus y visito a su novia y le llevo unas ${bebidaNiño} con licor.`;
        }else if(edad < 18){
            return `Entonces un día la vaquita llamada ${personaje} se bajo del autobus y visito a sus amigos y se tomaron unas ${bebidas}.`;
        }
    }
}