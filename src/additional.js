import React from 'react'
import ReactDOM from 'react-dom'
import Test from './Test'

// Additional chunk uses the same css, but global.css: 
// import './css/global.css'

ReactDOM.render(
  <Test />, 
  document.getElementById('content')
 )