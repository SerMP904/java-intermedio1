export function createMovieCard(movie) {

    const movieCard = document.createElement("div");
    movieCard.className = "movieCard";

    const movieImg = document.createElement("img");
    movieImg.className = "movieImg";
    movieImg.setAttribute("src", `https://image.tmdb.org/t/p/w300${movie.poster_path}`)
    
    const movieTitle = document.createElement("h1");
    movieTitle.textContent = movie.title;

    const movieRating = document.createElement("p");
    movieRating.textContent = `Rating: ${movie.vote_average}`;

    movieCard.appendChild(movieImg);
    movieCard.appendChild(movieTitle);
    movieCard.appendChild(movieRating);
    console.log("movie cards")
    return movieCard;

    
}