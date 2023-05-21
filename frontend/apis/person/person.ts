const API_URL = "http://127.0.0.1:8000/movies/api/v1/persons/";

export const getPersons = async () => {
  const response = await fetch(API_URL);
  return response.json();
};
