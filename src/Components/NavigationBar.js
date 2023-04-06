import { Link } from "react-router-dom";
function NavigationBar() {
  return(
     <nav className="d-flex">
     <h2 className="">QuizLet</h2>
        <Link to="/createquiz">
        <button className="btn btn-shadow btn-blue">Create Quiz</button>
        </Link>
        <Link to="/quizlist">
        <button className="btn btn-shadow btn-pink">Quiz List</button>
        </Link>
  </nav>
  )
}

export default NavigationBar;
