import { Movie } from "@/types";

const API_URL = "http://127.0.0.1:8000/movies/api/v1/movies/";

export const getMovies = async () => {
  const response = await fetch(API_URL);
  return response.json();
};

export const createMovie = async (movie: Movie) => {
  await fetch(API_URL, {
    method: "POST",
    body: JSON.stringify(movie),
    headers: { "Content-type": "application/json; charset=UTF-8" },
  });
};

export const editMovie = async (movie: Movie) => {
  await fetch(`${API_URL}${movie.id}/`, {
    method: "PUT",
    body: JSON.stringify(movie),
    headers: { "Content-type": "application/json; charset=UTF-8" },
  });
};

export const deleteMovie = async (id: string) => {
  await fetch(API_URL + id, {
    method: "DELETE",
  });
};
