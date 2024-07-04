import {BrowserRouter, Route, Routes} from 'react-router-dom';
import AuthLayout from './layout/AuthLayout';
import Login from './pages/publicRoutes/Login';
import Register from './pages/publicRoutes/Register';
import ConfimAccount from './pages/publicRoutes/ConfimAccount';
import ForgotPassword from './pages/publicRoutes/ForgotPassword';
import NewPass from './pages/publicRoutes/NewPass';
import { AuthProvider } from './context/AuthProvider';
import { ClientsProvider } from './context/ClientsProvider';
import ProtectedLayout from './layout/ProtectedLayout';
import ClientsAdmin from './pages/privateRoutes/ClientsAdmin';
import { GoogleOAuthProvider } from '@react-oauth/google';

function App() {
  
  return (
    <>
    <GoogleOAuthProvider clientId="903352777938-truc1nmqquvepjmor79749k3fhgr7sbv.apps.googleusercontent.com">
      <BrowserRouter>
        <AuthProvider>
          <ClientsProvider>
            <Routes>
              
              <Route path='/' element={<AuthLayout/>}>
                <Route index element={<Login/>}/>
                <Route path='registrar' element={<Register/>}/>
                <Route path='olvide-password' element={<ForgotPassword/>}/>
                <Route path='olvide-password/:token' element={<NewPass/>}/>
                <Route path='confirmar-cuenta/:token' element={<ConfimAccount/>}/>
              </Route>

              <Route path='/admin' element={<ProtectedLayout/>} >
                <Route index element={<ClientsAdmin/>}/>
              </Route>

            </Routes>
            </ClientsProvider>
          </AuthProvider>
      </BrowserRouter>
      </GoogleOAuthProvider>
    </>
  )
}

export default App
