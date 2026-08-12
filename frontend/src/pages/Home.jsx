import '../styles/Navbar.css';
import '../styles/Footer.css';
import '../styles/Hero.css';
import '../styles/Mid.css';
import Navbar from "../utils/Navbar";
import Hero from "../components/Hero";
import Mid from "../components/Mid";
import Footer from "../utils/Footer";

function Home() {
    return (
        <div>
            <Navbar></Navbar>
            <Hero></Hero>
            <Mid></Mid>
            <Footer></Footer>
        </div>
    )
}

export default Home;