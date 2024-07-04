import { createContext, useState, useEffect } from "react";
import clienteAxios from "../config/axios";

const ClientsContext = createContext();


const ClientsProvider = ({children}) => {

    const [clients, setClients]= useState([]);
    



  return (
    <ClientsContext.Provider
    value={{
      clients
    }}>
        {children}
    </ClientsContext.Provider>
  )
}

export {
    ClientsProvider
}


export default ClientsContext;