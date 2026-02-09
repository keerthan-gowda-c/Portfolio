import './ContactPage.css'

export default function ContactPage() {
    return (
        <>
            <div className="full-area">
                <section className='a'>
<div className="left-area">
                    <h1>
                        To Contact
                    </h1>
                    <h1>
                        +91 9741738681
                    </h1>
                </div >
                </section>
                
                <div className="right-area w-100">
                    <div className="mb-3 ">
                        <label for="exampleFormControlInput1" className="form-label">Your Name</label>
                        <input type="text" className="form-control" id="exampleFormControlInput1" placeholder="First Name - Second Name" />
                    </div>
                    <div className="mb-3 ">
                        <label for="exampleFormControlInput1" className="form-label">Email address</label>
                        <input type="email" className="form-control" id="exampleFormControlInput1" placeholder="name@example.com" />
                    </div>
                    <div className="mb-3">
                        <label for="exampleFormControlTextarea1" className="form-label">Example textarea</label>
                        <textarea className="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
                    </div>

                    <button className='btn btn-success'>Submit</button>
                </div>
            </div>


        </>
    )
}