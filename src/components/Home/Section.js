import { Container, Row, Col, Tab, Nav, Button } from "react-bootstrap";
import { useState, useEffect } from "react";
import productos from "../../assets/img/productos.png";
import nosotros2 from "../../assets/img/nosotros2.png";
import nosotros3 from "../../assets/img/nosotros3.png";
import certificate from "../../assets/img/certificado.png";
import Aos from "aos";
import { Link } from "react-router-dom";
Aos.init();
const scrollToTop = () => {
    window.scrollTo(0, 0)
}
const scrollToMachine = () =>{
    window.scrollTo(1000,1000)
}
export const Section = () => {
    return(
        <div className="section">
            <div className="products-section" data-aos="fade-up" data-aos-duration="700">
                <div className="productos-content">
                    <h2 className="products-title"> <span>Productos</span></h2>
                    <p className="products-description"> Desarrollo, fabricación y comercialización de etiquetas y empaques flexibles de polietileno, BOPP y laminados en general para la industria.</p>
                    <button className="section-button" onClick="scrollToTop"><Link to="/Productos"><span>Más información</span></Link></button>
                </div>
                <img className="general-products-img" src={productos} alt="productos efh"/>
            </div>
            <div className="about-section" data-aos="fade-right" data-aos-duration="700">
                <img className="about-img" src={nosotros3} alt="sobrenosotros efh"/>
                <div className="about-content">
                    <h2 className="about-title" ><span>Sobre Nosotros</span></h2>
                    <p className="about-description" > Somos una empresa que se centra en la calidad de los productos.</p>
                    <button className="section-button" onClick="scrollToTop"><Link to="/Nosotros"><span>Más información</span></Link></button>
                </div>   
            </div>
            <div className="certificate-section" data-aos="fade-up" data-aos-duration="700">
                <div className="certificate-content">
                    <h2 className="certificate-title"><span>Certificado</span></h2>
                    <p className="certificate-description" > Contamos con el certificado bureau veritas, lo que comprueba nuestros productos de alta calidad</p>
                </div>   
                <img className="certificate-img" src={certificate} alt="nosotros efh"/>
            </div>
            
            <div className="machine-section" data-aos="fade-right" data-aos-duration="700">
            <img className="machine-img" src={nosotros2} alt="nosotros efh"/>
                <div className="machine-content">
                    <h2 className="machine-title" ><span>Maquinas</span></h2>
                    <p className="machine-description" > Tenemos maquinaria de alta calidad, cubriendo todos los procesos de creación, diseño e impresión de nuestros empaques flexibles</p>
                    <button className="section-button" onClick="scrollToMachine"><Link to="/Nosotros"><span>Más información</span></Link></button>
                </div>   
            </div>
        </div>
    )
}