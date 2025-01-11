import React from 'react'
import avataar from "./home img/avataaars.svg"
import './homeStyle.css'

export default function Home() {
    return (
        <>
            <header className=" d-flex align-items-center flex-column ">
                <img width={250} src={avataar} alt="" />
                <h1 className="text-uppercase text-white fw-bolder py-3">Start Framework</h1>
                <div className="star">
                    <i className="fa-solid fa-star fa-xlg text-white fs-2 px-3"></i>
                </div>
                <p className="text-white py-3">Graphic Artist - Web Designer - Illustrator</p>
            </header>
        </>
    )

}



