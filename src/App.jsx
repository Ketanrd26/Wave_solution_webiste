import Home from './pages/Home.jsx';
import './App.scss'
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import About from './pages/About.jsx';
import Header from './components/Header.jsx';
import Services from "./pages/Services.jsx";
import OurWork from "./pages/OurWork.jsx";
import Contact from "./pages/Contact.jsx";
import Blog from "./pages/Blog.jsx";
import Footer from './components/Footer.jsx';

function App() {
  return (
    <>

      <BrowserRouter>
        <Header />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/about' element={<About />} />
          <Route path='/services' element={<Services />} />
          <Route path='/ourwork' element={<OurWork/>} />
          <Route path='/blog' element={<Blog />} />
          <Route path='/contact' element={<Contact />} />
        </Routes>
        <Footer />
      </BrowserRouter>

    </>
  );
}

export default App
