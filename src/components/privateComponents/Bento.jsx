const Bento = () => {
  return (
    <>
        <section className="grid grid-cols-4 gap-4 p-2">
            <article className="col-span-2 w-full">
                <div className="bg-[#202020]/70 rounded-lg p-4">
                    <h3 className="text-xl md:text-2xl text-[#ffd3d3] text-center mb-4 font-medium tracking-wider">Administra las rutinas de tus clientes</h3>
                    <article className="text-lg mx-5">
                        <p>Administra de manera rápida y fácil la rutina de ejercicios de tus clientes, editando las rutinas que ya creaste o agregando nuevas rutinas!</p>
                        <p>Asegurate de que tus clientes se mantengan motivados.</p>
                        <p>¡Crea rutinas de ejercicios y administralas de manera sencilla!</p>
                        <div className="h-0.5 w-full bg-[#ffd3d3] mt-3"></div>
                    </article>
                    <div className="z-50 flex justify-between mx-10 my-4">
                        <button className="w-auto h-8 rounded-md bg-[#ffd3d3] hover:bg-[#ffd3d3]/70 p-2  text-[#202020] transition-all hover:scale-105">Crear rutinas</button>
                        
                        <button className="w-auto h-8 rounded-md hover:bg-[#ffd3d3]/40 hover:cursor-pointer">Editar rutinas</button>    
                    </div>
                </div>
            </article>
            <article className="col-span-2  w-full ">
                <div className="bg-[#202020]/70 rounded-lg p-4">
                <h3 className="text-xl md:text-2xl text-[#ffd3d3] text-center font-medium tracking-wider">Administrar membresias</h3>
                </div>
            </article>
            <article className="col-span-4 bg-[#202020]/70 rounded-lg">
                <h1 className="text-3xl">c</h1>
            </article>
        </section>

    </>
  )
}

export default Bento;
