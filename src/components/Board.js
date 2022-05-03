import React from 'react';
import Tile from './Tile';
import game_logic from '../GameLogic';

class Board extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            height: 8,
            width: 8,
            num_mines: 10
        }

        game_logic.initalizeGame(8,8,10);
        game_logic.createGame();
    }
    
    render() {
        var all_tiles = [];

        for (var i = 0; i < this.state.height; i++) {
            var row_tiles = [];
            for (var j = 0; j < this.state.width; j++) {
                row_tiles.push(<Tile key={'Tile ' + (i*this.state.height + j)} value={game_logic.tile_values[i][j]} x={i} y={j} />)
            }
            all_tiles[i] = row_tiles;
        }

        return (
            <div>
                {all_tiles.map((value, index) => {
                    return <div key={'Row ' + index}>{value}</div>
                })}
            </div>
        )
    }
}

export default Board;