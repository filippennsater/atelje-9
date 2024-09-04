//import React, { useState, useRef, useEffect } from 'react';
import '../../App.css';
import './ContactSection.scss';
//import emailjs from '@emailjs/browser';
import { createContext } from 'react';

export const ThemeContext = createContext(null);

function ContactSection() {
    

    return (
        <div className='contact-container'>
            <div className='contact-info-wrap'>
                <div className='left-container'>
                    <div className='h30'><br />Telefon</div>
                    <div className='p30'>
                        070-142 24 23<br />
                        Mina telefontider är mellan 9:00 och 17:00, måndag till fredag.
                    </div>
                    <div className='h30'>Mail</div>
                    <div className='p30'>
                    lenafors.atelje9@outlook.com<br />
                    </div>
                    <div className='h30'>Adress</div>
                    <div className='p30'>
                        Ateljé 9<br />
                        Steffensvägen 5 A<br />
                        236 38 Höllviken
                    </div>
                    
                </div>
                <div className='right-container'>
                    <div className="map-container" dangerouslySetInnerHTML={{
                        __html: `<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2264.9452090668824!2d12.940717277726081!3d55.41130721824148!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x46530c68b470523f%3A0x936c973aa05e1af8!2sSteffensv%C3%A4gen%205A%2C%20236%2038%20H%C3%B6llviken!5e0!3m2!1ssv!2sse!4v1725477200299!5m2!1ssv!2sse" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>`
                    }} />
                </div>
            </div>
        </div>
    );
}

export default ContactSection;