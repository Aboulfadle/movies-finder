import React, {useState} from 'react';
import makeStyles from "@material-ui/core/styles/makeStyles";
import CloseIcon from '@material-ui/icons/Close';
import {Drawer} from "@material-ui/core/";
import Autocomplete from 'react-autocomplete';
import {quickSearch} from "../utils/SearchUtils";
import {Link} from "@reach/router";
import PropTypes from "prop-types";


const useStyles = makeStyles(theme => ({
    drawer: {
        width: '320px',
        fontFamily: 'Titillium Web',
        backgroundColor: '#101010',
        flexShrink: 0
    },
    drawerPaper: {
        width: '320px',
        backgroundColor: '#101010'
    },
    drawerHeader: {
        paddingTop: '15px',
        paddingLeft: '15px',
        display: 'flex',
        alignItems: 'center',
        padding: theme.spacing(0, 1), ...theme.mixins.toolbar,
    },
    drawerHeaderButton: {
        right: '8px',
        fontSize: '30px',
        marginTop: '-5px',
        position: 'absolute',
        outline: "none",
        zIndex: 1,
        color: '#dc3545'
    },
}));

const QuickSearch = ({openQuickSearch, quickSearchHandler}) => {
    const classes = useStyles();
    const [movies , setMovies] = useState([]);
    const [searchTextValue , setSearchTextValue] = useState('');

    const renderAutoCompleteItems = (item, isHighlighted) =>
        <Link to={`/movie/${item.id}`} key={item.id}>
            <div className={`item ${isHighlighted ? 'selected-item' : ''}`} key={item.id}>
                {item.title}
            </div>
        </Link>

    const renderAutoCompleteMenu = item =>
        <div className="dropdown ui-button" key={item}>
            {item}
        </div>

    const onChangeHandler = async (event, value) => {
        setSearchTextValue(value);
        if (value) {
            const movies = await quickSearch(value);
            setMovies(movies ? movies : []);
        }
        else {
            setMovies([])
        }
    }

    return (
        <Drawer transitionDuration={800} className={classes.drawer} variant="persistent" anchor="left" open={openQuickSearch} classes={{paper: classes.drawerPaper}}>
            <div className={classes.drawerHeader}>
                <CloseIcon className={`button-cursor-pointer ${classes.drawerHeaderButton}`} onClick={quickSearchHandler} />
            </div>
            <div className="autocomplete-wrapper">
                <Autocomplete
                    value={searchTextValue}
                    inputProps={{ placeholder: 'Tape a movie title...' }}
                    items={movies}
                    getItemValue={item => item.title}
                    renderMenu={renderAutoCompleteMenu}
                    renderItem={renderAutoCompleteItems}
                    onChange={onChangeHandler}/>
            </div>
        </Drawer>
    );
}

export default QuickSearch;

QuickSearch.propTypes = {
    openQuickSearch : PropTypes.bool,
    quickSearchHandler : PropTypes.func
};
