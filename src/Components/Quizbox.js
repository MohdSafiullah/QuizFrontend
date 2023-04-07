import { Link } from "react-router-dom";

function QuizBox({ quizdata, onEditClick }) {

  return (
    <div >
        <div className="quizbox">
          <div className="card text-center">
            <div className="card-header">{quizdata.quizname}</div>
            <div className="card-body">
              <h5 className="card-title">{quizdata.quizdescription}</h5>
              <p className="card-text">{quizdata.duration}</p>
              <div>
                <Link to="/quiz" state={{ objid: quizdata._id }}>
                  <button text="Take Quiz" className="btn btn-shadow btn-blue">
                    Start Quiz
                  </button>
                </Link>
                <button
                  className="btn btn-shadow btn-pink"
                  onClick={(e)=>{e.preventDefault(); onEditClick(quizdata._id)}}
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
    
      
    
    </div>
      
  );
}

export default QuizBox;
