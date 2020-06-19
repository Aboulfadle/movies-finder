import React, {useRef} from 'react';
import InfinityScroll from "../components/InfinityScroll";
import {useDispatch, useSelector} from "react-redux";
import {fetchMovies} from "../redux/actions/movies.action";


const TopRated = () => {

    const dispatch = useDispatch();
    const { movies } = useSelector(state => state.moviesStore);
    const totalPagesRef = useRef(1);

    const findItemsByPage = (page) => {
        dispatch(fetchMovies(page, "top_rated", totalPagesRef));
    }



    return (
        <InfinityScroll
            movies={movies}
            findItemsByPage={findItemsByPage}
            totalPagesRef={totalPagesRef}/>
    );
}

export default TopRated;
