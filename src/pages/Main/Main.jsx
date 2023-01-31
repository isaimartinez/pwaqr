import React,{useState} from 'react'
import {QRCode, CustomInput} from 'components'
import Button from '@mui/material/Button';
import { useMain } from './useMain';


const Main = () => {
  const {qr, visitante, setVisitante, noCasa, setNoCasa, vehiculo, setVehiculo, vehiculoColor, setVehiculoColor, handleGenerateQr, isBtnEnabled} = useMain()

  return (
    <div className='flex flex-col w-full h-screen m-auto justify-center items-center gap-2'> 
      <CustomInput label={"Visitante"} onChange={setVisitante} value={visitante}/>
      <CustomInput label={"No. Casa"} onChange={setNoCasa} value={noCasa}/>
      <CustomInput label={"Tipo Vehiculo"} onChange={setVehiculo} value={vehiculo}/>
      <CustomInput label={"Color"} onChange={setVehiculoColor} value={vehiculoColor}/>
      <Button variant="outlined" onClick={handleGenerateQr} disabled={!isBtnEnabled}>Generate Qr</Button>
      {qr && <QRCode value={qr} />}
    </div>
  )
}

export default Main