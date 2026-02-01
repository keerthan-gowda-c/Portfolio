import './Skills.css';
const Skills = ({ skills }) => {
    return (
        <>
        <div>
         <div class="row row-cols-1 row-cols-md-3 g-4">
                <div class="col first">
                    <div class="card image-card">
                        <img src={skills.img_src} class="card-img-top" alt="..." />
                        <div class="card-body text-center">
                            <h5 class="card-title">{skills.title}</h5>
                        </div>
                    </div>
                </div>
            </div>
       </div>
           
        </>
    )
}

export default Skills;