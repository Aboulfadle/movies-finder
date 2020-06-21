import React, {useEffect} from 'react';
import makeStyles from "@material-ui/core/styles/makeStyles";
import MovieCardList from "../components/movies/MovieCardList";
import Pagination from "@material-ui/lab/Pagination";
import CommonTitle from "../components/common/CommonTitle";
import {useDispatch, useSelector} from "react-redux";
import {fetchMoviesByGenre} from "../redux/actions/movies.action";
import Loader from "../components/common/Loader";
import PropTypes from "prop-types"


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

const CategoryPage = ({categoryId, categoryName}) => {

    const classes = useStyles();
    const dispatch = useDispatch();
    const { movies, totalPages, loading } = useSelector(state => state.moviesStore);

    const handleCategoryPageChange = page => {
        console.log(page)
        window.scrollTo({
            top: 0,
            left: 0,
        });
        dispatch(fetchMoviesByGenre(page, categoryId));
    };

    useEffect(() => {
        dispatch(fetchMoviesByGenre(1, categoryId));
    }, [dispatch, categoryId]);

    return (
        <div>
            { loading ?
                <Loader />
                :
                <>
                    <CommonTitle title={`${categoryName} movies`} />
                    <div className={classes.root}>
                        <div className={classes.rootGridContainer}>
                            <MovieCardList movies={movies} />
                        </div>
                    </div>
                </>
            }
            <div className={classes.root}>
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

export default CategoryPage;

CategoryPage.propTypes = {
    categoryId: PropTypes.number,
    categoryName: PropTypes.string,
};

CategoryPage.defaultProps = {};
