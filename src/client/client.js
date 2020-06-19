import axios from "axios";
import "../constants/ApplicationConstant";
import _ from 'lodash';
import {API_KEY, BASE_URL, LANGUAGE} from "../constants/ApplicationConstant";

export const client = axios.create({
    baseURL: BASE_URL
});

client.interceptors.request.use(function(userParam) {
        const commonParams = {
            params : {
                api_key: API_KEY,
                language: LANGUAGE
            }
        }
        return _.merge({}, userParam, commonParams);
    },
    function(error) {
        return Promise.reject(error);
    }
);
