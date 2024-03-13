import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import meter1 from "../assets/img/meter1.svg";
import meter2 from "../assets/img/meter2.svg";
import meter3 from "../assets/img/meter3.svg";
import viñeta from "../assets/img/viñetas.svg";
import colorSharp from "../assets/img/color-sharp.png"

export const Skills = () =>{
    const responsive = {
        superLargeDesktop: {
          // the naming can be any, depends on you.
          breakpoint: { max: 4000, min: 3000 },
          items: 5
        },
        desktop: {
          breakpoint: { max: 3000, min: 1024 },
          items: 3
        },
        tablet: {
          breakpoint: { max: 1024, min: 464 },
          items: 2
        },
        mobile: {
          breakpoint: { max: 464, min: 0 },
          items: 1
        }
    };

    return (
        <section className="skill" id="skills">
            <div className="container">
                <div className="row">
                    <div className="col-12">
                        <div className="skill-bx wow zoomIn">
                            <h2>Habilidades</h2>
                            <p>En esta seccion te muestro todas mis habilidades, tanto blandas como duras.<br></br> </p>
                            <Carousel responsive={responsive} infinite={true} className="owl-carousel owl-theme skill-slider">
                                <div className="item">
                                    <img src={meter1} alt="Image" />
                                    <h5>HTML5</h5>
                                </div>
                                <div className="item">
                                    <img src={meter2} alt="Image" />
                                    <h5>CSS3</h5>
                                </div>
                                <div className="item">
                                    <img src={meter3} alt="Image" />
                                    <h5>BOOTSTRAP</h5>
                                </div>
                                <div className="item">
                                    <img src={meter1} alt="Image" />
                                    <h5>REACT</h5>
                                </div>
                                <div className="item">
                                    <img src={meter2} alt="Image" />
                                    <h5>JS</h5>
                                </div>
                                <div className="item">
                                    <img src={meter3} alt="Image" />
                                    <h5>NODE.JS</h5>
                                </div>
                                <div className="item">
                                    <img src={meter1} alt="Image" />
                                    <h5>PHYTON</h5>
                                </div>
                                <div className="item">
                                    <img src={meter2} alt="Image" />
                                    <h5>DJANGO</h5>
                                </div>
                                <div className="item">
                                    <h6 className="soft-skills-title">Soft Skills</h6>
                                    <ul>
                                        <li className="soft-skills">Trabajo en Equipo</li>
                                        <li className="soft-skills">Resiliencia</li>
                                        <li className="soft-skills">Empatia</li>
                                        <li className="soft-skills">Perseverancia</li>
                                        <li className="soft-skills">Comunicación</li>
                                        <li className="soft-skills">Manejo de Tiempo</li>
                                        <li className="soft-skills">Resolución de Problemas</li>
                                        <li className="soft-skills">Inteligencia Emocional</li>
                                        <li className="soft-skills">Organización</li>
                                        <li className="soft-skills">Autodidacta</li>
                                        <li className="soft-skills">Actitud Positiva</li>
                                        <li className="soft-skills">Responsabilidad</li>
                                        <li className="soft-skills">Capacidad para el Aprendizaje</li>
                                        <li className="soft-skills">Capacidad de Adaptación</li>
                                    </ul>
                                </div>
                            </Carousel>
                        </div>
                    </div>
                </div>
            </div>
            <img className="background-image-left" src={colorSharp} alt="Image" />
        </section>
    )

}