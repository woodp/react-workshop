import { createContext, useState } from 'react';
import {
  MDBInput,
  MDBCol,
  MDBRow,
  MDBCheckbox,
  MDBBtn
} from 'mdb-react-ui-kit';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const UserContext = createContext(null)

export default function App() {
  const [userName, setUserName ] = useState('')
  const [password, setPassword ] = useState('')
  const [loggedIn, setLoggedIn ] = useState(null)

  const loginSubmit = (event) => {
    event.preventDefault();
    if (userName == 'admin@admin.com' && password == '123') {
      setLoggedIn(true)
    } else {
      toast.error("Incorrect username/password")
    }
  }

  return (
      loggedIn ?
        <UserContext.Provider value={loggedIn}>
          <p>logged in</p>
        </UserContext.Provider>
        :
        <UserContext.Provider value={loggedIn}>
          <ToastContainer />
          <form onSubmit={loginSubmit}>
            <MDBInput className='mb-4' type='email' id='email' label='Email address' onChange={e => setUserName(e.target.value)} />
            <MDBInput className='mb-4' type='password' id='password' label='Password' onChange={e => setPassword(e.target.value)} />

            <MDBRow className='mb-4'>
              <MDBCol className='d-flex justify-content-center'>
                <MDBCheckbox id='form1Example3' label='Remember me' defaultChecked />
              </MDBCol>
              <MDBCol>
                <a href='#!'>Forgot password?</a>
              </MDBCol>
            </MDBRow>

            <MDBBtn type='submit' block>
              Sign in
            </MDBBtn>
          </form>
        </UserContext.Provider>
  );
}