import { useState, useEffect} from "react";
import ErrorMsg from "../../components/ErrorMsg";
import { useParams, Link } from "react-router-dom";
import clienteAxios from "../../config/axios";
const NewPass = () => {

  const [password,setPassword]=useState('');
  const [confirmaPassword,setConfirmaPassword]=useState('');
  const [errorMsg,setErrorMsg]= useState({});
  const [tokenValido, setTokenValido]= useState(false);
  const [passwordModificado,setPasswordModificado]=useState(false);

    const params= useParams();
    const {token}= params;
    
  useEffect(()=>{

    const comprobarToken= async ()=>{
      try {
        await clienteAxios(`/entrenador/olvide-password/${token}`);
        setErrorMsg({msg:'Ingresa tu nueva contraseña'});
        setTokenValido(true)
      } catch (error) {
        setErrorMsg({msg:error.response.data.msg, error:true});
      }
    }
    comprobarToken();
  },[]);

  const handleSubmit= async(e)=>{
    e.preventDefault();

    if ([password,confirmaPassword].includes('')) {
      setErrorMsg({msg:'Ambos campos son oblligatorios', error:true});
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

    try {
    const url= `/entrenador/olvide-password/${token}`
      const {data} =  await clienteAxios.post(url,{password});
      setErrorMsg({msg:data.msg});
      setPasswordModificado(true);
    } catch (error) {
      setErrorMsg({msg:error.response.data.msg,error:true})
    }
} 
  
  const {msg} = errorMsg;
  
  return (
   <>
    <div className="mb-6 animate-fade-left animate-duration-1000 ">

    <h2 className="mb-6 text-4xl font-black tracking-wide text-transparent sm:text-7xl from-red-700 bg-gradient-to-l via-orange-700 to-orange-500 bg-clip-text">FITFLARE</h2>
    
        <h1 className="text-3xl font-black tracking-wide text-gray-200 sm:text-6xl">Reestablece tus Credenciales <br/><span className="text-red-600 ">No Pierdas Acceso a </span> tus Clientes.</h1>
        
       
      
    </div>
      
    <div className="px-5 py-10 my-5 mt-20 shadow-lg md:mt-5 rounded-xl shadow-orange-600 backdrop-blur-3xl animate-fade-left animate-duration-1000 ">
      {msg && <ErrorMsg
        errorMsg={errorMsg}
      />}
      
      {tokenValido && (
      <form onSubmit={handleSubmit}>
      <div className="my-4">
            <label htmlFor="password" className="block text-xl font-bold tracking-wider text-gray-300 uppercase">Nueva contraseña:</label>
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
                    value='Guardar'
                    className="w-full px-10 py-3 mt-5 font-bold text-white uppercase transition-transform duration-500 shadow-lg rounded-xl bg-gradient-to-r from-orange-500 via-red-600 to-yellow-600 hover:cursor-pointer hover:scale-105 shadow-yellow-600 md:w-auto"/>
      </form>
      )}
      
      {passwordModificado && <Link
                      className='block mt-12 font-black text-center text-gray-500 animate-fade-up animate-delay-300'
                      to="/">Iniciar Sesión</Link>}
      </div>
   </>
  )
}


export default NewPass;