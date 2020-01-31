import React from "react"
import { BrowserRouter, Route, Switch } from "react-router-dom"
import Home from "./Home.jsx"
import Footer from "./src/components/Footer.jsx"
import Navigator from "./src/components/Navigator.jsx"
import GameSelecting from "./src/components/GameSelecting.jsx"
import "./App.css"

const App = () => {
  return (
    <>
      <h1 className="main">React를 활용한 간단한 게임모음</h1>
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
