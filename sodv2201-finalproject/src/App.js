import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Routes, Route } from 'react';
import Home from './routes/public/home.component';

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
