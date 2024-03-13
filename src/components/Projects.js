import { Container, Row, Col, Tab, Nav } from "react-bootstrap";

import { ProjectCard } from "./ProjectCard";
import { CertiCard } from "./CertiCard";
import colorSharp2 from "../assets/img/color-sharp2.png";
import projImg1 from "../assets/img/project-img1.png";
import projImg2 from "../assets/img/project-img2.png";
import projImg3 from "../assets/img/project-img3.png";
import mindHub from '../assets/img/mindhub.jpg';
import codo from '../assets/img/codoacodo.jpg';
import ibm from '../assets/img/ibm.png';
import hong from '../assets/img/hongk3.png';

import 'animate.css';
import TrackVisibility from 'react-on-screen';


export const Projects = () =>{
    const projects = [
        {
          title: "Business Startup",
          description: "Design & Development",
          imgUrl: projImg1,
        },
        {
          title: "Business Startup",
          description: "Design & Development",
          imgUrl: projImg2,
        },
        {
          title: "Business Startup",
          description: "Design & Development",
          imgUrl: projImg3,
        },
        {
          title: "Business Startup",
          description: "Design & Development",
          imgUrl: projImg1,
        },
        {
          title: "Business Startup",
          description: "Design & Development",
          imgUrl: projImg2,
        },
        {
          title: "Business Startup",
          description: "Design & Development",
          imgUrl: projImg3,
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
          title: "Business Startup",
          description: "Design & Development",
          imgUrl: ibm,
        },
        {
          title: "Business Startup",
          description: "Design & Development",
          imgUrl: hong,
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
                                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque quam, quod neque provident velit, rem explicabo excepturi id illo molestiae blanditiis, eligendi dicta officiis asperiores delectus quasi inventore debitis quo.</p>
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