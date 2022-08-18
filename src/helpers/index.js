export const formatMovies = (data) => {
  const loadedMovies = [];

  for (const key in data) {
    if (Object.hasOwnProperty.call(data, key)) {
      const movieData = data[key];
      loadedMovies.push({ ...movieData, id: key });
    }
  }

  return loadedMovies;
};
