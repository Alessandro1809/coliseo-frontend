import logo from '../../assets/logo_fitflare.webp'
const ClientsAdmin = () => {
  return (
    <>
     <section className="flex flex-col items-center py-16 mx-auto font-bold text-center">
        <picture>
          <img src={logo} alt="FITFLARE_LOGO" className='w-32' />
        </picture>
        <h1 className="-mt-8 text-lg">FITFLARE</h1>
     </section>
    </>
  )
}

export default ClientsAdmin;