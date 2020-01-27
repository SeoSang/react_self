import React, { useCallback } from "react"
import { CLICK_CELL } from "./TicTacToe.jsx"

const Td = ({ tableData, cellIndex, rowIndex, cellData, result, dispatch }) => {
  const onClickTd = useCallback(() => {
    console.log({ result })
    if (cellData || result) return
    dispatch({ type: CLICK_CELL, cell: cellIndex, row: rowIndex })
  }, [cellData, result])
  return <td onClick={onClickTd}>{cellData}</td>
}

export default Td
