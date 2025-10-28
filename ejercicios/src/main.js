import './style.css'
//1
const app = document.querySelector("#app")
const pEx1 = document.getElementById("p1")
const divEx1 = document.getElementById("ex1")
console.log(pEx1);
pEx1.textContent = "Que es esto"
const h1Ex1 = document.querySelectorAll(".h1")
const h2Ex1 = document.querySelectorAll('#innecesario')
console.log(h1Ex1)
console.log(h2Ex1)
console.log(divEx1)
app.appendChild(divEx1)

//2
const ex2 = document.createElement("div");
const nuevoPEx2 = document.createElement("p");
ex2.appendChild(nuevoPEx2);
nuevoPEx2.textContent = 'Lore ipsum...';
const butEx2 = document.createElement("input");
butEx2.setAttribute("button", "button2");
ex2.appendChild(butEx2);
console.log("ods funciona")

//3
const containerElementEx3 = document.createElement('div');
containerElementEx3.setAttribute("id", "#ex3")

const colorsForSquares = {
  blue: "blue",
  green: "green",
  yellow: "yellow",
};

function createSquares(quantity, containerToAttach) {
  let contadorColor = 0;
  for (let i = 1; i <= quantity; i++) {
    let square = document.createElement("div");
    square.setAttribute("class", "square");
    if (contadorColor === 0) {
      square.classList.add(colorsForSquares.blue);
      contadorColor++;
    } else if (contadorColor === 1) {
      square.classList.add(colorsForSquares.green);
      contadorColor++;
    } else {
      square.classList.add(colorsForSquares.yellow);
      contadorColor = 0;
    }
    containerToAttach.appendChild(square);
  }
}

createSquares(4, containerElementEx3);

//4
const movieObject = {
    title: "Gladiator",
    description: "Rusell Crown pelea",
    poster:
      "https://imgs.search.brave.com/9vXL0yeEvhsWvSMq4PDDwPxTQOidb98dgjfBvkYRhi8/rs:fit:500:0:1:0/g:ce/aHR0cHM6Ly93d3cu/bW92aXN0YXJwbHVz/LmVzL3JlY29ydGUv/bi9nYWxlcmlhL0Y0/MTg2MzY4",
  };
  
  function createMovieImg(imageUrl) {
    const movieImgElement = document.createElement("img");
    movieImgElement.setAttribute("src", imageUrl);
    movieImgElement.classList = "movie-img";
    return movieImgElement;
  }
  
  function createMovieTitle(title) {
    const movieTitleElement = document.createElement("h3");
    movieTitleElement.textContent = title;
    movieTitleElement.classList = "movie-title";
    return movieTitleElement;
  }
  
  function createMovieDescription(description) {
    const movieDescriptionElement = document.createElement("p");
    movieDescriptionElement.textContent = description;
    movieDescriptionElement.classList = "movie-description";
    return movieDescriptionElement;
  }
  
  function createMovieCard(movie) {
    const movieCardElement = document.createElement("div");
    movieCardElement.classList = "movie-card";
    movieCardElement.appendChild(createMovieImg(movie.poster));
    movieCardElement.appendChild(createMovieTitle(movie.title));
    movieCardElement.appendChild(createMovieDescription(movie.description));
  
    return movieCardElement;
  }
  
  const ex4 = document.createElement('div');
ex4.setAttribute("id", "#ex4")
  for (let i = 1; i <= 1; i++) ex4.appendChild(createMovieCard(movieObject))

  //6
  const ex6 = document.createElement('div');
ex6.setAttribute("id", "#ex6")
  ex6.classList.add("container-mouse-move");
  ex6.textContent = "div 6 prueba";
 ex6.addEventListener("mousemove", (a) => {
    console.log(("coordenada X: "+ a.clientX), ("coordenada Y: "+a.clientY))
  })

  //7
  const ex7 = document.createElement('div');
ex7.setAttribute("id", "#ex7")
  const input = document.createElement("input");
  input.setAttribute("id", "input-test")
  input.addEventListener("input", () => {
    console.log(input.value)
  })
  ex7.appendChild(input);

  //8
  const ex8 = document.createElement('div');
