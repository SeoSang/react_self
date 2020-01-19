import React from "react"
import { BrowserRouter, HashRouter, Route, Switch, Link } from "react-router-dom"
import Gugudan from "./src/routes/gugudan/Gugudan.jsx"
import Home from "./Home.jsx"
import Footer from "./src/components/Footer.jsx"
import Navigator from "./src/components/Navigator.jsx"
import WordRelay from "./src/routes/wordRelay/WordRelay.jsx"
import NumberBaseball from "./src/routes/numberBaseball/NumberBaseball.jsx"
import "./App.css"

const App = () => {
  return (
    <>
      <h1 className="main">상혁의 React 게임</h1>
      <BrowserRouter>
        <Switch>
          <Route path="/home" component={Home} />
          <Route path="/gugudan" component={Gugudan} />
          <Route path="/wordrelay" component={WordRelay} />
          <Route path="/numberbaseball" component={NumberBaseball} />
        </Switch>
        <Navigator />
      </BrowserRouter>
      <Footer />
    </>
  )
}

export default App
