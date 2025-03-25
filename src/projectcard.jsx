import "./projectCard.css"
export let Projectcard = ({ title, image, descp, link, FE, BE, stack }) => {
    return (
        <>
            <div className="col-lg-4 col-sm-6 mt-5">
                <div className="project-card d-flex" style={{ width: "22.1rem", height: "28rem", padding: 10 }}>
                    <div className="project-card-inner" >
                        <div className="project-card-image">
                            <p><i className={image} aria-hidden="true" id="iconImage" style={{ fontSize: 40, borderRadius: "50%", padding: 10, border: "5px solid rgba(244, 0, 255, 1)", }}></i></p>
                        </div>
                        <div className="project-card-content d-flex" style={{ flexDirection: "column", alignItems: "center", justifyItems: "center" }}>
                            <div className="mb-3 " >
                                <h6 className="project-card-title" style={{ height: 50, color: "rgba(244, 0, 255, 1)" }}>{title}</h6>
                                <h5 className="project-card-description">{descp}</h5>
                                <span ><span >Tech Stack:</span> {stack}</span>
                            </div>
                            <div>
                                <a href={link} target="_blank" rel="noopener noreferrer" className="btn btn-primary">
                                    View Project
                                </a>
                                <div className="mt-3 d-flex" >
                                    <a href={FE} target="_blank" rel="noopener noreferrer" className="btn btn-secondary mx-1">
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