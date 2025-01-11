import React from 'react'
import { Link } from 'react-router-dom'
import './NotFound.css'
export default function NotFound() {
	return (
		<div className='d-flex justify-content-center align-items-center py-5 my-5'>
			<div id="notfound" className="notfound  ">
				<div className="notfound-404">
					<h1>404</h1>
					<h2>Page not found</h2>
				</div>
				<Link to="/">Homepage</Link>
			</div>
		</div>
	)
}
