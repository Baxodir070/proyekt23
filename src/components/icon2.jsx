import React from 'react'
import icon1 from '../assets/Group 22.png'
import icon2 from '../assets/Group.png'
import icon3 from '../assets/Group 19.png'
import icon4 from '../assets/Vector.png'
import icon5 from '../assets/image 6 (Traced).png'
import icon6 from '../assets/Group 23.png'
import icon7 from '../assets/9.png'
import icon8 from '../assets/6.png'
import icon9 from '../assets/12.png'
import icon10 from '../assets/2.png'
import icon11 from '../assets/13.png'
import icon12 from '../assets/16.png'
import icon13 from '../assets/3.png'

function Iconn() {
    return (
        <div>
            <section className=' mt-64 ml-10'>
                <div className='flex justify-center gap-24 '>
                    <img className='object-contain' src={icon1} alt="" />
                    <img className='object-contain' src={icon2} alt="" />
                    <img className='object-contain' src={icon3} alt="" />
                    <img className='object-contain' src={icon4} alt="" />
                    <img className='object-contain' src={icon5} alt="" />
                    <img className='object-contain' src={icon6} alt="" />
                </div>
                <div className='flex justify-center gap-16 mt-10 mb-10'>
                    <img className='object-contain' src={icon7} alt="" />
                    <img className='object-contain' src={icon8} alt="" />
                    <img className='object-contain' src={icon9} alt="" />
                    <img className='object-contain' src={icon10} alt="" />
                    <img className='object-contain' src={icon11} alt="" />
                    <img className='object-contain' src={icon12} alt="" />
                    <img className='object-contain' src={icon13} alt="" />
                </div>
                
                <div className="flex text-xl justify-center mt-20">Trusted by the world’s most ambitious teams.</div>
            </section>
        </div>
    )
}

export default Iconn;
