import React from 'react'
import MyNavbar from '../myNavbar'

import './project.css'
import Footer from '../footer/Footer'
import ProjectTemplate from './projecttemplate'

import StartMed from '../../images/StartMed.png'
import movieFinder from '../../images/movieFinder.png'
import persianToDo from '../../images/2.png'
import weather from '../../images/weather.png'
import ctoc from '../../images/ctoc.png'

function Projects() {
    return (
        <div className="p-wrap">
            <MyNavbar />

            <div className="project-container p-2">

                <ProjectTemplate
                    image={ctoc}
                    title="Online Shop"
                    date="10.2020"
                    owner="Milad Mosadegh"
                    link="https://vigorous-einstein-134bd7.netlify.app/#/"
                    websiteName="CtoC"

                />

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

                <ProjectTemplate
                    image={persianToDo}
                    title="Persian Todo App"
                    date="01.2020"
                    owner="Milad Mosadegh"
                    link="https://milad-mosadegh.github.io/Persian-To-Do-App"
                    websiteName="Persian Todo"
                />

                <ProjectTemplate
                    image={weather}
                    title="Weather App"
                    date="02.2020"
                    owner="Milad Mosadegh"
                    link="https://milad-mosadegh.github.io/React-Weather"
                    websiteName="Weather App"
                />


            </div>
            <Footer />
        </div>
    )
}

export default Projects
