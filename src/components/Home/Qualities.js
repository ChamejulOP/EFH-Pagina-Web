import { Container, Row, Col, Tab, Nav } from "react-bootstrap";
import { useState, useEffect } from "react";
import productos from "../../assets/img/productos.png";
import nosotros2 from "../../assets/img/nosotros2.png";
import Aos from "aos";
Aos.init();
export const Qualities = () => {
    return(
        <Container className="qualities">
            <Row className="qualities-row" data-aos="fade-up" data-aos-duration="700">
                <Col size={4} className="qualities-col">
                    <i class="fa-solid fa-bag-shopping"></i>
                    <p> Empaques de alta calidad</p>    
                </Col>
                <Col size={4} className="qualities-col">
                    <i class="fa-sharp fa-solid fa-award animate__animated animate__fadeIn"></i>
                    <p> Certificado varitas bureau</p>
                </Col>
                <Col size={4} className="qualities-col">
                    <i class="fa-sharp fa-solid fa-gear animate__animated animate__fadeIn"></i>
                    <p> Procesos limpios y ordenados</p>
                </Col>
            </Row>
        </Container>
    )
}