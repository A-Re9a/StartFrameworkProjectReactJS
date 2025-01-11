
import React from 'react'
import './PortfolioStyle.css'
import PortImg from './PortImg'
export default function Portfolio() {
    const display = (e) => {
        e.preventDefault();
        const sidImg = Array.from(document.querySelectorAll(".sidImg"));
        const mainImg = document.querySelector(".mainImg");
        const imgContainer = document.querySelector(".imgContainer");
        const cardTitel = document.getElementById("cardTitel");
        var mySrc = e.target.parentNode.firstChild.getAttribute("src");
        if (mySrc == sidImg[0].getAttribute("src")) {
            cardTitel.innerHTML = "LOG CABIN";
        } else if (mySrc == sidImg[1].getAttribute("src")) {
            cardTitel.innerHTML = "TASTY CAKE";
        } else if (mySrc == sidImg[2].getAttribute("src")) {
            cardTitel.innerHTML = "CIRCUS TENT";
        } else if (mySrc == sidImg[3].getAttribute("src")) {
            cardTitel.innerHTML = "CONTAINER";
        } else if (mySrc == sidImg[4].getAttribute("src")) {
            cardTitel.innerHTML = "LOCKED SAFE";
        } else if (mySrc == sidImg[5].getAttribute("src")) {
            cardTitel.innerHTML = "SUBMARINE";
        }
        mainImg.setAttribute("src", mySrc);
        imgContainer.classList.replace("d-none", "d-flex");
    }

    document.body.addEventListener("click", function (e) {
        const imgContainer = document.querySelector(".imgContainer");
        const col = () => {
            imgContainer.classList.replace("d-flex", "d-none");
        }
        if (e.target == imgContainer) {
            col();
        }
    })

    return (
        <>
            <div id='Portfolio' className=" container text-center py-5">
                <h2>Portfolio</h2>
                <div className="portfolioStar ">
                    <i className="fa-solid fa-star fa-xlg fs-4 "></i>
                </div>
                <PortImg display={display} />
            </div>
            <div id='imgCard' className=" imgContainer position-fixed d-none bg-dark bg-opacity-50 start-0 bottom-0 end-0  d-flex  justify-content-center align-items-center ">
                <div className="theCard position-relative rounded bg-white p-5 text-center overflow-hidden ">
                    <h2 id='cardTitel' className=' text-uppercase fs-1 fw-bolder py-2 '> </h2>
                    <div className="portfolioStar ">
                        <i className="fa-solid fa-star fa-xlg fs-4 py-2"></i>
                    </div>
                    <img className="mainImg w-100 py-3" src={' '} alt="" />
                    <p className="cardText">Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
                    <div className="d-flex justify-content-between align-items-center position-absolute top-0 start-0 w-100 h-100 icons pointer-event p-2">
                        <i onClick={() => { document.getElementById('imgCard').classList.add('d-none') }} className="fa-regular fa-circle-xmark xIcon  position-absolute top-0 end-0 m-3  fs-3" ></i>
                    </div>
                </div>
            </div>
        </>
    )
}
