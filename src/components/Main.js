import React from 'react'
import "./Main.css"
import phone from "./Phone.png"
function Main() {
    return (
        <>
            {/* <div className="container">
                <div className="text">
                    <h1>CASH</h1>
                </div>
                <div className="image-container">
                    <img className='phone' src={phone} alt="Phone" />
                </div>
                <div className="text1">
                    <h1 className='app'>APP</h1>
                </div>
            </div> */}
            <div className="container">
                <div className="text"><h1>CASH</h1></div>
                <div className="image-container">
                    <img
                        className="rotated-image"
                        src={phone}
                        alt="Rotated Image"
                    />
                    <div className="overlapping-text"><h1>APP</h1></div>
                </div>
            </div>
        </>
    )
}

export default Main
