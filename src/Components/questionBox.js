import "../styles/questionbox.css"

function QuestionBox({ questionData, keyprop, onchange, length , onsubmit, display, displayclass }) {


  return (
    <div className={`${displayclass} questionBox`}>
      <h3>{keyprop+1} {questionData.question}</h3>
      <label>
      A. {questionData.optionA}
        <input
          type="radio"
          name={"q" + keyprop}
          value={questionData.optionA}
          onChange={onchange}
        />
      </label>
      <label>
      B. {questionData.optionB}
        <input
          type="radio"
          name={"q" + keyprop}
          value={questionData.optionB}
          onChange={onchange}
        />
      </label>
      <label>
      C. {questionData.optionC}
        <input
          type="radio"
          name={"q" + keyprop}
          value={questionData.optionC}
          onChange={onchange}
        />
      </label>
      <label>
      D. {questionData.optionD}
        <input
          type="radio"
          name={"q" + keyprop}
          value={questionData.optionD}
          onChange={onchange}
        />
      </label>

      {
         (keyprop === length-1)?  <button type = "submit" className="btn btn-shadow btn-pink" onClick={onsubmit}>Submit</button>:
         <button type="button" className="btn btn-shadow btn-pink" onClick={display}>Next</button>
      }
     
    </div>
  );
}

export default QuestionBox;
