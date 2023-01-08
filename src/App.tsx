import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import React, {useEffect} from 'react';
import './style/App.css';
import AddRoutine from "./pages/AddRoutine";
import Routines from "./pages/Routines";
import Login from "./pages/Login";
import Exercises from "./pages/Exercises";
import HomePage from "./pages/HomePage";
import Navbar from "./Components/Navbar";


function App() {
    useEffect(() => {
        document.title = 'Resolute';
    }, []);
  return (
      <Router>
          <div className="App">
              <header/>
              <Navbar/>
              <Routes>
                  <Route path="/" element={<HomePage/>}/>
                  <Route path='/login' element={<Login/>}/>
                  <Route path='/exercises' element={<Exercises/>}/>
                  <Route path='/routines/add' element={<AddRoutine/>}/>
                  <Route path='/routines/:id' element={<Routines/>}/>
              </Routes>
          </div>
      </Router>
  );
}

export default App;