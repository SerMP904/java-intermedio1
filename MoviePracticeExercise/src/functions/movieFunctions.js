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
    console.log("creatmoviecard")
}