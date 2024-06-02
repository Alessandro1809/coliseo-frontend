import logo from '../../assets/logo_fitflare.webp'
import Bento from '../../components/privateComponents/Bento';
const ClientsAdmin = () => {
  return (
    <>
     <section className="flex flex-col items-center py-16 mx-auto font-bold text-center text-pretty">
        <picture>
          <img src={logo} alt="FITFLARE_LOGO" className='w-32' />
        </picture>
        <h1 className="-mt-8 text-lg tracking-wider">FITFLARE</h1>
        <p>Gestiona ◉ Motiva ◉ Supera</p>
        
     </section>
     <Bento/>
    </>
  )
}

export default ClientsAdmin;