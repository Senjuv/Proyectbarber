
import { MdOutlineCancel } from "react-icons/md";
import { useEffect, useState } from "react";
import { supabase } from "../utils/supabase";
import Swal from "sweetalert2";

function Horario({ isOpen, setIsOpen, dataD }) {

    const [horas, setHora] = useState([]);
    useEffect(() => {
        loading()
        async function obtenerHoras() {
            const { data, error } = await supabase.rpc('obtener_horas_disponibles');

            if (error) {
                console.log(data);
                console.error("Error al obtener horas:", error);
                return;
            }

            if (data) {
                console.log(data);
                setHora(data);
            }
        }

        obtenerHoras();
    }, []);

    function loading() {
        let timerInterval;
        return (
        Swal.fire({
            title: "Cargando...",
            html: "Buscando horarios disponibles <b></b>",
            timer: 1000,
            timerProgressBar: true,
            didOpen: () => {
                Swal.showLoading();
                const timer = Swal.getPopup().querySelector("b");
                timerInterval = setInterval(() => {
                    timer.textContent = `${Swal.getTimerLeft()}`;
                }, 100);
            },
            willClose: () => {
                clearInterval(timerInterval);
            }
        }).then((result) => {
            /* Read more about handling dismissals below */
            if (result.dismiss === Swal.DismissReason.timer) console.log("I was closed by the timer");
        }
        ))
    }

    return (
        <div className="section-pp">
            <div className="container-ca">
                <MdOutlineCancel onClick={() => setIsOpen(null)} className="cancel" />
            </div>
            <div className="gridCalendar">
                <div className="DataC"><h2>Miercoles</h2></div>
                {horas.map((hora) => (
                    <div
                        key={hora.id}
                        className="DataC"
                        onClick={() => {
                            dataD(hora.hora, hora.id);
                            setIsOpen('name');
                        }}
                    >
                        <h5>{hora.hora}</h5>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default Horario;