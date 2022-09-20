
/* 
  Implement a function that generates a stats object for the movies array in the format:
  { 
    [genre]: { 
      rates: number[], 
      titles: string[] 
    }
  }
*/
const getMoviesStatsByGenre = (movies, startFromYear) => {
    // implementation
};

// Example:

const movies = [
  {
    title: "The Shawshank Redemption",
    year: 1994,
    duration: "2h 22min",
    genre: ["Crime", "Drama"],
    rate: 8,
  },
  {
    title: "The Godfather",
    year: 1972,
    duration: "2h 55min",
    genre: ["Comedy", "Crime"],
    rate: 10,
  },
  {
    title: "The Godfather",
    year: 1970,
    director: "The Batman",
    duration: "2h 55min",
    genre: ["Crime"],
    rate: 10,
  },
  {
    title: "Pokemons",
    year: 1969,
    duration: "2h 55min",
    genre: ["Crime"],
    rate: 5,
  }
]

const stats = getMoviesStatsByGenre(movies, 1970);

// Returns stats for the movies array:

/* { 
  crime: { 
      rates: [8, 10], 
      titles: ['The Shawshank Redemption', 'The Godfather' ] 
    }, 
  drama: {
    titles: ['The Shawshank Redemption'],
    rates: [8]
  } ,
  comedy: {
    titles: ['The Godfather'],
    rates: [10]
  } 
}
*/
