import './style.css'
//1
const pEx1 = document.getElementById("p1")
const divEx1 = document.getElementById("ex1")
console.log(pEx1);
pEx1.textContent = "Que es esto"
const h1Ex1 = document.querySelectorAll(".h1")
const h2Ex1 = document.querySelectorAll('#innecesario')
console.log(h1Ex1)
console.log(h2Ex1)
console.log(divEx1)

//2
const ex2 = document.querySelector("#ex2");
const divEx2 = document.createElement("div");
const nuevoPEx2 = document.createElement("p");
divEx2.appendChild(nuevoPEx2);
nuevoPEx2.textContent = 'Lore ipsum...';
ex2.appendChild(divEx2);
const butEx2 = document.createElement("input");
butEx2.setAttribute("button", "button2");
ex2.appendChild(butEx2);
console.log("ods funciona")

//3
const ex3 = document.querySelector("#exercise3");
const nuevoEx3 = document.createElement("div");
const textoEx3 = document.createElement("p");
nuevoEx3.appendChild(textoEx3);
textoEx3.textContent = 'la madre del pollo';
ex3.appendChild(nuevoEx3);
console.log("3funciona")

function createSquare(quantity, container){
    let contador = 0;
    for(let i = 0; i < quantity; i++){
        let square = document.createElement("div");
        square.setAttribute("class", "square");
        container.appendChild(square);
        if (contador === 0){
            square.classList.add("purple");
            contador++;
        } else if (contador === 1){
            square.classList.add("yellow");
            contador++;
        } else if (contador === 2){
            square.classList.add("green");
            contador = 0;
        }
        
    }
    return container
}

createSquare(4, ex3);
ex3.appendChild(createSquare(4, ex3));

//4
