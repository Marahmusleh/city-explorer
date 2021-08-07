import React, { Component } from 'react';
import 'mdb-react-ui-kit/dist/css/mdb.min.css';
import {
    MDBNavbar,
    MDBNavbarNav,
    MDBNavbarItem,
    MDBNavbarLink,
    MDBNavbarToggler,
    MDBContainer,
    MDBIcon } from 'mdb-react-ui-kit';

export class Header extends Component {
  render() {
    return (
        <header>
          <MDBNavbar expand='lg' light bgColor='white'>
            <MDBContainer fluid>
              <MDBNavbarToggler
                aria-controls='navbarExample01'
                aria-expanded='false'
                aria-label='Toggle navigation'
              >
                <MDBIcon fas icon='bars' />
              </MDBNavbarToggler>
              <div className='collapse navbar-collapse' id='navbarExample01'>
                <MDBNavbarNav right className='mb-2 mb-lg-0'>
                  <MDBNavbarItem active>
                    <MDBNavbarLink aria-current='page' href='#'>
                      Home
                    </MDBNavbarLink>
                  </MDBNavbarItem>
                  <MDBNavbarItem>
                    <MDBNavbarLink href='#'>Location</MDBNavbarLink>
                  </MDBNavbarItem>
                  <MDBNavbarItem>
                    <MDBNavbarLink href='#'>Weather</MDBNavbarLink>
                  </MDBNavbarItem>
                  <MDBNavbarItem>
                    <MDBNavbarLink href='#'>Movies</MDBNavbarLink>
                  </MDBNavbarItem>
                  <MDBNavbarItem>
                    <MDBNavbarLink href='#'>Restaurants</MDBNavbarLink>
                  </MDBNavbarItem>
                </MDBNavbarNav>
              </div>
            </MDBContainer>
          </MDBNavbar>
    
          <div
            className='p-5 text-center bg-image'
            style={{ backgroundImage: "url('https://www.travel-tramp.com/wp-content/uploads/2018/09/map-3578213_1920.jpg')", height: 700}}
          >
            <div className='mask' style={{ backgroundColor: 'rgba(0, 0, 0, 0.6)' }}>
              <div className='d-flex justify-content-center align-items-center h-100'>
                <div className='text-white'>
                  <h2 className='mb-3'>City Explorer</h2>
                  <h3 className='mb-3'>The World is yours to explore!</h3>
                  <a className='btn btn-outline-light btn-lg' href='#!' role='button'>
                    Call to action
                  </a>
                </div>
              </div>
            </div>
          </div>
        </header>
    );
  }
  }


export default Header;
