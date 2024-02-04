import { Link } from "react-router-dom";
const Header = () => {
  return (
    <>
        <header id="header-nav" className="fixed top-0 z-50 w-full px-6 py-4">
  <div className="flex items-center justify-between gap-16 mx-auto max-w-12xl">
  <nav
      id="header-menu"
      className="fixed w-full h-dvh inset-0 bg-[#151a36]/90 text-2xl flex flex-col items-center justify-center gap-8 -translate-y-full transition-transform duration-300 target:translate-y-0 md:static md:h-[initial] md:bg-[initial] md:text-xl md:flex-row md:translate-y-[initial] text-white"
    >
      <Link to='#'>Registro</Link>
      <Link to='#'>Clientes</Link>
      <Link to='#'>Membresias</Link>
      <Link to='#'>Perfil</Link>
      <Link to='#'>Contacto</Link>
      
     
     
    </nav>
    
    </div>
    <button className="relative transition-all duration-200 w-28 hover:scale-105">
    <div className="p-0.5 bg-gradient-to-r from-yellow-500 to-rose-500 bg-clip-border rounded-full">
  <div className="text-white bg-black rounded-full">
    Cerrar sesión
  </div>
</div>
    </button>
   </header> 
    </>
  )
}
export default Header;
