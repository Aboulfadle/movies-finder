import React, {useState} from 'react';
import {Button, Nav, Navbar} from "react-bootstrap";
import makeStyles from "@material-ui/core/styles/makeStyles";
import HdSharp from "@material-ui/icons/HdSharp";
import QuickSearch from "../components/common/QuickSearch";
import CategoriesLink from "../components/category/CategoriesLink";
import {Link} from "@reach/router";


const useStyles = makeStyles(theme => ({
    navBarHeader: {
        height: '75px',
        color: 'white',
        paddingRight : '60px',
        paddingLeft : '60px',
        backgroundColor: '#010103',
    },
    navBarBrand: {
        fontSize: '25px',
        lineHeight: '45%',
        fontFamily: 'Titillium Web'
    },
    navButton: {
        marginTop: '20px'
    },
    headerRouting: {
        marginTop: '36px',
        marginLeft: '-27px',
    },
    headerRoutingLink: {
        color: '#f8f9fa',
        marginBottom: '2px'
    },
    leftPanel: {
        paddingTop: '100px',
        width: '320px',
        top: 0,
        bottom: 0,
        background: '#101010',
        left: 0,
        position: 'fixed'
    },
}));

const Header = () => {
    const classes = useStyles();
    const [openCategories, setOpenCategories] = useState(false);
    const [openQuickSearch, setOpenQuickSearch] = useState(false);

    const toggleCategoriesDrawer = () => {
        setOpenCategories(!openCategories);
    };

    const toggleQuickSearchDrawer = () => {
        setOpenQuickSearch(!openQuickSearch);
    };


    return (
        <div className={classes.leftPanel}>
            <Navbar variant="dark" className={`flex-column ${classes.navBarHeader}`}>
                <Navbar.Brand href="#home" className={classes.navBarBrand}>
                    <HdSharp style={{color: '#dc3545', fontSize: '30px'}} />
                    Find your<br/>movies here !!
                </Navbar.Brand>
                <Nav defaultActiveKey="/home" className={`flex-column ${classes.headerRouting}`}>
                    <Link to="/top_rated" className={`header-routing-link ${classes.headerRoutingLink}`}>Top rated</Link>
                    <Link to="/" className={`header-routing-link ${classes.headerRoutingLink}`}>Home</Link>
                    <Link to="/upcoming" className={`header-routing-link ${classes.headerRoutingLink}`}>Upcoming</Link>
                    <Link to="/popular_movies" className={`header-routing-link ${classes.headerRoutingLink}`}>Popular movies</Link>
                    <Button className={classes.navButton} variant="outline-light" onClick={toggleCategoriesDrawer}>Categories</Button>
                    <Button className={classes.navButton} variant="outline-light" onClick={toggleQuickSearchDrawer}>Quick search</Button>
                </Nav>
            </Navbar>

            <CategoriesLink
                openCategories={openCategories}
                categoriesHandler={toggleCategoriesDrawer} />

            <QuickSearch
                openQuickSearch={openQuickSearch}
                quickSearchHandler={toggleQuickSearchDrawer} />

        </div>
    );
}

export default Header;

Header.propTypes = {};

Header.defaultProps = {};
