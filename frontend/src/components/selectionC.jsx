
import Modal1 from "../components/Modal1";
import Horario from "../components/Horario.jsx";
import Name from "../components/Form.jsx";
import Presentacion from "../components/Presentacion.jsx";

import { useReserva } from "../utils/declarations.jsx";

function Selectionc() {



    const { isOpen, setIsOpen, setDatosCita, datosCita, env, setEnv } = useReserva();

    const dataC = (corte) => {
        setDatosCita({ ...datosCita, corte: corte });
    };
    const dataD = (hora, id) => {
        setDatosCita({ ...datosCita, hora: hora, id: id });
    };

    const dataUS = (nombre, numero) => {
        setDatosCita({ ...datosCita, nombre: nombre, numero: numero })
    }




    console.log(isOpen);
    return (
        <div className="section-c">
            <h3 className="section-title">Catálogo de servicios</h3>

            {/* Contenedor de ÚNICAMENTE las tarjetas */}
            <div className="container-c">
                <div className="container-cp" id="CorteH" onClick={() => { dataC("CorteH"); setIsOpen('dia') }}>
                    <span className="service-name">Corte de cabello (Hombre)</span>
                    <span className="service-price">$130</span>
                </div>

                <div className="container-cp" id="CorteM" onClick={() => { dataC("CorteM"); setIsOpen('dia') }}>
                    <span className="service-name">Corte de cabello (Mujer)</span>
                    <span className="service-price">$130</span>
                </div>

                <div className="container-cp" id="Barba" onClick={() => { dataC("Barba"); setIsOpen('dia') }}>
                    <span className="service-name">Barba (Incluye spa)</span>
                    <span className="service-price">$100</span>
                </div>

                <div className="container-cp" id="Ceja" onClick={() => { dataC("Ceja"); setIsOpen('dia') }}>
                    <span className="service-name">Ceja</span>
                    <span className="service-price">$50</span>
                </div>

                <div className="container-cp" id="GrecaS" onClick={() => { dataC("GrecaS"); setIsOpen('dia') }}>
                    <span className="service-name">Greca sencilla</span>
                    <span className="service-price">$30</span>
                </div>

                <div className="container-cp" id="GrecaE" onClick={() => { dataC("GrecaE"); setIsOpen('dia') }}>
                    <span className="service-name">Greca elaborada</span>
                    <span className="service-price">$50</span>
                </div>

                <div className="container-cp combo-card" onClick={() => setIsOpen('corte')}>
                    <span className="service-name">Combos</span>
                    <span className="service-badge">Ver más</span>
                </div>
            </div>

            {/* Nota aclaratoria fuera del grid */}
            <p className="service-note">
                Cada uno de estos servicios tiene un tiempo promedio de 50 minutos de duración (excepto combos).
            </p>

            {/* Renderizado condicional de Modales (fuera de la cuadrícula) */}
            {isOpen === 'corte' && <Modal1 isOpen={isOpen} setIsOpen={setIsOpen} dataC={dataC} />}
            {isOpen === 'dia' && <Horario isOpen={isOpen} setIsOpen={setIsOpen} dataD={dataD} />}
            {isOpen === 'present' && <Presentacion isOpen={isOpen} setIsOpen={setIsOpen} datosCita={datosCita} env={env} setEnv={setEnv} />}
            {isOpen === 'name' && <Name isOpen={isOpen} setIsOpen={setIsOpen} dataUS={dataUS} />}
        </div>

    )
}

export default Selectionc;