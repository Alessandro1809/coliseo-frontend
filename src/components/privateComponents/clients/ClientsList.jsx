 import { useState, useEffect } from "react";
 import clienteAxios from "../../../config/axios";
 const ClientsList = () => {

    const [clients, setClients] = useState([]);

    useEffect(() => {
      const getClients = async () => {
        const response = await clienteAxios("/cliente");
        const data = await response.json();
        setClients(data);
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
