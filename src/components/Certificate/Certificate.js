import React from 'react'
import MyNavbar from '../myNavbar'

import leben from '../../PDF/Lebenslauf.pdf'
import b1 from '../../PDF/B1.pdf'
import b2 from '../../PDF/B2.pdf'
import under from '../../PDF/underStructure.pdf'

import { Button } from 'react-bootstrap'
import Fade from 'react-reveal/Fade'

import cv1 from '../../images/cv-pdf.png'
import telc from '../../images/telc.png'
import dci from '../../images/dci.png'

import './style.css'


function Certificate() {
    return (
        <div className="certificate">
            <MyNavbar />

            <Fade cascade right duration={1200}>
                <div className="certificate-content">


                    <div className="certificate-card">
                        <svg className="bi bi-award-fill " width="1em" height="1em" viewBox="0 0 16 16" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                            <path d="M8 0l1.669.864 1.858.282.842 1.68 1.337 1.32L13.4 6l.306 1.854-1.337 1.32-.842 1.68-1.858.282L8 12l-1.669-.864-1.858-.282-.842-1.68-1.337-1.32L2.6 6l-.306-1.854 1.337-1.32.842-1.68L6.331.864 8 0z" />
                            <path d="M4 11.794V16l4-1 4 1v-4.206l-2.018.306L8 13.126 6.018 12.1 4 11.794z" />
                        </svg>
                        <h1>
                            Lebenslauf (CV)
                            </h1>
                        <img src={cv1} alt="" />

                        <Button
                            variant="outline-danger"
                            href={leben}
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            Download
                </Button>
                    </div>

                    <div className="certificate-card">
                        <svg className="bi bi-award-fill " width="1em" height="1em" viewBox="0 0 16 16" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                            <path d="M8 0l1.669.864 1.858.282.842 1.68 1.337 1.32L13.4 6l.306 1.854-1.337 1.32-.842 1.68-1.858.282L8 12l-1.669-.864-1.858-.282-.842-1.68-1.337-1.32L2.6 6l-.306-1.854 1.337-1.32.842-1.68L6.331.864 8 0z" />
                            <path d="M4 11.794V16l4-1 4 1v-4.206l-2.018.306L8 13.126 6.018 12.1 4 11.794z" />
                        </svg>
                        <h1>B1 Certificate</h1>
                        <img src={telc} alt="" />

                        <Button
                            variant="outline-danger"
                            href={b1}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="mt-2"
                        >
                            Download
                </Button>
                    </div>

                    <div className="certificate-card">
                        <svg className="bi bi-award-fill " width="1em" height="1em" viewBox="0 0 16 16" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                            <path d="M8 0l1.669.864 1.858.282.842 1.68 1.337 1.32L13.4 6l.306 1.854-1.337 1.32-.842 1.68-1.858.282L8 12l-1.669-.864-1.858-.282-.842-1.68-1.337-1.32L2.6 6l-.306-1.854 1.337-1.32.842-1.68L6.331.864 8 0z" />
                            <path d="M4 11.794V16l4-1 4 1v-4.206l-2.018.306L8 13.126 6.018 12.1 4 11.794z" />
                        </svg>
                        <h1>B2 Certificate</h1>
                        <img src={telc} alt="" />

                        <Button
                            variant="outline-danger"
                            href={b2}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="mt-2"
                        >
                            Download
                </Button>
                    </div>

                    <div className="certificate-card">
                        <svg className="bi bi-award-fill " width="1em" height="1em" viewBox="0 0 16 16" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                            <path d="M8 0l1.669.864 1.858.282.842 1.68 1.337 1.32L13.4 6l.306 1.854-1.337 1.32-.842 1.68-1.858.282L8 12l-1.669-.864-1.858-.282-.842-1.68-1.337-1.32L2.6 6l-.306-1.854 1.337-1.32.842-1.68L6.331.864 8 0z" />
                            <path d="M4 11.794V16l4-1 4 1v-4.206l-2.018.306L8 13.126 6.018 12.1 4 11.794z" />
                        </svg>
                        <h1>DCI Certificate</h1>
                        <img src={dci} alt="" />

                        <Button
                            variant="outline-danger"
                            href={under}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="mt-2"
                        >
                            Download
                </Button>
                    </div>
                </div>
            </Fade>


        </div>
    )
}

export default Certificate
