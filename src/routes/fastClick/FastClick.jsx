import React, { useState } from "react"

const RANDOM_TIME = 2000
const WAIT_TIME = 2000
const WAITING = {
  color: "#7d5fff",
  state: "wating",
  text: "클릭해서 시작하세요."
}
const READY = {
  color: "#3ae374",
  state: "ready",
  text: "노랑색이 되면 바로 클릭하세요!"
}
const TOO_FAST = {
  color: "#ff3838",
  state: "tooFast",
  text: "너무 빨리 누르셨어요!!"
}
const CLICKTIME = {
  color: "#fff200",
  state: "clickTime",
  text: "클릭하세요!"
}

let startTime = 0
let endTime = 0

let timeoutID = 0
function FastClick() {
  const [color, setColor] = useState(WAITING.color)
  const [text, setText] = useState(WAITING.text)
  const [resultTime, setResultTime] = useState(0)
  const [state, setState] = useState(WAITING.state)
  const randomTime = WAIT_TIME + Math.ceil(Math.random() * RANDOM_TIME)
  const styles = {
    background: color,
    display: "inline-block",
    width: "60%",
    height: "40%"
  }

  //   useEffect(() => {
  //     console.log(name)
  //   }, [name])

  const setAllState = STATE => {
    setColor(STATE.color)
    setText(STATE.text)
    setState(STATE.state)
  }

  const handelClickedScreen = e => {
    console.log({ state })
    if (state === WAITING.state) {
      setAllState(READY)
      timeoutID = window.setTimeout(() => {
        setAllState(CLICKTIME)
        startTime = new Date()
        console.log({ startTime })
      }, randomTime)
    }

    if (state === READY.state) {
      clearTimeout(timeoutID)
      setAllState(TOO_FAST)
      timeoutID = setTimeout(() => setAllState(WAITING), 3000)
    }
    if (state === CLICKTIME.state) {
      endTime = new Date()
      console.log({ endTime })
      setAllState(WAITING)
      setResultTime(endTime - startTime)
    }
    e.target.style.color = color
    e.target.children[0].textContent = text
    console.log(e.target.children[0].textContent)
  }
  //   setTimeout(colorChange, msTime)

  return (
    <>
      <div onClick={handelClickedScreen} style={styles}>
        <h2 style={{ color: "white" }}>{text}</h2>
      </div>
      {resultTime === 0 ? null : (
        <div>
          평균시간 : {resultTime}ms = {resultTime / 1000}초
        </div>
      )}
    </>
  )
}

export default FastClick
