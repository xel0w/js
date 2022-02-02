let display = document.querySelector("#display");
let affichage = "";
let precedent = 0;
let operation = null;
let memoire;
let nombreEl = document.querySelectorAll(".number");
let operatorEl = document.querySelectorAll(".op");
let computeEl = document.querySelector("#compute");
let clearTouche = document.querySelector("#clear");
let total = document.querySelector("#total");
function gererTouche(){
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
    if(operation === "/", nb2===0) return "SyNtAx eRr0r n00b"
    if(operation === "/") return nb1 / nb2;
}
function operator(){
    op = this.innerText;
    precedent = (precedent === 0) ? parseFloat(affichage) : calculer(precedent, parseFloat(affichage), operation);
    total.innerText = precedent+op;
    operation = op;
    affichage = "";  
}
for (let touche of nombreEl){
    touche.addEventListener("click", gererTouche);
}
for (let op of operatorEl){
    op.addEventListener("click",operator);
}
computeEl.addEventListener("click",function(){   
    precedent = (precedent === 0) ? parseFloat(affichage) : calculer(precedent, parseFloat(affichage), operation);
    total.innerText = precedent;
    affichage = precedent;
    precedent = 0;
})
clearTouche.addEventListener("click",function(){
    affichage = ""
    display.innerText = affichage;
    total.innerText = "";
})