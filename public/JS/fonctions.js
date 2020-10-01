import './balises.js'


//var temp
let temp1;
let temp2;
let temp3;

// Boutons
let btnplus = document.getElementsByClassName('btn1')[3];
btnplus.innerText = "+";

let btnmoins = document.getElementsByClassName('btn1')[7];
btnmoins.innerText = "-";

let btnfois = document.getElementsByClassName('btn1')[11];
btnfois.innerText = "x";

let btndivise = document.getElementsByClassName('btn1')[15];
btndivise.innerText = "/";

let btn0 = document.getElementsByClassName('btn1')[13];
btn0.innerText = "0";

let btnclear = document.getElementsByClassName('btn1')[12];
btnclear.innerText = "C";

let btnegale = document.getElementsByClassName('btn1')[14];
btnegale.innerText = "=";

let btn1 = document.getElementsByClassName('btn1')[0];
let btn2 = document.getElementsByClassName('btn1')[1];
let btn3 = document.getElementsByClassName('btn1')[2];

let btn4 = document.getElementsByClassName('btn1')[4];
btn4.innerText = "4";

let btn5 = document.getElementsByClassName('btn1')[5];
btn5.innerText = "5";

let btn6 = document.getElementsByClassName('btn1')[6];
btn6.innerText = "6";

let btn7 = document.getElementsByClassName('btn1')[8];
btn7.innerText = "7";

let btn8 = document.getElementsByClassName('btn1')[9];
btn8.innerText = "8";

let btn9 = document.getElementsByClassName('btn1')[10];
btn9.innerText = "9";


btn0.addEventListener('click', () => {
    input.value += btn0.innerText
});

btn1.addEventListener('click', () => {
    input.value += btn1.innerText
});

btn2.addEventListener('click', () => {
    input.value += btn2.innerText
});

btn3.addEventListener('click', () => {
    input.value += btn3.innerText
});

btn4.addEventListener('click', () => {
    input.value += btn4.innerText
});

btn5.addEventListener('click', () => {
    input.value += btn5.innerText
});

btn6.addEventListener('click', () => {
    input.value += btn6.innerText
});

btn7.addEventListener('click', () => {
    input.value += btn7.innerText
});

btn8.addEventListener('click', () => {
    input.value += btn8.innerText
});

btn9.addEventListener('click', () => {
    input.value += btn9.innerText
});

btnclear.addEventListener('click', () => {
    input.value = ""
    temp1 = "";
    temp2 = "";
    temp3 = "";
    indic.innerText = "";
})


// Signes


btnplus.addEventListener('click', () => {
    if (input.value != ""){
    temp1 = input.value;
    temp3 = "+";
    input.value = "";
    indic.innerText = temp1 + "+";
    }
});

btnmoins.addEventListener('click', () => {
    if (input.value != ""){
    temp1 = input.value;
    temp3 = "-";
    input.value = "";
    indic.innerText = temp1 + "-";
    }
});

btndivise.addEventListener('click', () => {
    if (input.value != ""){
    temp1 = input.value;
    temp3 = "/";
    input.value = "";
    indic.innerText = temp1 + "/";
    }
});

btnfois.addEventListener('click', () => {
    if (input.value != ""){
    temp1 = input.value;
    temp3 = "*";
    input.value = "";
    indic.innerText = temp1 + "x";
    }
});

btnegale.addEventListener('click', () => {
    temp2 = input.value;
        if (temp3 == "+") {
        input.value = Number(temp1) + Number(temp2);
        } else if (temp3 == "-") {
        input.value = Number(temp1) - Number(temp2);
        } else if (temp3 == "/") {
        input.value = Number(temp1) / Number(temp2);
        } else if (temp3 == "*") {
        input.value = Number(temp1) * Number(temp2);
        }
        indic.innerText += temp2 += " = ";
});


window.addEventListener("keydown", function(event) {
    let str = event.key;
    if (str == "1" || str == "2" || str == "3" || str == "4" || str == "5" || str == "6" || str == "7" || str == "8" || str == "9" || str == "0") {
    input.value += str;
    }
   
  });

  window.addEventListener("keydown", function(event) {
    let str = event.key;
    if (str == "+") {
        if (input.value != ""){
            temp1 = input.value;
            temp3 = "+";
            input.value = "";
            indic.innerText = temp1 + "+";
            }
    }
    if (str == "-") {
        if (input.value != ""){
            temp1 = input.value;
            temp3 = "-";
            input.value = "";
            indic.innerText = temp1 + "-";
            }
    }
    if (str == "*") {
        if (input.value != ""){
            temp1 = input.value;
            temp3 = "*";
            input.value = "";
            indic.innerText = temp1 + "*";
            }
    }
    if (str == "/") {
        if (input.value != ""){
            temp1 = input.value;
            temp3 = "/";
            input.value = "";
            indic.innerText = temp1 + "/";
            }
    }

    if (str == "=") {
        temp2 = input.value;
        if (temp3 == "+") {
            input.value = Number(temp1) + Number(temp2);
            } else if (temp3 == "-") {
            input.value = Number(temp1) - Number(temp2);
            } else if (temp3 == "/") {
            input.value = Number(temp1) / Number(temp2);
            } else if (temp3 == "*") {
            input.value = Number(temp1) * Number(temp2);
            }
            indic.innerText += temp2 += " = ";
    }
   
  });