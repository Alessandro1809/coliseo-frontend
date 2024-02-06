import { Link,useNavigate } from "react-router-dom";
import logo from '../../assets/logo_fitflare.webp'
import { useState } from "react";
import ErrorMsg from "../../components/ErrorMsg";
import clienteAxios from "../../config/axios";
import useAuth from "../../hooks/useAuth";

 const Login = () => {
  
    const [email,setEmail]= useState('');
    const [password,setPassword]= useState('');
    const [alerta,setAlerta]= useState({});
    const navigate = useNavigate();
    const {setAuth}=useAuth();
    const handleSubmit = async (e)=>{
      e.preventDefault();
        //validation
      if ([email,password].includes('')) {
        setAlerta({
          msg:'todos los campos son obligatorios',
          error:true
        });
        return;
        
      }
      try {
        const {data} = await clienteAxios.post('entrenador/autenticar',{email,password});
        //send token to localstorage temp
        localStorage.setItem('fitflare_token', data.token);
        setAuth(data);
        navigate('/admin');
        
      } catch (error) {
        setAlerta({
          msg:error.response.data.msg,
          error:true
        })
      }
      
    }


    const {msg} =alerta;
  return (
   <>
  
      <div className="animate-duration-1000 intemb-6 animate-fade-right">
      
        
      <h2 className="mb-6 text-4xl font-black tracking-wide text-transparent sm:text-6xl from-red-700 bg-gradient-to-l via-orange-700 to-yellow-500 bg-clip-text">FITFLARE</h2>
      
        <h1 className="text-3xl font-black tracking-wide text-gray-200 sm:text-6xl">Bienvenido! <span className="text-red-600 ">Inicia Sesión y Administra tus </span>Clientes.</h1>
         
      </div>

      <div className="px-5 py-10 my-5 mt-20 duration-1000 shadow-lg md:mt-5 rounded-xl shadow-orange-600 backdrop-blur-3xl animate-fade-right">
      {msg && <ErrorMsg
        errorMsg={alerta}
      />}
        <form onSubmit={handleSubmit}>
          <div>
            <label htmlFor="email" className="block text-xl font-bold tracking-wider text-gray-300 uppercase">Email:</label>
            <input type="text" 
                    placeholder='Email de registro'
                    className="w-full p-3 mt-3 text-black placeholder-red-900 border rounded-md shadow-lg shadow-gray-600 bg-gray-50"
                    value={email}
                    onChange={e=>setEmail(e.target.value)}/>
          </div>
          <div className="my-4">
            <label htmlFor="password" className="block text-xl font-bold tracking-wider text-gray-300 uppercase">Contraseña:</label>
            <input type="password" 
                    placeholder='Contraseña'
                    className="w-full p-3 mt-3 text-black placeholder-red-900 border rounded-md shadow-lg shadow-gray-600 bg-gray-50"
                    value={password}
                    onChange={e=>setPassword(e.target.value)}/>
          </div>

          <input type="submit" 
                    value='Iniciar sesión'
                    className="w-full px-6 py-3 mt-5 font-bold text-white uppercase transition-transform duration-500 shadow-lg rounded-xl bg-gradient-to-r from-orange-500 via-red-600 to-yellow-600 hover:cursor-pointer hover:scale-105 shadow-yellow-600 md:w-auto"/>
        </form>

        <nav className="mt-10 lg:flex lg:justify-between">
          <Link to='/registrar' className="block my-5 text-center text-gray-400 transition-transform duration-500 hover:scale-105 ">¿No tienes una cuenta aún? <span className="font-semibold tracking-wide text-gray-200 ">Registrate</span></Link>
          <Link to='/olvide-password' className="block my-5 tracking-wide text-center text-gray-400 transition-transform duration-500 hover:scale-105">Olvidé mi <span className="font-semibold tracking-wide text-gray-200">contraseña</span></Link>
        </nav>
        
        <picture className="flex justify-center">
        <img src={logo} alt="Casco romano" className=" w-52"/>
        </picture>
      </div>
      
      
    
   </>
  )
}

export default Login;
