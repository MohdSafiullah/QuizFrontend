import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './Pages/Home';
import Quizform from './Pages/Quizform';
import Quizlist from './Pages/Quizlist';
import Editpage from './Pages/editpage';
import Quiz from "./Pages/QuizPage";
import Result from './Pages/result';



function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <main>
        <Routes>
           <Route path="/" element={<Home/>}></Route>
           <Route path="/createquiz" element={<Quizform/>}></Route>
           <Route path="/quizlist" element={<Quizlist/>}></Route>
           <Route path="/editpage" element={<Editpage/>}></Route>
           <Route path="/quiz" element={<Quiz/>}></Route>
           <Route path="/result" element={<Result/>}></Route>
        </Routes>
      </main>
      </BrowserRouter>
    </div>
  );
}

export default App;
