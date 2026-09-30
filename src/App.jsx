import Home from './pages/Home.jsx';
import './App.scss'
import { BrowserRouter, Route, Routes, useLocation } from 'react-router-dom';
import { useEffect } from 'react';
import About from './pages/About.jsx';
import Header from './components/Header.jsx';
import Services from "./pages/Services.jsx";
import OurWork from "./pages/OurWork.jsx";
import Contact from "./pages/Contact.jsx";
import Blog from "./pages/Blog.jsx";
import Footer from './components/Footer.jsx';
import OurClients from './pages/OurClients.jsx';
import Privacy from './pages/Privacy.jsx';
import Terms from './pages/Terms.jsx';

function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
}

function App() {
  return (
    <>

      <BrowserRouter>
        <ScrollToTop />
        <Header />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/about' element={<About />} />
          <Route path='/services' element={<Services />} />
          <Route path='/casestudy' element={<OurWork/>} />
          <Route path='/ourclients' element={<OurClients/>} />
          <Route path='/blog' element={<Blog />} />
          <Route path='/contact' element={<Contact />} />
          <Route path='/privacy' element={<Privacy />} />
          <Route path='/terms' element={<Terms />} />
        </Routes>
        <Footer />
      </BrowserRouter>

    </>
  );
}

export default App
