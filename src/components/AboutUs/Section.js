import empresa from "../../assets/img/nosotros1.png";
import nosotros2 from "../../assets/img/nosotros2.png";
import nosotros3 from "../../assets/img/nosotros3.png";
import maquina1 from "../../assets/img/Maquina1.jpg";
import maquina2 from "../../assets/img/Maquina2.jpg";
import maquina3 from "../../assets/img/Maquina3.jpg";
import React from "react";
import { Col, Row } from "react-bootstrap";
import Aos from "aos";
Aos.init();
export const Asection = () => {
    return (
        <div>
            <div data-aos="fade-up" data-aos-duration="500">
                <h1 className="us-title"><span>Nuestra empresa</span></h1>
                <div className="us-card">
                    <img className="us-img" src={empresa}/>
                    <p className="us-text">
                        EFH industrial se encarga de brindarte empaques
                        flexibles de alta calidad con entregas en los
                        tiempos acordados, manteniendo así una buena
                        imagen, generando tranquilidad y confianza a
                        nuestros clientes, además de asesorías para facilitarle
                        todo tipo de dudas que puedan surgir en el camino.
                    </p>
                </div>
            </div>
            
            <div data-aos="fade-up" data-aos-duration="500">
                <h1 className="mision-title"><span>Misión</span></h1>
                <div className="mision-card">
                    
                    <img className="mision-img" src={nosotros2}/>
                    <p className="mision-text">
                            Proporcionar a nuestros clientes
                            empaques flexibles de alta calidad,
                            con entregas en los tiempos
                            acordados, superando sus
                            expectativas técnicas y brindándolas
                            asesoría técnica permanente
                    </p>
                </div>
            </div>
            
            <div data-aos="fade-up" data-aos-duration="500">
                <h1 className="vision-title"><span>Visión</span></h1>
                <div className="vision-card">
                    
                    <img className="vision-img" src={nosotros3}/>
                    <p className="vision-text">
                            Convertirnos en una de las mejores
                            empresas del medio, dando
                            alternativas innovadoras y
                            funcionales a nuestros clientes, para
                            ello trabajamos en la mejora continua
                            de nuestros procesos, capacitación de
                            nuestros colaboradores en un marco
                            de respeto mutuo y cuidado de
                            nuestro medio ambiente ligados a los
                            reglamentos establecidos.
                    </p>
                </div>
            </div>
            

            <div data-aos="fade-up" data-aos-duration="500">
                <h1 className="maquina-title" id="machine-top"> <span>Nuestra Maquinaria</span></h1>
                <Row className="maquina-row">
                    <Col> <img className="maquina-img" src={maquina1}/> </Col>
                    <Col> <img className="maquina-img" src={maquina2}/> </Col>
                    <Col> <img className="maquina-img" src={maquina3}/> </Col>

                </Row>
            </div>
        </div>
        
        
    );

}