import '../styles/Navbar.css';
import '../styles/Footer.css';
import '../styles/selectionC.css';
import '../styles/popup.css';
import '../styles/Horario.css';
import '../styles/Form.css';
import '../styles/Present.css';
import '../styles/Error.css';
import Navbar from "../utils/Navbar";
import Footer from "../utils/Footer";
import Selection from "../components/selectionC";
function CitasD() {
    return (
        <div>
            <Navbar></Navbar>
            <Selection></Selection>
            <Footer></Footer>
        </div>
    )
}

export default CitasD;