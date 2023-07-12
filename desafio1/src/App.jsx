import "./App.css";
import "bootstrap/dist/css/bootstrap.css";
import { Navigate, Route, Routes } from 'react-router-dom'
import LoginPage from "./pages/LoginPage";
import RegisterPage from "./pages/RegisterPage";
import { useEffect } from 'react';
import { useAuth } from "./auth/useAuth";
import { GalleryPage } from "./pages/GalleryPage";

function App() {
  const { status, checkData } = useAuth()

  useEffect(() => {
    checkData()
  }, [])
  
  return (
    <Routes>
      {
        (status === 'authenticated') ?
        (
          <>
            <Route path="/" element={ <GalleryPage />} />
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
