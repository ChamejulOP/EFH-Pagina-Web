import {Row, Col} from "react-bootstrap";
import expo0 from "../../assets/img/expo0.jpeg";
import expo1 from "../../assets/img/expo1.jpeg";
import expo2 from "../../assets/img/expo2.jpeg";
import expo3 from "../../assets/img/expo3.jpeg";
import expo4 from "../../assets/img/expo4.jpeg";
import expo5 from "../../assets/img/expo5.jpeg";

export const ACsection = () =>{
    return (
        <div>
            <div className="ac-grid" data-aos="fade-up" data-aos-duration="500">
                <h1 className="activities-title" id="title-top"> <span>Expoplast Perú 2022</span></h1>
                <Row md={3} className="activities-row">
                    <Col> <img className="activities-img" src={expo0}/> </Col>
                    <Col> <img className="activities-img" src={expo1}/> </Col>
                    <Col> <img className="activities-img" src={expo2}/> </Col>
                    <Col> <img className="activities-img" src={expo3}/> </Col>
                    <Col> <img className="activities-img" src={expo4}/> </Col>
                    <Col> <img className="activities-img" src={expo5}/> </Col>
                </Row>
                <Row className="activities-row">
                    
                </Row>
                <p>Expo Plast Perú - Feria internacional de la industria del plástico. EXPO PLAST PERÚ es la puerta de ingreso a la Industria del Plástico y sectores afines del Perú, que hoy se presenta como una de las economías de mayor evolución en el presente siglo en Latinoamérica.</p>
            </div>
        </div>
        
        
    );

}