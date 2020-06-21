import React from 'react';
import PropTypes from "prop-types";
import {Link} from "@reach/router";
import GridList from "@material-ui/core/GridList";
import GridListTile from "@material-ui/core/GridListTile";


const KeywordCardList = ({movies}) => {

    return (
        <div className="keywords right_column">
            <GridList>
                {
                    movies.map((movie) =>
                        <GridListTile key={movie.id}>
                            <Link to={`/keyword/${movie.id}-${movie.name}`}>{movie.name}</Link>
                        </GridListTile>
                    )
                }
            </GridList>
        </div>
    );
}

export default KeywordCardList;

KeywordCardList.propTypes = {
    keywords : PropTypes.arrayOf(
        PropTypes.shape({
            id: PropTypes.number,
            name: PropTypes.string
        })
    )
};
