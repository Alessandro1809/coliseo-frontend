import { useEffect,useState } from "react";
import { useParams, Link } from "react-router-dom";
import axios from "axios";
import ErrorMsg from "../components/ErrorMsg";

const ConfimAccount = () => {

  const params = useParams();
  const {token} = params;
  const [cuentaConfirmada,setCuentaConfirmada] = useState(false);
  const [cargando,setCargando] = useState(true);
  const [errorMsg,setErrorMsg]=useState({});
  
  useEffect(()=>{

    const confirmAccount = async ()=>{
      
      try {
        const url =`http://localhost:4000/api/entrenador/verificar/${token}`;
        const {data} = await axios(url);

        setCuentaConfirmada(true);
        
        setTimeout(() => {
          setErrorMsg({
            msg:data.msg
          });
        }, 100);

        return;
      } catch (error) {
          setErrorMsg({msg:error.response.data.msg,
            error:true});
        
      }
      setCargando(false);
    }

    confirmAccount();
    
  },[]);
  

  return (
    <>
      <div className="mb-6 animate-fade-left animate-duration-1000 ">
      
      <h1 className="mb-6 text-6xl font-black tracking-wide text-gray-200">¡Genial!<br/><span className="text-red-600 ">Confirma tu cuenta y comienza a administrar tus </span>Clientes.</h1>
      <h2 className="font-black tracking-wide text-transparent text-7xl from-red-700 bg-gradient-to-b via-orange-700 to-orange-500 bg-clip-text">COLISEO GYM</h2>
      
    </div>

    <div className="px-5 py-10 my-5 mt-20 shadow-lg md:mt-5 rounded-xl shadow-orange-500 backdrop-blur-3xl animate-fade-left animate-duration-1000 ">
    
    {!cargando && <ErrorMsg
      errorMsg={errorMsg}
    />}

      {cuentaConfirmada && (
                    <Link
                      className='block my-5 font-black text-center text-gray-500 animate-fade-up animate-delay-500'
                      to="/">Iniciar Sesión</Link>
                  ) }
       
      </div>
    </>
  )
}

export default ConfimAccount;