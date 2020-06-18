import React, {useRef, useState} from 'react';
import axios from "axios";
import ApplicationConstant from "../constants/ApplicationConstant";
import InfinityScroll from "../components/InfinityScroll";


const PopularMovies = () => {

    let totalPages = useRef(1);
    let [movies, setMovies] = useState([]);

    const findItemsByPage = (page) => {
        axios.get(`${ApplicationConstant.BASE_URL}movie/popular?api_key=${ApplicationConstant.API_KEY}&page=${page}`)
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

export default PopularMovies;

PopularMovies.propTypes = {};

PopularMovies.defaultProps = {};
