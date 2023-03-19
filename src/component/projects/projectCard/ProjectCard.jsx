import React from 'react'
import { Col } from "react-bootstrap"
import styles from './ProjectCard.module.scss'

const ProjectCard = ({ imgUrl, title, description, gitLink, liveLink }) => {
    return (
        <Col sm={6} md={4}>
            <div className={`proj-imgbx ${styles.projImgBox}`}>
                <img src={imgUrl} alt="" />
                <div className="proj-txtx">
                    <h4>{title}</h4>
                    <span>{description}</span>
                    <div className={styles.linkWrapper}>
                        {!gitLink ?
                            <span className={styles.noLink}>Git</span>
                            : <a href={gitLink} target='_blank' rel="noreferrer">Git</a>}
                        {!liveLink ?
                            <span className={styles.noLink}>Live</span>
                            : <a href={liveLink} target='_blank' rel="noreferrer">Live</a>
                        }



                    </div>
                </div>
            </div>
        </Col>
    )
}

export default ProjectCard