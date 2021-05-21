'use strict';

const btn = document.querySelectorAll(".btn");
const modal = document.querySelector(".modal");
const overlay = document.querySelector(".overlay");
const close = document.querySelector('.close');

const openModal = () =>{
    modal.classList.remove('hidden');
    overlay.classList.remove('hidden');
}
const closeModal = () =>{
    modal.classList.add('hidden');
    overlay.classList.add('hidden');
  
}

for(let i =0; i < btn.length; i++){
    btn[i].addEventListener('click', openModal);
}


close.addEventListener('click', closeModal)

overlay.addEventListener('click', closeModal)