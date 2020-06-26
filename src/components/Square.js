import React from 'react'
import './App.css'

const Square = ({value , onClick}) => (
  <button className = {'box bg-light border border-dark'} onClick = {onClick} >
     {value}
 </button>
  )


export default Square