import './About.css';

export default function About() {
    return (
        <>
            <section className='about'>
                <div>
                    <p >
                        My name is Keerthan Gowda C, and I hold a Bachelor’s degree in Computer Applications (BCA).
                        I’m passionate about technology, problem-solving, and building practical digital solutions.
                        To strengthen my development skills, I also completed a Python Full Stack Development course,
                        where I gained hands-on experience in front-end, back-end, and database technologies.
                    </p>
                </div>
            </section>
            <section className='bio-section'>
                <h1>
                    Python Full Stack Developer
                </h1>
                <p className='above-p'>
                    With hands-on experience in Python, Django/Flask, JavaScript, HTML, CSS, and database systems like MySQL and MongoDB,
                    <br />I enjoy building complete, scalable, and user-friendly web applications.
                </p>
                <div className='resume text-center'>
                    <button>
                    <a href="">Download Resume</a>
                    </button>
                        
                    </div>
                <div className='bio-div'>
                    <div className='bio-div-1'>
                        <p><b>Name: </b>Keerthan Gowda C</p>
                        <p><b>DOB: </b>28 November 2004</p>
                        <p><b>City: </b>Banglore, Karnataka</p>
                    </div>
                    <div className='bio-div-2'>
                        <p><b>Degree: </b>Bachelor's</p>
                        <p><b>Mobile No: </b>+91 9741738681</p>
                        <p><b>E-mail: </b>ckgowda9741@gmail.com</p>

                    </div>
                  
                </div>
                  

            </section>
        </>
    )
}