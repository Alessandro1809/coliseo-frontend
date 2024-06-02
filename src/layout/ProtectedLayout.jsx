import { Outlet, Navigate } from "react-router-dom";
import useAuth from "../hooks/useAuth";
import Header from "../components/privateComponents/header";
import Footer from "../components/privateComponents/Footer";

const ProtectedLayout = () => {

  const {auth,charging} =useAuth();
  
  if (charging){
    console.log(charging)
    return 'cargando...'
  }
  
  return (
    <>
    <Header/>
      {auth?._id?  (
      <main className="mx-auto text-white relative inset-0 -z-10 w-full  [background:radial-gradient(125%_125%_at_50%_10%,#000_30%,#990000_95%)] max-h-fit min-h-full ">
        
        <Outlet/>
       
      </main> 
      ): <Navigate to='/'/>}
    <Footer/>
    </>
  )
}
export default ProtectedLayout
