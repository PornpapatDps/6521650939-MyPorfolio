import { BrowserRouter as Router,Routes,Route } from 'react-router-dom';
import Navbar from './Nav/Navbar'
import Home from './Home/Home';
import Skills from './Home/Skills';
import Login from './Login/Login';
import Contact from './Contact/Contact';
import Register from './Register/Register';
import Report from './Report/Report';

const App =()=> {
  return (
    <div className="bg-white ">
      <Router>
      <Navbar />
        <Routes>
          <Route path="/" element={
        <>
            <Home />
            <Skills/>

      </>
      } />

      
      {/* <Route path="/skills" element={<Skills />} /> */}
      <Route path="/login" element={<Login />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="/register" element={<Register/>} />
      <Route path="/report" element={<Report />} />




      </Routes>
      
      </Router>
    </div>
  )
}

export default App
