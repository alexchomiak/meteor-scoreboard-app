import React from 'react'
import ReactDOM from 'react-dom'
import {Meteor} from 'meteor/meteor' 
import {Tracker} from 'meteor/tracker'
import {Players, calculatePlayerPositions} from './../imports/api/players'
import App from './../imports/ui/app'

let players = []


let addPlayer = (e) => {
  e.preventDefault();
  console.log('submitted')
  if(e.target.playername.value) {
    Players.insert({name: e.target.playername.value,score: 0})
    e.target.playername.value = null;
  }
}

let removePlayer = (player) => {
  Players.remove({_id: player._id})
}

let increment = (player) => {
  Players.update({_id: player._id}, {$inc: {score: 1}})
}

let decrement = (player) => {
  Players.update({_id: player._id}, {$inc: {score: -1}})
}



Meteor.startup(() => {
  Tracker.autorun(() => {

    players = Players.find({},{sort: {score:-1}}).fetch()
    let positionedPlayers = calculatePlayerPositions(players)  
    
    let clear = () => {
  players.forEach((player) => {
    Players.remove({_id: player.id})
  })
 
}

    ReactDOM.render(<App players={positionedPlayers}/>,document.getElementById("app"))
  })
  let name = "reeeee"
  
  


})


