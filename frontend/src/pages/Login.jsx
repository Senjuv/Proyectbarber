import Navbar from "../utils/Navbar";
import '../styles/Login.css';

function Login() {
    
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
                            <input type="text" placeholder="@gmail" className="input-t" />
                            <h1 className="tittleform">Contraseña:</h1>
                            <input type="text" placeholder="Ingresa la contraseña" className="input-t" />
                            <div className="Button-E">Enviar</div>
                        </form>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default Login;