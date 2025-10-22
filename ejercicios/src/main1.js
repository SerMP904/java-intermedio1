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
const containerElementEx3 = document.querySelector('#ex3');

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
  
  const movieContainerElement = document.querySelector('#ex4')
  for (let i = 1; i <= 8; i++) movieContainerElement.appendChild(createMovieCard(movieObject))
  

//5

