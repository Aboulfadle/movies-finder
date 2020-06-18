import React, {useEffect, useState} from 'react';
import makeStyles from "@material-ui/core/styles/makeStyles";
import axios from "axios";
import ApplicationConstant from "../constants/ApplicationConstant";
import MovieCardList from "../components/MovieCardList";
import Pagination from "@material-ui/lab/Pagination";
import CommonTitle from "../components/CommonTitle";


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

    const [totalPages, setTotalPages] = useState(0);
    const classes = useStyles();
    const [movies, setMovies] = useState([]);

    const handleCategoryPageChange = page => {
        window.scrollTo({
            top: 0,
            left: 0,
            behavior: 'smooth'
        });
        findItemsByCategory(categoryId, page);
    };

    useEffect(() => {
        handleCategoryPageChange(1);
    }, [categoryId, categoryName]);

    const findItemsByCategory = (categoryId, page) => {
        axios.get(`${ApplicationConstant.BASE_URL}genre/${categoryId}/movies?api_key=${ApplicationConstant.API_KEY}&page=${page}`)
            .then(response => {
                setMovies(response.data.results);
                setTotalPages(response.data.total_pages);
            });
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
