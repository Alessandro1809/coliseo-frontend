import { Outlet } from "react-router-dom";
const AuthLayout = () => {
  return (
    <>
      
        <main className="absolute inset-0 -z-10 w-full  [background:radial-gradient(125%_125%_at_50%_10%,#000_50%,#990000_75%)] max-h-fit min-h-full">
          <div className="container items-center gap-12 p-4 mx-auto mt-12 md:grid-cols-2 md:grid">
          <Outlet/>
          </div>
        </main>
    </>
  )
}

export default AuthLayout;