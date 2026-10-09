import Home from "./pages/Home.jsx";
import "./App.scss";
import { BrowserRouter, Route, Routes, useLocation } from "react-router-dom";
import { useEffect } from "react";
import About from "./pages/About.jsx";
import Header from "./components/Header.jsx";
import Services from "./pages/Services.jsx";
import OurWork from "./pages/OurWork.jsx";
import Contact from "./pages/Contact.jsx";
import Blog from "./pages/Blog.jsx";
import BlogDetail from "./pages/BlogDetail.jsx";
import Footer from "./components/Footer.jsx";
import OurClients from "./pages/OurClients.jsx";
import Privacy from "./pages/Privacy.jsx";
import Terms from "./pages/Terms.jsx";
import ReactGA from "react-ga4";


function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
}

  ReactGA.initialize("G-C7MTQ781QQ");


function App() {

  useEffect(() => {
    // Add the analytics script to the <head>
    const script1 = document.createElement("script");
    script1.async = true;
    script1.src = "https://www.googletagmanager.com/gtag/js?id=G-C7MTQ781QQ";
    document.head.appendChild(script1);

    // Add the gtag initialization script
    const script2 = document.createElement("script");
    script2.innerHTML = `
      window.dataLayer = window.dataLayer || [];
      function gtag(){dataLayer.push(arguments);}
      gtag('js', new Date());
      gtag('config', 'G-C7MTQ781QQ');
    `;
    document.head.appendChild(script2);
  }, []);

  return (
    <>
      <BrowserRouter>
        <ScrollToTop />
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/services" element={<Services />} />
          <Route path="/casestudy" element={<OurWork />} />
          <Route path="/ourclients" element={<OurClients />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/blog/:slug" element={<BlogDetail />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/privacy" element={<Privacy />} />
          <Route path="/terms" element={<Terms />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </>
  );
}

export default App;
