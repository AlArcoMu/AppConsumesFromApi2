// URL de la API para obtener todos los juegos
const URL_Juegos = "https://www.freetogame.com/api/games";

// Función que devuelve todos los juegos de todas las plataformas de la API
export async function getAllJuegos() {
  let data = await fetch(URL_Juegos + "?platform=all"); // Realiza una petición a la API para obtener todos los juegos
  let juegos = await data.json(); // Convierte la respuesta de la API a formato JSON
  return juegos; // Devuelve los juegos
}

// Función que devuelve los juegos ordenados por fecha de salida
export async function getJuegosByRelease() {
  let data = await fetch(URL_Juegos + "?sort-by=release-date"); // Realiza una petición a la API para obtener los juegos ordenados por fecha de salida
  let juegos = await data.json(); // Convierte la respuesta de la API a formato JSON
  return juegos; // Devuelve los juegos
}

