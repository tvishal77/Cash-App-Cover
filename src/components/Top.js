import React from 'react'
import "./Top.css"
import logo from "./money.jpg"
import eye from "./money-eye.jpg"

function Top() {
    return (
        <>


            <nav className="navbar">
                <div className="navbar-left">
                    <img className='image' src={logo} alt="Loading bag"></img>
                </div>
                <div className="navbar-center">
                    <ul>

                        <li><a href="#">SIGNIN</a></li>
                        <li><a href="#">LEGAL</a></li>
                        <li><a href="#">LISENCES</a></li>
                        <li><a href="#">SECURITY</a></li>
                        <li><a href="#">CAREERS</a></li>
                        <li><a href="#">PRESS</a></li>
                        <li><a href="#">SUPPORT</a></li>
                        <li><a href="#">STATUS</a></li>
                        <li><a href="#">CODEBLOG</a></li>
                    </ul>
                </div>
                <div className="navbar-right">
                    <img className='image' src={eye} alt="Loading eye" />
                </div>

            </nav>




        </>
    )
}

export default Top
