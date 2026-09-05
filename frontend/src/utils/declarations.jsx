import { useState } from "react";

export const useReserva = () => {

    const [isOpen, setIsOpen] = useState(null);

    const [datosCita, setDatosCita] = useState({
        nombre: "",
        numero: "",
        corte: "",
        hora: "",
        id: ""
    });

    const [env, setEnv] = useState(false);

    return {
        isOpen,
        setIsOpen,
        datosCita,
        setDatosCita,
        env,
        setEnv
    };
};

