import React from 'react'
import './cardStyle.css'

import Fade from 'react-reveal/Fade'

import { CircularProgressbarWithChildren } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';

function Cards({ info, text, value }) {

    return (
        <div className="container">
            <div className="cards">
                {info.map(num =>
                    <Fade top>
                        <div className="card-content text-light">
                            <CircularProgressbarWithChildren value={num.value}
                                styles={{
                                    // Customize the root svg element
                                    root: {},
                                    // Customize the path, i.e. the "completed progress"
                                    path: {
                                        // Path color
                                        stroke: "red",
                                        // Whether to use rounded or flat corners on the ends - can use 'butt' or 'round'
                                        strokeLinecap: 'butt',
                                        // Customize transition animation
                                        transition: 'stroke-dashoffset 0.5s ease 0s',
                                        // Rotate the path
                                        transform: 'rotate(10turn)',
                                        transformOrigin: 'center center',
                                    },
                                    // Customize the circle behind the path, i.e. the "total progress"
                                    trail: {
                                        // Trail color
                                        stroke: '#d6d6d6',
                                        // Whether to use rounded or flat corners on the ends - can use 'butt' or 'round'
                                        strokeLinecap: 'butt',
                                        // Rotate the trail
                                        transform: 'rotate(0turn)',
                                        transformOrigin: 'center center',
                                    },
                                    // Customize the text
                                    text: {
                                        // Text color
                                        fill: '#f88',
                                        // Text size
                                        fontSize: '10px',
                                    },
                                    // Customize background - only used when the `background` prop is true
                                    background: {
                                        fill: '#fff',
                                    },
                                }}
                            >
                                <h1 style={{ marginTop: "10px", padding: "-60px", fontSize: "20px", fontWeight: "900" }}>{num.text}</h1>
                                <h1 style={{ marginTop: "20px", padding: "-60px", fontSize: "20px", fontWeight: "900" }}>{`${num.value}%`}</h1>
                            </CircularProgressbarWithChildren>
                        </div>
                    </Fade>
                )}
            </div>
        </div>
    )
}

export default Cards
