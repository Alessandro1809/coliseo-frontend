import { useState, useEffect } from "react";
import logo from '../../assets/logo_fitflare.webp'
import Menu from "../Iconos/Menu";
import Close from "../Iconos/Close";
import CloseSesion from "../Iconos/CloseSesion";
import useAuth from "../../hooks/useAuth";
import NavLinks from "./NavLinks";

const Header = () => {
  
  const [isTopVisible, setTopVisible] = useState(false);
  const [isMdScreen, setIsMdScreen] = useState(false);
  
  const {closeSesion}=useAuth();
  // Funciones para manejar el cambio de visibilidad
  const toggleTop = () => setTopVisible(!isTopVisible);
  
  useEffect(() => {
    const mediaQuery = window.matchMedia('(min-width: 768px)');
    const handleMediaQueryChange = (e) => {
      setIsMdScreen(e.matches);
    };

    // Comprueba el estado inicial
    handleMediaQueryChange(mediaQuery);

    // Escucha cambios en el media query
    mediaQuery.addEventListener('change', handleMediaQueryChange);

    // Limpieza al desmontar el componente
    return () => {
      mediaQuery.addEventListener('change', handleMediaQueryChange);
    };
  }, []);
  
  return (
    <>
        <header id="header-nav" className="fixed top-0 z-50 w-full px-2 py-4">
          <div className="flex items-center justify-between gap-8 mx-auto max-w-12xl">
          <img src={logo} alt="FITFLARE_LOGO" className='w-16' />
          <div className="flex justify-center md:hidden lg:hidden">
          <div>
      {/* Botón para toggle offcanvas Top */}
      <button
        type="button"
        className="menu_icon inline-flex items-center px-0.5 py-0.5 text-sm font-semibold text-white bg-transparent border border-transparent rounded-full gap-x-2 hover:shadow-lg hover:shadow-red-400 disabled:opacity-50 disabled:pointer-events-none dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600 z-50 -mt-10 justify-center top-[50%] left-[50%]"
        onClick={toggleTop}
      >
        {isTopVisible ? <Close/> : <Menu/>}
      </button>

      {/* Offcanvas Top */}
      <div
        className={`fixed top-0 inset-x-0 transition-all duration-1000 transform ${isTopVisible ? 'translate-y-0' : '-translate-y-full'} max-h-960 h-full w-full z-80 border-b bg-red-800/90 dark:border-gray-700 ${isTopVisible ? 'translate-y-0' : '-translate-y-full'}`}
        tabIndex="-1"
      >
               <section className="flex flex-col gap-12 text-3xl font-medium tracking-wider text-center text-white py-28 text-pretty">

                 <NavLinks/>                
               </section>
      </div>

      
    </div>
          </div>
      
            <nav
              
                className="fixed w-full h-dvh inset-0 text-2xl flex flex-col items-center justify-center gap-8 -translate-y-full transition-transform duration-300 target:translate-y-0 md:static md:h-[initial] md:bg-[initial] md:text-xl md:flex-row md:translate-y-[initial] text-white"
              >
                <NavLinks/>     

              </nav>
              <button className="w-auto text-sm transition-all duration-200 md:w-52 hover:scale-105 md:text-xs "
              onClick={closeSesion}>
                <div className="p-0.5  bg-gradient-to-r from-yellow-500 to-rose-500 bg-clip-border rounded-full h-11">
                      <div className="p-2 text-white bg-black rounded-full h-10 items-center justify-center flex text-sm ">
                          <span >{isMdScreen ? (
                            <p>Cerrar Sesión</p>
                        ) : (
                          <CloseSesion/>
                        )}</span>
                      </div>
                </div>
              </button>
            </div>
              
   </header> 
    </>
  )
}
export default Header;
