import { showMovies } from "../functions/movieFunctions.js";
import { apiConfig } from "./movieApiConfig.js";

export async function getMovies(container) {
    try {
        const response = await fetch(
            `${apiConfig.baseUrl}popular?api_key=${apiConfig.apiClave}`
        );
    if (!response.ok) { throw new Error("Error:" + response.status)}
    
    const data = await response.json();
    if(typeof localStorage !== undefined) {
        localStorage.setItem("dataMovies", JSON.stringify(data.results));
    }
    showMovies(data.results, container);
    } catch (error){
        alert("Esto no se debe hacer")
    }
    console.log("getmovies")
}