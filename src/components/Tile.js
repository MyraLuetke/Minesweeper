import React from 'react';
import './Tile.css';
import mine from './mine.jpg';
//import flag from './flag.png';



class Tile extends React.Component {

    
    constructor(props) {
        super(props);
        this.state = {
            imgSrc: null,
            imgAlt: '',
            value: '',
        };
    }

    /*
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
    
    
    onContextMenu={this.tileClick}>
    */
    
    render() {
        return (
            <button
                className="tile"
                    onClick={() => this.props.handleReveal(this.props.x,this.props.y)}>
                    <img src={this.props.revealed[this.props.x][this.props.y] === true && this.props.value === -1 ? mine : ''} alt={this.state.imgAlt} />
                    {this.props.revealed[this.props.x][this.props.y] === true ? this.props.value : ''}
            </button>
        );
    }
}

export default Tile;