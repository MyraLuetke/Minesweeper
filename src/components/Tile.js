import React from 'react';
import './Tile.css';
import mine from './mine.jpg';
import flag from './flag.png';



class Tile extends React.Component {

    
    constructor(props) {
        super(props);
        this.state = {
            flagged : false
        };
    }

    handleFlag = (e) => {
        e.preventDefault();
        if (this.props.revealed[this.props.x][this.props.y] === false) {
            this.setState({flagged: !this.state.flagged});
        }
    }
    
    
    render() {
        return (
            <button
                disabled= {this.props.end_game && !this.props.revealed[this.props.x][this.props.y]}
                className= {!this.state.flagged && this.props.revealed[this.props.x][this.props.y] ? "revealed tile" : "tile"}
                    onClick={(e) => {this.state.flagged ? e.preventDefault() : this.props.handleReveal(this.props.x,this.props.y)}}
                    onContextMenu={(e) => {!this.props.end_game ? this.handleFlag(e) : e.preventDefault()}}>
                        <img src={this.state.flagged ? flag : (this.props.revealed[this.props.x][this.props.y] && this.props.value === -1 ? mine : '')} 
                        alt={this.state.flagged ? 'flag' : (this.props.revealed[this.props.x][this.props.y] && this.props.value === -1 ? 'mine' : '')} />
                        {this.props.revealed[this.props.x][this.props.y] && this.props.value > 0 ? this.props.value : ''}
            </button>
        );
    }
}

export default Tile;