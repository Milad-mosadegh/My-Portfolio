import React from 'react'
import MyNavbar from '../myNavbar'


import Footer from '../footer/Footer'
import ProjectTemplate from './projecttemplate'

import StartMed from '../../images/StartMed.png'
import movieFinder from '../../images/movieFinder.png'

function Projects() {
    return (
        <div className="vh-100">
            <MyNavbar />
            <div className="project-container">

                <ProjectTemplate
                    image={StartMed}
                    title="StartMed"
                    date="08.2020"
                    owner="Pouria Sabetian"
                    link="https://startmed-germany.de/"
                    websiteName="StartMed"

                />

                <ProjectTemplate
                    image={movieFinder}
                    title="Movie Finder"
                    date="05.2020"
                    owner="Milad Mosadegh"
                    link="https://milad-mosadegh.github.io/My-Movie-App"
                    websiteName="Movie Finder"
                />
            </div>
            <Footer />
        </div>
    )
}

export default Projects
