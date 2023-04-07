import { useState, useEffect } from "react";
import QuizBox from "../Components/Quizbox";
import dbMethods from "../utils/dbmethods";
import { Link, useNavigate } from "react-router-dom";

function Quizlist() {
  const [quizArray, setquizArray] = useState([]);
  const [showEditVerify, setShowEditVerify] = useState({display: false, id: null});
  const [quizID, setquizID] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    const list = dbMethods.getQuiz();
    list.then((data) => {
      setquizArray(data);
    });
  }, []);

  const handleEditClick = (objid) => {
    setShowEditVerify({display: true, id: objid});
  };

  const onQuizIDChange = (e) => {
    setquizID(e.target.value);
  };

  function handleEditFormIDClick(id) {
    if (showEditVerify.id === quizID) {
      navigate("/editpage", { state: { id: quizID } });
    } else {
      alert("Wrong Quiz ID: You cannot edit this page with wrong quiz ID");
    }
    setShowEditVerify(false)
  }

  return (
    <div className="bgcolor d-flex flex-column" id="quizlist">
      <div className="whitecontainer">
        <h1>Quiz list</h1>
        <div>
          <div className="grid4">
            {quizArray.map((quiz, index) => (
              <QuizBox key={index} quizdata={quiz} onEditClick={handleEditClick}/>
            ))}
            {(quizArray.length === 0)? <p>No quiz is present. You can create one.</p>: null}
          </div>
        </div>
        <Link to="/">
        <button className="btn btn-shadow btn-blue absolute">Back</button>
        </Link>
      </div>

      {(showEditVerify.display)?(
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
                autoComplete="off"
              />
              <button
                className="btn btn-shadow btn-blue"
                onClick={handleEditFormIDClick}
              >
                Submit
              </button>
            </form>
          </div>
        </div>
      ): null}
    </div>
  );
}

export default Quizlist;
