import React from 'react'
import TitleBar from './TitleBar'
import {Players} from './../../api/players'
import PropTypes from 'prop-types';
export default class Player extends React.Component{
   
    removePlayer = () => {
        Players.remove({_id: this.props.player._id})
    }
    
    increment = () => {
        Players.update({_id: this.props.player._id}, {$inc: {score: 1}})
    }
    
    decrement = () => {
        Players.update({_id: this.props.player._id}, {$inc: {score: -1}})
    }
    render() {

        let itemClassName = `player player--position-${this.props.player.rank}`
    
        return (
            <div className={itemClassName}>
                <div className="player-info">
                    <h3 className="player-name"> {this.props.player.name}</h3>
                    <p className="player-stats"> 
                    {this.props.player.position} &nbsp;
                    {this.props.player.score} {(this.props.player.score != -1 && this.props.player.score != 1) ? "points" : "point"}
                    </p>
                </div>
                <div className="player-buttons">
                    <button  className="player-button" onClick={this.removePlayer}> X </button>
                    <button  className="player-button" onClick={this.decrement}> -1 </button>
                    <button  className="player-button" onClick={this.increment}> +1 </button>
                </div>
        </div>  
        )
    }
}


Players.PropTypes = {
    player: PropTypes.object.isRequired
}
