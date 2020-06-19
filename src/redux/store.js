import {applyMiddleware, combineReducers, createStore} from "redux";
import thunk from "redux-thunk";
import { createPromise } from "redux-promise-middleware";
import { composeWithDevTools } from "redux-devtools-extension";
import { loadingBarMiddleware } from "react-redux-loading-bar";
import moviesReducer from "./reducers/movies.reducer";
import movieReducer from "./reducers/movie.reducer";
import actorReducer from "./reducers/actor.reducer";
import categoriesReducer from "./reducers/categories.reducer";


const promise = createPromise({
    types: {
        fulfilled: "success"
    }
});

const middleware = composeWithDevTools(
    applyMiddleware(promise, thunk, loadingBarMiddleware())
);

const reducers = {
    moviesStore: moviesReducer,
    categoriesStore: categoriesReducer,
    movieStore: movieReducer,
    actorStore: actorReducer,
};
const rootReducer = combineReducers(reducers);

export default createStore(rootReducer, middleware);
