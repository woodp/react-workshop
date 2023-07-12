import { Link } from 'react-router-dom'
import { useEffect, useState } from 'react';
import { MDBContainer, MDBNavbar, MDBNavbarBrand, MDBNavbarToggler, MDBNavbarNav, MDBIcon, MDBCollapse } from 'mdb-react-ui-kit';
import { useSelector } from 'react-redux';
import { useAuth } from '../auth/useAuth';

export const Menu = () => {
  const { user } = useSelector(state => state.auth)
  const { doLogout } = useAuth()

  const clickLogout = () => {
    doLogout()
  }

  return (
    <MDBNavbar expand='lg' light bgColor='light'>
      <MDBContainer fluid>
        <MDBNavbarBrand href='#'>Bienvenido, {user.firstName || "Amigo"}</MDBNavbarBrand>
        
        <MDBNavbarNav>
          <Link className='menu__link' to='/'>
            Gallery
          </Link>
          <Link className='menu__link' to='/register'>
            Registrarse
          </Link>
          <Link className='menu__link' to='#logout' onClick={doLogout}>
            Cerrar Sesión
          </Link>
        </MDBNavbarNav>

      </MDBContainer>
    </MDBNavbar>
  );
}