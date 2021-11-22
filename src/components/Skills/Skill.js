import React from 'react'

import './cardStyle.css'

import MyNavbar from '../myNavbar'
import Cards from './cards'
import Language from './language'
import Footer from '../footer/Footer'

function Skill(props) {
    let info = [
        { text: `HTML`, value: 90, per: "90%" },
        { text: `CSS/SCSS`, value: 90, per: "90%" },
        { text: `JavaScript`, value: 80, per: "80%" },
        { text: `Reactjs`, value: 80, per: "80%" },
        { text: 'Bootstrap', value: 90, per: "90%" },
        { text: 'Express JS', value: 90, per: "80%" },
        { text: 'Mongo DB', value: 80, per: "80%" },
        { text: 'Node JS', value: 80, per: "80%" },
        { text: 'Vue JS', value: 60, per: "60%" },
        { text: 'TypeScript', value: 60, per: "60%" },
        { text: 'TypeScript', value: 60, per: "60%" },
        { text: 'MySQL', value: 80, per: "80%" },
        { text: 'Heroku', value: 70, per: "70%" },
        { text: 'Netlify', value: 70, per: "70%" },
        { text: 'Ubuntu Linux', value: 70, per: "70%" },
        { text: 'Git/Github', value: 90, per: "90%" },
    ]

    let language = [
        { text: `Farsi`, value: 100, per: "100%" },
        { text: `English`, value: 80, per: "80%" },
        { text: `German`, value: 80, per: "80%" },
        { text: `Turkish`, value: 30, per: "30%" },
    ]

    return (
        <div className="skills ">
            <MyNavbar {...props} />
            <div className="container d-flex flex-column">

                <div className="shadow-lg" >
                    <h2 className="card-title mb-3">Code Skills</h2>
                    <Cards info={info} />
                </div>

                <div className="shadow-lg mt-3" >
                    <h2 className="card-title mb-4">Language Skills</h2>
                    <Language language={language} />
                </div>
            </div>
            <Footer />
        </div>
    )
}

export default Skill
