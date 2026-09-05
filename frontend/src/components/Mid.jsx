
import { Link } from "react-router-dom";

function Mid() {
    return (
        <div className="sections-m">
            <div className="datos-m">
                <div>
                    <p className="p">Selecciona tu corte y la hora que desees aqui</p>
                    <div className="Reserva"><Link to="/citasD" className="linkR"><h3 >Reservar cita</h3></Link></div>
                </div>
            </div>
        </div>
    )
}

export default Mid;