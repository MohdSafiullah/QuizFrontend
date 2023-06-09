import { useState } from "react";
import dbMethods from "../utils/dbmethods";
import { Link, useNavigate } from "react-router-dom";

function Editor({objid}) {
  const navigator = useNavigate();
  const [question, setQuestion] = useState({
    question: "",
    optionA: "",
    optionB: "",
    optionC: "",
    optionD: "",
    answer: "",
  });

  const handleChange = (event) => {
     const key = event.target.name;
     const value = event.target.value;
     setQuestion((prev)=>{
        return {...prev, [key]: value}
     })
  };

  const handleClick = (e)=>{
     e.preventDefault();
     const data = {
      id: objid,
      questionObj: {...question}
     }
      dbMethods.addQuestion(data);
     navigator("/editpage", {state: {id: objid}})
     setQuestion({
      question: "",
      optionA: "",
      optionB: "",
      optionC: "",
      optionD: "",
      answer: "",
    })
  }

  return (
    <div id="editor">
      <h1>Editor</h1>
      <div>
        <form>
          <div className="">
            <input
              type="text"
              className="form-control"
              placeholder="Enter a Question"
              value={question.question}
              name="question"
              onChange={handleChange}
              autoComplete="off"
            />
          </div>
          <div className="col-md-6">
            <input
              type="text"
              className="form-control"
              placeholder="Option A"
              value={question.optionA}
              name="optionA"
              onChange={handleChange}
              autoComplete="off"
            />
          </div>
          <div className="col-md-6">
            <input
              type="text"
              className="form-control"
              placeholder="Option B"
              name="optionB"
              value={question.optionB}
              onChange={handleChange}
              autoComplete="off"
            />
          </div>
          <div className="col-md-6">
            <input
              type="text"
              className="form-control"
              placeholder="Option C"
              name="optionC"
              value={question.optionC}
              onChange={handleChange}
              autoComplete="off"
            />
          </div>
          <div className="col-md-6">
            <input
              type="text"
              className="form-control"
              placeholder="Option D"
              name="optionD"
              value={question.optionD}
              onChange={handleChange}
              autoComplete="off"
            />
          </div>
          <div className="col-12">
            <input
              type="text"
              className="form-control"
              placeholder="Answer Option"
              value={question.answer}
              name="answer"
              onChange={handleChange}
              autoComplete="off"
            />
          </div>
          <button className="btn btn-blue" onClick={handleClick}>Add</button>
          <Link to="/quizlist">
          <button className="btn btn-shadow btn-pink">Exit</button>
          </Link>
        </form>
      </div>
    </div>
  );
}

export default Editor;
