import React from 'react'
import './style.css';
import Board from './board.js';
import Game from './game.js';


class GameTest extends React.Component {
  render() {
    return (
      <div className="tictactoe">
        <h1>TicTacToe {this.props.name}</h1>              	  
        <Game/>
      </div>
    );
  }
}

export default GameTest
