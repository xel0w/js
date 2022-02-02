let display = document.querySelector("#display");
let memoire = "";
let nombreEl = document.querySelectorAll(".number");
let operatorEl = document.querySelectorAll(".op");
let computeEl = document.querySelector("#compute");
let clearTouche = document.querySelector("#clear");
let total = document.querySelector("#total");
for (let touche of nombreEl){
    touche.addEventListener("click", gererTouche);
}
for (let op of operatorEl){
    op.addEventListener("click",operator);
}
computeEl.addEventListener("click",function(){
    total.innerText = eval(memoire);
})
clearTouche.addEventListener("click",function(){
    memoire = ""
    display.innerText = memoire;
    total.innerText = "";
})
function operator(){
    op = this.innerText;
    memoire = memoire + op
    display.innerText = memoire;
}
function gererTouche(){
    let touche = this.innerText;
    if(parseFloat(touche) >= 0){
        memoire = memoire + touche.toString();
        display.innerText = memoire;
    }
}
