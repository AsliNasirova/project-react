import React, { useState } from 'react'
import './index.css'

const Imgslider = () => {
    const [source, setSource]=useState("https://cdn.britannica.com/37/227037-050-CA792866/Broken-tulip-flower.jpg")
    const handleClick=(e)=>{
        setSource(e.target.src)
    }
  return (
    <div>
      <div className="slider_container">
        <div className="endimage">
            <img src={source}alt="" />
        </div>
        <div className="threediv">
        <div className="imageone">
            <img onClick={(e)=>handleClick(e)} src="https://cdn.britannica.com/37/227037-050-CA792866/Broken-tulip-flower.jpg" alt="" />
        </div>
        <div className="imagetwo">
            <img onClick={(e)=>handleClick(e)} src="https://images.pexels.com/photos/36729/tulip-flower-bloom-pink.jpg?cs=srgb&dl=pexels-pixabay-36729.jpg&fm=jpg" alt="" />
        </div>
        <div className="imagethree">
            <img onClick={(e)=>handleClick(e)} src="https://nestasia.in/cdn/shop/files/DSC9017.jpg?v=1689165083" alt="" />
        </div>
        </div>
      </div>
    </div>
  )
}

export default Imgslider
