import { Link } from "react-router-dom";
import casco from '../assets/casco.webp'
 const Login = () => {
  
  return (
   <>
  
      <div className="mb-6 ">
      
        

        <h1 className="mb-6 text-6xl font-black tracking-wide text-gray-200">Bienvenido! <span className="text-red-600 ">Inicia Sesión y Administra tus </span>Clientes.</h1>
        <h2 className="font-black tracking-wide text-transparent text-7xl from-red-700 bg-gradient-to-b via-orange-700 to-orange-500 bg-clip-text">COLISEO GYM</h2>
        
        
      </div>

      <div className="px-5 py-10 my-5 mt-20 shadow-lg md:mt-5 rounded-xl shadow-orange-600 backdrop-blur-3xl">
        <form action="" className="">
          <div>
            <label htmlFor="email" className="block text-xl font-bold tracking-wider text-gray-300 uppercase">Email:</label>
            <input type="text" 
                    placeholder='Email de registro'
                    className="w-full p-3 mt-3 text-black placeholder-red-900 border rounded-md shadow-lg shadow-gray-600 bg-gray-50"/>
          </div>
          <div className="my-4">
            <label htmlFor="password" className="block text-xl font-bold tracking-wider text-gray-300 uppercase">Contraseña:</label>
            <input type="password" 
                    placeholder='Contraseña'
                    className="w-full p-3 mt-3 text-black placeholder-red-900 border rounded-md shadow-lg shadow-gray-600 bg-gray-50"/>
          </div>

          <input type="submit" 
                    value='Iniciar sesión'
                    className="w-full px-10 py-3 mt-5 font-bold text-white uppercase transition-transform duration-500 shadow-lg rounded-xl bg-gradient-to-r from-orange-500 via-red-600 to-yellow-600 hover:cursor-pointer hover:scale-105 shadow-yellow-600 md:w-auto"/>
        </form>

        <nav className="mt-10 lg:flex lg:justify-between">
          <Link to='/registrar' className="block my-5 text-center text-gray-400 transition-transform duration-500 hover:scale-105 ">¿No tienes una cuenta aún? <span className="font-semibold tracking-wide text-gray-200 ">Registrate</span></Link>
          <Link to='/olvide-password' className="block my-5 tracking-wide text-center text-gray-400 transition-transform duration-500 hover:scale-105">Olvidé mi <span className="font-semibold tracking-wide text-gray-200">contraseña</span></Link>
        </nav>
        
        <div className="flex justify-center">
        <img src={casco} alt="Casco romano" className=" w-52"/>
        </div>
      </div>
      
      
    
   </>
  )
}

export default Login;
