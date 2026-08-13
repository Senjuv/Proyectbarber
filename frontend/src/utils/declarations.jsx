import { useState } from "react";

export const useReserva = () => {

    const [isOpen, setIsOpen] = useState(null);

    const [datosCita, setDatosCita] = useState({
        nombre: "",
        corte: "",
        hora: ""
    });

    return {
        isOpen,
        setIsOpen,
        datosCita,
        setDatosCita
    };
};

