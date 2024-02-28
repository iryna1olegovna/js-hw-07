'use strict';

const inputHandler = document.getElementById('name-input');
    const outputHandler = document.getElementById('name-output');

    
    function updateNameOutput(event) {
      const inputText =  event.target.value.trim();
      outputHandler.textContent = inputText || 'Anonymous';
    }
    inputHandler.addEventListener('input', updateNameOutput);










// Напиши скрипт, який під час набору тексту в інпуті input#name-input (подія input) 
// підставляє його поточне значення в span#name-output як ім’я для привітання. 
// Обов’язково очищай значення в інпуті по краях від пробілів .
//  Якщо інпут порожній або містить лише пробіли, то замість імені у спан має підставлятися рядок "Anonymous".

// <input type="text" id="name-input" placeholder="Please enter your name" />
// <h1>Hello, <span id="name-output">Anonymous</span>!</h1>

