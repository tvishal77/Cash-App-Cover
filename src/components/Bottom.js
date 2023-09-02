import React from 'react'
import "./Bottom.css"
import appstore from "./appstore.png"
import playstore from "./playstore.jpg"
import chat from "./chat.png"
import tweet from "./twitter.png"
import insta from "./Instagram_logo.png"
function Bottom() {
    return (
        <>
            <footer className="footer">
                <div className="footer-left">
                    <img src={appstore} alt="appstore" />
                    <img src={playstore} alt="playstore" />
                </div>
                <div className="footer-right">
                    <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Rerum, maiores?</p>
                    <img src={chat} alt="chat" />
                    <img src={tweet} alt="tweet" />
                    <img src={insta} alt="insta" />
                </div>
            </footer >
        </>
    )
}

export default Bottom
