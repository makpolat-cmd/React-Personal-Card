import React from "react";

export default function Header() {
    return (
        <div>
            <div className="my-main"></div>
            <h3 className="my-name">Muhammet Akpolat</h3>
            <h6 className="my-writing-1">Frontend Developer</h6>
            <p className="my-writing-2">MuhammetAkpolat.website</p>
            <a className="mail-btn" href="muhammetakpolat@gmail.com">Email</a>
            <a className="linkedin-btn" href="https://www.linkedin.com/in/makpolat-cmd/" target="_blank">LinkedIn</a>
            <h4 className="my-head-1">About</h4>
            <p className="my-p-1">I am a frontend developer with a particular interest in making things simple and automating daily tasks. 
                I try to keep up with security and best practices, and am always looking for new things to learn.</p>
            <h4 className="my-head-2">Interests</h4>
            <p className="my-p-2">Food </p>
        </div>  
    )
}