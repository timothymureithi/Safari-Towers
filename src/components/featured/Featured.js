import React from 'react';
import './Featured.css';

import Apt1 from '../../assets/ap1.jpg'
import Bed1 from '../../assets/adam-winger-5zX1KAjPl4o-unsplash.jpg'
import Bed2 from '../../assets/adam-winger-5zX1KAjPl4o-unsplash.jpg'
import Kitchen from '../../assets/kitchen1.jpg'
import Bathroom from '../../assets/bath1.jpg'
import Apt2 from '../../assets/apt2.jpg'
import Bed3 from '../../assets/adam-winger-5zX1KAjPl4o-unsplash.jpg'
import Bed4 from '../../assets/adam-winger-5zX1KAjPl4o-unsplash.jpg'
import Bathroom2 from '../../assets/bath2.jpg'
import LivingRoom from '../../assets/apt3.jpg'

const Featured = () => {
  return (
    <div className='featured'>
    <h1 className='featured-text'>Top Featured Listings</h1>
    <p className='featured-text'>Selected listings by City, State, & Zip based on views.</p>
    <div className='container'>
        <img className='span-3 image-grid-row-2' src={Apt1} alt='' />
        <img src={Bed1} alt='' />
        <img src={Bed2} alt='' />
        <img src={Kitchen} alt='' />
        <img src={Bathroom} alt='' />
        <div className='span-3 img-details'>
            <div className='top'>
                <h2>Mombasa road, Nairobi</h2>
                <p>Apartment for Sale</p>
                <p className='price'>KSH 9,677,000</p>
            </div>
            <div className='info-grid'>
                <div>
                    <div className='info'>
                        <p className='bold'>Bedrooms:</p><p>2</p>
                    </div>
                    <div className='info'>
                        <p className='bold'>Bathrooms:</p><p>2</p>
                    </div>
                </div>
                <div>
                    <div className='info'>
                        <p className='bold'>Square Feet:</p><p>8,138</p>
                    </div>
                    <div className='info'>
                        <p className='bold'>Est Payment:</p><p>KSH 100,450/mo</p>
                    </div>
                </div>
            </div>
        </div>
        <div className='span-2 right-img-details'>
            <p>A beautiful modern day apartment in the CBD with a full-size pool. Spacious and luxurious apartment complex located in Nairobi. Including media room, workout facility, and built-in sauna. </p>
            <button className='btn'>View Listing</button>
        </div>
    </div>

{/* Section section */}
<div className='container'>
        <img className='order-2' src={Bed3} alt='' />
        <img className='order-3' src={Bed4} alt='' />

        <img className='span-3 image-grid-row-2 order-1' src={Apt2} alt='' />


        <img className='order-4' src={Bathroom2} alt='' />
        <img className='order-5' src={LivingRoom} alt='' />

        <div className='span-2 right-img-details order-7'>
        <p>A beautiful modern day apartment in the CBD with a full-size pool. Spacious and luxurious apartment complex located in Nairobi. Including media room, workout facility, and built-in sauna. </p>
            <button className='btn'>View Listing</button>
        </div>


        <div className='span-3 img-details order-6'>
            <div className='top'>
                <h2>Upperhill, Nairobi</h2>
                <p>Aparment for Sale</p>
                <p className='price'>KSH 12,677,000</p>
            </div>
            <div className='info-grid'>
                <div>
                    <div className='info'>
                        <p className='bold'>Bedrooms:</p><p>3</p>
                    </div>
                    <div className='info'>
                        <p className='bold'>Bathrooms:</p><p>2</p>
                    </div>
                </div>
                <div>
                    <div className='info'>
                        <p className='bold'>Square Feet:</p><p>8,138</p>
                    </div>
                    <div className='info'>
                        <p className='bold'>Est Payment:</p><p>KSH 110,000/mo</p>
                    </div>
                </div>
            </div>
        </div>

    </div>
</div>
  )
}

export default Featured
