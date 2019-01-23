import React from 'react';
import Game from '../Game/Game';
import './GamesContainer.css';

const GamesContainer = (props) => {
    const { games } = props
    return ( 
        <div className="GamesContainer-Container">
            {games.map(game => <Game game={game} />)}
        </div>                
    )
}

export default GamesContainer;