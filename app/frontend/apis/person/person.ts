const API_URL = "https://cinema-memory.fly.dev/movies/api/v1/persons/";

export const getPersons = async () => {
  const response = await fetch(API_URL);
  return response.json();
};
