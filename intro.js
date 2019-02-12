module.exports={

inicio:function (transporte2, postSentimient, durmio, dias){

		if ( dias > 1 && dias < 10){
			return `La vaquita ha ${durmio} muchos dias continuos en el ${transporte2}, por eso esta muy feliz.`
		} else if (dias > 11 &&  dias < 50){
			return `La vaquita murio de dormir tanto en el ${transporte2} y volvio a revivir.`
		} else {

		return `Habia una vez una Vaquita que siempre viaja por ${transporte2}, ellas se sentia cada vez ${postSentimient} porque el dia anterior ${durmio} muy bien.`
		}
	}
}
