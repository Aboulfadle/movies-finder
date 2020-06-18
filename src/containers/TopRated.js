import React, {useRef, useState} from 'react';
import InfinityScroll from "../components/InfinityScroll";
import axios from "axios";
import ApplicationConstant from "../constants/ApplicationConstant";


const TopRated = () => {

    let totalPages = useRef(1);
    let [movies, setMovies] = useState([]);

    const findItemsByPage = (page) => {
        axios.get(`${ApplicationConstant.BASE_URL}movie/top_rated?api_key=${ApplicationConstant.API_KEY}&page=${page}`)
            .then(response => {
                setMovies(prev => [...prev, ...response.data.results]);
                totalPages.current = response.data.total_pages;
            });
    }

    return (
        <InfinityScroll
            movies={movies}
            findItemsByPage={findItemsByPage}
            totalPages={totalPages}/>
    );
}

export default TopRated;
