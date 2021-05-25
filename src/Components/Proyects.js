import React from 'react';
import './Proyects.css'
import RQM from './images/RQM.png';
const Proyects = () => {
    return (
        <div className='proyects'>
            <h1 id='title'>Proyects</h1>
            <a href='https://rndquotemachine.netlify.app' target='_blank' rel="noreferrer" title='Random Quote Machine'>
                <img className='thumbnail' src={RQM} alt='RandomQuoteMachine'/>
                <p className='description'>This site is my solution to the proyect composing React certification at freeCodeCamp curriculum.</p>
            </a>
        </div>
    )
}

export default Proyects;
