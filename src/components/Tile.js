import React from 'react';
import './Tile.css';
import mine from './mine.jpg';
import flag from './flag.png';


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


    tileClick = (e) => {
        //left click: unveil tile
        if (e.type === "click") {
            if (this.props.value < 0) {
                this.setState({value: '', imgSrc: mine, imgAlt: "mine"});
            }
            else {
                this.setState({value: this.props.value})
            }
        }
        //right click: mark or unmark tile
        else if (e.type === "contextmenu") {
            e.preventDefault();
            if (this.state.value === '' && this.state.imgAlt !== "mine") {
                if (this.state.imgAlt !== '') {
                    this.setState({imgSrc: null, imgAlt: ''});
                }
                else {
                    this.setState({imgSrc: flag, imgAlt: "flag"});
                }
            }
        }
    }
    
    render() {
        return (
            <button 
                className="tile" 
                onClick={this.tileClick} onContextMenu={this.tileClick}>
                    <img src={this.state.imgSrc} alt={this.state.imgAlt} />
                    {this.state.value}
            </button>
        );
    }
}

export default Tile;