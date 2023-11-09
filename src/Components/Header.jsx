import React from 'react'
import {
    MDBContainer,
    MDBNavbar,
    MDBNavbarBrand
  } from 'mdb-react-ui-kit';
  

function Header() {
  return (
    <div>
        <MDBNavbar light bgColor='light' >
        <MDBContainer fluid >
          <MDBNavbarBrand href='' >
          <i class="fa-solid fa-cart-shopping fa-beat me-3"></i>
             E CART
          </MDBNavbarBrand>
        </MDBContainer>
      </MDBNavbar>
    </div>
  )
}

export default Header