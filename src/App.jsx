import {BrowserRouter, Route, Routes} from 'react-router-dom';
import AuthLayout from './layout/AuthLayout';
import Login from './pages/login';
import Register from './pages/Register';
import ConfimAccount from './pages/ConfimAccount';
import ForgotPassword from './pages/ForgotPassword';
import NewPass from './pages/NewPass';
function App() {
  
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<AuthLayout/>}>
            <Route index element={<Login/>}/>
            <Route path='registrar' element={<Register/>}/>
            <Route path='olvide-password' element={<ForgotPassword/>}/>
            <Route path='olvide-password/:token' element={<NewPass/>}/>
            <Route path='confirmar-cuenta/:token' element={<ConfimAccount/>}/>
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
