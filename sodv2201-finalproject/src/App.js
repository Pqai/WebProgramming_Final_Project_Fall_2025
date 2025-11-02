import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './routes/public/home.component';
//import SignUp from './views/public/SignUp';
import SignUpComponent from './routes/public/signup.component';
import Header from './components/layouts/header/Header.component';
import ViewCoursesPage from './views/student/ViewCourses';


function App() {
  return (
    <div>
      <BrowserRouter>
      <Header/>

      <Routes>
        <Route path ="/" element ={<Home />}/>
        <Route path ="/courses" element={<ViewCoursesPage />}/>
        <Route path="/SignUp" element={<SignUpComponent/>}/>
      </Routes>
    </BrowserRouter>

    </div>
  );
}

export default App;
