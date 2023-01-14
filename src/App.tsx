import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import React, {useEffect} from 'react';
import './style/App.css';
import AddRoutine from "./pages/AddRoutine";
import Login from "./pages/Login";
import HomePage from "./pages/HomePage";
import Navbar from "./Components/Navbar";
import Users from "./pages/Users";
import Routine from "./pages/Routine";
import Chatroom from "./Components/Chatroom";
import Exercises from "./pages/Exercises";


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
                  <Route path='/routines/add' element={<AddRoutine/>}/>
                  <Route path='/user/:id' element={<Users/>}/>
                  <Route path='/routines/:id' element={<Routine/>}/>
                  <Route path='/chatroom' element={<Chatroom/>}/>
                  <Route path='/exercises' element={<Exercises/>}/>
              </Routes>
          </div>
      </Router>
  );
}

export default App;