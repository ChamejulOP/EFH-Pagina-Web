import Aos from "aos";
import React from "react";

Aos.init();
export const Abanner = () => {
    return(
        <div>
            <div className="a-banner">
            <h1 data-aos="zoom-in" data-aos-duration="700"> Sobre Nosotros </h1>
            </div> 
        </div>
    )
}