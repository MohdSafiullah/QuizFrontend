import { useState, useEffect } from "react";
import dbMethods from "../utils/dbmethods";

function Questionlist(objid){
    const [questionArray, setQuestionArray] = useState([]);

useEffect(()=>{
  const list =  dbMethods.getQuizQuestionList(objid);
  list.then((data)=>{
    setQuestionArray(data[0].questionlist)
  })
}, [])


    return (
        <div id="questionList">
        <h1>Question List</h1>
        {(questionArray.length === 0)? <div>
           <h3>Add Questions to see them here.</h3>
           <h3>Currently, this quiz does not contain any question</h3>
        </div>:
        <div className="d-flex flex-column">
            {
              questionArray.map((question, index)=>{
                return <div key={index}>
                   <p className="quetion">{question.question}</p>
                   <p className="option">{question.optionA}</p>
                   <p className="option">{question.optionB}</p>
                   <p className="option">{question.optionC}</p>
                   <p className="option">{question.optionD}</p>
                   <p className="answer">{question.answer}</p>
                </div>
              })
            }
       </div>
        }
           
        </div>
    );
}

export default Questionlist;
