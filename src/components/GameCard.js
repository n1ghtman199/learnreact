import React from "react";
import Price from './Price';
import PropTypes from 'prop-types';

const GameCard = ({ game }) => (
    <div className="ui card">
        <div className="image">
            <Price cents={game.price} />
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
        name: PropTypes.string.isRequired,
        players: PropTypes.string.isRequired,
        price: PropTypes.number.isRequired,
        duration: PropTypes.number.isRequired
    }).isRequired
};

export default GameCard;