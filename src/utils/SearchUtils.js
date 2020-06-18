import axios from "axios";
import ApplicationConstant from "../constants/ApplicationConstant";

const resources = {};

// The use case of resources, is to store result of old requests.
// Sending requests every time when we update the input, can lead to an overload of requests, especially when we receive large responses.
// so I use the 'cancel' to cancel the pending requests, and keep only the new one.
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
            const response = await axios(`${ApplicationConstant.BASE_URL}search/movie?query=${value}&language=en-US&api_key=${ApplicationConstant.API_KEY}`, {cancelToken: cancel.token}, []);
            const result = response.data.results;
            resources[value] = result;
            return result;
        } catch (error) {
            return [];
        }
    }
};

export const quickSearch = search();
