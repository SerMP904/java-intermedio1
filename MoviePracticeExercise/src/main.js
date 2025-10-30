import './style.css'
import { getActors, getMovies, getSingleMovies } from './movieProcessing/API/movieList.js';

const anchorE = document.querySelector("#app");

const movieDisplay = document.createElement("div")
movieDisplay.className = "movieDisplay";

const idContainer = document.createElement("div");

const titleE = document.createElement("h1");
titleE.className = "web-title";
titleE.textContent = "Pelis";

const movieCont = document.createElement("div");

const buttonToSeeMovies = document.createElement("button");
buttonToSeeMovies.textContent = "Ver Pelis";
buttonToSeeMovies.className ="buttonPelis"

movieCont.appendChild(buttonToSeeMovies);
movieDisplay.appendChild(titleE);
movieDisplay.appendChild(movieCont);
anchorE.appendChild(movieDisplay)

buttonToSeeMovies.addEventListener("click", () => {
    //getMovies(movieCont);
    //getSingleMovies(idContainer)
    getActors(idContainer)
})

movieCont.appendChild(idContainer)


/*
const buttonForSingleMovie = document.createElement("div");

const buttonForSingleMovieText = document.createElement("input")
buttonForSingleMovieText.setAttribute("placeholder", "Peli en especifico");
buttonForSingleMovieText.setAttribute("type", "text");
buttonForSingleMovieText.className = "buttonPelis";

const buttonForSingleMovieSubmit = document.createElement("button")
buttonForSingleMovieSubmit.setAttribute("type", "submit");
buttonForSingleMovieSubmit.textContent = "submit"
buttonForSingleMovieSubmit.className = "buttonPelis";

const actorCont = document.createElement("div");
actorCont.className = "movies-cont";
*/
/*
buttonForSingleMovieSubmit.addEventListener("click", () => {
    getActors(actorCont, buttonForSingleMovieText.value);
})

buttonForSingleMovie.appendChild(buttonForSingleMovieText);
buttonForSingleMovie.appendChild(buttonForSingleMovieSubmit);

anchorE.appendChild(buttonForSingleMovie)

movieCont.addEventListener("click", () => {
    console.log("hola")
})*/

//31
/*
const ex31 = document.createElement("div");
ex31.className = "ex31";

const selectMovie = document.createElement("select");
selectMovie.className = "selector"
selectMovie.id = "idselector"

const arrayDataSelector =  Object.entries(dataSelect);
arrayDataSelector.forEach((E) =>{
    const option = document.createElement("option");
    option.setAttribute = ("value", e[1]);
    option.textContent = (e[0]); 
    selectMovie.appendChild(option);
})

selectMovie.addEventListener("change", (event)=>{
    const selecting
})*/












