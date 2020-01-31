import React, { Component } from "react"
import WordRelay from "../routes/wordRelay/WordRelay.jsx"
import NumberBaseball from "../routes/numberBaseball/NumberBaseball.jsx"
import FastClick from "../routes/fastClick/FastClick.jsx"
import RSP from "../routes/rsp/RSP.jsx"
import Lotto from "../routes/lotto/Lotto_hook.jsx"
import TicTacToe from "../routes/tictactoe/TicTacToe.jsx"
import Gugudan from "../routes/gugudan/Gugudan.jsx"
import Home from "../../Home.jsx"

class GameSelecting extends Component {
  render() {
    console.log(this.props)
    switch (this.props.match.params.name) {
      case "numberbaseball":
        return <NumberBaseball />

      case "fastclick":
        return <FastClick />
      case "rsp":
        return <RSP />
      case "lotto":
        return <Lotto />
      case "tictactoe":
        return <TicTacToe />
      case "gugudan":
        return <Gugudan />
      case "wordrelay":
        return <WordRelay />
      default:
        return <Home />
    }
  }
}

export default GameSelecting
