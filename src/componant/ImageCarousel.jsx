import React, { useEffect, useState } from 'react'
import "./imagecarousel.css"
import food from "../Image/food.png"
import food1 from "../Image/food1.png"
import food2 from "../Image/food2.png"
import food3 from "../Image/food3.png"
import food4 from "../Image/food4.png"


const ImageCarousel = () => {

    const [slider, setslider]=useState(0)

const data=[ food, food1, food2, food3, food4]


const handlePlus =() =>{
 setslider(slider ===data.length-1 ? 0:slider+1)
}

const handleminus =() =>{
    setslider(slider ===0 ? data.length-1: slider-1)
    }


useEffect(() => {

    const sliderclear = setInterval(() => {
      handlePlus()
 },3000)


    return() =>clearInterval(sliderclear)

}, [slider])


  return (
    
    <div className='slider'>
        {
            data.map((img, i) => (

                <div className={`class-img ${slider===i? "block":"hidden"}`} key={id} >
                <img src={img} alt='' className='hidden'></img>

                <div className='btn'> 
                <button onClick={handleminus}>-</button>
                <button onClick={handlePlus}>+</button>
                </div>
                </div> 
  ))
           
       
    }
        </div>
    
  )
  
}

export default ImageCarousel
