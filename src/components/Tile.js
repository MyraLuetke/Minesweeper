import React from 'react';
import './Tile.css';
import mine from './mine.jpg';


//NOTE: use {this.props.x} to get x value

class Tile extends React.Component {

    
    constructor(props) {
        super(props);
        this.state = {
            imgSrc: null,
            imgAlt: '',
        };
    }
    
    render() {
        return (
            <button 
                className="tile" 
                onClick={() => this.setState({imgSrc: mine, imgAlt: "mine"})}>
                    <img src={this.state.imgSrc} alt={this.state.imgAlt} />
                {this.props.value}
            </button>
        );
    }
}

export default Tile;