'use strict'
let cuerpo = document.querySelector('body')
const boton = document.querySelector('.el-boton');
const elEP = document.querySelector('.el-p');
let elh2 = document.querySelector('.el-h2');
const numSec = document.querySelector('.num-sec');
const elh3 = document.querySelector('.el-h3');
const elh4 = document.querySelector('.el-h4');
const otroJuego = document.querySelector('.jugar-otro')
let juego = true;
let tuPuntaje = 0
let score = 20;
let ramdonNumber = Math.floor(Math.random()*20)+1;
boton.addEventListener('click',function() {
    
    let input = +(document.querySelector('.el-input').value)
function mensajeH2(mensaje) {
    return elh2.textContent = mensaje
}
function mensajeH3(mensaje) {
    return elh3.textContent = mensaje
}

    
    if (juego === false) {
        mensajeH2('Inicie otro juego')
    }else if (input>20){
        mensajeH2('Digite un numero entre 1 a 20')
    }else if (!input) {
        mensajeH2('Digito no valido')
    }else if (score<=1) {
        mensajeH3(`score: ${--score}`)
        mensajeH2('has perdido todos los puntos')
        juego = false
    }else if (input > ramdonNumber){
        mensajeH2(`El ${input} es muy alto`)
        mensajeH3(`score: ${--score}`)
    }else if( input< ramdonNumber){
        mensajeH2(`EL ${input} es muy bajo`)
        mensajeH3(`score: ${--score}`)
    }else if(input === ramdonNumber){
        mensajeH2('Has ganado!')
        numSec.textContent = `${ramdonNumber}`
        juego = false
        document.querySelector('body').style.backgroundColor = '#60b347'
        tuPuntaje <= score ? tuPuntaje = score : tuPuntaje;
        elh4.textContent = `Mayor puntaje: ${tuPuntaje}`   
        
    }else {
        mensajeH2('Digite un numero valido')
    }
    
})
otroJuego.addEventListener('click', function() {    
    document.querySelector('body').style.backgroundColor = '#222'
    ramdonNumber = Math.floor(Math.random()*20)+1;  
    numSec.textContent = '?'
    juego = true
    score = 20
    document.querySelector('.el-input').value =' '
    elh2.textContent =''
    elh3.textContent =`score: ${score}`
})







/*
else if (input > ramdonNumber){
        elh2.textContent = `El ${input} es muy alto`
        elh3.textContent = `score: ${--score}`
    }else if( input< ramdonNumber){
        elh2.textContent= `EL ${input} es muy bajo`
        elh3.textContent = `score: ${--score}`
    }

*/