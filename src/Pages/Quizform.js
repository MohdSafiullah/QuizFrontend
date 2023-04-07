import React, { useState } from "react";
import { Link } from "react-router-dom";
import "../styles/Quizform.css"
import dbMethods from "../utils/dbmethods";

function Quizform() {
  const [quizform, setquizform] = useState({
    quizname: "",
    quizdescription: "",
    marksystem: "",
    duration: "",
  });

  const [successMessage, setSuccessMessage] = useState({
    message: false, quizid: null
  });

  const onfieldChange = (event) => {
      const field = event.target.name;
    const value = event.target.value;
    setquizform((prev) => {
      return { ...prev, [field]: value };
    });
  };

  const handleSubmit = (e)=>{
    e.preventDefault()
    const addResponse = dbMethods.addQuiz(quizform);
    addResponse.then((data)=>{
    setSuccessMessage(data)
    })
  }

  return (
    <div id="quizform" className="d-flex flex-column bgcolor">
      <div className="whitecontainer">
        {
          (successMessage.message) ? 
           <div>
             <h1 className="mb-5">Quiz created successfuly</h1>
             <h3>Note the quiz id: <br />{successMessage.quizid} </h3>
             <p>The quiz id is required for adding or editing questions</p>
             <Link to="/quizlist">
             <button className="btn btnshadow btn-pink">Get Quiz</button>
             </Link>
           </div>
         :
         <div>
        <h1>Create a New Quiz</h1>

         <form onSubmit={handleSubmit}>
          <input
            type="text"
            name="quizname"
            className="d-block"
            placeholder="Quiz Name"
            value={quizform.quizname}
            onChange={onfieldChange}
            autoComplete="off"
          />
          <input
            type="text"
            name="quizdescription"
            className="d-block"
            placeholder="Description"
            value={quizform.quizdescription}
            onChange={onfieldChange}
            autoComplete="off"
          />
          <input
            type="text"
            className="d-block"
            placeholder="Marks per Question"
            name="marksystem"
            value={quizform.marksystem}
            onChange={onfieldChange}
            autoComplete="off"
          />
          <input
            type="text"
            name="duration"
            className="d-block"
            value={quizform.duration}
            onChange={onfieldChange}
            autoComplete="off"
            placeholder="Quiz Duration in minutes"
          />
          <button type="submit" className="btn btn-shadow btn-blue">Create Quiz</button>
          <Link to="/">
                <button className="btn btn-shadow btn-pink">Back</button>
                </Link>
        </form>
        </div>
        }
      </div>
    </div>
  );
}

export default Quizform;
