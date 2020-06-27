import React from 'react'
import './App.css'

const Square = ({value , onClick}) => (
  <button className={'box bg-light border border-dark'} style={value ==='X' ? {color :'red'} : {color : 'blue'}} onClick = {onClick} >
     {value}
 </button>
  )


export default Square