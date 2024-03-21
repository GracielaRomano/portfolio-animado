import { Container, Row, Col, Tab, Nav } from "react-bootstrap";
import { useTranslation } from "react-i18next";
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
    const [t] = useTranslation("global");
    const projects = [
        {
          title:t("project.title"),
          description: t("project.description"),
          imgUrl: project1,
        },
        {
          title: t("project.title1"),
          description: t("project.description"),
          imgUrl: beer,
        },
        {
          title: t("project.title2"),
          description: t("project.description"),
          imgUrl: mundo,
        },
        {
          title: t("project.title3"),
          description: t("project.description"),
          imgUrl: gym,
        },
        {
          title: t("project.title4"),
          description: t("project.description"),
          imgUrl: event,
        },
        {
          title: t("project.title5"),
          description: t("project.description"),
          imgUrl: ecommerce,
        },
        {
            title: t("project.title6"),
            description: t("project.description"),
            imgUrl: portfolio,
          },
          {
            title: t("project.title7"),
            description: t("project.description"),
            imgUrl: tinerary,
          },
          {
            title: t("project.title8"),
            description: t("project.description"),
            imgUrl: miFerreteria,
          },
    ];
    const certifications = [
        {
          title: t("project.certi"),
          description: t("project.description1"),
          imgUrl: mindHub,
        },
        {
          title: t("project.certi2"),
          description: t("project.description2"),
          imgUrl: mindHub,
        },
        {
          title: t("project.certi3"),
          description: t("project.description3"),
          imgUrl: codo,
        },
        {
          title: t("project.certi4"),
          description: t("project.description4"),
          imgUrl: ibm,
        },
        {
          title: t("project.certi5"),
          description: t("project.description5"),
          imgUrl: hong,
        },
        
    ];
    const courses = [
        {
          title: t("project.curse"),
          description: t("project.description6"),
          imgUrl: codo,
        },
        {
          title: t("project.curse1"),
          description: t("project.description6"),
          imgUrl: codo,
        },
        {
            title: t("project.curse2"),
            description: t("project.description7"),
            imgUrl: ibm,
        },
        {
          title:  t("project.curse3"),
          description: t("project.description8"),
          imgUrl: ibm,
        },
        {
          title: t("project.curse4"),
          description: t("project.description8"),
          imgUrl: hong,
        },
        {
          title: t("project.curse5"),
          description: t("project.description8"),
          imgUrl: ibm,
        },
        {
            title: t("project.curse6"),
            description: t("project.description9"),
            imgUrl: ibm,
        },
        {
            title: t("project.curse7"),
            description: t("project.description9"),
            imgUrl: hong,
        },
        {
            title: t("project.curse8"),
            description: t("project.description10"),
            imgUrl: hong,
        },
        {
            title: t("project.curse9"),
            description: t("project.description11"),
            imgUrl: duke,
        },
        {
            title: t("project.curse10"),
            description: t("project.description12"),
            imgUrl: mcmaster,
        },
        {
            title: t("project.curse11"),
            description: t("project.description12"),
            imgUrl: jhons,
        },
        {
            title: t("project.curse12"),
            description: t("project.description12"),
            imgUrl: ieBusiness,
        },
        {
            title: t("project.curse13"),
            description: t("project.description13"),
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
                                <h2>{t("project.h2")}</h2>
                                <p>{t("project.text")}</p>
                             </div>}
                         </TrackVisibility>
                         <Tab.Container id="projects-tabs" defaultActiveKey="first">
                            <Nav variant="pills" className="nav-pills mb-5 justify-content-center align-items-center" id="pills-tab">
                                 <Nav.Item>
                                     <Nav.Link eventKey="first">{t("project.link")}</Nav.Link>
                                 </Nav.Item>
                                 <Nav.Item>
                                     <Nav.Link eventKey="second">{t("project.link1")}</Nav.Link>
                                 </Nav.Item>
                                 <Nav.Item>
                                     <Nav.Link eventKey="third">{t("project.link2")}</Nav.Link>
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