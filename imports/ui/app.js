import React, { Component } from 'react'

//component references
import TitleBar from './components/TitleBar'
import PlayerList from './components/PlayerList'
import AddPlayer from './components/AddPlayer'
import {Players} from '../api/players'
import {Tracker} from 'meteor/tracker'

export default class App extends Component {
    clearPlayers = () => {
        this.props.players.forEach((player) => {
          Players.remove({_id: player._id})
        })
       
    }
render() {
    return (
       <div>
        <TitleBar title="Scoreboard" subtitle="A simple implementation of a scoreboard application using web sockets."/>
        <div className="wrapper"> <div  className="widebutton"><button disabled={ !this.props.players.length > 0 }onClick={this.clearPlayers} className="button"> {(this.props.players.length > 0) ? "Clear Players" : "..."} </button> </div> </div>
        <PlayerList players={this.props.players}/>
        <AddPlayer playersLength={this.props.players.length}/>
      </div>
    )
  }
}
