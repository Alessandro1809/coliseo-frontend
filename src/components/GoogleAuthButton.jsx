import { useNavigate } from "react-router-dom";
import clienteAxios from "../config/axios";
import useAuth from "../hooks/useAuth";
import { GoogleLogin } from '@react-oauth/google';
import { jwtDecode } from "jwt-decode";

 const GoogleAuthButton = () => {

    const navigate = useNavigate();
    const {setAuth}=useAuth();

  return (
   <>
         <button className='hover:scale-105 transition-all duration-300 animate-fade-up'>
                <GoogleLogin 
                
                theme='filled_black' 
                width='40px'
                shape="pill"
                onSuccess={ async credentialResponse => {
                    const decode = jwtDecode(credentialResponse?.credential);
                    
                    const {name,email,sub}= decode;
                    try {
                    const {data} = await clienteAxios.post('entrenador/google-registry',{email,name,sub});
                    localStorage.setItem('fitflare_token', data.token);
                    setAuth(data);
                    navigate('/admin');
                    } catch (error) {
                    console.log(error.response)
                    }

                }}
                onError={() => {
                    navigate('/');
                }}
                
                />
        </button>
   </>
  )
}
export default GoogleAuthButton;
