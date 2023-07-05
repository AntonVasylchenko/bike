import React from 'react'
import "./wheretoride.css"

const WhereToRide = () => {
    return (
        <section className='where'>
            <div className='page-width'>
                <div className='where-container'>
                    <h1 className='where-title h1'>Where to ride</h1>
                    <div className="where-content">
                        <p className='where-content_text h3'>
                            Comrades! The constant quantitative growth and scope of our activism allows us to carry out important tasks in developing directions for progressive development. Ideological considerations of the highest order, as well as the continuous quantitative growth and the scope of our activity play an important role in shaping the positions taken by the participants with respect to the tasks at hand.
                            Thus the further development of various forms of activity contributes to the preparation and realization of the positions taken by the participants with regard to the tasks at hand.
                        </p>
                        <div className='where-content_img'>
                            <img src={`${process.env.PUBLIC_URL}/img/where.png`} alt="where" />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}


export default WhereToRide