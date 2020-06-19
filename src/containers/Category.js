import React, {useEffect} from 'react';
import makeStyles from "@material-ui/core/styles/makeStyles";
import MovieCardList from "../components/MovieCardList";
import Pagination from "@material-ui/lab/Pagination";
import CommonTitle from "../components/CommonTitle";
import {useDispatch, useSelector} from "react-redux";
import {fetchMoviesByGenre} from "../redux/actions/movies.action";


const useStyles = makeStyles(theme => ({
    root: {
        width: '100%',
        paddingLeft: '7%',
        paddingRight: '7%'
    },
    rootGridContainer: {
        display: 'flex',
        flexGrow: 1,
        flexWrap: 'wrap',
        width: '100%',
        height: '100%',
        marginTop: '50px',
        marginBottom: '50px',
        justifyContent: 'center',
        overflow: 'none',
        backgroundColor: theme.palette.background.paper,
    },
    pagination: {
        marginBottom: '40px'
    }
}));

const Category = ({categoryId, categoryName}) => {

    const classes = useStyles();
    const dispatch = useDispatch();
    const { movies, totalPages } = useSelector(state => state.moviesStore);

    const handleCategoryPageChange = page => {
        window.scrollTo({
            top: 0,
            left: 0,
            behavior: 'smooth'
        });
        findItemsByCategory(page, categoryId);
    };

    useEffect(() => {
        findItemsByCategory(1, categoryId);
    }, [dispatch, categoryId]);

    const findItemsByCategory = (page, categoryId) => {
        dispatch(fetchMoviesByGenre(page, categoryId));
    }

    return (
        <div>
            <CommonTitle title={`${categoryName} movies`} />
            <div className={classes.root}>
                <div className={classes.rootGridContainer}>
                    <MovieCardList movies={movies} />
                </div>

                <div className={`pagination ${classes.pagination}`}>
                    <Pagination
                        count={totalPages}
                        variant="outlined"
                        shape="rounded"
                        onChange={(e, page) => handleCategoryPageChange(page)}/>
                </div>
            </div>
        </div>
    );
}

export default Category;

Category.propTypes = {};

Category.defaultProps = {};
