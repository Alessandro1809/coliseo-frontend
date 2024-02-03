//Auth Provider
import { useState, useEffect, createContext } from "react";
import clienteAxios from "../config/axios";
const AuthContext = createContext();

const AuthProvider=({children})=>{

    const [auth, setAuth]=useState({});

    useEffect(()=>{
        const authUser = async ()=>{
           const token = localStorage.getItem('coliseo_temp_token_');
            //validation of token before auth
           if (!token) return;
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

           
        }
        authUser();
    },[])
    //Define what we want or need avaiable
    return(
        <AuthContext.Provider
        value={{
            auth,
            setAuth
        }}>
            {children}
        </AuthContext.Provider>
    )
} 

export {
    AuthProvider
}

export default AuthContext;
