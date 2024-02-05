 import { Link } from "react-router-dom";
 
 const NavLinks = () => {
  return (
    <>
    
    <Link to='/admin' className="text_glowing">Inicio</Link>
                <Link to='/admin' className="text_glowing">Clientes</Link>
                <Link to='/admin' className="text_glowing">Membresias</Link>
                <Link to='/admin' className="text_glowing">Perfil</Link>
                <Link to='/admin' className="text_glowing">Contacto</Link>
    </>
  )
}

export default NavLinks;
