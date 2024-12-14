import React from 'react'
import { Link } from "react-router-dom"



const Home = () => {
  return (
    <>
      <section>
        <div className="grid-container">
            <div className='link'><Link style={{textDecoration:"none", color:"White"}} to="counterapp">Counter Application</Link></div>
            <div className='link'><Link style={{textDecoration:"none", color:"White"}}to="todolist">Todo List</Link></div>
            <div className='link'><Link style={{textDecoration:"none", color:"White"}}to="fetchapi">Fetch and Display API Data</Link></div>
            <div className='link'><Link style={{textDecoration:"none", color:"White"}}to="toggle">Toggle Visibility</Link></div>
            <div className='link'><Link style={{textDecoration:"none", color:"White"}}to="searchfilter">Search Filter</Link></div>
            <div className='link'><Link style={{textDecoration:"none", color:"White"}}to="navigation">Multi-Page Navigation</Link></div>
            <div className='link'><Link style={{textDecoration:"none", color:"White"}}to="colorswitcher">Color Switcher</Link></div>
            <div className='link'><Link style={{textDecoration:"none", color:"White"}}to="accordion">Accordion Component</Link></div>
            <div className='link'><Link style={{textDecoration:"none", color:"White"}}to="imagecarousel">Image Carousel</Link></div>
            <div className='link'><Link style={{textDecoration:"none", color:"White"}}to="Weatherapp">Weather Application</Link></div>
            <div className='link'><Link style={{textDecoration:"none", color:"White"}}to="mode">Light/Dark Mode Toggle</Link></div>
            <div className='link'><Link style={{textDecoration:"none", color:"White"}} to="clicktracker">Click Tracker</Link></div>
            <div className='link'><Link style={{textDecoration:"none", color:"White"}}to="additionapp">Simple Addition App</Link></div>
            <div className='link'><Link style={{textDecoration:"none", color:"White"}}to="timerapp">Timer Application</Link></div>
            </div>
             </section>
    </>
  )
}

export default Home;
