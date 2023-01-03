import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import React, {useEffect} from 'react';
import './style/App.css';
import ExerciseList from "./Components/ExerciseList";
import AddRoutine from "./pages/AddRoutine";
import Routines from "./pages/Routines";
import Login from "./Components/Login";


function App() {
    useEffect(() => {
        document.title = 'Resolute';
    }, []);
  return (
      <Router>
          <div className="App">
              <header/>
              <Routes>
                  <Route path="/" element={<Login/>}/>
                  <Route path='/login' element={<Login/>}/>
                  <Route path='/routines/add' element={<AddRoutine/>}/>
                  <Route path='/routines/:id' element={<Routines/>}/>
              </Routes>
          </div>
      </Router>
  );
}

export default App;