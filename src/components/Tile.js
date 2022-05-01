import React from 'react';
import './Tile.css';
import mine from './mine.jpg';

class Tile extends React.Component {
    render() {
        return (
            <button className='tile'><img src={mine} alt='mine'/></button>
        );
    }
}

export default Tile;