import "./App.css";
import "bootstrap/dist/css/bootstrap.css";
import { useEffect } from 'react';
import { useAuth } from "./hooks/auth/useAuth";
import Router from "./Router";
import { useSelector } from "react-redux";

function App() {
  const { checkLoginStatus } = useAuth()
  const { errorMessage } = useSelector(state => state.errors)

  useEffect(() => {
    checkLoginStatus()
  }, [])
  
  return (
    <>
    <div>{errorMessage}</div>
    <Router />
    </>
  );
}

export default App;