ex8.setAttribute("id", "#ex8")
  const but8 = document.createElement("button");
  let clicks = 0
  but8.classList.add("button")
  but8.textContent = "Clicks: "+clicks
  but8.addEventListener("click", (click) => {
    if (click){
      clicks++;
      but8.textContent="Clicks: "+ clicks
    }
  
  })
  const resetButton = document.createElement("button");
  resetButton.classList.add("button")
  resetButton.textContent = "Resetear"
  resetButton.addEventListener("click", () => {
      but8.textContent="Clicks: "+ 0;
      clicks = 0;
    })
  ex8.appendChild(but8)
  ex8.appendChild(resetButton)

//9
const ex9 = document.querySelector("#ex9");
const input9 = document.createElement("input");
input9.setAttribute("id", "input-ex9")
input9.addEventListener("keydown", (a) => {
  console.log(a.key)
})
ex9.appendChild(input9);

//10
const ex10 = document.querySelector("#ex10");
const cuadrado = document.createElement("button");
cuadrado.textContent="Esto se mueve";
cuadrado.setAttribute("id", "cuadradoPruebaEstilo");
cuadrado.classList.add("button")

function transicionBasica(elemento, tiempoInicial){
  let tiempoActual = performance.now();
  let progreso = (tiempoActual - tiempoInicial) / 1000
  if (progreso < 3){
    elemento.style.transform = `translateX(${progreso * 100}px)`;
    requestAnimationFrame(() => transicionBasica(elemento, tiempoInicial));
  } else {
  elemento.style.transform = "translateX(0px)";
}
}

cuadrado.addEventListener("click", () =>{
  requestAnimationFrame((tiempoInicial)=> transicionBasica(cuadrado, 1))
})
ex10.appendChild(cuadrado);

//11
const elementoDiv = document.createElement("div");
const ex11 = document.querySelector("#ex11")
elementoDiv.className = "blue rectangulo";
ex11.appendChild(elementoDiv);

const buttonTransicion = document.createElement("button");
buttonTransicion.setAttribute("id", "animate-rect");
buttonTransicion.textContent = "Animar el rectangulo";
ex11.appendChild(buttonTransicion);

let azul = true;

function iniciarTransicion() {
  elementoDiv.style.transition = "background-color 0.5s, transform 0.5s";
  elementoDiv.style.backgroundColor = azul ? "blue" : "red";
  azul = !azul; // alternamos el color
}

buttonTransicion.addEventListener("click", iniciarTransicion);

//12
const elementoDiv2 = document.createElement("div");
const ex12 = document.querySelector("#ex12")
elementoDiv2.className = "blue rectangulo";
ex12.appendChild(elementoDiv2);

const buttonRotar = document.createElement("button");
buttonRotar.setAttribute("id", "rotate");
buttonRotar.textContent = "Rotar 360º";
ex12.appendChild(buttonRotar);

function rotarSuavemente(elemento, tiempoInicio) {
  const tiempoActual = performance.now();
  const progreso = (tiempoActual - tiempoInicio) / 1000; // segundos

  if (progreso < 1) {
    // Rota de 0° a 360° durante 1 segundo
    elemento.style.transform = `rotate(${progreso * 360}deg)`;
    requestAnimationFrame(() => rotarSuavemente(elemento, tiempoInicio));
  } else {
    // Al llegar al final, dejamos el ángulo fijo en 360°
    elemento.style.transform = "rotate(360deg)";
  }
}

buttonRotar.addEventListener("click", () => {
  requestAnimationFrame((tiempoInicio) =>
    rotarSuavemente(elementoDiv2, tiempoInicio)
  );
});

//13
const ex13 = document.querySelector("#ex13");
const zonaParaDrop = document.createElement("div");
zonaParaDrop.className = "demo-drag";

const elementoDragable = document.createElement("div");
elementoDragable.className = "demo-drop";
elementoDragable.textContent = "datos bancarios";
elementoDragable.draggable = true;

ex13.appendChild(zonaParaDrop);
ex13.appendChild(elementoDragable);

const datosDelBanco = {numeroCuenta: 78771818791, cvc: 123, fechaCaducidad: "29 Febrero de 2028"};

