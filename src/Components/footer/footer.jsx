import React from 'react'
import "./footerStyle.css"
export default function Footer() {
    return (
        <>
            <div className="footer ">
                <div className="row m-0 " >
                    <div className="col-lg-4 mt-5">
                        <h4 className="text-white text-uppercase py-3 fs-2 fw-bold">Location</h4>
                        <p className="text-white py-2">2215 John Daniel Drive
                            <><br /></>Clark, MO 65243</p>
                    </div>
                    <div className="col-lg-4 mt-5">
                        <h4 className="text-white text-uppercase py-3 fs-2 fw-bold">Around the web</h4>
                        <div className="socialIcons text-center py-2">
                            <div className="d-flex justify-content-center align-items-center" >
                                <div className="footerIcons d-flex justify-content-center align-items-center">
                                    <i className="fa-brands fa-facebook "></i>
                                </div>
                                <div className="footerIcons d-flex justify-content-center align-items-center">
                                    <i className="fa-brands fa-twitter "></i>
                                </div>
                                <div className="footerIcons d-flex justify-content-center align-items-center">
                                    <i className="fa-brands fa-linkedin "></i>
                                </div>
                                <div className="footerIcons d-flex justify-content-center align-items-center">
                                    <i className="fa-brands fa-youtube "></i>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-4 mt-5">
                        <h4 className="text-white text-uppercase py-3 fs-2 fw-bold">About freelancer</h4>
                        <p className="text-white py-2 fw-bold">Freelance is a free to use, licensed Bootstrap theme created by Route</p>
                    </div>
                </div>

                <div className="footerText text-center py-4">
                    <p className="mb-0 ">Copyright © Your Website 2022</p>
                </div>
            </div>
        </>
    )
}