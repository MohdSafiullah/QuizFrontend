import { useState, } from "react";
import { Link, useNavigate } from "react-router-dom";


function QuizBox({ quizdata }) {
  const [showEditVerify, setShowEditVerify] = useState(false);
  const [quizID, setquizID] = useState("");
  const navigate = useNavigate();

  const handleEditClick = () => {
    setShowEditVerify(true)
  };

  const onQuizIDChange = (e)=>{
    setquizID(e.target.value)
  }

  function handleEditFormIDClick(e){
    e.preventDefault()
    if(quizdata._id === quizID){
     navigate("/editpage", {state: {id: quizID}})
    }else{
      alert("Wrong Quiz ID: You cannot edit this page with wrong quiz ID")
    }
  }

  return (
    <div>
    {(!showEditVerify) ? (
      <div className="quizbox col-3">
        <div className="card text-center">
          <div className="card-header">{quizdata.quizname}</div>
          <div className="card-body">
            <h5 className="card-title">{quizdata.quizdescription}t</h5>
            <p className="card-text">{quizdata.duration}</p>
            <div>
              <Link to="/quiz" state={{objid: quizdata._id}}>
              <button text="Take Quiz" className="btn btn-shadow btn-blue">
                Take Quiz
              </button>
              </Link>
              <button
                className="btn btn-shadow btn-pink"
                onClick={handleEditClick}
              >
                Add Questions or Edit Quiz
              </button>
            </div>
          </div>
          <div className="card-footer text-body-secondary">
            {quizdata.marksystem} marks per question
          </div>
        </div>
      </div>

    ) : (
      <div id="editorForm">
        <div className="whitecontainer">
          <form>
            <h2>Enter Quiz ID</h2>
            <input
              type="text"
              name="quizid"
              className="d-block"
              placeholder="Enter Quiz ID"
              onChange={onQuizIDChange}
            />
            <button className="btn btn-shadow btn-blue" onClick={handleEditFormIDClick}>Submit</button>
          </form>
        </div>
      </div>
    )}
     
     
    </div>
  );
}

export default QuizBox;
