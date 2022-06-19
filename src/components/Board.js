import React from 'react';
import Tile from './Tile';
import game_logic from '../GameLogic';

class Board extends React.Component {

    constructor(props) {
        super(props);
        
        game_logic.initalizeGame(8,8,10);

        this.state = {
            height: 8,
            width: 8,
            num_mines: 10,
            revealed: Array.from(
                {length: 8},
                () => new Array(8).fill(false)
            ),
            in_game: false,
            end_game: false
        }
    }

    setStateSync = (state) => {
        return new Promise(resolve => {
            this.setState(state, resolve);
        });
    }

    handleReveal = async (x, y, visited = new Set()) => {
        const tileKey = x + '_' + y;

        if (this.state.in_game === false) {
            game_logic.createGame(x,y);
            this.state.in_game = true;
        }

        // if tile is out of bounds, or if visited before, don't do anything
        if (x < 0 || x >= this.state.height || y < 0 || y >= this.state.width || visited.has(tileKey)) return;

        // if tile is mine, reveal all mines
        const isMine = game_logic.tile_values[x][y] === -1;
        if (isMine) {
            this.setState({
                revealed: this.state.revealed.map((row, i) => row.map(
                    (tileState, j) => game_logic.tile_values[i][j] === -1 ? true : tileState
                )),
                end_game: true
            });
            return;
        }
 
        // else reveal tile
        await this.setStateSync({
            revealed: this.state.revealed.map(
                (row, i) => i !== x
                    ? row
                    : row.map(
                        (tileState, j) => j === y ? true : tileState
                    )
            )
        });

        //check if game is won
        const isWon = this.state.revealed.reduce((prev_row, row, i) => prev_row && row.reduce((prev_val, val, j) => game_logic.tile_values[i][j] === -1 ? prev_val && true : prev_val && val, true), true);
        if (isWon) {
            this.setState({end_game: true});
            return;
        }

        // if tile has a value of 0, reveal neighbouring tiles
        const isZero = game_logic.tile_values[x][y] === 0;
        visited.add(tileKey);
    
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
                row_tiles.push(<Tile end_game = {this.state.end_game} revealed = {this.state.revealed} handleReveal = {this.handleReveal} key={i + '_' + j} value={game_logic.tile_values[i][j]} x={i} y={j} />)
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