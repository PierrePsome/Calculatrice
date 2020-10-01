let body = document.querySelector('body');


let cont = body.appendChild(document.createElement('div'))
cont.setAttribute('id', 'cont');


// Container de Boutons
let cont1 = cont.appendChild(document.createElement('div'))
cont1.setAttribute('id', 'cont1');

// Container de Input
let cont2 = cont.appendChild(document.createElement('div'))
cont2.setAttribute('id', 'cont2');

let input = cont2.appendChild(document.createElement('input'))
input.setAttribute('id', 'input');
input.setAttribute('disabled', 'disabled');
input.style.fontSize = '100px';

//Petit indicateur
let indic = cont2.appendChild(document.createElement('p'))
indic.setAttribute('id', 'indic')


// Les Boutons
for (let i=1; i< 17; i++) {
    let btn = cont1.appendChild(document.createElement('button'))
    btn.setAttribute('class', 'btn1');
    btn.innerText = i
};