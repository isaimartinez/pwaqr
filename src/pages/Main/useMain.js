import React,{useState, useEffect} from 'react'
import { v4 as uuidv4 } from 'uuid';

export const useMain = () => {
    const [qr, setQr] = useState("")
    const [visitante, setVisitante] = useState("")
    const [noCasa, setNoCasa] = useState("")
    const [vehiculo, setVehiculo] = useState("")
    const [vehiculoColor, setVehiculoColor] = useState("")
    const [isBtnEnabled, setIsBtnEnabled] = useState(false);
    
    useEffect(() => {
        if(visitante.length == 0 || noCasa.length == 0 || vehiculo.length == 0 || vehiculoColor.length == 0){
            setIsBtnEnabled(false)
        } else {
            setIsBtnEnabled(true)
        }
    }, [visitante, noCasa, vehiculo, vehiculoColor]);


    const handleGenerateQr = () => {
        const id = uuidv4().substring(0,7)
        let str = id+","+visitante+","+noCasa+","+vehiculo+","+vehiculoColor
        console.log("str", str)
        setQr(str)
    }
    

    return {qr, setQr, visitante, setVisitante, noCasa, setNoCasa, vehiculo, setVehiculo, vehiculoColor, setVehiculoColor, handleGenerateQr, isBtnEnabled}
}