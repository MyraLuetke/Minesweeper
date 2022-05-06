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
            value: '',
        };
    }


    tileClick = () => {
        if (this.props.value < 0) {
            this.setState({imgSrc: mine, imgAlt: "mine"});
        }
        else {
            this.setState({value: this.props.value})
        }
    }
    
    render() {
        return (
            <button 
                className="tile" 
                onClick={this.tileClick}>
                    <img src={this.state.imgSrc} alt={this.state.imgAlt} />
                    {this.state.value}
            </button>
        );
    }
}

export default Tile;