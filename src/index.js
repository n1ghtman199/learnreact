import React from 'react';
import { render } from 'react-dom';
import GameCard from "./components/GameCard";

import 'semantic-ui-css/semantic.min.css';

const games = [
{
    name: "Quadropolis",
    thumbnail: "https://cf.geekdo-images.com/BMUcxCZM_AikQ7uXeuDg43RZIWo=/fit-in/246x300/pic2840020.jpg",
    price: 32.99,
    players: '2-4',
    duration: 60
},
{
    name: "Quadropolis 2",
    thumbnail: "https://cf.geekdo-images.com/BMUcxCZM_AikQ7uXeuDg43RZIWo=/fit-in/246x300/pic2840020.jpg",
    price: 32.99,
    players: '2-4',
    duration: 60
},
{
    name: "Quadropolis 3",
    thumbnail: "https://cf.geekdo-images.com/BMUcxCZM_AikQ7uXeuDg43RZIWo=/fit-in/246x300/pic2840020.jpg",
    price: 32.99,
    players: '2-4',
    duration: 60
},
{
    name: "Quadropolis 4",
    thumbnail: "https://cf.geekdo-images.com/BMUcxCZM_AikQ7uXeuDg43RZIWo=/fit-in/246x300/pic2840020.jpg",
    price: 32.99,
    players: '2-4',
    duration: 60
},
];

render(<GameCard game={games[1]}/>, document.getElementById('root'));