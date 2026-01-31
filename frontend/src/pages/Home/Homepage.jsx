import './HomePage.css';

function HomePage() {
    return <>
        <section className='name-section'>
            <section className='home-page d-flex justify-content'>

                <div className='text text-end'>
                    <h1 className=''>Hi, I'm <br /> Keerthan Gowda C</h1>
                </div>
                <br />
            </section>
        </section>
        <section className='img-section'>
            <div className='text-end'>
                <p >I'm a <br />Developer and Designer</p>
            </div>
            <img src="images/ckg2.jpeg" width={'430px'} alt="" />

        </section>



    </>
}

export default HomePage;