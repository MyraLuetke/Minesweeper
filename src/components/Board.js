import React from 'react';
import Tile from './Tile';
import game_logic from '../GameLogic';

class Board extends React.Component {

    constructor(props) {
        super(props);
        
        game_logic.initalizeGame(8,8,10);
        game_logic.createGame();

        this.state = {
            height: 8,
            width: 8,
            num_mines: 10,
            revealed: Array.from(
                {length: 8},
                () => new Array(8).fill(false)
            )
        }
    }

    setStateSync = (state) => {
        return new Promise(resolve => {
            this.setState(state, resolve);
        });
    }

    handleReveal = async (x, y, visited = new Set()) => {
        const tileKey = x + '_' + y;

        // if out of bounds, or if visited before, don't do anything
        if (x < 0 || x >= this.state.height || y < 0 || y >= this.state.width || visited.has(tileKey)) return;
        visited.add(tileKey);
        const isZero = game_logic.tile_values[x][y] === 0;
        await this.setStateSync({
            revealed: this.state.revealed.map(
                (row, i) => i !== x
                    ? row
                    : row.map(
                        (tileState, j) => j === y ? true : tileState
                    )
            )
        });
    
        if (isZero) {
            await this.handleReveal(x - 1, y, visited);
            await this.handleReveal(x - 1, y - 1, visited);
            await this.handleReveal(x - 1, y + 1, visited);
            await this.handleReveal(x + 1, y, visited);
            await this.handleReveal(x + 1, y - 1, visited);
            await this.handleReveal(x + 1, y + 1, visited);
            await this.handleReveal(x, y - 1, visited);
            await this.handleReveal(x, y + 1, visited);
        }
    }

    render() {
        var all_tiles = [];

        for (var i = 0; i < this.state.height; i++) {
            var row_tiles = [];
            for (var j = 0; j < this.state.width; j++) 
                row_tiles.push(<Tile revealed = {this.state.revealed} handleReveal = {this.handleReveal} key={i + '_' + j} value={game_logic.tile_values[i][j]} x={i} y={j} />)
            all_tiles[i] = row_tiles;
        }

        return (
            <div className='Minesweeper'>
                {all_tiles.map((value, index) => {
                    return <div key={'row_' + index}>{value}</div>
                })}
                
            </div>
        )
    }
}

export default Board;