import React from 'react'
import {QRCode, CustomInput} from 'components'
import Button from '@mui/material/Button';
import { useMain } from './useMain';
import { FaTrash } from 'react-icons/fa';

const Main = () => {
  const {qr, visitante, setVisitante, noCasa, setNoCasa, vehiculo, setVehiculo, vehiculoColor, setVehiculoColor, handleGenerateQr, 
    isBtnEnabled, autorizo, setAutorizo, handleReset
  } = useMain()

  return (
    <div className='flex flex-col w-full h-screen m-auto justify-center items-center gap-3'> 
      <CustomInput label={"Visitante"} onChange={setVisitante} value={visitante}/>
      <CustomInput label={"No. Casa"} onChange={setNoCasa} value={noCasa}/>
      <CustomInput label={"Tipo Vehiculo"} onChange={setVehiculo} value={vehiculo}/>
      <CustomInput label={"Color"} onChange={setVehiculoColor} value={vehiculoColor}/>
      <CustomInput label={"Autorizó"} onChange={setAutorizo} value={autorizo}/>
      <div className='flex flex-col mt-3  gap-5'>
        <div className='flex items-center justify-center'>
          {
            qr ? (
              <Button variant="outlined" color='error' onClick={handleReset} startIcon={<FaTrash />} >Reset</Button>
            ) : (
          <Button variant="outlined" onClick={handleGenerateQr} disabled={!isBtnEnabled}>Generate Qr</Button>

            )
          }
        </div>
        {qr && <QRCode value={qr} />}
      </div>
    </div>
  )
}

export default Main