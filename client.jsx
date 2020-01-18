// const React = require("react")
// const ReactDOM = require("react-dom")
// const Gugudan = require("./Gugudan.jsx")
// const { hot } = require("react-hot-loader/root")
import Gugudan from "./Gugudan.jsx"
import React from "react"
import ReactDOM from "react-dom"
import { hot } from "react-hot-loader/root"
const Hot = hot(Gugudan)

console.log(Gugudan)

ReactDOM.render(<Hot />, document.getElementById("root"))
