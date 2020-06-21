import React, {useRef} from 'react';
import InfinityScroll from "../components/category/InfinityScroll";
import {fetchMovies} from "../redux/actions/movies.action";
import {useDispatch, useSelector} from "react-redux";


const Upcoming = () => {

    const dispatch = useDispatch();
    const { movies } = useSelector(state => state.moviesStore);
    const totalPagesRef = useRef(1);

    const findItemsByPage = (page) => {
        dispatch(fetchMovies(page, "upcoming", totalPagesRef));
    }

    return (
        <InfinityScroll
            movies={movies}
            findItemsByPage={findItemsByPage}
            totalPagesRef={totalPagesRef}/>
    );
}

export default Upcoming;

Upcoming.propTypes = {};

Upcoming.defaultProps = {};
