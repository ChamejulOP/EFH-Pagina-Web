import fabrica from "../../assets/img/fabrica.jpg";
import 'animate.css';
import React from "react";
import { Link } from "react-router-dom";
import Aos from "aos";
Aos.init();
export const Banner = () => {

    return(
        <div>
            <div className="b-container">
                <img className="b-img" src={fabrica} alt="Banner" />
                <div className="b-content" data-aos="fade-up" data-aos-duration="700"> 
                <h1 className="b-title"><span>Empaques Flexibles</span></h1>
                <h3 className="b-subtitle"><span>Empaques de alta calidad y buen precio.</span></h3>
                <button className="b-button"><Link to="/Contacto"><span>CONTACTANOS</span></Link></button>
                </div>
            </div>
        </div>
    )
}
