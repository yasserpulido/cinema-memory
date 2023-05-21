import { Movie } from "@/types";

const API_URL = "http://127.0.0.1:8000/movies/api/v1/movies/";

export const getMovie = async (id: string) => {
  const response = await fetch(API_URL + id);
  return response.json();
};

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
  const formData = new FormData();

  formData.append("title", movie.title);
  formData.append("description", movie.description);
  formData.append("year", movie.year.toString());
  formData.append("rating", movie.rating.toString());
  formData.append("runtime", movie.runtime.toString());

  movie.genres.forEach((genre) => {
    formData.append("genres", genre.toString());
  });

  movie.directors.forEach((director) => {
    formData.append("directors", director.toString());
  });

  formData.append("image", movie.image, movie.image.name);

  await fetch(`${API_URL}${movie.id}/`, {
    method: "PUT",
    body: formData,
  });
};

export const deleteMovie = async (id: number) => {
  await fetch(API_URL + id, {
    method: "DELETE",
  });
};
