import React from 'react';
import './App.css';
import {Route,Routes} from "react-router-dom";
import Main from './Components/Main';
import ContactMe from './Components/ContactMe.jsx';

function App() {
  return (
    <div>
        <Routes>
          <Route path="/HNG-linktree" element={<Main/>} />
          <Route path="/contact" element={<ContactMe/>} />
        </Routes>
      </div>
        
  );
}

export default App;


