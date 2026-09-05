import Navbar from "../utils/Navbar";
import '../styles/Login.css';
import { supabase } from "../utils/supabase";
import { useState } from "react";
import { useNavigate } from 'react-router-dom';

function Login() {
    const navigate = useNavigate();
    const [c, setC] = useState('');
    const [p, setP] = useState('');

    const manejarC = (e) => {
        setC(e.target.value);
    };
    const manejarP = (e) => {
        setP(e.target.value);
    };

    async function iniciarSesion(correo, password) {
        const { data, error } = await supabase.auth.signInWithPassword({
            email: correo,
            password: password,
        });

        if (error) {
            console.error("Error al iniciar sesión:", error.message);
            
        } else {
            console.log("Sesión iniciada con éxito:", data.user);
            navigate('../Panel', { replace: true });
        }
    }

    return (
        <div className="App">
            <Navbar></Navbar>
            <section className="sections-c" id="productos">
                <div className="formContainer">
                    <h1 className="h1-t">Iniciar sesion de ADMINISTRADOR</h1>
                    <br />
                    <div className="Form">
                        <form action="" >
                            <h1 className="tittleform">Correo:</h1>
                            <input type="text" placeholder="@gmail" value={c} onChange={manejarC} className="input-t" />
                            <h1 className="tittleform">Contraseña:</h1>
                            <input type="text" placeholder="Ingresa la contraseña" value={p} onChange={manejarP} className="input-t" />
                            <div className="Button-E" onClick={() => iniciarSesion(c,p)}>Enviar</div>
                        </form>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default Login;