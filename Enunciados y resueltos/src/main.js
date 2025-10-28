import { movies } from "./data";
import "./style.css";

const anchorElement = document.querySelector("#app");

/* Exercise 1
 Acceso al DOM. 
    Crea un archivo HTML con un párrafo con un id único. 
    Utiliza document.getElementById() para acceder al párrafo y muestra su contenido en la 
consola. 
    En el archivo HTML anterior crea varios elementos con la misma clase. 
    Ahora utiliza document.querySelectorAll() para acceder a todos los elementos con dicha 
clase y muestra 
    su contenido en la consola
    */
const paragraphEx1 = document.querySelector("#parrafo-ex1");

console.log(paragraphEx1);

const variosP = document.querySelectorAll(".clase-ex1");

console.log(variosP);

/* Exercise 2
Cambiar el contenido de un elemento del DOM. 
    Crea un archivo HTML con un div vacío. 
    Escribe una función que utilice document.querySelectorAll() para acceder al elemento del 
div y añada el 
    siguiente contenido: un párrafo con un ‘lorem ipsum...’ y debajo un botón con el texto 
‘Continuar’*/

const containerElementEx2 = document.querySelectorAll("#ex2");

const pElement = document.createElement("p");
pElement.textContent =
  "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fugit error magnam, non at, molestias temporibus quae a pariatur accusamus rerum dignissimos blanditiis. Officiis quasi sequi cumque, possimus totam minima eos.";

const buttonElement = document.createElement("button");
buttonElement.textContent = "Continuar";

containerElementEx2.forEach((container) => {
  container.appendChild(pElement);
  container.appendChild(buttonElement);
  anchorElement.appendChild(container);
});

/* Exercise 3
Crea una web en HTML  
Debe mostrar 4 cuadrados rellenos de color hex. #3b78d7.  
Usando CSS centrar los cuadrados horizontal y verticalmente con una separación de 10px. 
Una vez esté listo el código CSS elimina los elementos HTML y crea una función que le 
pasemos el número de cuadrados y añada todos los elementos HTML necesarios para 
mostrar el mismo resultado que antes.  
Ahora crea las clases necesarias en CSS para que los cuadrados alternen 3 colores 
sucesivamente y actualiza tu función para que aplique las clases. 
Nota: para definir las clases CSS que va a tener un elemento en Javascript usa la propiedad 
“className”  de dicho elemento asignándole una cadena de texto con el nombre de las 
clases.
*/

const containerElementEx3 = document.querySelector("#ex3");

const colorsForSquares = {
  blue: "blue",
  green: "green",
  yellow: "yellow",
};

