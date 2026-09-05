import { supabase } from "../utils/supabase";
import { useEffect, useState } from "react";
import { MdOutlineCancel } from "react-icons/md";
import { useNavigate } from "react-router-dom";

function Panel() {
    const navigate = useNavigate();
    const [datos, setdatos] = useState([]);

    useEffect(() => async function verificarSesion() {
        const { data: { session } } = await supabase.auth.getSession();
        console.log("Se esta ejecutando esto");
        if (!session) {
            console.log("Esta lleganado aqui");
            navigate('/Login'); 
        } else {
            console.log("La sesion esta iniciada");
            const { data } = await supabase.rpc('obtener_usuarios');
            console.log(data);
            setdatos(data);
        }
    }, [navigate]);

    async function closeC() {
        const { error } = await supabase.auth.signOut();

        if (error) {
            console.error("Error al cerrar sesión:", error.message);
        } else {
            console.log("Sesión destruida con éxito");
            // Una vez destruida la sesión, lo mandamos al login
            window.location.replace("/#inicio");
        }
    }
    return (
        <div className="section-panel">
            <div className="container-ca">
                <MdOutlineCancel onClick={() => closeC()} className="cancel" />
            </div>
            <h2>Citas pendientes</h2>
            <div className="container-panel">
                <div className="datos-panel">
                    <h5>Nombre</h5>
                    <h5>Numero</h5>
                    <h5>Corte</h5>
                    <h5>Hora</h5>
                </div>
                {datos.map((dato) => (
                    <div
                        key={dato.id}
                        className="datos-panel"
                    >
                        <h5>{dato.name}</h5>
                        <h5>{dato.number}</h5>
                        <h5>{dato.corte}</h5>
                        <h5>{dato.hora}</h5>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default Panel;
