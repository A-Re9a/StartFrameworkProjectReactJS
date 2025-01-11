import React from 'react'
import './contact.css'


export default function Contact() {
    return (
        <>
            <div id="Contact" className=" text-center py-5">
                <h2>contact me </h2>
                <div className="contactStar">
                    <i className="fa-solid fa-star fa-xlg fs-4 "></i>
                </div>
                <div className="container w-50">
                    <div className="form-floating text-black my-3">
                        <input type="text" id="nameInput" placeholder="Name:" className="form-control rounded-3" />
                        <label htmlFor="nameInput">Name</label>
                    </div>
                    <div className="form-floating text-black my-3">
                        <input type="email" id="emailInput" placeholder="Email Address:" className="form-control rounded-3" />
                        <label htmlFor="emailInput">Email Address</label>
                    </div>
                    <div className="form-floating text-black my-3">
                        <input type="number" id="numberInput" placeholder="Phone Number:" className="form-control rounded-3" />
                        <label htmlFor="numberInput">Phone Number</label>
                    </div>
                    <div className="form-floating text-black my-3">
                        <textarea name="" id="messageInput" placeholder="Message" className="form-control mb-3 " rows="5"></textarea>
                        <label htmlFor="messageInput"> Message</label>
                    </div>
                    <div className=" col-md-12 text-center m-3 ">
                        <button type="submit" className="btn btn-primary rounded-5 fs-5  px-4 py-2 ">Send</button>
                    </div>
                </div>
            </div>
        </>
    )

}