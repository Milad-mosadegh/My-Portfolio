import React from 'react'
import MyNavbar from '../myNavbar'

import Zoom from 'react-reveal/Zoom'

import './contactStyle.css'
import Footer from '../footer/Footer'

function Contact() {
    return (
        <div className="contact vh-100">
            <MyNavbar />

            <div className=" vasat">
                <div className="band">

                    <Zoom cascade left>
                        <div className="contact-form">
                            <div className="contact-info">
                                <h3>
                                    <span className="fa fa-user"></span>
                            Milad Mosadegh
                            </h3>
                            </div>

                            <div className="contact-info">

                                <h3>
                                    <span className="fa fa-home"></span>
                        Dorotheenstr. 79
                    </h3>
                            </div>

                            <div className="contact-info">
                                <h3>
                                    <span className="fa fa-building"></span>
                        40235-Düsseldorf
                    </h3>
                            </div>

                            <div className="contact-info">
                                <h3>
                                    <span className="fa fa-envelope"></span>
                        mosaddegh.milad@gmail.com
                    </h3>
                            </div>
                            <div className="contact-info">
                                <h3>
                                    <span className="fa fa-phone"></span>
                        +4917632239884
                    </h3>
                            </div>
                        </div>
                    </Zoom>
                    <Zoom>
                        <div className="band-2">
                            <div className="band-3">Thanks For Your Attention</div>
                        </div>
                    </Zoom>
                </div>
            </div>
            <Footer />
        </div>
    )
}

export default Contact
