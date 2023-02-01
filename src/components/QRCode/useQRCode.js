import {useRef, useCallback, useState, useEffect} from 'react'
import { toPng, toBlob } from 'html-to-image';

export const useQRCode = (value) => {
  const ref = useRef(null)

  const copy = () => {
    toBlob(ref.current, { cacheBust: true, })
      .then((dataUrl) => {
        const item = new ClipboardItem({ "image/png": dataUrl });
        navigator.clipboard.write([item]); 
      })
      .catch((err) => {
        console.log(err)
      })
  }
  
  const download = () => {
    toPng(ref.current, { cacheBust: true, })
      .then((dataUrl) => {
        const link = document.createElement('a')
        link.download = `${new Date().toString()}.png`
        link.href = dataUrl
        link.click()
      })
      .catch((err) => {
        console.log(err)
      })
  }

  return {ref, copy, download}
}