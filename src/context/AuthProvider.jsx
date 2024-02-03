//Auth Provider
import { useState, useEffect, createContext } from "react";
import clienteAxios from "../config/axios";
const AuthContext = createContext();

const AuthProvider=({children})=>{

    const [auth, setAuth]=useState({});
    const [charging,setCharging]= useState(true);

    useEffect(()=>{
        const authUser = async ()=>{
           const token = localStorage.getItem('coliseo_temp_token_');
            //validation of token before auth
           if (!token){
            setCharging(false);
            return ;
           }
           //headers config
            const config ={
                headers:{
                    "Content-Type":"application/json",
                    "Authorization":`Bearer ${token}`
                }
            }

            try {
    
                    const {data}= await clienteAxios('/entrenador/perfil', config);
                    //define the session of the user
                    setAuth(data);
                
            } catch (error) {
                console.log(error.response.data.msg);
                //in case of error set setAuth as {}
                setAuth({});
            }
            setCharging(false);

           
        }

        authUser();
    },[])
    //Define what we want or need avaiable
    return(
        <AuthContext.Provider
        value={{
            auth,
            setAuth,
            charging
        }}>
            {children}
        </AuthContext.Provider>
    )
} 

export {
    AuthProvider
}

export default AuthContext;
