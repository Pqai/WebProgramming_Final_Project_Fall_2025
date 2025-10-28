import './App.css';
import { BrowserRouter, Routes, Route } from 'react';
import Home from './routes/public/home.component';
import SignUp from './views/public/SignUp';
import Header from './components/layouts/header/Header.component';

function App() {
  return (
    <div>
      <BrowserRouter>
      <Header/>
      <Routes>
        <Route path ="/" element ={<Home />}/>
        <Route path="/sigunp" element={<SignUp/>}/>
      </Routes>
    </BrowserRouter>

    </div>
  );
}

export default App;
