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
                className= {this.props.revealed[this.props.x][this.props.y] ? "revealed tile" : "tile"}
                    onClick={() => this.props.handleReveal(this.props.x,this.props.y)}
                    onContextMenu={this.handleFlag}>
                        <img src={this.props.revealed[this.props.x][this.props.y] && this.props.value === -1 ? mine : (this.state.flagged ? flag : '')} 
                        alt={this.props.revealed[this.props.x][this.props.y] && this.props.value === -1 ? 'mine' : (this.state.flagged ? 'flag' : '')} />
                        {this.props.revealed[this.props.x][this.props.y] && this.props.value > 0 ? this.props.value : ''}
            </button>
        );
    }
}

export default Tile;