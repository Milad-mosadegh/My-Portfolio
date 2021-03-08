import React from 'react'


import { Button } from 'react-bootstrap'


function ProjectTemplate({ image, title, date, owner, link, websiteName }) {
    return (
        <div>
            <div>
                <div className="shadow-lg p-4 p-all-img">

                    <div className="mb-3" >
                        <img src={image} width="100%" height="400px" />
                    </div>

                    <div className=" text-light">
                        <h1 className="text-center mb-3">{title}</h1>

                        <div className="d-flex justify-content-between p-4 mb-4">
                            <div>
                                <label>Date of Birth : </label>
                                <h3>{date}</h3>
                            </div>
                            <div>
                                <label>Owner : </label>
                                <h3>{owner}</h3>
                            </div>
                        </div>

                        <Button
                            className="btn-block"
                            variant="outline-danger"
                            href={link}
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            Jump to <strong>{websiteName}</strong> Website
                        </Button>
                    </div>

                </div>
            </div>
        </div>
    )
}

export default ProjectTemplate
