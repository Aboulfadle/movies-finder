import React, {useEffect} from 'react';
import makeStyles from "@material-ui/core/styles/makeStyles";
import Pagination from "@material-ui/lab/Pagination";
import CommonTitle from "../components/common/CommonTitle";
import {useDispatch, useSelector} from "react-redux";
import {fetchMoviesByKeyword} from "../redux/actions/movies.action";
import Loader from "../components/common/Loader";
import KeywordCardList from "../components/keyword/KaywordCardList";


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

const KeywordPage = ({keywordId, keywordName}) => {

    const classes = useStyles();
    const dispatch = useDispatch();
    const { movies, totalPages, loading, totalResults } = useSelector(state => state.moviesStore);

    const handleKeywordPageChange = page => {
        console.log(page)
        window.scrollTo({
            top: 0,
            left: 0,
        });
        dispatch(fetchMoviesByKeyword(page, keywordId));
    };

    useEffect(() => {
        dispatch(fetchMoviesByKeyword(1, keywordId));
    }, [dispatch, keywordId]);

    return (
        <div>
            { loading ?
                <Loader />
                :
                <>
                    <CommonTitle title={`#${keywordName} (${totalResults} movies)`} />
                    <div className={classes.root}>
                        <div className={classes.rootGridContainer}>
                            <KeywordCardList movies={movies} />
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
                        onChange={(e, page) => handleKeywordPageChange(page)}/>
                </div>
            </div>
        </div>
    );
}

export default KeywordPage;

KeywordPage.KeywordPage = {};

KeywordPage.KeywordPage = {};
