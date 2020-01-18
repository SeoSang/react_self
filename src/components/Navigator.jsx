import React from "react"
import { BrowserRouter as Router, Route, Link } from "react-router-dom"

import "./Navigator.css"

export default function Navigator() {
  return (
    <ul className="navigator_ul">
      <li>
        <Link to="/home">Home</Link>
      </li>
      <li>
        <Link to="/gugudan">Gugudan</Link>
      </li>
    </ul>
  )
}
