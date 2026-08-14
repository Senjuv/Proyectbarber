
import { MdOutlineCancel } from "react-icons/md";

function Horario({ isOpen, setIsOpen, dataD }) {
    return (
        <div className="section-pp">
            <div className="container-ca">
                <MdOutlineCancel onClick={() => setIsOpen(null)} className="cancel" />
            </div>
            <div className="gridCalendar">
                <div className="DataC"><h2>Miercoles</h2></div>
                <div className="DataC" onClick={() => {dataD('11:00'); setIsOpen('name')}}><h5>11:00 AM</h5></div>
                <div className="DataC" onClick={() => {dataD('11:50'); setIsOpen('name')}}><h5>11:50 AM</h5></div>
                <div className="DataC" onClick={() => {dataD('12:40'); setIsOpen('name')}}><h5>12:40 PM</h5></div>
                <div className="DataC" onClick={() => {dataD('13:30'); setIsOpen('name')}}><h5>13:30 PM</h5></div>
                <div className="DataC" onClick={() => {dataD('14:20'); setIsOpen('name')}}><h5>14:20 PM</h5></div>
                <div className="DataC" onClick={() => {dataD('15:10'); setIsOpen('name')}}><h5>15:10 PM</h5></div>
                <div className="DataC" onClick={() => {dataD('16:00'); setIsOpen('name')}}><h5>16:00 PM</h5></div>
                <div className="DataC" onClick={() => {dataD('16:50'); setIsOpen('name')}}><h5>16:50 PM</h5></div>
                <div className="DataC" onClick={() => {dataD('17:40'); setIsOpen('name')}}><h5>17:40 PM</h5></div>
                <div className="DataC" onClick={() => {dataD('18:30'); setIsOpen('name')}}><h5>18:30 PM</h5></div>
            </div>
        </div>
    )
}

export default Horario;