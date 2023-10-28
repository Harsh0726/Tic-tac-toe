import React from 'react';
import { useState } from 'react';
import Winner from './Winner';
function Square({ value, onSquareClick }) {

  // const [value, setValue] = useState(null);

  // function handleClicked(){
  //   setValue('X');
  //   console.log('clicked ', {value});
  // }

  return (
    <button
      className='square'
      onClick={onSquareClick}
    >
      {value}
    </button>
  );
}

//Board is parent component of Sqare(child component)
function Board() {
  const [xIsNext, setXIsNext] = useState(true);
  // set array named squares - [null, null, null, null, null, null, null, null]
  // after user fill the bord array shoud look like  ['0', null, 'X', 'X','X','0',null,null]
  const [squares, setSquares] = useState(Array(9).fill(null));

  // update the sqares array holding board's state
  function handleClick(i) {
    if (squares[i] || Winner(squares)) {
      return;
    }

    // slice() to crate a new copy of the squares array after every move
    // and. treated is as immutable
    const nextSquares = squares.slice();

    if (xIsNext) {
      nextSquares[i] = "X";
    } else {
      nextSquares[i] = "O";
    }
    // nextSquares[i] = "X";
    setSquares(nextSquares);
    setXIsNext(!xIsNext);
  }

  // winner status
  const winner = Winner(squares);
  let status;
  if (winner) {
    status = "Game over! Winner is " + winner;
  } else {
    status = "Turn of player: " + (xIsNext ? "X" : "O");
  }

  return (
    <>
      <div className='status'><h3>{status}</h3></div>
      <div className='board'>
        <div className='board-row'>
          <Square value={squares[0]} onSquareClick={() => handleClick(0)} />
          <Square value={squares[1]} onSquareClick={() => handleClick(1)} />
          <Square value={squares[2]} onSquareClick={() => handleClick(2)} />
        </div>
        <div className='board-row'>
          <Square value={squares[3]} onSquareClick={() => handleClick(3)} />
          <Square value={squares[4]} onSquareClick={() => handleClick(4)} />
          <Square value={squares[5]} onSquareClick={() => handleClick(5)} />
        </div>
        <div className='board-row'>
          <Square value={squares[6]} onSquareClick={() => handleClick(6)} />
          <Square value={squares[7]} onSquareClick={() => handleClick(7)} />
          <Square value={squares[8]} onSquareClick={() => handleClick(8)} />
        </div>
      </div>
    </>
  )
}

export default Board;