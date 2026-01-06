import './ProjectPage.css'
import {Link} from 'react-router-dom'

const ProjectCard = ({ projects }) => {
  return (
    <>
    <div className='card-container'>
    <div class="card row g-0 justify-content">
        <div class="image col-md-4">
          <img src={projects.thumbnail} class="img-fluid rounded-start" alt="..." />
        </div>
        <div class="description col-md-8">
          <div class="card-body">
            <Link >
            <h5 class="card-title">{projects.title}</h5>
            </Link>
            <p class="card-text">{projects.description}</p>
            <p class="card-text"><small class="text-body-secondary">Last updated 3 mins ago</small></p>
          </div>
        </div>
      </div>
    </div>
      
    </>

  )
}
export default ProjectCard;