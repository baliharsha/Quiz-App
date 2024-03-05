import React from 'react'
import  './Quiz.css'

function Quiz() {
  return (
    <div className='container'>
<h1>Quiz App</h1>
<hr/>
<h2>1. What is you country name</h2>
<ul>
    <li>india</li>
    <li>chennai</li>
    <li>bhutan</li>
   <li>nyc</li>
   </ul>
   <button>Next</button>
   <div className='index'>1 of 5 question </div>
  </div>
  )
}

export default Quiz