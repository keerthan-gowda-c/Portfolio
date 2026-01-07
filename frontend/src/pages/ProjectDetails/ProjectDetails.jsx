import { useParams } from "react-router-dom";
import { projects_list } from "../../data/projects";
import './ProjectDetails.css'

function ProjectDetails() {
    const { id } = useParams();

    const project = projects_list.find((project) => project.id == id)


    if (!project) {
        return <h2>Project is not here</h2>
    }


    return (
        <>
            <div className="container row">
                <div className="col-6">
                    <img src={project.thumbnail} alt="" className="w-50" />
                </div>
                <div className="col-6">
                    <div className="row">
                        {project.title}
                    </div>
                    <div>
                        {project.description}
                    </div>
                    <a href="">Click here for github link</a>
                </div>
            </div>


            <div>
                <h3 className="text-center">
                    Skills Required
                </h3>
                <div className="skill-container row w-100 d-flex justify-content">
                    <div className="card col-6 text-center" >
                        HTML
                    </div>
                    <div className="card col-6 text-center" >
                        CSS
                    </div>
                    <div className="card col-6 text-center" >
                        JS
                    </div>
                    <div className="card col-6 text-center" >
                        React JS
                    </div>
                </div>

            </div>


        </>
    )

}

export default ProjectDetails;