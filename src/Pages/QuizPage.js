import { useState, useEffect } from "react";
import { useLocation, useNavigate } from "react-router";
import dbMethods from "../utils/dbmethods";
import QuestionBox from "../Components/questionBox";

function Quiz() {
  const location = useLocation();
  const [questionArray, setQuestionArray] = useState([]);
  const [answer, setAnswer] = useState({});
  const [totalMarks, setTotalMarks] = useState(0);
  const [display, setDisplay] = useState(0);


  const navigate = useNavigate();

  useEffect(() => {
    const list = dbMethods.getQuizQuestionList({ objid: location.state.objid });
    list.then((data) => {
      setQuestionArray(data[0].questionlist);
      setTotalMarks(parseInt(data[0].marksystem))
    });
  }, []);

  const handleDisplay = ()=>{
    setDisplay(prev=>{
     return prev+1
    });
  }

  const handleChange = (e) => {
    const key = e.target.name;
    const value = e.target.value;
    setAnswer((prev) => {
      return { ...prev, [key]: value };
    });
  };
  
  const handleSubmit = (e)=>{
    e.preventDefault()
    let marks = 0;
    for (let i = 0; i < questionArray.length; i++) {
     if( answer['q'+i] === questionArray[i].answer){
      marks += totalMarks
     }
    }
    navigate("/result", {state: {marks: marks, totalMarks: totalMarks*questionArray.length}})
  }
  return (
    <div>
      {questionArray.length === 0 ? (
        <div>
          <p>
            Currently, this quiz contain no questions. Once the quetsions are
            added by the creator it will update
          </p>
        </div>
      ) : (
        <form action="">
          {questionArray.map((question, index) => {
            return (
              <QuestionBox
                questionData={question}
                key={index}
                keyprop={index}
                onchange={handleChange}
                length = {questionArray.length}
                onsubmit = {handleSubmit}
                display={handleDisplay}
                displayclass={(display === index)? "display": "hidden"}
              />
            );
          })}
        </form>
      )}
    </div>
  );
}

export default Quiz;
