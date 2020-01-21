import React from "react"
import { BrowserRouter as Router, Route, Link } from "react-router-dom"

import "./Navigator.css"

export default function Navigator() {
  return (
    <>
      <Link to="/home" className="btn-home">
        Home
      </Link>
      <ul className="navigator_ul">
        <Link to="/gugudan">
          <li>Gugudan</li>
        </Link>
        <Link to="/wordrelay">
          <li>Word Relay</li>
        </Link>
        <Link to="/numberbaseball">
          <li>Number Baseball</li>
        </Link>
        <Link to="/fastclick">
          <li>Fast Click</li>
        </Link>
      </ul>
    </>
  )
}
