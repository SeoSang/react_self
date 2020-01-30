import React from "react"
import { BrowserRouter, HashRouter, Route, Switch, Link } from "react-router-dom"
import Gugudan from "./src/routes/gugudan/Gugudan.jsx"
import Home from "./Home.jsx"
import Footer from "./src/components/Footer.jsx"
import Navigator from "./src/components/Navigator.jsx"
import WordRelay from "./src/routes/wordRelay/WordRelay.jsx"
import NumberBaseball from "./src/routes/numberBaseball/NumberBaseball.jsx"
import FastClick from "./src/routes/fastClick/FastClick.jsx"
import RSP from "./src/routes/rsp/RSP.jsx"
import Lotto from "./src/routes/lotto/Lotto_hook.jsx"
import TicTacToe from "./src/routes/tictactoe/TicTacToe.jsx"
import GameSelecting from "./src/components/GameSelecting.jsx"
import "./App.css"

const App = () => {
  return (
    <>
      <h1 className="main">상혁의 React 게임</h1>
      <BrowserRouter>
        <Navigator />
        <Switch>
          <Route path="/home" component={Home} />
          <Route path="/game/:name" component={GameSelecting} />
        </Switch>
      </BrowserRouter>
      <Footer />
    </>
  )
}

export default App
