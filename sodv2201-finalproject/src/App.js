import './App.css';
import { BrowserRouter, Routes, Route, Link } from 'react';
import Home from './routes/public/home.component';
import SignUp from './views/public/SignUp';
import Header from './components/layouts/header/Header.component';

function App() {
  return (
    <div>
      <BrowserRouter>
      <Header/>
      <nav>
        <Link to ="/">Home</Link> | {" "}
        <Link to ="/SignUp">Signup</Link>|{" "}
      </nav>

      <Routes>
        <Route path ="/" element ={<Home />}/>
        <Route path="/SignUp" element={<SignUp/>}/>
      </Routes>
    </BrowserRouter>

    </div>
  );
}

export default App;
