import Home from './pages/Home.jsx';
import './App.scss'
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import About from './pages/About.jsx';
import Header from './components/Header.jsx';
import Services from "./pages/Services.jsx";
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
        </Routes>
        <Footer />
      </BrowserRouter>

    </>
  );
}

export default App
