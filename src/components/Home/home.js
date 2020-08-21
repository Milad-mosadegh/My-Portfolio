import React from 'react'
import MyNavbar from '../myNavbar'

import pic1 from '../../images/pic1.JPG'
import pic2 from '../../images/milad-1.JPG'
import Zoom from 'react-reveal/Zoom'

import './homeStyle.css'
import Footer from '../footer/Footer'
function Home() {
    return (
        <div className="home-wrap light-dark-bg">
            <MyNavbar />
            <Zoom>

                <div className="home vh-100">
                    <div className="myContainer">
                        <div className="card">
                            <div className="face face1">
                                <div className="red-box d-flex justify-content-center text-light">
                                    <h1>Milad</h1>
                                </div>
                                <div className="content">
                                    <img src={pic2} alt="" />
                                </div>
                            </div>
                            <div className="face face2">
                                <div className="content ">
                                    <div>
                                        <h2>Who Am I?</h2>
                                        <h5>My Name is Milad Mosadegh. I am 31 Years old, come from Iran and since 2017 live in Germany. I am Frontend Web Developer, graduated by DCI ( digital-career-institute )</h5>

                                        <h5>
                                            I started coding since 2019 and in this time i learned so many things like JavaScript, Reactjs and ... and i've got much Experiences.
                                        </h5>

                                        <h5>
                                            I love Coding, i try to learn more to be one of the best in this field.
                                            I am facing with new World called Code and i wanna go through it till the end
                                    </h5>

                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </Zoom>
            <Footer />
        </div>
    )
}

export default Home
