import Aos from "aos";
import React from "react";

Aos.init();
export const ACbanner = () => {
    return(
        <div>
            <div className="ac-banner">
            <h1 data-aos="zoom-in" data-aos-duration="700"> Actividades </h1>
            </div> 
        </div>
    )
}