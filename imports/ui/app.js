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
        <TitleBar title="Scoreboard" subtitle="A simple implementation of WebSockets developed by Alex Chomiak"/>
        <div className="wrapper"> <div onClick={this.clearPlayers} className="widebutton"><button className="button"> Clear Players </button> </div> </div>
        <PlayerList players={this.props.players}/>
        <AddPlayer playersLength={this.props.players.length}/>
      </div>
    )
  }
}
