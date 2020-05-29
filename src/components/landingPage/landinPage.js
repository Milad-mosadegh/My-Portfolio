import React from 'react'
import './landingStyle.css'
import Zoom from 'react-reveal/Zoom'

import { Link } from 'react-router-dom'

function LandinPage() {
    return (
        <div>
            <div className=" light-dark-bg landing">
                <Zoom cascade duration={1000}>
                    <div >
                        <h1 >Welcome To My World</h1>
                        <h3>If You Wanna Know About Me ...</h3>
                        <Link to="/home" className="red-btn btn">Jump To My World</Link>
                    </div>
                </Zoom>
            </div>
        </div>
    )
}

export default LandinPage
