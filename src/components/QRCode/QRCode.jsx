import React from 'react'
import QRCode from "react-qr-code";
import {WhatsappShareButton, WhatsappIcon} from 'react-share'
const QRCodeComponent = ({value}) => {

  const clipboard = () => {
    navigator.clipboard.writeText(value);
  }

  return (
    <div className='flex flex-row gap-5'>
      <div className='flex w-52 h-52'>
        <QRCode
          size={100}
          style={{ height: "auto", maxWidth: "100%", width: "100%" }}
          value={value}
          viewBox={`0 0 256 256`}
        />
      </div>
      <div className='flex justify-center items-center cursor-pointer'
        onClick={clipboard}
      >
        Copiar
      </div>

    </div>
  )
}

export default QRCodeComponent