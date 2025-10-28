import React from 'react';
import './App.css';
import { BrowserRouter, Routes, Route } from 'react';
import Home from './routes/public/home.component';
import SignUp from './views/public/SignUp';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path ="/" element ={<Home />}/>
        
      </Routes>
    </BrowserRouter>

  );
}

export default App;
