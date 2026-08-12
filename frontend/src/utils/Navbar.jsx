
import { Link } from "react-router-dom";

function Navbar() {
    return (
        <section id="inicio">
            <header className="App-header">
                <h2 className='Title-nav'><Link to="/#inicio" className='link-b'>Yazz Cutz</Link></h2>
                <div className='items'>
                    <div style={{ background: 'black', borderRadius: '1.3rem', paddingLeft:'.5rem', paddingRight: '.5rem'}}>
                        <p className='list-nav'><Link to="/#inicio" className='link-a'>Iniciar sesion</Link></p>
                    </div>
                </div>
            </header>
        </section>

    )
}

export default Navbar;