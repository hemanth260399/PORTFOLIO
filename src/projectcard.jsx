import "./projectCard.css"
export let Projectcard = ({ title, image, descp, link }) => {
    return (
        <>
            <div className="col-md-4 col-sm-6 m-5">
                <div className="project-card" style={{ width: "20rem", height: "30rem" }}>
                    <div className="project-card-inner">
                        <div className="project-card-image">
                            <img src={image} alt={title} className="image-card" />
                        </div>
                        <div className="project-card-content">
                            <h5 className="project-card-title">{title}</h5>
                            <p className="project-card-description">{descp}</p>
                            <a href={link} target="_blank" rel="noopener noreferrer" className="btn btn-primary">
                                View Project
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}