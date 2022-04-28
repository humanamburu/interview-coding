
// Implement a function that generates a stats object for the movies array in the format
// { [genre]: { averageRating: number, titles: string[] }}
const getMoviesStatsByGenre = (movies, startFromYear) => {
    // implementation
};

// Example:

const movies = [
  {
    title: "The Shawshank Redemption",
    year: 1994,
    director: "Frank Darabont",
    duration: "2h 22min",
    genre: ["Crime", "Drama"],
    rate: 9.3,
  },
  {
    title: "The Godfather",
    year: 1972,
    director: "Francis Ford Coppola",
    duration: "2h 55min",
    genre: ["Comedy"],
    rate: 9.2,
  }
]

getMoviesStatsByGenre(movies, 1972);
// { crime: { averageRate: 8, titles: ['The Shawshank Redemption'] }, drama: {...} }
