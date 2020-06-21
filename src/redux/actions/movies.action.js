import {client} from "../../client/client.js";
import {
    FETCH_MOVIES,
    FETCH_MOVIES_BY_CATEGORY, FETCH_MOVIES_BY_KEYWORD,
} from "../actionsType";

export function fetchMovies(page, pathParam, totalPagesRef) {
    const pageParam = {
        params: {
            page: page
        }
    };
    return dispatch => {
        dispatch({
            type: FETCH_MOVIES,
            payload: client.get(`/movie/${pathParam}`, pageParam).then(response => {
                if (totalPagesRef) {
                    totalPagesRef.current = response.data.total_pages;
                }
                return response;
            }),
        });
    };
}

export function fetchMoviesByGenre(page, categoryId) {
    return dispatch => {
        dispatch({
            type: FETCH_MOVIES_BY_CATEGORY,
            payload: client.get(`/genre/${categoryId}/movies`, {
                params: {
                    page: page,
                    include_adult: false,
                    sort_by: "created_at.asc"
                }
            }),
            categoryId : categoryId,
        });
    };
}

export function fetchMoviesByKeyword(page, keywordId, totalPagesRef) {
    return dispatch => {
        dispatch({
            type: FETCH_MOVIES_BY_KEYWORD,
            payload: client.get(`/keyword/${keywordId}/movies`, {
                params: {
                    page: page,
                    include_adult: false,
                }
            }).then(response => {
                if (totalPagesRef) {
                    totalPagesRef.current = response.data.total_pages;
                }
                return response;
            }),
            categoryId : keywordId,
        });
    };
}