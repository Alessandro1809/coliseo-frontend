import { Link } from "react-router-dom";
import logo from '../../assets/logo_fitflare.webp'
import { useState } from "react";
import ErrorMsg from "../../components/ErrorMsg";
import clienteAxios from "../../config/axios";

 const ForgotPassword = () => {

  const [email,setEmail] = useState('');
  const [errorMsg,setErrorMsg] = useState({});
  
  const handleSubmit= async (e)=>{
    
    e.preventDefault();
    
    if (email === '' || email.length < 6) {
      setErrorMsg({
        msg:'El correo es obligatorio',
        error:true
      });
      return;
    }

    try {
      const {data} = await clienteAxios.post('/entrenador/olvide-password',{email});
      setErrorMsg({msg:data.msg});
      setTimeout(() => {
        setErrorMsg({});
    }, 3000);
    } catch (error) {
      setErrorMsg({
        msg:error.response.data.msg,
        error:true
      });
      setTimeout(() => {
        setErrorMsg({});
    }, 3000);
    }
    
  }

  const {msg} = errorMsg;
  
  return (
    <>
     <div className="mb-6 animate-fade-up animate-duration-1000">
     <h2 className="mb-6 text-4xl font-black tracking-wide text-transparent sm:text-7xl from-yellow-700 bg-gradient-to-l via-orange-600 to-yellow-500 bg-clip-text">FITFLARE</h2>
      <h1 className="text-3xl font-black tracking-wide text-gray-200  sm:text-6xl">Recupera tu Acceso y no Pierdas <br/><span className="text-red-600 "> tus Clientes </span></h1>
      
      
      
    </div>

    <div className="px-5 py-10 my-5 mt-20 shadow-lg md:mt-5 rounded-xl shadow-orange-600 backdrop-blur-3xl animate-fade-up animate-duration-1000">
        
    {msg && <ErrorMsg
        errorMsg={errorMsg}
      />}

        <form onSubmit={handleSubmit}>
      
          <div>
            <label htmlFor="email" className="block text-xl font-bold tracking-wider text-gray-300 uppercase">Email:</label>
            <input type="email" 
                    placeholder='Email de registro'
                    className="w-full p-3 mt-3 text-black placeholder-red-900 border rounded-md shadow-lg shadow-gray-600 bg-gray-50"
                    value={email}
                    onChange={e=> setEmail(e.target.value)}/>
          </div>
          

          <input type="submit" 
                    value='Enviar correo'
                    className="w-full px-6 py-3 mt-5 font-bold text-white uppercase transition-transform duration-500 shadow-lg rounded-xl bg-gradient-to-r from-orange-500 via-red-600 to-yellow-600 hover:cursor-pointer hover:scale-105 shadow-yellow-600 md:w-auto"/>
        </form>

        <nav className="mt-10 lg:flex lg:justify-between">
          <Link to='/' className="block my-5 text-center text-gray-400 transition-transform duration-500 hover:scale-105 ">¿Ya tienes una cuenta? <span className="font-semibold tracking-wide text-gray-200 ">Inicia sesión.</span></Link>
          <Link to='/registrar' className="block my-5 text-center text-gray-400 transition-transform duration-500 hover:scale-105 ">¿No tienes una cuenta aún? <span className="font-semibold tracking-wide text-gray-200 ">Registrate</span></Link>
        </nav>
        
        <div className="flex justify-center">
        <img src={logo} alt="Casco romano" className=" w-52"/>
        </div>
       
      </div></>
  )
}

export default ForgotPassword;
