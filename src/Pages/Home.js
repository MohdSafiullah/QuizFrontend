import React from "react";
import { Link } from "react-router-dom";
import "../styles/home.css"

function Home(){
    return (
        <div id="home" className="d-flex flex-column bgcolor">
            <div className="box-shadow whitecontainer">
                <h1>Quiz Generator</h1>
                <p>Genearte and take Quiz in minutes</p>
                <Link to="/createquiz">
                <button className="btn btn-shadow btn-blue">Create Quiz</button>
                </Link>
                <Link to="/quizlist">
                <button className="btn btn-shadow btn-pink">Browse Quiz</button>
                </Link>
            </div>
        </div>
    )
}

export default Home
