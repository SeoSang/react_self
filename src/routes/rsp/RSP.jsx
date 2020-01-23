import React from "react"
import "./RSP.css"

// constructor -> render -> ref -> DidMount
// (setState / Props 바뀜) -> shouldComponentUpdate render -> componentDidUpdate
// 부모가 나를 없앰 => componentWillUnmount -> 소멸

const rspCoords = {
  r: "0",
  s: "-142px",
  p: "-284px"
}

const scoreObj = {
  r: 1,
  s: 0,
  p: -1
}

const comChoice = img => {
  return Object.entries(rspCoords).find(arr => {
    return arr[1] === img
  })[0]
}

class RSP extends React.Component {
  state = {
    score: 0,
    imgCoord: rspCoords.r,
    result: ""
  }

  intervalID = 0
  timeoutID
  prev_intervalID

  // 첫 렌더 수행 후 (주로 비동기요청 실행)
  componentDidMount() {
    this.intervalID = setInterval(this.changeRSC, 100)
  }

  // 컴포넌트 리렌더링 된 후  (props가 바뀌거나 setstate 된 후)
  componentDidUpdate() {}

  // 컴포넌트 제거되기 직전 (비동기 요청 정리)
  componentWillUnmount() {}

  changeRSC = () => {
    const { imgCoord } = this.state
    if (imgCoord === rspCoords.r) {
      this.setState({
        imgCoord: rspCoords.s
      })
    } else if (imgCoord === rspCoords.s) {
      this.setState({
        imgCoord: rspCoords.p
      })
    } else {
      this.setState({
        imgCoord: rspCoords.r
      })
    }
  }

  onClikBtn = choice => () => {
    if (this.intervalID == this.prev_intervalID) return
    this.prev_intervalID = this.intervalID
    console.log("intervalID = ", this.intervalID)
    console.log("prev_intervalID = ", this.prev_intervalID)
    const { imgCoord } = this.state
    clearTimeout(this.timeoutID)
    clearInterval(this.intervalID)
    const myScore = scoreObj[choice]
    const comScore = scoreObj[comChoice(imgCoord)]
    const diff = myScore - comScore
    if (diff === 0) {
      this.setState({ result: "비겼습니다." })
    } else if (diff === 1 || diff === -2) {
      this.setState({ result: "이겼습니다." })
      this.setState(prev => {
        return {
          score: prev.score + 1
        }
      })
    } else {
      this.setState({ result: "졌습니다." })
      this.setState(prev => {
        return {
          score: prev.score - 1
        }
      })
    }
    this.timeoutID = setTimeout(() => {
      this.intervalID = setInterval(this.changeRSC, 100)
    }, 2000)
  }

  render() {
    const { result, score, imgCoord } = this.state
    return (
      <>
        <div
          id="rsc-computer"
          style={{ background: `url(https://en.pimg.jp/023/182/267/1/23182267.jpg) ${imgCoord} 0` }}
        ></div>
        <div id="rsc-me">
          <button className="rsc__btn" onClick={this.onClikBtn("r")}>
            바위
          </button>
          <button className="rsc__btn" onClick={this.onClikBtn("s")}>
            가위
          </button>
          <button className="rsc__btn" onClick={this.onClikBtn("p")}>
            보자기
          </button>
        </div>
        <div id="rsc-result">{result}</div>
        <div id="rsc-score">
          <label>내 점수는 </label>
          <span>{score}점</span>
        </div>
      </>
    )
  }
}

export default RSP
