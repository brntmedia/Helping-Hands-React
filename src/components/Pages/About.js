import React from 'react'
import Footer from '../Footer'
import Story from '../Story'


function About() {
    return (
        <div>
            <div className="about">
                <div className="about-img">
                    <div className="about-text">
                        <div className='about-border'>
                                <h1>
                                    Our Story
                                </h1>
                        </div>
                    </div>
                </div>
                <Story/>
            </div>
            <Footer/>
        </div>
    )
}

export default About
