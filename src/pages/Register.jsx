import { useState } from "react";
import { Link } from "react-router-dom";
import ErrorMsg from "../components/ErrorMsg";
import clienteAxios from "../config/axios";
const Register = () => {

  const [nombre,setNombre]=useState('');
  const [email,setEmail]=useState('');
  const [password,setPassword]=useState('');
  const [confirmaPassword,setConfirmaPassword]=useState('');
  const [telefono,setTelefono]=useState('');
  const [errorMsg,setErrorMsg]=useState({});
  
  const handleSubmit= async e =>{
    e.preventDefault();
    
    if ([nombre,email,password,telefono,confirmaPassword].includes('')) {
      setErrorMsg({msg:'Parece que hay campos vacios', error:true});
      return;
    }

    if (password !== confirmaPassword) {
      setErrorMsg({msg:'Las contraseñas no coinciden', error:true});
      return;
    }
    
    if (password.length < 6) {
      setErrorMsg({msg:'La contraseña debe tener mas de 6 caracteres', error:true});
      return;
    }

    setErrorMsg({});
    
    //Create user in API
    try {
     
      await clienteAxios.post('/entrenador',{nombre,email,password,telefono});
      setErrorMsg({
        msg:'Usuario registrado correctamente, revisa tu correo y confirma tu cuenta!', 
        error:false
      });
    } catch (error) {  
      setErrorMsg({
        msg: error.response.data.msg, 
        error:true
      });
      
    }
  }
  const {msg} = errorMsg;
  
  return (
    <>
      <div className="mb-6 animate-fade-left animate-duration-1000 ">
      
      <h1 className="mb-6 text-4xl font-black tracking-wide text-gray-200 sm:text-6xl">¿Listo para empezar? <br/><span className="text-red-600 ">Crea tu cuenta y Administra tus </span>Clientes.</h1>
      
      <h2 className="text-5xl font-black tracking-wide text-transparent sm:text-7xl from-red-700 bg-gradient-to-b via-orange-700 to-orange-500 bg-clip-text">COLISEO GYM</h2>
      
    </div>

    <div className="px-5 py-10 my-5 mt-20 shadow-lg md:mt-5 rounded-xl shadow-orange-600 backdrop-blur-3xl animate-fade-left animate-duration-1000 ">
      {msg && <ErrorMsg
        errorMsg={errorMsg}
      />}
        <form onSubmit={handleSubmit}>
        <div className="my-4">
            <label htmlFor="nombre" className="block text-xl font-bold tracking-wider text-gray-300 uppercase">Nombre:</label>
            <input type="text" 
                    placeholder='Tu Nombre'
                    className="w-full p-3 mt-3 text-black placeholder-red-900 border rounded-md shadow-lg shadow-gray-600 bg-gray-50"
                    value={nombre}
                    onChange={e=>setNombre(e.target.value)}
                    />
          </div>
          <div className="my-4">
            <label htmlFor="phone" className="block text-xl font-bold tracking-wider text-gray-300 uppercase">Teléfono:</label>
            <input type="tel" 
                    placeholder='Tu número de teléfono'
                    className="w-full p-3 mt-3 text-black placeholder-red-900 border rounded-md shadow-lg shadow-gray-600 bg-gray-50"
                    value={telefono}
                    onChange={e=>setTelefono(e.target.value)}
                    />
          </div>
          <div>
            <label htmlFor="email" className="block text-xl font-bold tracking-wider text-gray-300 uppercase">Email:</label>
            <input type="text" 
                    placeholder='Email de registro'
                    className="w-full p-3 mt-3 text-black placeholder-red-900 border rounded-md shadow-lg shadow-gray-600 bg-gray-50"
                    value={email}
                    onChange={e=>setEmail(e.target.value)}
                    />
          </div>
          <div className="my-4">
            <label htmlFor="password" className="block text-xl font-bold tracking-wider text-gray-300 uppercase">Contraseña:</label>
            <input type="password" 
                    placeholder='Contraseña'
                    className="w-full p-3 mt-3 text-black placeholder-red-900 border rounded-md shadow-lg shadow-gray-600 bg-gray-50"
                    value={password}
                    onChange={e=>setPassword(e.target.value)}
                    />
          </div>
          <div className="my-4">
            <label htmlFor="password" className="block text-xl font-bold tracking-wider text-gray-300 uppercase">Confirmar contraseña:</label>
            <input type="password" 
                    placeholder='Confirma tu contraseña'
                    className="w-full p-3 mt-3 text-black placeholder-red-900 border rounded-md shadow-lg shadow-gray-600 bg-gray-50"
                    value={confirmaPassword}
                    onChange={e=>setConfirmaPassword(e.target.value)}
                    />
          </div>

          <input type="submit" 
                    value='Registrar'
                    className="w-full px-10 py-3 mt-5 font-bold text-white uppercase transition-transform duration-500 shadow-lg rounded-xl bg-gradient-to-r from-orange-500 via-red-600 to-yellow-600 hover:cursor-pointer hover:scale-105 shadow-yellow-600 md:w-auto"/>
        </form>
        
        <nav className="mt-10 lg:flex lg:justify-between">
          <Link to='/' className="block my-5 text-center text-gray-400 transition-transform duration-500 hover:scale-105 ">¿Ya tienes una cuenta? <span className="font-semibold tracking-wide text-gray-200 ">Inicia sesión.</span></Link>
          <Link to='/olvide-password' className="block my-5 tracking-wide text-center text-gray-400 transition-transform duration-500 hover:scale-105">Olvidé mi <span className="font-semibold tracking-wide text-gray-200">contraseña</span></Link>
        </nav>
        
       
      </div>
    </>
  )
}

export default Register;