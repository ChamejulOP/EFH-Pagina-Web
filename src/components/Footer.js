import React from 'react';
import { MDBFooter, MDBContainer, MDBRow, MDBCol, MDBIcon } from 'mdb-react-ui-kit';
import logo from "../assets/img/logo.png";
import { Link } from "react-router-dom";
export const Footer = () => {
    const scrollToTop = () => {
        window.scrollTo(0, 0)
    }
    const scrollToMachine = () =>{
        window.scrollTo(1000,1000)
    }
    return(
        <MDBFooter style={{ backgroundColor: "#ff820f" }} className='footer-efh'>
        <section className='footer-section'>
        <MDBContainer className='mt-5'>
            <MDBRow className='footer-content'>
            <MDBCol md="2" lg="2" xl="2" className='mx-auto mb-4'>
                <h6 className='text-uppercase fw-bold mb-4'>Enlaces rápidos</h6>
                <h6>
                <Link to="/" onClick="scrollToTop" className='text-reset'>
                    Inicio
                </Link>
                </h6>
                <h6>
                <Link to="/Productos" onClick="scrollToTop" className='text-reset'>
                    Productos
                </Link>
                </h6>
                <h6>
                <Link to='/Nosotros' onClick="scrollToTop" className='text-reset'>
                    Nosotros
                </Link>
                </h6>
                <h6>
                <Link to="/Contacto" onClick="scrollToTop" className='text-reset'>
                    Contáctanos
                </Link>
                </h6>
            </MDBCol>
            <MDBCol md="3" lg="2" xl="2" className='mx-auto mb-4'>
                <h6 className='text-uppercase fw-bold mb-4'>Dirección</h6>
                <h6 className='footer-p'>
                Av. Antonio Miroquesada 572
                Oficina 602 - Magdalena del Mar
                </h6>
            </MDBCol>
            <MDBCol md="3" lg="2" xl="2" className='mx-auto mb-md-0 mb-4'>
                <h6 className='text-uppercase fw-bold mb-4'>Contacto</h6>
                <div className='f-correo'>
                <MDBIcon icon="envelope" />
                <h6>ventas@efhindustrial.com</h6>
                </div>
                <div className='f-tel'>
                <MDBIcon icon="phone" />
                <h6>+(01) 961 124 874</h6>
                </div>
                
            </MDBCol>
            </MDBRow>
        </MDBContainer>
        </section>
        <div className='text-center p-4' style={{ backgroundColor: '#09141b' }}>
        <h6 className='copyright-efh'>© 2022 Copyright: EFH Industrial S.A.C</h6>
        </div>
    </MDBFooter>
    );
}