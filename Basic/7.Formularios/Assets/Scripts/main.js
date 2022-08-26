'use strict';
//Crear Contenedores
//1.var (Global/No recomendado)
//2.let(recomendado/variables/locales)
//3.const(constantes)

const btnValidar= document.getElementById('validar');
//console.log(btnValidar);
//Al addeventListener debo pasar dos parametros
btnValidar.addEventListener('click',function(e) {

    e.preventDefault();
    let form = document.getElementById('dataForm');
    console.log(form[1].value);
    console.log(form[2].value);
    console.log(form[3].value);
    console.log(form[4].value);
    console.log(form[5].value);
    console.log(form[6].value);
    console.log(form[7].value);
    console.log(form[10].value);
    console.log(form[11].value);
    console.log(form[15].value);
});
//e de Evento
