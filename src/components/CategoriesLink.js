import React, {useEffect, useState} from 'react';
import makeStyles from "@material-ui/core/styles/makeStyles";
import CloseIcon from '@material-ui/icons/Close';
import {List, Drawer, ListItem, ListItemText} from "@material-ui/core/";
import axios from "axios";
import ApplicationConstant from "../constants/ApplicationConstant";
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
        color: '#dc3545'
    },
    listItem: {
        color: 'white',
        paddingTop: 4,
        paddingBottom: '3px'
    },
}));

const CategoriesLink = ({openCategories, categoriesHandler}) => {
    const classes = useStyles();
    const [categories, setCategories] = useState([]);
    useEffect(() => {
        axios.get(ApplicationConstant.BASE_URL + "genre/movie/list?api_key=" + ApplicationConstant.API_KEY)
            .then(response => setCategories(response.data.genres));
    }, []);

    return (
        <Drawer transitionDuration={800} className={classes.drawer} variant="persistent" anchor="left" open={openCategories} classes={{paper: classes.drawerPaper}}>
            <div className={classes.drawerHeader}>
                <h4 style={{color:'white'}}>Categories</h4>
                <CloseIcon className={`button-cursor-pointer ${classes.drawerHeaderButton}`} onClick={categoriesHandler} />
            </div>
            <List>
                {categories.map((category) => (
                    <Link to={`/category/${category.id}/${category.name}`} className={"category-link"} key={category.id}>
                        <ListItem className={classes.listItem} button key={category.id}>
                            <ListItemText primary={category.name} />
                        </ListItem>
                    </Link>
                ))}
            </List>
        </Drawer>
    );
}

export default CategoriesLink;

CategoriesLink.propTypes = {
    openCategories : PropTypes.bool,
    categoriesHandler : PropTypes.func
};
