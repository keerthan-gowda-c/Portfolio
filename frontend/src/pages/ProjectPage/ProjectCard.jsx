import './ProjectPage.css'
import { Link } from 'react-router-dom'

const ProjectCard = ({ projects }) => {
  return (
    <>
   
<div className='card-container row row-cols-1 row-cols-md-3 g-4'>
        <div className="card row g-0">
          <div className="image col-md-4">
            <img src={projects.thumbnail} className="img-fluid rounded-start" alt="..." />
          </div>
          <div className="description col-md-8">
            <div className="card-body">
              <h5 className="card-title">{projects.title}</h5>

              <p className="card-text">{projects.description}</p>
              <Link to={`/Projects/${projects.id}`} >
                <p className="card-text">
                  <small className="text-body-primary">Click here for more details</small>
                  </p>
              </Link>
            </div>
          </div>
        </div>
      </div>

  
      
    </>

  )
}
export default ProjectCard;