import React from 'react';
import GamesList from './GamesList';

const games = [
    {
        _id: 1,
        name: "Quadropolis",
        thumbnail: "https://cf.geekdo-images.com/BMUcxCZM_AikQ7uXeuDg43RZIWo=/fit-in/246x300/pic2840020.jpg",
        price: 1629,
        players: '2-4',
        duration: 60
    },
    {
        _id: 2,
        name: "Quadropolis 2",
        thumbnail: "https://cf.geekdo-images.com/BMUcxCZM_AikQ7uXeuDg43RZIWo=/fit-in/246x300/pic2840020.jpg",
        price: 3299,
        players: '2-4',
        duration: 60
    },
    {
        _id: 3,
        name: "Quadropolis 3",
        thumbnail: "https://cf.geekdo-images.com/BMUcxCZM_AikQ7uXeuDg43RZIWo=/fit-in/246x300/pic2840020.jpg",
        price: 4500,
        players: '2-4',
        duration: 60
    },
    {
        _id: 4,
        name: "Quadropolis 4",
        thumbnail: "https://cf.geekdo-images.com/BMUcxCZM_AikQ7uXeuDg43RZIWo=/fit-in/246x300/pic2840020.jpg",
        price: 5770,
        players: '2-4',
        duration: 60
    },
];

class App extends React.Component {
    state = {
        games: []
    };

    componentDidMount() {
        this.setState({ games: games });
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