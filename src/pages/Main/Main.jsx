import React,{useState} from 'react'
import {QRCode} from 'components'
import Button from '@mui/material/Button';
import { v4 as uuidv4 } from 'uuid';


const Main = () => {
  const [value, setValue] = useState(null)

  const handleGenerateQr = () => {
    const id = uuidv4()
    setValue(id)
  }


  return (
    <div className='flex flex-col w-full h-screen m-auto justify-center items-center gap-5'> 
      {value && <QRCode value={value} />}
      <Button variant="outlined" onClick={handleGenerateQr}>Generate Qr</Button>

    </div>
  )
}

export default Main