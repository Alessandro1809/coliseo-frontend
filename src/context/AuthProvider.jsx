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
            
            const token = localStorage.getItem('fitflare_token');
            
            //validation of token before auth
           if (!token){
            setCharging(false);

            return
           }
           //headers config
            const config ={
                headers:{
                    "Content-Type": "application/json",
                    Authorization: `Bearer ${token}`
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
