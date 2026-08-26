import Header from "../components/Header.jsx";
import Hero from "../components/Hero.jsx";
import Solutions from "../components/Solutions.jsx";
import HowItFits from "../components/HowItFits.jsx";
import WhyBrands from "../components/WhyBrands.jsx";
import Process from "../components/Process.jsx";
import Clients from "../components/Clients.jsx";
import Faq from "../components/Faq.jsx";
import Book from "../components/Book.jsx";
import Footer from "../components/Footer.jsx";

function Home() {
    return (
        <>

            <Hero />
            <Solutions />
            <HowItFits />
            <WhyBrands />
            <Process />
            <Faq />
            <Book />
            <Clients/>

        </>
    );
}

export default Home;