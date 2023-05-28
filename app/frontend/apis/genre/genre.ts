const API_URL = "https://cinema-memory.fly.dev/movies/api/v1/genres/";

export const getGenres = async () => {
  const response = await fetch(API_URL);
  return response.json();
};