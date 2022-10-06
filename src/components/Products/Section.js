import productos from "../../assets/img/productos.png";
import bolsa1 from "../../assets/img/bolsa1.png";
import bolsa2 from "../../assets/img/bolsa2.png";
import poli1 from "../../assets/img/poli1.png";
import poli2 from "../../assets/img/poli2.png";
import pintura1 from "../../assets/img/pintura1.png";
import pintura2 from "../../assets/img/pintura2.png";
import pintura3 from "../../assets/img/pintura3.png";
import laminado1 from "../../assets/img/laminado1.png";
import laminado2 from "../../assets/img/laminado2.png";
import trilaminado1 from "../../assets/img/trilaminado1.png";
import trilaminado2 from "../../assets/img/trilaminado2.png";
import agro1 from "../../assets/img/agro1.png";
import agro2 from "../../assets/img/agro2.png";
import etiqueta1 from "../../assets/img/etiqueta1.png";
import etiqueta2 from "../../assets/img/etiqueta2.png";
import termocontraible1 from "../../assets/img/termocontraible1.png";
import termocontraible2 from "../../assets/img/termocontraible2.png";
import valvula1 from "../../assets/img/valvula1.png";
import valvula2 from "../../assets/img/valvula2.png";
import zipper1 from "../../assets/img/zipper.png";
import zipper2 from "../../assets/img/paneton.png";
import doypack1 from "../../assets/img/doypack1.png";
import doypack2 from "../../assets/img/doypack2.png";
import Aos from "aos";
Aos.init();


export const Psection = () => {
    return(
        <div className="p-all">
            <div className="p-section" data-aos="fade-up" data-aos-duration="500">
                    <h1> <span>Fabricación de empaques flexibles</span></h1>
                    <p> En EFH industrial S.A.C elaboramos empaques flexibles de distintos tipos y etiquetas.
                        Nuestro servicio y productos son de alta calidad.
                    </p>
                    <img className="p-img" src={productos} alt="productos-efh"/> 
            </div>
            <div className="p-products" data-aos="fade-up" data-aos-duration="500">
                <div className="p-bolsas-y-mangas">
                    <h2><span>Bolsas y Mangas</span></h2>
                    <p>Bolsas con solapa, fuelle, perforaciones y asas </p>
                    <img className="bolsa1 p-img" src={bolsa1}/><img className="bolsa2 p-img" src={bolsa2}/>
                </div>
                <div className="p-polipasacalles" data-aos="fade-up" data-aos-duration="500">
                    <h2><span>Polipasacalles</span></h2>
                    <p>Mangas, laminas y polipasacalles, cristal o color</p>
                    <img className="p-img" src={poli1}/><img className="p-img" src={poli2}/>
                </div>
                <div className="p-pinturas" data-aos="fade-up" data-aos-duration="500">
                    <h2><span>Pinturas</span></h2>
                    <p>Empaques de calidad en monocapa y coextrusión para la línea de pinturas</p>
                    <img className="p-img" src={pintura1}/><img className="pintura2 p-img" src={pintura2}/><img className="pintura3 p-img" src={pintura3}/>
                </div>
                <div className="p-laminado" data-aos="fade-up" data-aos-duration="500">
                    <h2><span>Laminado</span></h2>
                    <p>Empaques laminados con y sin impresión.</p>
                    <img className="laminado1 p-img" src={laminado1}/><img className="laminado2 p-img" src={laminado2}/>
                </div>
                <div className="p-trilaminado" data-aos="fade-up" data-aos-duration="500">
                    <h2><span>Trilaminado</span></h2>
                    <p>Productos con 3 sustratos adheridos</p>
                    <img className="trilaminado1 p-img" src={trilaminado1}/><img className="p-img" src={trilaminado2}/>
                </div>
                <div className="p-agro" data-aos="fade-up" data-aos-duration="500">
                    <h2><span>Agro</span></h2>
                    <p>Empaques de alta calidad en monocapa, coextrusión y otros productos afines.</p>
                    <img className="agro1 p-img" src={agro1}/><img className="agro2 p-img" src={agro2}/>
                </div>
                <div className="p-etiquetas" data-aos="fade-up" data-aos-duration="500">
                    <h2><span>Etiquetas</span></h2>
                    <p>Etiquetas laminadas y monocapa con o sin impresión.</p>
                    <img className="p-img" src={etiqueta1}/><img className="p-img" src={etiqueta2}/>
                </div>
                <div className="p-doypack" data-aos="fade-up" data-aos-duration="500">
                    <h2><span>Doypack</span></h2>
                    <p>Bolsas doypack con tapa y sin tapa</p>
                    <img className="doypack1 p-img" src={doypack1}/><img className="doypack2 p-img" src={doypack2}/>

                </div>
                <div className="p-termocontraibles" data-aos="fade-up" data-aos-duration="500">
                    <h2><span>Termocontraibles</span></h2>
                    <p>Láminas de polietileno termocontraíbles, con o sin impresión, de alta resistencia.</p>
                    <img className="p-img" src={termocontraible1}/><img className="p-img" src={termocontraible2}/>
                </div>
                <div className="p-bolsas-con-valvula" data-aos="fade-up" data-aos-duration="500">
                    <h2><span>Bolsas con Valvula</span></h2>
                    <p>Bolsas laminadas con tapa.</p>
                    <img className="valvula1 p-img" src={valvula1}/> <img className="valvula2 p-img" src={valvula2}/> 
                </div>
                <div className="p-bolsas-con-zipper" data-aos="fade-up" data-aos-duration="500">
                    <h2><span>Bolsas con Zipper</span></h2>
                    <p>Bolsas con cierre abre fácil</p>
                    <img className="zipper1 p-img" src={zipper1}/> <img className="p-img" src={zipper2}/>
                </div>
            </div>
        </div>    
        )
}