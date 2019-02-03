import React, { Component } from 'react'
import PropTypes from 'prop-types'; 
import {Players} from '../../api/players'

export default class AddPlayer extends Component {
    addPlayer = (e) => {
        e.preventDefault();
        if(e.target.playername.value && this.props.playersLength < 10) {
          Players.insert({name: e.target.playername.value,score: this.props.defaultScore})
          e.target.playername.value = null;
        }
    }
        
  
  
render() {
    return (
      <div className="wrapper">
        <div className="addplayer btncontainer">
            <h3 className="addplayer-title"> Add a Player to the board </h3>
        <form className="addplayer-form" onSubmit={this.addPlayer.bind(this)}>   
           <input placeholder="Player Name..." className="addplayer-form-textbox" autoComplete="off" type="text" name="playername"/> 

            <button  className="addplayer-form-button" type="submit"> Add Player </button>
        </form>
        </div>
      </div>
    )
  }
}

AddPlayer.propTypes = {
    defaultScore: PropTypes.number
}

AddPlayer.defaultProps = {
    defaultScore: 0
}