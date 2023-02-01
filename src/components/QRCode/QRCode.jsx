import React,{useRef, useCallback, useState} from 'react'
import { toPng, toBlob } from 'html-to-image';
import QRCode from "react-qr-code";
import { FaCopy, FaDownload } from "react-icons/fa";
import { useQRCode } from './useQRCode';

const QRCodeComponent = ({value}) => {
  const {ref, copy, download} = useQRCode(value)

  return (
    <div className='flex flex-row gap-5'>
      <div className='flex w-52 h-52' ref={ref}>
        <QRCode
          size={100}
          style={{ height: "auto", maxWidth: "100%", width: "100%" }}
          value={value}
          viewBox={`0 0 256 256`}
        />
      </div>
      <div className='flex flex-col gap-5 justify-center items-center cursor-pointer'
      >
        <FaCopy onClick={copy} size={35}/>
        <FaDownload onClick={download} size={35}/>
      </div>

    </div>
  )
}

export default QRCodeComponent