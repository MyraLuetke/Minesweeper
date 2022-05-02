import React from 'react';
import './Tile.css';
import mine from './mine.jpg';

class Tile extends React.Component {

    
    constructor(props) {
        super(props);
        this.state = {
            imgSrc: null,
            imgAlt: ''
        };
    }


    showMine() {
        this.setState({
            imgSrc: mine,
            imgAlt: "mine"
        });
    }
    

    render() {
        return (
            <button 
                className="tile" 
                onClick={() => this.setState({imgSrc: mine, imgAlt: "mine"})}>
                    <img src={this.state.imgSrc} alt={this.state.imgAlt} />
            </button>
        );
    }
}

export default Tile;