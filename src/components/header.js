import React from "react";
import "../styles/header.css";
import header_img from "../assets/header.svg";
import Typewriter from 'typewriter-effect';


function Header() {
  return (
    <div className="banner">
    
      <div className="content">
        <div className="leader">
          <img src={header_img} className="image" />
        </div>

        <div className="t">
          <h1 className="Hd">
          <Typewriter 
                     options={{
                         strings: ['OUR PROJECTS'],
                         autoStart: true,
                         loop: true,
                     }} />
          </h1>
          <p>
          We have completed a lot of projects in our Buildathon event where many students learned new technologies and finished their project in team with perfect teamwork.
          </p>
        </div>
      </div>
    </div>
  );
}
export default Header;
