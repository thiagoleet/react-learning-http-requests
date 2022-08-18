// helpers
import { formatMovies } from "../helpers";

const API_URL =
  "https://react-http-212ab-default-rtdb.firebaseio.com/movies.json";

export const fetchMovies = async () => {
  const response = await fetch(API_URL);
  if (!response.ok) {
    throw new Error("Something went wrong");
  }

  const data = await response.json();
  return formatMovies(data);
};

export const addMovie = async (movie) => {
  const response = await fetch(API_URL, {
    method: "POST",
    body: JSON.stringify(movie),
    headers: {
      "Content-Type": "application/json",
    },
  });

  const data = await response.json();
  console.log(data);
};
