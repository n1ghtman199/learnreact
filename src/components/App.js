import React from 'react';
import _orderBy from 'lodash/orderBy';
import GamesList from './GamesList';

const games = [
    {
        _id: 1,
        featured: true,
        name: "Quadropolis",
        thumbnail: "https://cf.geekdo-images.com/BMUcxCZM_AikQ7uXeuDg43RZIWo=/fit-in/246x300/pic2840020.jpg",
        price: 6629,
        players: '2-4',
        duration: 60
    },
    {
        _id: 2,
        featured: false,
        name: "Quadropolis 2",
        thumbnail: "https://cf.geekdo-images.com/BMUcxCZM_AikQ7uXeuDg43RZIWo=/fit-in/246x300/pic2840020.jpg",
        price: 4299,
        players: '2-4',
        duration: 60
    },
    {
        _id: 3,
        featured: false,
        name: "Quadropolis 3",
        thumbnail: "https://cf.geekdo-images.com/BMUcxCZM_AikQ7uXeuDg43RZIWo=/fit-in/246x300/pic2840020.jpg",
        price: 2500,
        players: '2-4',
        duration: 60
    },
    {
        _id: 4,
        featured: false,
        name: "Quadropolis 4",
        thumbnail: "https://cf.geekdo-images.com/BMUcxCZM_AikQ7uXeuDg43RZIWo=/fit-in/246x300/pic2840020.jpg",
        price: 1770,
        players: '2-4',
        duration: 60
    },
];

class App extends React.Component {
    state = {
        games: []
    };

    componentDidMount() {
        this.setState({ games: _orderBy(games, ['featured', 'price'], ['desc', 'asc']) });
    }

    render() {
        return (
            <div className="ui container">
                <GamesList games={this.state.games}/>
            </div>
        )
    }
}

export default App;