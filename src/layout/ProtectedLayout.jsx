import { Outlet, Navigate } from "react-router-dom";
import useAuth from "../hooks/useAuth";
const ProtectedLayout = () => {

  const {auth,charging} =useAuth();
  if (charging) 'cargando'

  
  return (
    <>
      {auth?._id ? (
      <main className="container mx-auto mt-10">
        <Outlet/>
      </main> 
      ): <Navigate to='/' />}
    </>
  )
}
export default ProtectedLayout
