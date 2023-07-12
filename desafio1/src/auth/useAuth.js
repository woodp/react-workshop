import { useDispatch, useSelector } from "react-redux"
import { login, logout } from "../store/slices/authSlice"
import { resetErrors, setError } from "../store/slices/errorsSlice"

export const useAuth = () => {
    const { status } = useSelector(state => state.auth)
    const dispatch = useDispatch()

    const checkData = async () => {
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

    const doLogout = () => {
        localStorage.removeItem('user');
        dispatch(logout())
    }

 
    return{
        status,
        checkData,
        doLogout,
    }
}