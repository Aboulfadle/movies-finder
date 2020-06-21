import React, {useEffect, useRef} from 'react';
import MovieAttachedCardList from "../movies/MovieAttachedCardList";
import PropTypes from "prop-types";


const InfinityScroll = ({movies, findItemsByPage, totalPagesRef}) => {

    let page = 1;
    const containerRef = useRef();
    const bottomRef = useRef();

    const scrollCallBack = (entries) => {
        if (entries[0].isIntersecting && totalPagesRef.current && page <= totalPagesRef.current) {
            page = page + 1;
            findItemsByPage(page);
        }
    };

    useEffect(() => {
        findItemsByPage(page);

        const scroll = new IntersectionObserver(scrollCallBack, {
            root: containerRef.current,
            rootMargin: "400px"
        });
        scroll.observe(bottomRef.current);
        return () => {
            scroll.disconnect()
        }

    }, []);

    return (
        <div className={"attached-grid"}>
            <MovieAttachedCardList movies={movies} containerRef={containerRef} bottomRef={bottomRef} />
        </div>
    );
}

export default InfinityScroll;

InfinityScroll.propTypes = {
    movies : PropTypes.arrayOf(PropTypes.object),
    findItemsByPage : PropTypes.func,
    totalPagesRef : PropTypes.object
};
