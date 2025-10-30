import { showMovies, showData} from "../functions/movieFunctions.js";
import { apiConfig } from "./movieApiConfig.js";

export async function getMovies(container) {
    try {
        const response = await fetch(
            `${apiConfig.baseUrl}popular?api_key=${apiConfig.apiClave}`
        );
    if (!response.ok) { throw new Error("Error:" + response.status)}
    
    const data = await response.json();
    console.log(data)
    showMovies(data.results, container);
    } catch (error){
        alert("Esto no se debe hacer")
    }
}

export async function getSingleMovies(container) {
    try {
        const response = await fetch(
            `${apiConfig.baseUrl}1519168?api_key=${apiConfig.apiClave}`
        );
    if (!response.ok) { throw new Error("Error:" + response.status)}
    const data = await response.json();
    console.log(data)
    showData(container, data.title, data.overview)
    } 
    catch (error){
        console.log("Esto no debe salir")
        console.log(error)
    } 
}

export async function getActors(container){
    try {
        const response = await fetch(
            `${apiConfig.baseUrl}1519168?api_key=${apiConfig.apiClave}`
        )
    if (!response.ok) {throw new Error("Error:" + response.status)}

    const data = await response.json();
    console.log(data, container)
    } catch (error) {
        console.log("no hay actores")
    }
}
