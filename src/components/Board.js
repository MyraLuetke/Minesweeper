import React from 'react';
import Tile from './Tile';

class Board extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            height: 8,
            width: 8,
            num_mines: 10
        }
    }
    
    render() {

        var all_tiles = [];
        var count = 0;

        for (var i = 0; i < this.state.height; i++) {
            var row_tiles = [];
            for (var j = 0; j < this.state.width; j++) {
                row_tiles.push(<Tile id={'Tile ' + count++} />)
            }
            all_tiles[i] = row_tiles;
        }

        return (
            <div>
                {all_tiles.map((value) => {
                    return <div>{value}</div>
                })}
            </div>
        )
    }
}

export default Board;