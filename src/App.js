import React, { useState, useEffect } from 'react';
import Movie from './components/Movie';
import Deatil from './routes/Deatil';
import Home from './routes/Home';
import {
  BrowserRouter as Router, Route, Routes, Link
} from "react-router-dom";
function App(props) {
  return <Router>
    <Routes>
      <Route path={`${process.env.PUBLIC_URL}/`} element={<Home/>}/> 
      <Route path='/movie/:id' element={<Deatil/>}/>
    </Routes>
  </Router>
}

export default App;