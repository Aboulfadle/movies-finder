import React from 'react';
import './App.css';
import Header from "./containers/Header";
import HomePage from "./containers/HomePage";
import {Router} from "@reach/router";
import CategoryPage from "./containers/CategoryPage";
import MoviePage from "./containers/MoviePage";
import TopRated from "./containers/TopRated";
import Upcoming from "./containers/Upcoming";
import PopularMovies from "./containers/PopularMovies";
import WebFont from 'webfontloader';
import KeywordPage from "./containers/KeywordPage";


WebFont.load({
    google: {
        families: [
            'Titillium Web:300,400,700',
            'sans-serif',
            'Yanone+Kaffeesatz:wght@600'
        ]
    }
});

function App() {
  return (
      <>
          <Header />
          <div className="siteContent">
              <Router>
                  <HomePage path={"/"} />
                  <CategoryPage path={"/category/:categoryId/:categoryName"} />
                  <KeywordPage path={"/keyword/:keywordId/:keywordName"} />
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
