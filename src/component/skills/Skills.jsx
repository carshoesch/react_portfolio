import React from 'react'
import { Container, Row, Col } from "react-bootstrap"
import Carousel from "react-multi-carousel"
import "react-multi-carousel/lib/styles.css"
import colorSharp from "../../assets/img/color-sharp.png"
import skillData from '../../skillData'
import styles from './Skills.module.scss'

const Skills = () => {
    const skills = skillData
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
        <section className={styles.skill} id="skills">
            <Container>
                <Row>
                    <Col>
                        <div className={styles.skillBx}>
                            <h2 className={styles.skillsHeadline}>
                                Skills
                            </h2>
                            <Carousel responsive={responsive} infinite={true} className={`skill-slider ${styles.skillSlider}`}>
                                {skills.map(skill => (
                                    <div className={`${styles.item} item_${skill.name}`} key={skill.name}>
                                        {skill.icon}
                                        <h5>{skill.name}</h5>
                                    </div>
                                ))}
                            </Carousel>
                        </div>
                    </Col>
                </Row>
            </Container>
            <img src={colorSharp} alt="" className="background-image-left" />
        </section>
    )
}

export default Skills