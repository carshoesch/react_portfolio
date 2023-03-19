import React from 'react'
import { Container, Row, Col, Tab, Nav } from "react-bootstrap";
import TrackVisibility from 'react-on-screen';
import ProjectCard from "./projectCard/ProjectCard";
import colorSharp2 from "../../assets/img/color-sharp2.png"
import vfr_calendar from "../../assets/img/vfr_calendar_screenshot.png"
import weather_app from "../../assets/img/weather_app_screenshot.png"
import styles from './Projects.module.scss'

const Projects = () => {
    const projects = [
        {
            title: "Terminkalender",
            description: "Vue.js + Firebase",
            imgUrl: vfr_calendar,
            gitLink: 'https://github.com/carshoesch/vfr_planner_vue_firebase',
            liveLink: 'https://vfr-planner-61ddb.web.app/'
        },
        {
            title: "Wetter App",
            description: "HTML, CSS, JavaScript",
            imgUrl: weather_app,
            gitLink: 'https://github.com/carshoesch/vuejs_weather-app',
            liveLink: ''
        },

    ];
    return (
        <section className="project" id="projects">
            <Container>
                <Row>
                    <Col size={12}>
                        <TrackVisibility>
                            {({ isVisible }) =>
                                <div className={isVisible ? "animate__animated animate__fadeIn" : ""}>
                                    <h2 className={styles.projectsHeadline}>Projects</h2>

                                    <Tab.Container id="projects-tabs" defaultActiveKey="first">
                                        <Tab.Content id="slideInUp" className={isVisible ? "animate__animated animate__slideInUp" : ""}>
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
                                        </Tab.Content>
                                    </Tab.Container>
                                </div>}
                        </TrackVisibility>
                    </Col>
                </Row>
            </Container>
            <img className="background-image-right" src={colorSharp2} alt=""></img>
        </section>
    )
}

export default Projects