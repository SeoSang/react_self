import React from "react"
import ReactDOM from "react-dom"
import App from "./App.jsx"
import Gugudan from "./src/routes/gugudan/Gugudan.jsx"
import { hot } from "react-hot-loader/root"
const Hot = hot(App)

ReactDOM.render(<Hot />, document.getElementById("root"))
