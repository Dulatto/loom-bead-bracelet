import React from 'react'
import '../styles/about.css'

function About() {
    return (
        <div className='container'>
            <div class="section">
                <h2>About Us</h2>
                <div class="about-section">
                    <div class="about-text">
                        <h6>Our Story</h6>
                        <p>Our company started with a simple idea: to let people express their creativity through personalized bracelet designs. Over the years, we have grown into a community-driven platform where anyone can create their own bracelet and share their unique story.</p>
                        <h6>Meet the Team</h6>
                        <p>Our dedicated team consists of talented designers, developers, and artisans who work tirelessly to bring your designs to life.</p>
                    </div>
                    <div class="team-photo">
                        {/* <img src="team-photo.jpg" alt="Team Photo"> */}
                    </div>
                </div>
            </div></div>
    )
}

export default About
