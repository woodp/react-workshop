import "./App.css";
import "bootstrap/dist/css/bootstrap.css";
import { Navigate, Route, Routes } from 'react-router-dom'
import GalleryRow from "./components/GalleryRow";
import LoginPage from "./pages/LoginPage";
import RegisterPage from "./pages/RegisterPage";
import { useEffect } from 'react';
import { useDispatch, useSelector } from "react-redux";
import { login } from "./store/slices/authSlice";
import { setError, resetErrors } from "./store/slices/errorsSlice"

function App() {
  const { status } = useSelector(state => state.auth)
  const dispatch = useDispatch()

  useEffect(() => {
    const checkData = async()=>{
      try {
          const data = localStorage.getItem('user')
          const jsonData = await JSON.parse(data)
          if(jsonData!==null){
              dispatch(login(jsonData))
              localStorage.setItem('user', JSON.stringify(data))
          }
      } catch (error) {
          dispatch(setError('Credenciales incorrectas'))
          setTimeout(() => {
              dispatch(resetErrors())
          }, 100);
      }
    }
  
    checkData()
  }, [dispatch])
  
  
  return (
    <Routes>
      {
        (status === 'authenticated') ?
        (
          <>
            <Route path="/" element={ <GalleryRow />} />
            <Route path='/*' element={<Navigate to="/" />} />
          </>

        ) :
        (
          <>
            <Route path="/login" element={<LoginPage /> } />
            <Route path="/register" element={<RegisterPage /> } />
            <Route path='/*' element={<Navigate to="/login" />} />
          </>
        )
      
      }
    </Routes>
  );
}

export default App;
