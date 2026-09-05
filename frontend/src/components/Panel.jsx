import { supabase } from "../utils/supabase";
import { useEffect } from "react";
function Panel() {

    useEffect(() => async function verificarSesion() {
        const { data: { session } } = await supabase.auth.getSession();

        if (!session) {
            // Si no hay sesión, redirigir al formulario de login
            window.location.href = "/Login";
        }
    }, []);
    
    return (
        <div>
            <h1>holaaaaa</h1>
            <p>si me redirige</p>
        </div>
    )
}

export default Panel;
