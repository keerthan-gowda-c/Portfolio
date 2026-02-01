
const Skills = ({skills}) => {
    return(
        <>
        <div class="container" data-aos="fade-up" data-aos-delay="100">

    <div class="row skills-content skills-animation">

        <div class="col-lg-6">

            <div class="progress">
                <span class="skill"><span>{skills.title}</span> <i class="val">{skills.value}</i></span>
                <div class="progress-bar-wrap">
                    <div class="progress-bar" role="progressbar" aria-valuenow="100" aria-valuemin="0" aria-valuemax="100">
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>
        </>
    )
}

export default Skills;