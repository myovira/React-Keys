import React from 'react'
import { Link } from "react-router-dom"

const Home = () => {
  return (
    <>
    <h1>Home</h1>
    <br></br>
    <p>Asgmt 1:</p><Link to="counterapp">Counter Application</Link>
    <br></br>
    <br></br>
    <p>Asgmt 2:</p><Link to="todolist">Todo List</Link>
    <br></br>
    <br></br>
    <p>Asgmt 3:</p><Link to="fetchapi">Fetch and Display API Data</Link>
    <br></br>
    <br></br>
    <p>Asgmt 4:</p><Link to="toggle">Toggle Visibility</Link>
    <br></br>
    <br></br>
    <p>Asgmt 5:</p><Link to="searchfilter">Search Filter</Link>
    <br></br>
    <br></br>
    <p>Asgmt 6:</p><Link to="navigation">Multi-Page Navigation</Link>
    <br></br>
    <br></br>
    <p>Asgmt 7:</p><Link to="colorswitcher">Color Switcher</Link>
    <br></br>
    <br></br>
    <p>Asgmt 8:</p><Link to="accordion">Accordion Component</Link>
    <br></br>
    <br></br>
    <p>Asgmt 9:</p><Link to="imagecarousel">Image Carousel</Link>
    <br></br>
    <br></br>
    <p>Asgmt 10:</p><Link to="Weatherapp">Weather Application</Link>
    <br></br>
    <br></br>
    <p>Asgmt 11:</p><Link to="mode">Light/Dark Mode Toggle</Link>
    <br></br>
    <br></br>
    <p>Asgmt 12:</p><Link to="clicktracker">Click Tracker</Link>
    <br></br>
    <br></br>
    <p>Asgmt 13:</p><Link to="additionapp">Simple Addition App</Link>
    </>
  )
}

export default Home;