function createSquares(quantity, containerToAttach) {
  let contadorColor = 0;
  for (let i = 0; i < quantity; i++) {
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

/* Exercise 4
Crea un elemento “card” o tarjeta para mostrar una película  
Utiliza tanto código HTML como código CSS para darle la apariencia que prefieras. Utiliza 
un objeto película con los datos de una película y la URL a la imagen de su portada. 
Una vez terminado, genera un duplicado dinámicamente usando código Javascript en el que 
utilices las propiedades y métodos vistos para el acceso y manipulación del DOM.
*/

const movieObject = {
  title: "Gladiator",
  description: "Rusell Crown se da de leches",
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

function createMovieDescription(description, year, rating) {
  const movieDescriptionElement = document.createElement("p");
  movieDescriptionElement.innerHTML = `<p>Sinopsis: ${description}</p><p>Año: ${year} - Puntuación: ${rating}</p>`;
  movieDescriptionElement.classList = "movie-description";
  return movieDescriptionElement;
}

function createMovieCard(movie) {
  const movieCardElement = document.createElement("div");
  movieCardElement.classList = "movie-card";

  movieCardElement.appendChild(createMovieImg(movie.poster));
  movieCardElement.appendChild(createMovieTitle(movie.title));
  movieCardElement.appendChild(
    createMovieDescription(movie.description, movie.year, movie.rating)
  );

  return movieCardElement;
}
/*
function createMovieCard(movie) {

  const movieCardElement = document.createElement("div");
  movieCardElement.classList = "movie-card";

  const movieImgElement = document.createElement("img");
  movieImgElement.setAttribute("src", movie.poster);
  movieImgElement.classList = "movie-img";
  movieCardElement.appendChild(movieImgElement);

  const movieTitleElement = document.createElement("h3");
  movieTitleElement.textContent = movie.title;
  movieTitleElement.classList = "movie-title";
  movieCardElement.appendChild(movieTitleElement);

  const movieDescriptionElement = document.createElement("p");
  movieDescriptionElement.textContent = movie.description;
  movieDescriptionElement.classList = "movie-description";  
  movieCardElement.appendChild(movieDescriptionElement);

  return movieCardElement;
}
*/

const movieContainerElement = document.querySelector("#ex4");

// Para repetir la misma pelicula puesta de ejemplo: The Galdiator

//for (let i = 1; i <= 8; i++)
//  movieContainerElement.appendChild(createMovieCard(movieObject));

// Para recorrer el array de objetos movie ubicado en data.js

function doMoviesRender() {
  movies.forEach((movie) => {
    movieContainerElement.appendChild(createMovieCard(movie));
  });
}

doMoviesRender();

/*
Ejercicio 5. Cambiar el texto interno del Shadow DOM

Tras crear un shadow DOM con un <p>Into Shadow</p> dentro de el, usa shadow.querySelector('p') y cambia su textContent.
Tenemos que modificar un <p> que está dentro del shadow para que ponga “Hola desde el Shadow DOM”.
Resultado: el texto del p encapsulado debe ser rojo y cambiar a “Hola desde el Shadow DOM”.
Nota: Debe estar en open.
*/

// Host
const hostOpen = document.createElement("div");
anchorElement.appendChild(hostOpen);

// ShadowRoot en modo OPEN
const shadow = hostOpen.attachShadow({ mode: "open" });

// Contenido inicial con <p> rojo
shadow.innerHTML = `
  <style>p{color:red;margin:0}</style>
  <p>Into Shadow</p>
`;

// Cambiar el texto del <p> interno
const pShadow = shadow.querySelector("p");
pShadow.textContent = "Hola desde el Shadow DOM";

/*
Ejercicio 6. Mostrar coordenadas del ratón en tiempo real

Vamos a mover el ratón por encima de un div que creemos que tendrá de clase "container-mouse-move" y con un tamaño de 300px x 200px y border 1px solid grey.
Necesitamos mostrar por consola los valores de clientX / clientY mediante javascript.
Nota:Usar un event listener con 'mousemove' para conseguirlo y extraer esas propiedades del event.
Resultado: la consola va mostrando coordenadas al mover el ratón por el container.
*/

const cont = document.createElement("div");
cont.className = "container-mouse-move";
cont.textContent = "Mueve el ratón por aquí";
anchorElement.appendChild(cont);

cont.addEventListener("mousemove", (event) => {
  console.log("X:", event.clientX, "Y:", event.clientY);
});

/*
Ejercicio 7. Extreer valor de un input

Vamos a definir por javascript un input, con id="input-test" y lo agregaremos al DOM
Luego crearemos un event listener del tipo 'input' y vmoa s mostrar por consola el valor actual de ese input cuando tecleemos dentro.
Nota: Para extraer el valor usaremos input.value
*/

// Crear input por JS y agregar al DOM
const input = document.createElement("input");
input.id = "input-test";
input.placeholder = "Escribe algo...";
anchorElement.appendChild(input);

// Listener 'input'
input.addEventListener("input", () => {
  console.log("Valor actual:", input.value);
});

/*
Ejercicio 8. Creando un contador de clicks

Vamos a definir un boton, con el texto inicial "Clicks: 0" y lo agregaremos al DOM.
Crearemos un event listener que cada vez que hagamos click, incremente ese numero mostrado.
EJ: Clicks: 1, Clicks: 2, y así sucesivamente.
Opcional: Crear tambien un botn para resetear el contador.
*/

const containerClicks = document.createElement("div");

let counterClicks = 0;
const btnCounter = document.createElement("button");
btnCounter.textContent = `Clicks: ${counterClicks}`;

const btnReset = document.createElement("button");
btnReset.textContent = "Reset";

containerClicks.appendChild(btnCounter);
containerClicks.appendChild(btnReset);

anchorElement.appendChild(containerClicks);

// Incrementar
btnCounter.addEventListener("click", () => {
  counterClicks++;
  btnCounter.textContent = `Clicks: ${counterClicks}`;
});

// Reset (opcional)
btnReset.addEventListener("click", () => {
  counterClicks = 0;
  btnCounter.textContent = `Clicks: ${counterClicks}`;
});

/*
Ejercicio 9. Detectar tecla presionada

Vamos a crear un event listener para el DOM completo, que nos mostrará por consola que tecla hemso pulsado.
Nota: Usar el evento 'keydown' y extraer su valor con event.key.
*/

document.addEventListener("keydown", (event) => {
  console.log("Tecla pulsada:", event.key);
});

/*
Ejercicio 10. Animar un cuadrado
Hacer que un cuadrado se mueva hacia la derecha 100px y luego vuelva a su posición original
Nota: Usar requestAnimationFrame y cambiar sentido multiplicando translateX por -1 cuando sea necesario.
*/

const containerAnimate = document.createElement("div");
containerAnimate.className = "square";
anchorElement.appendChild(containerAnimate);

const buttonAnimateSquare = document.createElement("button");
buttonAnimateSquare.setAttribute("id", "animate-square");
buttonAnimateSquare.textContent = "Animar el cuadrado azul";
anchorElement.appendChild(buttonAnimateSquare);

function animarIdaVuelta(elemento, tiempoInicio, direccion = 1) {
  const tiempoActual = performance.now();
  const progreso = (tiempoActual - tiempoInicio) / 1000;

  let animando = false;

  if (progreso < 1) {
    elemento.style.transform = `translateX(${progreso * 100 * direccion}px)`;
    requestAnimationFrame(() =>
      animarIdaVuelta(elemento, tiempoInicio, direccion)
    );
  } else if (direccion === 1) {
    // Cuando llega al final, volvemos hacia atrás
    requestAnimationFrame((nuevoTiempo) =>
      animarIdaVuelta(elemento, nuevoTiempo, -1)
    );
  }
}

buttonAnimateSquare.addEventListener("click", () => {
  if (animando) return;
  animando = true;
  requestAnimationFrame((t) => animarIdaVuelta(containerAnimate, t));
});

/*
Ejercicio 11. Cambio de color en el click de ratón
Teniendo un div con un background color azul, hacer que cambie a rojo en el click, y si se vuelve a pulsar, de nuevo azul y así sucesivamente.
Nota: Es de tipo transicion
*/

const elementoDiv = document.createElement("div");
elementoDiv.className = "blue rectangulo";
anchorElement.appendChild(elementoDiv);

const buttonTransicion = document.createElement("button");
buttonTransicion.setAttribute("id", "animate-rect");
buttonTransicion.textContent = "Animar el rectangulo";
anchorElement.appendChild(buttonTransicion);

let azul = true;

function iniciarTransicion() {
  elementoDiv.style.transition = "background-color 0.5s, transform 0.5s";
  elementoDiv.style.backgroundColor = azul ? "blue" : "red";
  azul = !azul; // alternamos el color
}

buttonTransicion.addEventListener("click", iniciarTransicion);

/*
Ejercicio 12. 
Rotar un elemento creado 360ª
*/

const elementoDiv2 = document.createElement("div");
elementoDiv2.className = "blue rectangulo";
anchorElement.appendChild(elementoDiv2);

const buttonRotar = document.createElement("button");
buttonRotar.setAttribute("id", "rotate");
buttonRotar.textContent = "Rotar 360º";
anchorElement.appendChild(buttonRotar);

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

/*
Ejercicio 13 */

const divEx13 = document.createElement("div");

const zonaParaDrop = document.createElement("div");
zonaParaDrop.className = "demo-drag";
zonaParaDrop.textContent = "Sueltas el dragable aqui";

const elementoDragable = document.createElement("div");
elementoDragable.className = "demo-drop";
elementoDragable.textContent = "Arrástrame";
elementoDragable.draggable = true;

divEx13.appendChild(elementoDragable);
divEx13.appendChild(zonaParaDrop);
anchorElement.appendChild(divEx13);

// Objeto con tres propiedadde y su valor:
const datosParaEnviarDos = {
  valor1: "Pimer valor",
  valor2: "Segundo valor",
  valor3: "Tercer Valor",
};

elementoDragable.addEventListener("dragstart", (event) => {
  event.dataTransfer.setData("sendData", JSON.stringify(datosParaEnviarDos));
  console.log("Lanzado dragstart");
});

zonaParaDrop.addEventListener("dragover", (event) => {
  event.preventDefault();
});

zonaParaDrop.addEventListener("drop", (event) => {
  event.preventDefault();
  let datosRecibidos = event.dataTransfer.getData("sendData");
  datosRecibidos = JSON.parse(datosRecibidos);
  zonaParaDrop.textContent = `${datosRecibidos.valor1}, ${datosRecibidos.valor2}, ${datosRecibidos.valor3}`;
  console.log("Drop realizado");
});

/*
Ejercicio 14 
Scope
*/
// Ámbito global
var globalVar = "Soy var global";
let globalLet = "Soy let global";
const globalConst = "Soy const global";

console.log("Ámbito global:");
console.log(globalVar); // accesible
console.log(globalLet); // accesible
console.log(globalConst); // accesible

function prueba() {
  // Ámbito de función
  var funcionVar = "Soy var dentro de la función";
  let funcionLet = "Soy let dentro de la función";
  const funcionConst = "Soy const dentro de la función";

  console.log("\nDentro de la función:");
  console.log(globalVar); // accesible (desde fuera)
  console.log(funcionVar); // accesible
  console.log(funcionLet); // accesible
  console.log(funcionConst); // accesible

  if (true) {
    // Ámbito de bloque
    var bloqueVar = "Soy var dentro de un bloque";
    let bloqueLet = "Soy let dentro de un bloque";
    const bloqueConst = "Soy const dentro de un bloque";

    console.log("\nDentro del bloque:");
    console.log(bloqueVar); // accesible
    console.log(bloqueLet); // accesible
    console.log(bloqueConst); // accesible
  }

  console.log("\nFuera del bloque pero dentro de la función:");
  console.log(bloqueVar); // accesible (var ignora el bloque)
  // console.log(bloqueLet); // Error
  // console.log(bloqueConst); // Error
}

prueba();

console.log("\nFuera de la función:");
console.log(globalVar); // accesible
console.log(globalLet); // accesible
console.log(globalConst); // accesible
// console.log(funcionVar);  // Error
// console.log(funcionLet);  // Error
// console.log(funcionConst);// Error

/*
Ejercicio 15 
*/
const divEx15 = document.createElement("div");
divEx15.className = "contenedor-ejercicio";

const buttonMostrarMensaje = document.createElement("button");
buttonMostrarMensaje.setAttribute("id", "btn-show-msg");
buttonMostrarMensaje.textContent = "Mostrar mensaje tras 3 segundos";

const contenedorMensaje = document.createElement("p");
contenedorMensaje.textContent = "...Esperando mensaje";

divEx15.appendChild(buttonMostrarMensaje);
divEx15.appendChild(contenedorMensaje);
anchorElement.appendChild(divEx15);

// Evento click del botón
buttonMostrarMensaje.addEventListener("click", () => {
  // Espera 3 segundos (3000 milisegundos)
  setTimeout(() => {
    contenedorMensaje.textContent = "¡Hola! Han pasado 3 segundos!";
  }, 3000);
});

/*
Ejercicio 16 
*/

const divEx16 = document.createElement("div");

let contador = 0;

const showContador = document.createElement("p");
showContador.textContent = `Contador: ${contador}`;
showContador.className = "contador";

divEx16.appendChild(showContador);

anchorElement.appendChild(divEx16);

const buttonActiveCounter = document.createElement("button");
buttonActiveCounter.textContent = "Iniciar contador";
const buttonStopCounter = document.createElement("button");
buttonStopCounter.textContent = "Parar contador";
const buttonResetCounter = document.createElement("button");
buttonResetCounter.textContent = "Resetear contador";

divEx16.appendChild(buttonActiveCounter);
divEx16.appendChild(buttonStopCounter);
divEx16.appendChild(buttonResetCounter);

let idInterval;
buttonActiveCounter.addEventListener("click", () => {
  idInterval = setInterval(() => {
    showContador.textContent = `Contador: ${++contador}`;
  }, 1000);
});

buttonResetCounter.addEventListener("click", () => {
  contador = 0;
  showContador.textContent = `Contador: ${contador}`;
});

buttonStopCounter.addEventListener("click", () => {
  clearInterval(idInterval);
});

/*
Ejercicio 17 y 18 
*/

const divEx17 = document.createElement("div");

const errorField = document.createElement("div");
errorField.className = "error-info";

const formulario = document.createElement("form");
formulario.setAttribute("id", "miFormulario");

const labelName = document.createElement("label");
labelName.setAttribute("for", "name");
labelName.textContent = "Nombre:";

const inputName = document.createElement("input");
inputName.setAttribute("type", "text");
inputName.setAttribute("id", "name");
inputName.setAttribute("name", "name");

const labelAddress = document.createElement("label");
labelAddress.setAttribute("for", "address");
labelAddress.textContent = "Dirección:";

const inputAddress = document.createElement("input");
inputAddress.setAttribute("type", "text");
inputAddress.setAttribute("id", "address");
inputAddress.setAttribute("name", "address");

const labelEmail = document.createElement("label");
labelEmail.setAttribute("for", "email");
labelEmail.textContent = "Email:";

const inputEmail = document.createElement("input");
inputEmail.setAttribute("type", "email");
inputEmail.setAttribute("id", "email");
inputEmail.setAttribute("name", "email");

const labelAge = document.createElement("label");
labelAge.setAttribute("for", "edad");
labelAge.textContent = "Edad:";

const inputAge = document.createElement("input");
inputAge.setAttribute("type", "number");
inputAge.setAttribute("id", "edad");
inputAge.setAttribute("name", "edad");

const buttonSubmit = document.createElement("button");
buttonSubmit.textContent = "Enviar";
buttonSubmit.setAttribute("type", "submit");

formulario.appendChild(labelName);
formulario.appendChild(inputName);
formulario.appendChild(labelAddress);
formulario.appendChild(inputAddress);
formulario.appendChild(labelEmail);
formulario.appendChild(inputEmail);
formulario.appendChild(labelAge);
formulario.appendChild(inputAge);
formulario.appendChild(buttonSubmit);

divEx17.appendChild(formulario);
divEx17.appendChild(errorField);
anchorElement.appendChild(divEx17);

formulario.addEventListener("submit", (event) => {
  event.preventDefault();
  console.log(
    `Nombre: ${inputName.value}; Dirección: ${inputAddress.value}; Email: ${inputEmail.value}; Edad: ${inputAge.value}`
  );
  validarCampos();
});
let errors = "";
function validarCampos() {
  if (inputName.value.trim() === "") {
    errors +=
      errors === ""
        ? "El nombre no puede estar vacío"
        : ", El nombre no puede estar vacío";
  }
  if (inputAddress.value.trim().length < 10) {
    errors +=
      errors === ""
        ? "La dirección debe contener al menos 10 caracteres"
        : ", La dirección debe contener al menos 10 caracteres";
  }
  if (inputAge.value.trim() < 18) {
    errors +=
      errors === ""
        ? "Debe ser mayor de 18 años"
        : ", Debe ser mayor de 18 años";
  }
  if (!inputEmail.value.trim().includes("@")) {
    errors +=
      errors === "" ? "El email debe contener @" : ", El email debe contener @";
  }
  if (errors === "") {
    console.log("Genial todo! Enviando datos!");
  } else {
    errorField.textContent = errors;
  }
}

/*
Ejercicio 19 
*/

fetch("https://jsonplaceholder.typicode.com/posts")
  .then((res) => {
    if (!res.ok) {
      throw new Error(`HTTPS ${res.status}`);
    }
    return res.json();
  })
  .then((data) => {
    console.log(`GET OK: `, data);
    const ulElement = document.createElement("ol");
    data.forEach(post => {
      const liElement = document.createElement("li");
      liElement.textContent = post.title;
      ulElement.appendChild(liElement);
    })
    anchorElement.appendChild(ulElement);

  })
  .catch((err) => console.log(`GET ERROR: ${err.message}`));

/*
Ejercicio 20 
*/

fetch("https://jsonplaceholder.typicode.com/postsr/1")
  .then((res) => {
    if (!res.ok) {
      throw new Error(`HTTPS ${res.status}`);
    }
    return res.json();
  })
  .then((data) => {
    console.log(`GET OK: ${JSON.stringify(data)}`);
  })
  .catch((err) => console.log(`GET ERROR: ${err.message}`));

/*
Ejercicio 21 
*/

fetch("https://jsonplaceholder.typicode.com/posts", {
  method: "POST",
  headers: {
    "Content-Type": "application/json",
    Accept: "application/json",
  },
  body: JSON.stringify({
    title: "Nuevo titulo",
    body: "Nuevo cuerpo del post",
    userId: 1,
  }),
})
  .then((res) => {
    if (!res.ok) {
      throw new Error(`HTTPS ${res.status}`);
    }
    return res.json();
  })
  .then((data) => console.log(`POST OK: ${JSON.stringify(data)}`))
  .catch((err) => console.log(`POST ERROR: ${err.message}`));

/*
Ejercicio 22
*/

fetch("https://jsonplaceholder.typicode.com/posts/1", {
  method: "PUT",
  headers: {
    "Content-Type": "application/json",
    Accept: "application/json",
  },
  body: JSON.stringify({
    title: "Titulo actualizado con PUT",
    body: "Contenido completamente reemplazado",
    userId: 1,
  }),
})
  .then((res) => {
    if (!res.ok) {
      throw new Error(`HTTPS ${res.status}`);
    }
    return res.json();
  })
  .then((data) => console.log(`PUT OK: ${JSON.stringify(data)}`))
  .catch((err) => console.log(`PUT ERROR: ${err.message}`));

/*
Ejercicio 23
*/

fetch("https://jsonplaceholder.typicode.com/posts/1", {
  method: "PATCH",
  headers: {
    "Content-Type": "application/json",
    Accept: "application/json",
  },
  body: JSON.stringify({
    title: "Titulo modificado con PATCH",
  }),
})
  .then((res) => {
    if (!res.ok) {
      throw new Error(`HTTPS ${res.status}`);
    }
    return res.json();
  })
  .then((data) => console.log(`PATCH OK: ${JSON.stringify(data)}`))
  .catch((err) => console.log(`PATCH ERROR: ${err.message}`));

/*
Ejercicio 24
*/

fetch("https://jsonplaceholder.typicode.com/posts/1", {
  method: "DELETE",
})
  .then((res) => {
    if (!res.ok) throw new Error(`HTTPS ${res.status}`);
    console.log("DELETE OK. Post eliminado correctamente");
    
  })
  .catch((err) => console.log(`DELETE ERROR: ${err.message}`));

