'use strict'

const closeModal = document.querySelector('.close-modal');
const modalDiv = document.querySelector('.modal');
const overLay = document.querySelector('.overlay');
const showModal = document.querySelectorAll('.show-modal')

for (let i = 0; i < showModal.length; i++) {
    showModal[i].addEventListener('click',function() {
        modalDiv.classList.remove('hidden')
        overLay.classList.remove('hidden')
    })
    
}

closeModal.addEventListener('click', function () {
    modalDiv.classList.add('hidden')
})

document.addEventListener('keydown',function(e){
    if(e.key =='Escape' && !modalDiv.classList.contains('hidden')){
        modalDiv.classList.add('hidden')
        
    }
})

