import React from "react"
import { BrowserRouter as Router, Route, Link } from "react-router-dom"

import "./Navigator.css"

export default function Navigator() {
  return (
    <>
      <Link to="/home" className="btn-home">
        홈으로 가기
      </Link>
      <ul className="navigator_ul">
        <Link to="/gugudan">
          <li>구구단</li>
        </Link>
        <Link to="/wordrelay">
          <li>끝말잇기</li>
        </Link>
        <Link to="/numberbaseball">
          <li>숫자야구</li>
        </Link>
        <Link to="/fastclick">
          <li>스피드 게임</li>
        </Link>
        <Link to="/rsp">
          <li>가위바위보</li>
        </Link>
      </ul>
    </>
  )
}
