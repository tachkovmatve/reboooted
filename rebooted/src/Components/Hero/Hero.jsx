import React from 'react'
import "./Hero.css"
import dark_arrow from "../../assets/dark-arrow.png"

const Hero = () => {
  return (
    <div className='hero container'>
        <div className="hero-text">
            <h1>We Ensure Better Education For a Better World</h1>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio deleniti ut sunt excepturi blanditiis provident commodi laborum minima consequuntur aut unde, molestias necessitatibus doloribus id.</p>
            <button className="btn">Explore More <img src={dark_arrow} alt="" /></button>
        </div>
    </div>
  )
}

export default Hero