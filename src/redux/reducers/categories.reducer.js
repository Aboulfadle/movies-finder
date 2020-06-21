import {FETCH_CATEGORY} from "../actionsType";

const initialState = {
    categories: [],
    loading: false
};

export default (state = initialState, action = {}) => {
    switch (action.type) {
        case `${FETCH_CATEGORY}_PENDING`: {
            return {
                ...state,
                loading: true,
            };
        }

        case `${FETCH_CATEGORY}_FULFILLED`: {
            return {
                ...state,
                categories: action.payload.data.genres,
                loading: false
            };
        }

        default: {
            return state;
        }
    }
}