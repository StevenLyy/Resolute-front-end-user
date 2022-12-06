import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import React, {useEffect} from 'react';
import './Style/App.css';
import ExerciseList from "./Components/ExerciseList";
import AddRoutine from "./pages/AddRoutine";
import Routines from "./pages/Routines";


function App() {
    useEffect(() => {
        document.title = 'Resolute';
        document.body.style.backgroundImage = "linear-gradient(90deg, #253654, #3d4652, #253654)";
    }, []);
  return (
      <Router>
          <div className="App">
              <header/>
              <Routes>
                  <Route path='/' element={<ExerciseList/>}/>
                  <Route path='/routines/add' element={<AddRoutine/>}/>
                  <Route path='/routines/:id' element={<Routines/>}/>
              </Routes>
          </div>
      </Router>
  );
}

export default App;