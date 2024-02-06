/* eslint-disable react/prop-types */
//Auth Provider
import { useState, useEffect, createContext } from "react";
import clienteAxios from "../config/axios";

const AuthContext = createContext();

const AuthProvider=({children})=>{
      
    const [charging,setCharging]= useState(true);
    const [auth, setAuth]=useState({});
    
    
    useEffect(()=>{

        const authUser = async ()=>{
            
            const fitflare_token = localStorage.getItem('fitflare_token');
            
            //validation of token before auth
            if (!fitflare_token){
                setCharging(false);
                return
            }
           //headers config
            const config ={
                headers:{
                    "Content-Type": "application/json",
                    Authorization: `Bearer ${fitflare_token}`
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
    },[]);

    const closeSesion=()=>{
        localStorage.removeItem('fitflare_token');
        setAuth({});
    }

    //Define what we want or need avaiable
    return(
        <AuthContext.Provider
        value={{
            auth,
            setAuth,
            charging,
            closeSesion
        }}>
            {children}
        </AuthContext.Provider>
    )
} 

export {
    AuthProvider
}

export default AuthContext;
