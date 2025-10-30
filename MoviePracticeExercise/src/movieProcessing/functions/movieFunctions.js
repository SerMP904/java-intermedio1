import { createMovieCard } from "../parts/movieCards.js";

export function showMovies(movies, container) {
    if (!movies || movies.length === 0){
        container.textContent = "No hay pelis";
        return;
    } else {
        container.innerHTML = "";
    }

    movies.forEach(movie => {
        const movieCard = createMovieCard(movie);
        container.appendChild(movieCard);
        console.log(movie)
    });
    console.log("createmoviecard")
}

export function showData(container, title, overview){
    const insideT = document.createElement("div");
    insideT.textContent = title
    const insideO = document.createElement("div");
    insideO.textContent = overview
    const insideP = document.createElement("img");
    insideP.setAttribute("src", "https://image.tmdb.org/t/p/w300/giV7FS7HGyxRbwqxudXPvv1RgXD.jpg")
    container.appendChild(insideT)
    container.appendChild(insideO)
    container.appendChild(insideP)
}