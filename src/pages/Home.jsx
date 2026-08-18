import Header from "../components/Header.jsx";
import Hero from "../components/Hero.jsx";
import Stats from "../components/Stats.jsx";
import Services from "../components/Services.jsx";
import HowItFits from "../components/HowItFits.jsx";
import WhyBrands from "../components/WhyBrands.jsx";
import Process from "../components/Process.jsx";
import Faq from "../components/Faq.jsx";
import Book from "../components/Book.jsx";
import Footer from "../components/Footer.jsx";

function Home() {
    return (
        <>
            <Header />
            <main>
                <Hero />
                <Stats />
                <Services />
                <HowItFits />
                <WhyBrands />
                <Process />
                <Faq />
                <Book />
                <Footer />
            </main>
        </>
    );
}

export default Home;