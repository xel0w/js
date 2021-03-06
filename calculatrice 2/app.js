//Variables
let display = document.querySelector("#display");
let affichage = "";
let precedent = 0;
let operation = null;
let memoire;
let nombre = document.querySelectorAll(".number");
let operateur = document.querySelectorAll(".op");
let compute = document.querySelector("#compute");
let clearTouche = document.querySelector("#clear");
let total = document.querySelector("#total");

//Fonction

function gererNombre(){
    let touche = this.innerText;
    if(parseFloat(touche) >= 0 || touche === "."){
        affichage = affichage + touche.toString();
        display.innerText = affichage;
    }
}

function calculer(nb1, nb2, operation){
    nb1 = parseFloat(nb1);
    nb2 = parseFloat(nb2);
    if(operation === "+") return nb1 + nb2;
    if(operation === "-") return nb1 - nb2;
    if(operation === "*") return nb1 * nb2;
    if(operation === "/" & nb2===0) return "SyNtAx eRr0r n00b"
    if(operation === "/") return nb1 / nb2;
}

function operator(){
    op = this.innerText;
    precedent = (precedent === 0) ? parseFloat(affichage) : calculer(precedent, parseFloat(affichage), operation);
    total.innerText = precedent+op;
    operation = op;
    affichage = "";  
    display.innerText=affichage;
}

//Event

for (let touche of nombre){
    touche.addEventListener("click", gererNombre);
}

for (let op of operateur){
    op.addEventListener("click",operator);
}

compute.addEventListener("click",function(){   
    precedent = (precedent === 0) ? parseFloat(affichage) : calculer(precedent, parseFloat(affichage), operation);
    total.innerText = precedent;
    affichage = precedent;
    precedent = 0;
    display.innerText=""
})

clearTouche.addEventListener("click",nettoyer);
function nettoyer(){
    affichage = ""
    display.innerText = affichage;
    total.innerText = "";
}