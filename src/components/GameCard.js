import React from "react";
import Price from './Price';
import Featured from './Featured';
import PropTypes from 'prop-types';

const GameCard = ({ game }) => (
    <div className="ui card">
        <div className="image">
            <Price cents={game.price} />
            <Featured featured={game.featured}/>
            <img src={game.thumbnail} alt="Game Cover"/>
        </div>
        <div className="content">
            <a href="#" className="header">{game.name}</a>
            <div className="meta">
                <i className="icon users" />{game.players} &nbsp;
                <i className="icon wait" />{game.duration} min.
            </div>
        </div>
    </div>
);

GameCard.propTypes = {
    game: PropTypes.shape({
        name: PropTypes.string.isRequired,
        thumbnail: PropTypes.string.isRequired,
        players: PropTypes.string.isRequired,
        price: PropTypes.number.isRequired,
        duration: PropTypes.number.isRequired,
        featured: PropTypes.bool.isRequired
    }).isRequired
};

export default GameCard;