elementoDragable.addEventListener("dragstart", (event) => {
  event.dataTransfer.setData("sendData", JSON.stringify(datosDelBanco))
  console.log("Lanzado dragstart")
})

zonaParaDrop.addEventListener("dragover", (event) => {
  event.preventDefault();
  console.log("no hace nada")
})

zonaParaDrop.addEventListener("drop", (event) => {
  event.preventDefault();
  const datosParaRecibir = JSON.parse(event.dataTransfer.getData("sendData"));
  zonaParaDrop.textContent = ""; 
  Object.entries(datosParaRecibir).forEach((element) =>{
  zonaParaDrop.textContent += `${element[0]}: ${element[1]}`;
  
})
})

//14
//Este ejercicio tan solo muestra variables


//15
const divEx15 = document.createElement("div");
divEx15.className = "contenedor-ejercicio";

const buttonMostrarMensaje = document.createElement("button");
buttonMostrarMensaje.setAttribute("id", "btn-show-msg");
buttonMostrarMensaje.textContent = "Mostrar mensaje tras 3 segundos";

const contenedorMensaje = document.createElement("p");
contenedorMensaje.textContent = "...Esperando mensaje";

divEx15.appendChild(buttonMostrarMensaje);
divEx15.appendChild(contenedorMensaje);

// Evento click del botón
buttonMostrarMensaje.addEventListener("click", () => {
  // Espera 3 segundos (3000 milisegundos)
  setTimeout(() => {
    contenedorMensaje.textContent = "¡Hola! Han pasado 3 segundos!";
  }, 3000);
});

//Formulario
//17 y 18
const formu = document.querySelector("#miFormu")
formu.textContent = "Formulario"

const nameLabel = document.createElement("div")
const nameInput = document.createElement("input")
const edadLabel = document.createElement("div")
const edadInput = document.createElement("input")
const emailLabel = document.createElement("div")
const emailInput = document.createElement("input")
const submit = document.createElement("button")

nameLabel.setAttribute("for", "nombre")
nameLabel.textContent = "nombre"

nameInput.setAttribute("type", "text")
nameInput.setAttribute("id", "nombre")
nameInput.setAttribute("name", "nombre")
nameInput.textContent = "nombre"
nameInput.setAttribute("placeholder", "nombre")

emailLabel.setAttribute("id", "correo")
emailLabel.textContent = "correo"

emailInput.setAttribute("type", "email")
emailInput.setAttribute("id", "nombre")
emailInput.setAttribute("correo", "numero")
emailInput.textContent = "correo"

edadLabel.setAttribute("id", "edad")
edadLabel.textContent = "edad"

edadInput.setAttribute("type", "number")
edadInput.setAttribute("id", "numero")
edadInput.setAttribute("edad", "numero")
edadInput.textContent = "edad"

submit.setAttribute("type", "submit");
submit.textContent = "submit"

formu.appendChild(nameLabel);
formu.appendChild(nameInput);
formu.appendChild(emailLabel);
formu.appendChild(emailInput);
formu.appendChild(edadLabel);
formu.appendChild(edadInput);
formu.appendChild(submit);

const formulario = document.getElementById("miFormu")
formulario.addEventListener("submit", function(e){
  e.preventDefault();

  const nombre = document.getElementById("nombre").value;
  const email = document.getElementById("email").value;
  if (nombre.trim() === ""){
    alert("El nombre es obligatorio");
    return;
  }

  if (!validarEmail(email)){
    alert("El correo no es válido");
    return;
  }
  console.log("Formulario listo para enviar");
})

function validarEmail(correo){
  const expresion = /^[^\s@]+@[^\s@]+\.[*\s@]+$/;
  return expresion.test(correo);
}

//Ejercicios Fetch
//19
fetch('https://jsonplaceholder.typicode.com/users')
 .then(response => response.json())
 .then(datos => {
  for (let i=0; i<datos.length; i++){
    console.log(datos[i].name)
  }
}, )

//20
/*fetch('https://jsonplaceholder.typicode.com/user')
 .then(response => {
  if (!response.ok){
    throw new Error(`HTTPS ${response.status}`)
  }
  return response.json();
 })*/

