import axios from "axios";
import {BASE_URL, API_KEY, LANGUAGE} from "../constants/ApplicationConstant";

const resources = {};

// The use case of resources, is to store result of old requests.
// Sending requests every time when we update the input, can lead to an overload of requests, especially when we receive large responses.
// so I canceled the pending requests, before going for the new one.
const search = () => {
    let cancel;
    return async (value) => {
        if (cancel) {
            cancel.cancel();
        }
        cancel = axios.CancelToken.source();
        try {
            if (resources[value]) {
                return resources[value];
            }
            const response = await axios.get(`${BASE_URL}search/movie?query=${value}&language=${LANGUAGE}&api_key=${API_KEY}`, {cancelToken: cancel.token});
            const result = response.data.results;
            resources[value] = result;
            return result;
        } catch (error) {
            return [];
        }
    }
};

export const quickSearch = search();
