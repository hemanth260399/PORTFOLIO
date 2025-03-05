import "./projectCard.css"
export let Projectcard = ({ title, image, descp, link, FE, BE, stack }) => {
    return (
        <>
            <div className="col-lg-4 col-sm-6 mt-5 mx-1">
                <div className="project-card d-flex" style={{ width: "24rem", height: "38rem" }}>
                    <div className="project-card-inner" >
                        <div className="project-card-image">
                            <img src={image} alt={title} className="image-card" />
                        </div>
                        <div className="project-card-content d-flex" style={{ flexDirection: "column", alignItems: "center", justifyItems: "center" }}>
                            <div className="mb-3">
                                <h5 className="project-card-title" style={{ height: 50 }}>{title}</h5>
                                <h5 className="project-card-description">{descp}</h5>
                                <span className="font-bold h6"><span >Tech Stack:</span> {stack}</span>
                            </div>
                            <div>
                                <a href={link} target="_blank" rel="noopener noreferrer" className="btn btn-primary">
                                    View Project
                                </a>
                                <div className="mt-3 d-flex" >
                                    <a href={FE} target="_blank" rel="noopener noreferrer" className="btn btn-secondary mx-2">
                                        FRONTEND REPO
                                    </a>
                                    {BE &&
                                        <a href={BE} target="_blank" rel="noopener noreferrer" className="btn btn-secondary">
                                            BACKEND REPO
                                        </a>
                                    }
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}