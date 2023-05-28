import { Movie } from "@/types";

const API_URL = "https://cinema-memory.fly.dev/movies/api/v1/movies/";

export const getMovie = async (id: string) => {
  const response = await fetch(API_URL + id);
  return response.json();
};

export const getMovies = async () => {
  const response = await fetch(API_URL);
  return response.json();
};

export const createMovie = async (movie: Movie) => {
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

  if (movie.image instanceof File) {
    formData.append(
      "image",
      movie.image,
      createImageName(movie.title, movie.year)
    );
  }

  await fetch(API_URL, {
    method: "POST",
    body: formData,
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

  if (movie.image instanceof File) {
    formData.append(
      "image",
      movie.image,
      createImageName(movie.title, movie.year)
    );
  }

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

const createImageName = (title: string, year: number) => {
  return `${title.replace(/ /g, "-").toLowerCase()}-${year}.jpg`;
};
