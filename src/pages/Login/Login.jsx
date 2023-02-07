import React from 'react'
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import { useLogin } from './useLogin';

const Login = () => {
  const {user, setUser, pass, setPass, handleLogin, isDisabledBtn} = useLogin()

  return (
    <div className='flex w-full h-screen m-auto justify-center items-center'>
      <form className='flex flex-col gap-5 w-96' onSubmit={handleLogin}>
        <TextField id="filled-basic" type={"text"} label="Usuario" variant="filled" autoComplete='off' value={user} onChange={e => setUser(e.target.value)}/>
        <TextField id="filled-basic" type={"password"} label="Contraseña" variant="filled" value={pass} onChange={e => setPass(e.target.value)}/>

        <Button disabled={isDisabledBtn} type='submit' variant="outlined" size='large'>Iniciar Sesión</Button>
        {/* <p>{isDisabledBtn ? "Is Disabled Button" : "Enabled Button"}</p> */}
      </form>
    </div>
  )
}

export default Login