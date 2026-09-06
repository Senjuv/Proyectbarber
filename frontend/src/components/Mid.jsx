
import { Link } from "react-router-dom";

function Mid() {
    return (
        <div className="sections-m">
            <div className="datos-m">
                <div>
                    <p className="p">Selecciona tu corte y la hora que desees aqui</p>
                    <div className="Reserva"><Link to="/citasD" className="linkR"><h3 >Reservar cita</h3></Link></div>
                    <div className="info-notice">
                        <p><strong>Ubicación:</strong> Centro de Tala, Jal.</p>
                        <p><strong>Horario:</strong> Miercoles de 11:00 AM a 6:00 PM</p>
                        <p className="sub-notice">* Se solicita llegar 5 minutos antes de tu cita.</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Mid;