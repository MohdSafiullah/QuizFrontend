import Editor from "../Components/Editor";
import Questionlist from "../Components/Questionlist";
import { useLocation } from "react-router";
import "../styles/editpage.css"

function Editpage(){
    const location = useLocation();

    return (
        <div id="editpage" className="grid">
                <Questionlist objid={location.state.id}/>
                <Editor objid={location.state.id}/>
        </div>
    );
}

export default Editpage;
