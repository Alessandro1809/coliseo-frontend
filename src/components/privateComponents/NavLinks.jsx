 import { Link } from "react-router-dom";
 
 const NavLinks = () => {
  return (
    <>
    
      <Link to='/admin' className="text_glowing">Inicio</Link>
      <Link to='/clientes' className="text_glowing">Clientes</Link>
      <Link to='/membresias' className="text_glowing">Membresias</Link>
      <Link to='/perfil' className="text_glowing">Perfil</Link>
      <Link to='/soporte' className="text_glowing">Soporte</Link>
      
    </>
  )
}

export default NavLinks;
