import React from 'react';
import GameCard from './GameCard';
import PropTypes from 'prop-types';
import Message from "./Message";

const GamesList = ({ games }) => (
    <div className="ui four cards">
    {
        games.length === 0 ? (
            <Message
                header={"There are no game in your store!"}
                content={"You should add some, don't ypu think?"}
                type={"error"}
            />
        ) : (
            games.map(game => <GameCard game={game} key={game._id}/>)
        )
    }
    </div>
);

GamesList.propTypes = {
    games: PropTypes.arrayOf(PropTypes.object).isRequired
};

GamesList.defaultProps = {
    games: []
}

export default GamesList;