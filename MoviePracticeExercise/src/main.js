import './style.css'
import { getMovies } from './API/movieList.js';

const anchorE = document.querySelector("#app");
const titleE = document.createElement("h1");
titleE.className = "web-title";
titleE.textContent = "Pelis";

const movieCont = document.createElement("div");
movieCont.className = "movies-cont";

const buttonToSeeMovies = document.createElement("button");
buttonToSeeMovies.textContent = "Ver Pelis";
buttonToSeeMovies.className ="buttonPelis"

anchorE.appendChild(titleE);
anchorE.appendChild(movieCont);
anchorE.appendChild(buttonToSeeMovies);

buttonToSeeMovies.addEventListener("click", () => {
    getMovies(movieCont);
})

const buttonForSingleMovie = document.createElement("div");
const buttonForSingleMovieText = document.createElement("input")
buttonForSingleMovieText.setAttribute("placeholder", "Peli en especifico");
buttonForSingleMovieText.setAttribute("type", "text");
buttonForSingleMovieText.className = "buttonPelis1";



anchorE.appendChild(buttonForSingleMovie)






