import React from 'react';
import './App.css';
import Header from "./containers/Header";
import HomePage from "./containers/HomePage";
import {Router} from "@reach/router";
import Category from "./containers/Category";
import MoviePage from "./containers/MoviePage";
import TopRated from "./containers/TopRated";
import Upcoming from "./containers/Upcoming";
import PopularMovies from "./containers/PopularMovies";

function App() {
  return (
      <>
          <Header />
          <div className="siteContent">
              <Router>
                  <HomePage path={"/"} />
                  <Category path={"/category/:categoryId/:categoryName"} />
                  <MoviePage path={"/movie/:movieId"} />
                  <TopRated path={"/top_rated"} />
                  <Upcoming query_variable={"upcoming"} path={"/upcoming"} />
                  <PopularMovies query_variable={"popular"} path={"/popular_movies"} />
              </Router>
          </div>
      </>
  );
}

export default App;
