import React from 'react'
import ReactDOM from 'react-dom'
import {Meteor} from 'meteor/meteor' 
import {Tracker} from 'meteor/tracker'
import {Players} from './../imports/api/players'


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
    players = Players.find().fetch()
    
    let x = (
      <div>
        {players.map((player) => (
          <div style={{display: "flex", alignItems: "center"}}>
            <h2> {player.name} &nbsp;- &nbsp; </h2>
            <h2>  {player.score}</h2>
            <button style={{"borderRadius":"50%", "width" : "30px", "height": "30px", marginLeft: "10px"}} onClick={() => {removePlayer(player)}}> X </button>
            <button style={{"borderRadius":"50%", "width" : "30px", "height": "30px", marginLeft: "10px"}} onClick={() => {decrement(player)}}> -1 </button>
            <button style={{"borderRadius":"50%", "width" : "30px", "height": "30px", marginLeft: "10px"}} onClick={() => {increment(player)}}> +1 </button>

          </div>  
        ))}

        <form onSubmit={addPlayer} >
            <h3> Add Player </h3>
            <p> Name: <input autoComplete="off" type="text" name="playername"/> </p>

            <button type="submit"> Submit </button>
        </form>
      </div>
    )

    ReactDOM.render(x,document.getElementById("app"))
  })
  let name = "reeeee"
  
  


})


