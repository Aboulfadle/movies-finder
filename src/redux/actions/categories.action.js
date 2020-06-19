import {FETCH_CATEGORY} from "../actionsType";
import {client} from "../../client/client";

export function fetchCategories() {
    return dispatch => {
        dispatch({
            type: FETCH_CATEGORY,
            payload: client.get("/genre/movie/list")
        });
    };
}