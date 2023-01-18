import React from 'react'
import QRCode from "react-qr-code";

const QRCodeComponent = ({value}) => {
  return (
    <div className='w-52 h-52'>
      <QRCode
        size={100}
        style={{ height: "auto", maxWidth: "100%", width: "100%" }}
        value={value}
        viewBox={`0 0 256 256`}
      />
    </div>
  )
}

export default QRCodeComponent