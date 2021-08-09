import React from "react";
import axios from "axios";
import Movie from "./Movie";
import "./App.css";

class App extends React.Component {
  state = {
    isLoading: true,
    movies: []
  };
  getMovies = async () => {
    const {
      data: {
        data: { movies }
      }
    } = await axios.get(
      "https://yts-proxy.now.sh/list_movies.json?sort_by=rating"
    );
    this.setState({ movies, isLoading: false });
  };
  componentDidMount() {
    this.getMovies();
  }
  render() {
    const { isLoading, movies } = this.state;
    return (
      <section class="container">
        {isLoading ? (
          <div class="loader">
            <span class="loader__text">Loading...</span>
          </div>
        ) : (
          <div class="movies">
            {movies.map(movie => (
              <Movie
                key={movie.id}
                id={movie.id}
                year={movie.year}
                title={movie.title}
                summary={movie.summary}
                poster={movie.medium_cover_image}
                genres={movie.genres}
              />
            ))}
          </div>
        )}
      </section>
    );
  }
}

export default App;
// function Food({name, des, rating}){ 
//   // or props.fav
//   return <div> 
//     <h1>{name}</h1>
//     <h4>{rating}/5.0</h4>
//     <h1>{des}</h1>
//   </div>
// }

// Food.propTypes ={
//   name : PropTypes.string.isRequired,
//   des : PropTypes.string.isRequired,
//   rating : PropTypes.number.isRequired
// }

// const foodlist = [
//   {
//     id : 1,
//     name : "Kimbap",
//     description : "dsadsadsad",
//     rating : 5
//   },
//   {
//     id : 2,
//     name : "Ramen",
//     description : "instatn noodle",
//     rating : 3
//   }
// ];

// function renderFood(dish){
//   return <Food key={dish.id} name={dish.name} des={dish.description} rating={dish.rating} />
// }
// function App() {
//   return (
//     <div>
//       {foodlist.map(renderFood)}
//     </div>
//   );
// }


