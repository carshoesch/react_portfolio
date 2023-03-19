import React, { useState, useEffect } from 'react'
import { Container, Col, Row } from "react-bootstrap"
import headerImg from '../assets/img/header-img.svg'

const Banner = () => {
    // variables
    const [loopNumber, setLoopNumber] = useState(0)
    const [isDeleting, setIsDeleting] = useState(false)
    // list of words that will be displayed
    const toRotate = ['Software Developer', 'Web Developer', 'Data Analyst', 'Data Engineer']
    // show the current letter that is visible
    const [text, setText] = useState('')
    // how fast will one letter come after another
    const [delta, setDelta] = useState(200 - Math.random() * 100)
    // transition between each word
    const period = 200

    // functions
    const tick = () => {
        let i = loopNumber % toRotate.length
        let fullText = toRotate[i]
        let updatedText = isDeleting ? fullText.substring(0, text.length - 1) : fullText.substring(0, text.length + 1)
        setText(updatedText)

        if (isDeleting) {
            setDelta(prevDelta => prevDelta / 2)
        }

        if (!isDeleting && updatedText === fullText) {
            setIsDeleting(true)
            setDelta(period)
        } else if (isDeleting && updatedText === '') {
            setIsDeleting(false)
            setLoopNumber(loopNumber + 1)
            setDelta(200)
        }
    }
    // react hooks
    // run the function that is responsible for typing and deleting
    useEffect(() => {
        let ticker = setInterval(() => {
            tick()
        }, delta);

        // clear the interval in case the component gets unmounted
        return () => { clearInterval(ticker) }
    }, [text, delta])



    return (
        <section className="banner" id="home">
            <Container>
                <Row className="d-flex align-items-center">
                    <Col xs={12} md={6} xl={7}>
                        <span className="tagline">
                            Willkommen auf meinem Portfolio
                        </span>
                        <h1>
                            {`Hi, ich bin Carsten `}
                            <br />
                            <span className="wrap">{text}</span>
                            <p className="short-description">Sportbegeisterter Rätsel-Enthusiast. Doch vor allem bin ich Software-Entwickler.</p>
                        </h1>
                    </Col>
                    <Col xs={12} md={6} xl={5}>
                        <img src={headerImg} alt="Header Img" />
                    </Col>
                </Row>
            </Container>
        </section >
    )
}

export default Banner