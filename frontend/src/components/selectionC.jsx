
import Modal1 from "../components/Modal1";
import Horario from "../components/Horario.jsx";
import Name from "../components/Form.jsx";
import Presentacion from "../components/Presentacion.jsx";
import { useReserva } from "../utils/declarations.jsx";
//import { supabase } from "../utils/supabase.js";

function Selectionc() {
    const { isOpen, setIsOpen, setDatosCita, datosCita } = useReserva();

    const dataC = (corte) => {
        setDatosCita({ ...datosCita, corte: corte });
    };
    const dataD = (hora) => {
        setDatosCita({ ...datosCita, hora: hora });
    };

    const dataUS = (nombre, numero) => {
        setDatosCita({ ...datosCita, nombre: nombre, numero: numero })
    }

    console.log(isOpen);
    return (
        <div className="section-c">
            <h3>Catalogo de servicios</h3>
            <div className="container-c">
                <div className="container-cp" id="CorteH" onClick={() => { dataC("CorteH"); setIsOpen('dia') }}>
                    <h3>Corte de cabello (hombre)</h3>
                    <p>$130</p>
                </div>
                <div className="container-cp" id="CorteM" onClick={() => { dataC("CorteM"); setIsOpen('dia') }}>
                    <h3>Corte de cabello (Mujer)</h3>
                    <p>$130</p>
                </div>
                <div className="container-cp" id="Barba" onClick={() => { dataC("Barba"); setIsOpen('dia') }}>
                    <h3>Barba (Incluye spa)</h3>
                    <p>$100</p>
                </div>
                <div className="container-cp" id="Ceja" onClick={() => { dataC("Ceja"); setIsOpen('dia') }}>
                    <h3>Ceja</h3>
                    <p>$50</p>
                </div>
                <div className="container-cp" id="GrecaS" onClick={() => { dataC("GrecaS"); setIsOpen('dia') }}>
                    <h3>Greca sencilla</h3>
                    <p>$30</p>
                </div>
                <div className="container-cp" id="GrecaE" onClick={() => { dataC("GrecaE"); setIsOpen('dia') }}>
                    <h3>Greca elaborada</h3>
                    <p>$50</p>
                </div>
                <div className="container-cp" onClick={() => setIsOpen('corte')}>
                    <h3>Combos</h3>
                    <p></p>
                </div>

                {isOpen === 'corte' && (
                    <Modal1
                        isOpen={isOpen}
                        setIsOpen={setIsOpen}
                        dataC={dataC}
                    />
                )}

                {isOpen === 'dia' && (
                    <Horario
                        isOpen={isOpen}
                        setIsOpen={setIsOpen}
                        dataD={dataD}
                    />
                )}
                {isOpen === 'present' && (
                    <Presentacion
                        isOpen={isOpen}
                        setIsOpen={setIsOpen}
                        datosCita={datosCita}
                    />
                )}
                {isOpen === 'name' && (
                    <Name
                        isOpen={isOpen}
                        setIsOpen={setIsOpen}
                        dataUS={dataUS}
                    />
                )}


                <p>Cada uno de estos servicios tiene un tiempo promedio de 50 minutos de duracion, haciendo exepcion en los combos</p>
            </div>
        </div>

    )
}

export default Selectionc;