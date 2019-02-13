module.exports = {
  historiafinal: function (lugar, estado, estado02, edad){
    if (edad < 17){
    return `En un lugar llamado ${lugar} todos estaban muy felices y la pasaron muy ${estado} historia menor de edad`
  }else if (edad > 17) {
    return `En un lugar llamado ${lugar} con sus amigos. Hasta que se puso ${estado02} y la fiesta terminó :( Historia mayor de edad`
  }

}
}
