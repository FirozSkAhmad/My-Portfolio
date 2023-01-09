import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './Pages/Home';
import Projects from './Pages/Projects';
import Experince from './Pages/Experince';
import Navbar from './Components/Navbar';
import Footer from './Components/Footer';
import DisplayProject from './Pages/DisplayProject';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/projects' element={<Projects />} />
          <Route path='/project/:id' element={<DisplayProject />} />
          <Route path='/experince' element={<Experince />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
