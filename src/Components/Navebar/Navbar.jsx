import { Link, NavLink } from 'react-router-dom'
import './navStyle.css'



export default function Navbar() {
    window.addEventListener('scroll', () => {
        const navbar = document.querySelector('.navbar');
        if (window.scrollY >= 50) {
            navbar.classList.add('scrolled');
        } else {
            navbar.classList.remove('scrolled');
        }
    })
    return (
        <>
            <nav id="navbar" className="navbar navbar-default  navbar-expand-lg ">
                <div className="container  ">
                    <Link className="navbar-brand fw-bolder py-3 mx-1   " to="/">
                        <h3 className='text-uppercase fw-bolder '>Start Framework</h3>
                    </Link>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse"
                        data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false"
                        aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav ms-auto ">
                            <li className="nav-item px-3">
                                <NavLink className="nav-link About-link  fw-bolder p-3 fs-6 text-uppercase" to="/About">About</NavLink>
                            </li>
                            <li className="nav-item px-3 ">
                                <NavLink className="nav-link Home-link  fw-bolder p-3 fs-6 text-uppercase" aria-current="page" to="/Portfolio">Portfolio</NavLink>
                            </li>
                            <li className="nav-item fw-bolder px-3">
                                <NavLink className="nav-link Contact-link p-3 fs-6 text-uppercase" to="/Contact">Contact </NavLink>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </>
    )
}
