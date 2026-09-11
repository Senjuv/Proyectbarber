import { supabase } from "../utils/supabase";
import { useEffect, useState } from "react";
import { MdOutlineCancel } from "react-icons/md";
import { useNavigate } from "react-router-dom";
import { Blobatar } from "@blobatar/react";
import "blobatar/motion.css";

function Panel() {
    const navigate = useNavigate();
    const [datos, setdatos] = useState([]);

    useEffect(() => {
        const verificarSesion = async () => {
            const { data: { session } } = await supabase.auth.getSession();
            console.log("Se esta ejecutando esto");
            if (!session) {
                console.log("Esta llegando aqui");
                navigate('/Login');
            } else {
                console.log("La sesion esta iniciada");
                const { data } = await supabase.rpc('obtener_usuarios');
                console.log(data);
                setdatos(data);
            }
        };
        verificarSesion();
    }, [navigate]);

    async function closeC() {
        const { error } = await supabase.auth.signOut();
        if (error) {
            console.error("Error al cerrar sesión:", error.message);
        } else {
            console.log("Sesión destruida con éxito");

            window.location.replace("/#inicio");
        }
    }

    async function removeF(id) {
        const numericId = Number(id);
        const { error } = await supabase.rpc('disablecitas', {
            id_i: numericId
        });
        if (error) {
            console.error('Error:', error.message);
        } else {
            setdatos(prevDatos => prevDatos.filter(dato => Number(dato.id) !== numericId));
            console.log('¡Estatus actualizado a true!');
            console.log(datos);
        }
    }



    return (
        <div className="section-panel">
            {/* Botón de cierre */}
            <div className="container-ca">
                <MdOutlineCancel onClick={() => closeC()} className="cancel" />
            </div>

            {/* Encabezado del panel */}
            <div className="panel-header">
                <h2>Citas Pendientes</h2>
                <span className="badge-count">{datos.length} agendadas</span>
            </div>

            {/* Tabla de registros */}
            <div className="container-panel">
                {/* Cabecera de columnas */}
                <div className="datos-panel header-row">
                    <span>Avatar</span>
                    <span>Nombre</span>
                    <span>Teléfono</span>
                    <span>Servicio</span>
                    <span>Hora</span>
                    <span>Cancelar</span>
                </div>

                {/* Lista de citas */}
                <div className="panel-list">
                    {datos.map((dato) => (
                        <div key={dato.id} className="datos-panel data-row">
                            <Blobatar
                                name={dato.name}
                                animate="hover"
                            />
                            <span className="col-name">{dato.name}</span>
                            <span className="col-phone">{dato.number}</span>
                            <span className="col-service">{dato.corte}</span>
                            <span className="col-time">{dato.hora}</span>
                            <MdOutlineCancel onClick={() => removeF(dato.id)} className="cancel" />
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default Panel;
