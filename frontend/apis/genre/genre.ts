const API_URL = "http://127.0.0.1:8000/movies/api/v1/genres/";

export const getGenres = async () => {
  const response = await fetch(API_URL);
  return response.json();
};
