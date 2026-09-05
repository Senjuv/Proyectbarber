import { AiFillWechat } from "react-icons/ai";

function Hero(){
    return(
        <div className="section-h">
            <div className="div-h" id="inicio">
                <div className="figura-h">
                    <div className="figura1-h">
                        <AiFillWechat style={{ position: 'relative', zIndex:'10' }}/>
                    </div>
                </div>
                <h1 className="title-h">Yazz Cutz</h1>
                <p className="p-h">Presiona reservar cita para seleccionar tu servicio</p>
            </div>
        </div>
    )
}

export default Hero;