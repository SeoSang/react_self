import React from "react"
import { BrowserRouter as Router, Route, Link } from "react-router-dom"

import "./Navigator.css"

const gameArr = [
  { title: "구구단", link: "/gugudan" },
  { title: "끝말잇기", link: "/wordrelay" },
  { title: "숫자야구", link: "/numberbaseball" },
  { title: "스피드 게임", link: "/fastclick" },
  { title: "가위바위보", link: "/rsp" },
  { title: "로또추첨기", link: "/lotto" },
  { title: "틱택토", link: "/tictactoe" },
  { title: "지뢰찾기", link: "/findz" }
]

export default function Navigator() {
  return (
    <>
      <Link to="/home" className="btn-home">
        홈으로 가기
      </Link>
      <ul className="navigator_ul">
        {gameArr.map(game => {
          return (
            <Link to={game.link} key={game.title}>
              <li>{game.title}</li>
            </Link>
          )
        })}
      </ul>
    </>
  )
}
