import React from "react";
import axios from "axios";
import Movie from "./Movie";
import "./App.css";

class App extends React.Component {
  state = {
    isLoading: true,
    movies: [],
  };

  // 최신 가장 높은 평점의 영화를 불러올 때까지 await
  getMovies = async () => {
    const {
      data: { results },
    } = await axios.get(
      "https://api.themoviedb.org/3/movie/popular?api_key=d771ee361528f7664dfcdb3fde78920a"
    );
    this.setState({ results, isLoading: false });
    console.log(results);
  };
  componentDidMount() {
    this.getMovies();
  }
  render() {
    const { isLoading, results } = this.state;
    // ? true : false
    return (
      <section className="container">
        {isLoading ? (
          <div className="loader">
            <span className="loader_text">Loading...</span>
          </div>
        ) : (
          <div className="movies">
            {results.map((movie) => {
              return (
                <Movie
                  key={movie.id}
                  id={movie.id}
                  release_date={movie.release_date}
                  title={movie.title}
                  overview={movie.overview}
                  poster={movie.poster_path}
                  vote_count={movie.vote_count}
                  vote_average={movie.vote_average}
                />
              );
            })}
          </div>
        )}
      </section>
    );
  }
}

export default App;
