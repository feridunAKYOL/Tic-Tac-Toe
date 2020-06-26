import React from 'react'
import Square from './Square'
import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';



const Board = ({ squares, onClick }) => (
  <div className ={'square container'}>
    {squares.map((square, i) => (
      <Square key={i} value={square} onClick={() => onClick(i)} />
    ))}
  </div>
);

export default Board