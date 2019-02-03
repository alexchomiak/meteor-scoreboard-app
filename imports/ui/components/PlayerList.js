import React, { Component } from 'react'
import Player from './Player'
import PropTypes from 'prop-types';
import FlipMove from 'react-flip-move'
export default class PlayerList extends Component {
renderPlayers = () => {
    console.log('oof')
    return this.props.players.map( (player) => ( <Player key={player._id} player={player} />))
}  
  render() {
    return (
      <div className="wrapper">
      <div className="playerlist">
            {this.props.players.length > 0 ? <h2 className="playerlist-title"> Current Players </h2> : <h2 className="playerlist-noplayers"> There are currently no players! Add one to track their score!</h2> }
            <div>
            <FlipMove

                    staggerDelayBy={50} 
                    maintainContainerHeight={true}
                    > 
                        {this.renderPlayers()}
                    </FlipMove>
            </div>
        </div>
      </div>
    )
  }
}

PlayerList.propTypes = {
    players: PropTypes.arrayOf(PropTypes.object).isRequired
}