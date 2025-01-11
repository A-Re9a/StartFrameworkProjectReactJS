import './aboutSyle.css';

export default function About() {
    return (
        <>
            <div id="About" className=" text-center py-5">
                <h2>About</h2>
                <div className="aboutStar">
                    <i className="fa-solid fa-star fa-xlg fs-4 "></i>
                </div>
                <div className="container ">
                    <div className="row  justify-content-center g-4  my-4">
                        <div className="col-md-12 col-lg-4"><h4 className="px-3 text-white text-start ">Freelancer is a free bootstrap theme created by Route. The download includes the complete source files including HTML, CSS, and JavaScript as well as optional SASS stylesheets for easy customization.</h4></div>
                            <div className="col-md-12 col-lg-4"><h4 className="px-3 text-white text-start ">You can create your own custom avatar for the masthead, change the icon in the dividers, and add your email address to the contact form to make it fully functional!</h4></div>
                        </div>
                    </div>
                </div>
        </>
    )
}