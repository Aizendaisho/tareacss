const player1 = document.querySelector('.div-player1')
const player2 = document.querySelector('.div-player2')
const puntosP1 = document.querySelector('.puntos-p1');
const puntosP2 = document.querySelector('.puntos-p2');
const currentP1 = document.querySelector('.c-1');
const currentP2 = document.querySelector('.c-2');
const btnNewGame = document.querySelector('.newGame');
const btnDado = document.querySelector('.dado');
const btnHold = document.querySelector('.hold')
const dadosTodos = document.querySelectorAll('.dados')
const juego = document.querySelector('.juego')

let acumulador = 0
let acumulador1 = 0
let acumulador2 =0
let total1 = 0
let total2 = 0
let game = true

function newGame() {
    game = true
    currentP1.textContent = 0
    currentP2.textContent = 0
    puntosP1.textContent = 0
    puntosP2.textContent = 0
    total1 = 0
    total2 = 0
    juego.textContent = 'Vamos a jugar'
    for (let i = 0; i < dadosTodos.length; i++) {
        dadosTodos[i].classList.add('hiddin') 
        dadosTodos[i].classList.remove('dadoActive')     
    }
    if (!player1.classList.contains('active')) {
        player2.classList.remove('active')
        player1.classList.add('active')
    }
}

function dados() {
    if(game === false){
        juego.textContent = 'Inicie otra partida'
    }else if(total1 >=100 || total2 >=100){
        juego.textContent = 'felicidades al ganador!'
        game = false
    } else {
           
    let nd = Math.floor(Math.random()*6)
    acumulador = +(nd+1);  
    for (let i = 0; i < dadosTodos.length; i++) {    
        dadosTodos[i].classList.add('hiddin') 
        dadosTodos[i].classList.remove('dadoActive');
        
        if(nd===i){
            dadosTodos[nd].classList.remove('hiddin')
            dadosTodos[nd].classList.add('dadoActive')
        }
    }


    if (player1.classList.contains('active')) {
        if (nd === 0) {
            player1.classList.remove('active')
            player2.classList.add('active')
            acumulador = 0
            acumulador1 = 0
            currentP1.textContent =acumulador1
        }else{
            acumulador1 += acumulador
            currentP1.textContent =acumulador1
        }

    }else if(player2.classList.contains('active')){
        if (nd === 0) {
            player2.classList.remove('active')
            player1.classList.add('active')
            acumulador = 0
            acumulador2 = 0
            currentP2.textContent =acumulador2
        }else{
            acumulador2 += acumulador
            currentP2.textContent = acumulador2
        }


    }
}

}



function hold() {
    if (player1.classList.contains('active')) {
        player1.classList.remove('active')
        player2.classList.add('active')
        total1 += acumulador1
        puntosP1.textContent = total1
        acumulador = 0
        acumulador1 = 0
        currentP1.textContent =acumulador1
        
    }else {
        player2.classList.remove('active')
        player1.classList.add('active')
        total2 += acumulador2
        puntosP2.textContent = total2
        acumulador = 0
        acumulador2 = 0
        currentP2.textContent =acumulador2
        
    }
}





btnDado.addEventListener('click',dados)
btnNewGame.addEventListener('click',newGame)
btnHold.addEventListener('click',hold)




