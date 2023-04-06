import { useState, useEffect } from "react";
import QuizBox from "../Components/Quizbox";
import dbMethods from "../utils/dbmethods";
import NavigationBar from "../Components/NavigationBar";

function Quizlist() {
  const [quizArray, setquizArray] = useState([]);

  useEffect(() => {
    const list = dbMethods.getQuiz();
    list.then((data) => {
      setquizArray(data);
    });
  }, []);

  return (
    <div className="bgcolor d-flex flex-column" id="quizlist">
<NavigationBar />
      <div className="whitecontainer">
        <h1>Quiz list</h1>
        <div className="container">
          <div className="row">
            {quizArray.map((quiz, index) => (
              <QuizBox key={index} quizdata={quiz} />
            ))}
            {(quizArray.length === 0)? <p>No quiz is present. You can create one.</p>: null}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Quizlist;
