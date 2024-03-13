import React, { useRef, useState } from 'react'
import  './Quiz.css';
import { data } from "./assets/data"
const Quiz = () => {

  let [index, setindex] = useState(0);
  let [question,setquestion] = useState(data[index]);
  let [lock, setLock] = useState(false);
  let [score, setScore] = useState(0)
  let [result, setResult] = useState(false)

  let option1 = useRef(null);
  let option2 = useRef(null);
  let option3 = useRef(null);
  let option4 = useRef(null);
  // let option5 = useRef(null);


  let option_array = [option1, option2, option3, option4,];

 
  const checkAns =(e,answer) => {
     if(lock === false) {

     if(question.answer===answer){
      e.target.classList.add("correct");
      setLock(true);
      setScore(prev=>prev+1);
    }
    else{
      e.target.classList.add("wrong");
      setLock(true);
      option_array[question.answer-1].current.classList.add("correct")
    }
   }
  }

  
  
   const next = () => {
     if (lock===true) {
      if (index === data.length-1){
          setResult(true);
          return 0;
      }
      setindex(++index);
      setquestion(data[index]);
      setLock(false);
      option_array.map((option)=>{
        option.current.classList.remove("wrong");
        option.current.classList.remove("correct");
        return null;

      })
     }
   }

  const reset = () => {
    setindex(0);
    setquestion(data[0]);
    setScore(0);
    setLock(false);
    setResult(false);
  }

 return (
    <div className='container'>
<h1>Quiz App</h1>
<hr/>
{result? <></>:<>
 <h2>{index+1}. {question.question}</h2>
<ul>
    <li ref={option1}   onClick={(e)=>{checkAns(e,1)}}>{question.options1}</li>
    <li ref={option2}  onClick={(e)=>{checkAns(e,2)}}>{question.options2}</li>
    <li ref={option3}  onClick={(e)=>{checkAns(e,3)}}>{question.options3}</li>
    <li ref={option4}  onClick={(e)=>{checkAns(e,4)}}>{question.options4}</li>
    {/* <li ref={option5}   onClick={(e)=>{checkAns(e,5)}}>{question.option5}</li> */}

   </ul>
   <button onClick={next}>Next</button>
   <div className='index'> {index+1 }of {data.length} question </div> </>}
   {result? <> 
   <h2>Your Scored {score} out of {data.length}</h2>
   <button onClick ={reset}>Reset</button>
   </> : <></> }

  </div>
  )
}

export default Quiz