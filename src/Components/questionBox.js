import { useState } from "react";
import "../styles/questionbox.css"

function QuestionBox({ questionData, keyprop, onchange, length , onsubmit, display, displayclass }) {


  return (
    <div className={`${displayclass} questionBox`}>
      <p>{questionData.question}</p>
      <label>
        <input
          type="radio"
          name={"q" + keyprop}
          value={questionData.optionA}
          onChange={onchange}
        />
        {questionData.optionA}
      </label>
      <label>
        <input
          type="radio"
          name={"q" + keyprop}
          value={questionData.optionB}
          onChange={onchange}
        />
        {questionData.optionB}
      </label>
      <label>
        <input
          type="radio"
          name={"q" + keyprop}
          value={questionData.optionC}
          onChange={onchange}
        />
        {questionData.optionC}
      </label>
      <label>
        <input
          type="radio"
          name={"q" + keyprop}
          value={questionData.optionD}
          onChange={onchange}
        />
        {questionData.optionD}
      </label>

      {
         (keyprop === length-1)?  <button type = "submit" className="btn btn-shadow btn-pink" onClick={onsubmit}>Submit</button>:
         <button type="button" className="btn btn-shadow btn-pink" onClick={display}>Next</button>
      }
     
    </div>
  );
}

export default QuestionBox;
