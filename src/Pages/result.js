import { useLocation } from "react-router";
import { Link } from "react-router-dom";

function Result(){
    const location = useLocation();

    return   <div id="home" className="d-flex flex-column bgcolor">
    <div className="box-shadow whitecontainer">
         <h2>Your Score is:</h2>
         <h3>{location.state.marks}/{location.state.totalMarks}</h3>
         <Link to="/">
            <button className="btn btn-shadow btn-blue">Exit</button>
         </Link>
    </div>
</div>
}

export default Result
