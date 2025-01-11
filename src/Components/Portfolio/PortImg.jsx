

import React from 'react'
import p1 from './portfolioImg/1.png'
import p2 from './portfolioImg/2.png'
import p3 from './portfolioImg/3.png'
import p4 from './portfolioImg/4.png'
import p5 from './portfolioImg/5.png'
import p6 from './portfolioImg/6.png'
import "./PortfolioStyle.css"
export default function PortImg({ display }) {
    const PortfolioImgs = React.useMemo(() => [
        { img: p1 },
        { img: p2 },
        { img: p3 },
        { img: p4 },
        { img: p5 },
        { img: p6 },
    ])
    return (
        <>
            <div className="container">
                <div className="row  g-4 my-4 ">
                    {
                        PortfolioImgs.map((item, index) =>
                            <div key={index} className="col-lg-4 col-md-6  " >
                                <div className='item'>
                                    <img className="sidImg w-100  rounded-4" src={item.img} alt="" />
                                    <div onClick={display} className='layer position-absolute start-0 w-100 top-0 h-100 d-flex justify-content-center align-items-center'>
                                    </div>
                                </div>
                            </div>
                        )
                    }
                </div>
            </div>
        </>
    )
}
