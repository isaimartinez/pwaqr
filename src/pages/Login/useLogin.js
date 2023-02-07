import React,{useState, useEffect} from 'react'
import { mockLogin } from 'APIs'
import {useNavigate} from 'react-router-dom'

export const useLogin = () => {
  const navigate = useNavigate()
  const [user, setUser] = useState("")
  const [pass, setPass] = useState("")
  
  const [isDisabledBtn, setIsDisabledBtn] = useState(false)

  useEffect(() => {
    if(user.length == 0 || pass.length == 0){
      setIsDisabledBtn(true)
    } else{
      setIsDisabledBtn(false)
    }
  }, [user, pass])



  const handleLogin = (e) => {
    e.preventDefault()
    console.log("hey")
    mockLogin(user, pass, navigate)
  }

  return {user, setUser, pass, setPass, handleLogin, isDisabledBtn}

}