import './ProjectPage.css'


const ProjectCard = ({ projects }) => {
  return (
    <>

      <div className='card-container row row-cols-1 row-cols-md-3 g-4'>
        <div className="card first row g-0">
          <div className="image col-md-4">
            <img src={projects.thumbnail} className="img-fluid rounded-start" alt="..." />
          </div>
          <div className="description col-md-8">
            <div className="card-body">
              <h5 className="card-title">{projects.title}</h5>

              <p className="card-text">{projects.description}</p>

              <p className="card-text card-links">
                <a href={projects.github_link} target='_blank'> GitHub_link</a>
                <a href=""></a>

              </p>
              <p className="card-text card-links" >

                <a href={projects.vercel_link} target='_blank'> Vercel_link</a>
              </p>

            </div>
          </div>
        </div>
      </div>



    </>

  )
}
export default ProjectCard;