import { Container, Row, Col, Tab, Nav } from "react-bootstrap";

import { ProjectCard } from "./ProjectCard";
import { CertiCard } from "./CertiCard";
import colorSharp2 from "../assets/img/color-sharp2.png";
import project1 from "../assets/img/project1.1.png";
import beer from "../assets/img/beer-app1.png";
import mundo from "../assets/img/por-el-mundo1.png";
import gym from '../assets/img/gym-fit-app1.png';
import event from '../assets/img/eventos1.png';
import ecommerce from '../assets/img/ecommerce1.png';
import portfolio from '../assets/img/portfolio1.png';
import tinerary from '../assets/img/myTinerary.png';
import miFerreteria from '../assets/img/miFerreteria.png';
import mindHub from '../assets/img/mindHub.png';
import codo from '../assets/img/codoacodo1.png';
import ibm from '../assets/img/ibm.png';
import hong from '../assets/img/hongk3.png';
import duke from '../assets/img/duke2.jpg';
import mcmaster from '../assets/img/mcmaster.jpg';
import jhons from '../assets/img/jhons.png';
import ieBusiness from '../assets/img/ie2.jpg';
import austral from '../assets/img/austral.png'
import 'animate.css';
import TrackVisibility from 'react-on-screen';


export const Projects = () =>{
    const projects = [
        {
          title: "Proyecto para Restaurante en React",
          description: "Desarrollo y Diseño",
          imgUrl: project1,
        },
        {
          title: "Proyecto para cerveceria en HTML y Bootstrap",
          description: "Desarrollo y Diseño",
          imgUrl: beer,
        },
        {
          title: "Proyecto para Blog de Viajes en Python",
          description: "Desarrollo y Diseño",
          imgUrl: mundo,
        },
        {
          title: "Proyecto para Gym multilenguaje en React",
          description: "Desarrollo y Diseño",
          imgUrl: gym,
        },
        {
          title: "Proyecto para Empresa de Eventos en HTML Y CSS",
          description: "Desarrollo y Diseño",
          imgUrl: event,
        },
        {
          title: "Proyecto para Ecommerce en Django",
          description: "Desarrollo y Diseño",
          imgUrl: ecommerce,
        },
        {
            title: "Mi Primer Portfolio en React",
            description: "Desarrollo y Diseño",
            imgUrl: portfolio,
          },
          {
            title: "Proyecto para Empresas de Viajes en React y Node.JS",
            description: "Desarrollo y Diseño",
            imgUrl: tinerary,
          },
          {
            title: "Proyecto para Ferreteria en HTML y Bootstrap",
            description: "Diseño y Desarrollo",
            imgUrl: miFerreteria,
          },
    ];
    const certifications = [
        {
          title: "Bootcamp Desarrollador Full Stack MERN",
          description: "Setiembre 2023",
          imgUrl: mindHub,
        },
        {
          title: "Bootcamp Desarrollador Web Front End",
          description: "Marzo 2023",
          imgUrl: mindHub,
        },
        {
          title: "Full Stack Python",
          description: "Julio 2022",
          imgUrl: codo,
        },
        {
          title: "Cloud Application Development Foundations",
          description: "Enero 2022",
          imgUrl: ibm,
        },
        {
          title: "Full-Stack Web Development with React",
          description: "Diciembre 2021",
          imgUrl: hong,
        },
        
    ];
    const courses = [
        {
          title: "Diseño UX/UI",
          description: "Diciembre 2022",
          imgUrl: codo,
        },
        {
          title: "Django",
          description: "Diciembre 2022",
          imgUrl: codo,
        },
        {
            title: "Introduction to Containers w/ Docker, Kubernetes & OpenShift",
            description: "Febrero 2022",
            imgUrl: ibm,
        },
        {
          title: "Developing Cloud Apps with Node.js and React",
          description: "Enero 2022",
          imgUrl: ibm,
        },
        {
          title: "Front-End Web Development with React",
          description: "Enero 2022",
          imgUrl: hong,
        },
        {
          title: "Developing Cloud Native Applications",
          description: "Enero 2022",
          imgUrl: ibm,
        },
        {
            title: "Introduction to Web Development with HTML, CSS, JavaScript",
            description: "Diciembre 2021",
            imgUrl: ibm,
        },
        {
            title: "Server-side Development with NodeJS, Express and MongoDB",
            description: "Diciembre 2021",
            imgUrl: hong,
        },
        {
            title: "Front-End Web UI Frameworks and Tools: Bootstrap 4",
            description: "Agosto 2021",
            imgUrl: hong,
        },
        {
            title: "Programming Foundations with JavaScript, HTML and CSS",
            description: "Julio 2021",
            imgUrl: duke,
        },
        {
            title: "Mindshift: Transforma tu mente para superar obstáculos en el aprendizaje y descubrir tu potencial oculto",
            description: "Diciembre 2020",
            imgUrl: mcmaster,
        },
        {
            title: "The Data Scientist's Toolbox",
            description: "Diciembre 2020",
            imgUrl: jhons,
        },
        {
            title: "Aprendiendo a Aprender",
            description: "Diciembre 2020",
            imgUrl: ieBusiness,
        },
        {
            title: "Excel aplicado a los negocios (Nivel Avanzado)",
            description: "Noviembre 2020",
            imgUrl: austral,
        },
        
    ];


    return (
         <section className="project" id="projects">
            <Container>
                <Row>
                     <Col>
                        <TrackVisibility>
                            {({ isVisible }) =>
                             <div className={isVisible ? "animate__animated animate__bounce": ""}>
                                <h2>Proyectos</h2>
                             <p>En mis comienzos mis proyectos estaban realizados en HTML y Css, luego me fui capacitando y mis proyectos cobraron mas formas, incluyendo animaciones, base de datos y apis.
                                     Algunos estan realizados en JS, luego me anime a React con Node.JS,despues aprendi algo en Phyton, Django</p>
                             </div>}
                         </TrackVisibility>
                         <Tab.Container id="projects-tabs" defaultActiveKey="first">
                            <Nav variant="pills" className="nav-pills mb-5 justify-content-center align-items-center" id="pills-tab">
                                 <Nav.Item>
                                     <Nav.Link eventKey="first">Proyectos</Nav.Link>
                                 </Nav.Item>
                                 <Nav.Item>
                                     <Nav.Link eventKey="second">Certificaciones</Nav.Link>
                                 </Nav.Item>
                                 <Nav.Item>
                                     <Nav.Link eventKey="third">
                                     Cursos
                                     </Nav.Link>
                                 </Nav.Item>
                             </Nav>
                            <Tab.Content>
                                <Tab.Pane eventKey="first">
                                    <Row>
                                        {
                                            projects.map((project, index) => {
                                                return (
                                                    <ProjectCard
                                                        key={index}
                                                        {...project}
                                                    />
                                                )
                                            })
                                        }
                                    </Row>
                                </Tab.Pane>
                                <Tab.Pane eventKey="second">
                                <Row>
                                        {
                                            certifications.map((certification, index) => {
                                                return (
                                                    <CertiCard
                                                        key={index}
                                                        {...certification}
                                                    />
                                                )
                                            })
                                        }
                                    </Row>
                                </Tab.Pane>
                                <Tab.Pane eventKey="third">
                                <Row>
                                        {
                                            courses.map((course, index) => {
                                                return (
                                                    <CertiCard
                                                        key={index}
                                                        {...course}
                                                    />
                                                )
                                            })
                                        }
                                    </Row>
                                </Tab.Pane>
                            </Tab.Content>
                        </Tab.Container>
                    </Col>
                </Row>
            </Container>
            <img className="background-image-right" src={colorSharp2} />
        </section>
    )

}