import React from 'react';
import '../../App.css'
import './HomeSection.scss';


function HomeSection() {


    return (

        <div className='hero-container'>
            <video className='vid' src='/videos/duck.mp4' autoPlay loop muted />

            <div className='selfie-container'>
                <figure className="home-self" />
            </div>
            <div className='intro-text'>
                <h4>Lena Fors</h4>
                <h1>Hälsocoach</h1>
                <h1>och</h1>
                <h1>Företagshälsovård</h1>
            </div>
        </div>
    )
}

export default HomeSection