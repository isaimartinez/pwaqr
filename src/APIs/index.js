import { users } from "data/auth"
import { toast } from 'react-toastify';

export const mockLogin = (name, pass, navigate) => {
  const user = users.filter(u => u.name == name)[0]
  console.log("user", user.pass)
  console.log("temp pass", pass)

  if(user.pass == pass) {
    console.log("p = p")
    localStorage.setItem('profile', JSON.stringify({
      name, pass
    }))
    navigate("/")
  } else {
    toast.error('Usuario o contraseña incorrecto', {
      position: "top-right",
      autoClose: 2000,
      theme: "light",
    });
  }
}

export const mockLogOut = (navigate) => {
  localStorage.clear()
  navigate("/login")
}