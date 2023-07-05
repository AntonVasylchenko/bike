import React from 'react'
import "./about.css"

function About() {
    return (
        <section className='about'>
            <div className='page-width'>
                <div className='about-container'>
                    <h1 className='about-title h1'>About</h1>
                    <div className="about-content">
                        <p className='about-content_text h3'>
                            Comrades! The constant quantitative growth and scope of our activism allows us to carry out important tasks in developing directions for progressive development. Ideological considerations of the highest order, as well as the continuous quantitative growth and the scope of our activity play an important role in shaping the positions taken by the participants with respect to the tasks at hand.
                            Thus the further development of various forms of activity contributes to the preparation and realization of the positions taken by the participants with regard to the tasks at hand.
                        </p>
                        <div className='about-content_img'>
                            <img src={`${process.env.PUBLIC_URL}/img/about.png`} alt="about" />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default About