import React from 'react'
import {QRCode, CustomInput} from 'components'
import {FaSignOutAlt} from 'react-icons/fa'
import Button from '@mui/material/Button';
import { useMain } from './useMain';
import { FaTrash } from 'react-icons/fa';

const Main = () => {
  const {qr, visitante, setVisitante, noCasa, setNoCasa, vehiculo, setVehiculo, vehiculoColor, setVehiculoColor, handleGenerateQr, 
    isBtnEnabled, autorizo, setAutorizo, handleReset, handleLogOut
  } = useMain()

  return (
    <div className='flex w-full h-screen relative'>
      <div className='flex z-10 bg-transparent absolute ml-5 mt-5 cursor-pointer lg:p-10 sm:p-2'
        onClick={handleLogOut}
      >
        <FaSignOutAlt size={50}/>
      </div>
      <div className='flex flex-col w-full h-screen m-auto justify-center items-center gap-3'> 
        <CustomInput label={"Visitante"} onChange={setVisitante} value={visitante}/>
        <CustomInput label={"No. Casa"} onChange={setNoCasa} value={noCasa}/>
        <CustomInput label={"Tipo Vehiculo"} onChange={setVehiculo} value={vehiculo}/>
        <CustomInput label={"Color"} onChange={setVehiculoColor} value={vehiculoColor}/>
        <CustomInput label={"Autorizó"} onChange={setAutorizo} value={autorizo} readOnly/>
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
    </div>
  )
}

export default Main