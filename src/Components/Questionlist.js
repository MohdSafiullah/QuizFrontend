import { useState, useEffect } from "react";
import dbMethods from "../utils/dbmethods";
import { useNavigate } from "react-router";

function Questionlist({objid}){
  const navigator = useNavigate();
    const [questionArray, setQuestionArray] = useState([]);
    const [quizid, setquizid] = useState("");

useEffect(()=>{
  const list =  dbMethods.getQuizQuestionList({objid: objid});
  list.then((data)=>{
    setQuestionArray(data[0].questionlist)
    setquizid(data[0]._id)
  })
})
 
const onDelete = (questionid)=>{
   dbMethods.deleteQuestion({questionid, quizid});
   navigator("/editpage", {state: {id: quizid}})
}

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
                return <div className="box-shadow question" key={index}>
                   <h3 className="quetion">{`${index+1}. ${question.question}`}</h3>
                   <p className="option">A. {question.optionA}</p>
                   <p className="option">B. {question.optionB}</p>
                   <p className="option">C. {question.optionC}</p>
                   <p className="option">D. {question.optionD}</p>
                   <p className="answer">Answer: {question.answer}</p>
                   <button className="btn m-0 btn-shadow btn-danger" onClick={()=>{onDelete(question._id)}}>Delete</button>
                </div>
              })
            }
       </div>
        }
           
        </div>
    );
}

export default Questionlist;
