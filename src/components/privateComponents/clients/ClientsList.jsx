 import { useState, useEffect } from "react";
 import clienteAxios from "../../../config/axios";
 const ClientsList = () => {

    const [clients, setClients] = useState([]);

    useEffect(() => {
      const getClients = async () => {
        try { 
          const { data } = await clienteAxios("/cliente");
        
        setClients(data);
        } catch (error) {
          console.log(error);
        }
      }
      getClients();
    }, []);


  return (
    <>
        {clients && clients.map(client => (
            <div key={client._id}>
                <p className="text-white text-center">{client.name}</p>
            </div>
        ))

    }
    </>
  )
}

export default ClientsList;
