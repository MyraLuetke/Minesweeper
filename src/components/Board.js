import React from 'react';
import Tile from './Tile';

class Board extends React.Component {
    
    render() {
        return (
            <div>
                <div>
                    <Tile />
                    <Tile />
                    <Tile />
                </div>
                <div>
                    <Tile />
                    <Tile />
                    <Tile />
                </div>
                <div>
                    <Tile />
                    <Tile />
                    <Tile />
                </div>
            </div>
        );
    }
}

export default Board;