//21
const url = 'https://jsonplaceholder.typicode.com/users';
const datosPersona = {
  name: "Fernando",
  edad: 88,
}
fetch(url, { 
  method: "POST",
  headers: {
    'Content-type': 'application/json'
  },
  body: JSON.stringify(datosPersona)
})
 .then(response => response.json())
 .then(data => console.log(data))
 .catch(error => console.error('Error:', error))

 const datosPersona2 = {
  name: "Juana",
  edad: 89,
}

async function postData() { 
  try {
    const resp = await fetch(url, {
    method: "POST",
    headers: {
      "content-type": "application/json",
      Accept: "application/json"
    },
    body: JSON.stringify({
    title: ".",
    body: "adfaklsfklj",
    userId: 1
  })
});
if (!resp.ok) throw new Error("Error");
const data = await resp.json();
} catch(error){
  console.error(error.message);
}
}

export async function fetchAsincrono(url){
  try {
    const resp = await fetch(url, {
    method: "POST",
    headers: {
      "content-type": "application/json",
      Accept: "application/json"
    },
    body: JSON.stringify({
    title: ".",
    body: "adfaklsfklj",
    userId: 1
  })
});
if (!resp.ok) throw new Error("Error");
const data = await resp.json();
} catch(error){
  console.error(error.message);
}
}

//25
const ex25 = document.createElement("div");
ex25.setAttribute("id","ex25");
ex25.textContent= "Ejercicio25";

const nameInput25 = document.createElement("input");
nameInput25.setAttribute("type", "text");
nameInput25.setAttribute("placeholder", "nombre");

const guardar25 = document.createElement("button");
guardar25.textContent= "Guardar Local";

const pElement25 = document.createElement("p");
if(typeof localStorage !== undefined){
  pElement25.textContent = localStorage.getItem("nombreHash")
  nameInput25.placeholder = localStorage.getItem("nombreHash")
}

ex25.appendChild(nameInput25);
ex25.appendChild(guardar25);
ex25.appendChild(pElement25);

guardar25.addEventListener("click", () =>{
  localStorage.setItem("nombreHash", nameInput25.value)
})

//26
const ex26 = document.createElement("div");
ex26.setAttribute("id","ex26");
ex26.textContent= "Ejercicio26";

const nameInput26 = document.createElement("input");
nameInput26.setAttribute("type", "text");
nameInput26.setAttribute("placeholder", "nombre");


const guardar26 = document.createElement("button");
guardar26.textContent= "Guardar Session";

const pElement26 = document.createElement("p");
if(typeof sessionStorage !== undefined){
  pElement26.textContent = sessionStorage.getItem("nombreHash")
  nameInput26.placeholder = sessionStorage.getItem("nombreHash")
}

ex26.appendChild(nameInput26);
ex26.appendChild(guardar26);
ex26.appendChild(pElement26);

guardar26.addEventListener("click", () =>{
  sessionStorage.setItem("nombreHash", nameInput26.value)
})

//27
const ex27 = document.createElement("div")
ex27.setAttribute("id","ex27");
ex27.textContent= "Ejercicio27";

fetch(urlMovies, {

})



//prueba
/*
fetch(url,{
  method: "POST",
  headers: {
    "content-type" = "application/json",
    "accept": "application/json",
    "authorization": "Bearer token_aqui"
  }
  body: JSON.stringify(persona)
})
.then(response => response.json())
.then(data => console.log(data))
.catch(error => console.log("error", error))
*/ 




//AQUI UNA SECCIÓN CON APPENDCHILDS
app.appendChild(divEx1);
app.appendChild(ex2);
app.appendChild(containerElementEx3);
app.appendChild(ex4);

app.appendChild(ex6);
app.appendChild(ex7);
app.appendChild(ex8);
app.appendChild(ex9);
app.appendChild(ex10);
app.appendChild(ex11);
app.appendChild(ex12);
app.appendChild(ex13);
app.appendChild(divEx15);
app.appendChild(formu);
app.appendChild(ex25)
app.appendChild(ex26)
app.appendChild(ex27)

