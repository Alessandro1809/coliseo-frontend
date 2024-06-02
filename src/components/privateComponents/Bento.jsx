import banner from '../../assets/banner.jpg'
import { Link } from 'react-router-dom';
const Bento = () => {
  return (
    <>
    <section className="grid grid-cols-4 gap-4 p-2">
    <article className="col-span-4 bg-[#0d0d0d]/70 rounded-lg h-64 relative overflow-hidden">
        <div className="relative h-full w-full">
            <img src={banner} alt="" className="w-full h-full object-cover rounded-lg" />
            <div className="absolute inset-0 flex flex-col items-center justify-center">
                <p className="text-[#ffb58d] text-3xl font-bold text-center mix-blend-difference mb-4">¡Bienvenido!</p>
                <p className='text-[#ffb58d] text-2xl font-bold text-center mix-blend-difference'>Gestiona, motiva, supera con FitFlare</p>
                
            </div>
            <div className='flex justify-between gap-12 absolute inset-0 items-end mx-4 pb-1 text-[#ffb58d]'>
                    <Link className='text-sm font-bold text-center mix-blend-difference'>Novedades</Link>
                    <Link className='text-sm font-bold text-center mix-blend-difference'>Preguntas frecuentes</Link>
                </div>
        </div>
    </article>
    <article className="md:col-span-2 w-full col-span-4">
        <div className="bg-[#0d0d0d]/70 rounded-lg p-4 h-full">
            <h3 className="text-xl md:text-2xl text-[#ffb58d] text-center mb-4 font-medium tracking-wider">Administra las rutinas de tus clientes</h3>

            <article className="text-lg mx-5 text-pretty text-start text-[#ffb58d]">
                <p>Administra de manera rápida y fácil la rutina de ejercicios de tus clientes, <span className="text-[#FFFFFF]">editando</span> las rutinas que ya creaste o <span className="text-[#FFFFFF]">creando</span> nuevas rutinas que los guien ayuden a llegar a su objetivo!</p>
                <p>Asegurate de que tus clientes se mantengan motivados y aporta a ellos de manera positiva.</p>
                <p>¡Crea rutinas de ejercicios y administralas de manera sencilla!</p>
                <div className="h-0.5 w-full bg-[#ffd3d3] mt-3"></div>
            </article>

            <footer className=" grid grid-flow-col grid-cols-2 items-center justify-between mx-10 mt-10 gap-12">
            <button type="button" id="crear-rutinas" className="w-auto h-auto rounded-md bg-[#ffb58d] hover:bg-[#ffd3d3]/70 text-[#0d0d0d] transition-all cursor-pointer duration-300 text-lg font-medium">Crear</button>
            <button type="button" id="editar-rutinas" className="w-auto h-auto rounded-md text-[#ffb58d] hover:bg-[#ffb58d]/60 hover:cursor-pointer cursor-pointer transition-all duration-300 border-b border-b-[#ffb58d] text-lg font-medium hover:text-[#0d0d0d]">Editar</button>

            </footer>
        </div>
    </article>
    <article className="md:col-span-2 w-full col-span-4">
        <div className="bg-[#0d0d0d]/70 rounded-lg p-4 h-auto text-[#ffb58d]">
            <h3 className="text-xl md:text-2xl text-[#ffb58d] text-center font-medium tracking-wider mb-4">Administrar membresias</h3>
            <article className="text-lg mx-5 text-pretty text-start">
                <p>Manten actualizada la inforación de las membrecias que ofreces a tus clientes, <span className="text-[#FFFFFF]">editando</span> las membresias que ya creaste o <span className="text-[#FFFFFF]">creando</span> mebresias nuevas e informa a todos de los cambios que hagas o novedades en tu negocio!</p>
                <p>Mantener a tus clientes informados tambien es importante animate a probar nuestra herraienta de notificaciones para mayor transpparencia.</p>
                <p>¡Crea mebresias de entreno y administralas mejor que nunca!</p>
                <div className="h-0.5 w-full bg-[#ffd3d3] mt-3"></div>
            </article>

            <footer className=" grid grid-flow-col grid-cols-2 items-center justify-between mx-10 mt-10 gap-12 ">
            <button type="button" id="crear-rutinas" className="w-auto h-auto rounded-md bg-[#ffb58d] hover:bg-[#ffd3d3]/70 text-[#0d0d0d] transition-all cursor-pointer duration-300 text-lg font-medium ">Crear</button>
            <button type="button" id="editar-rutinas" className="w-auto h-auto rounded-md hover:bg-[#ffb58d]/60 hover:cursor-pointer cursor-pointer transition-all duration-300 border-b border-b-[#ffb58d] text-lg font-medium hover:text-[#0d0d0d]">Editar</button>
            </footer>
        </div>
    </article>
    

</section>

    </>
  )
}

export default Bento;
