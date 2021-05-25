import React from 'react';
import './Certificates.css';
import JAP from './images/JAP.jpg';
import TI from './images/Tec Info.jpg';
import RWD from './images/RWD.jpg';
import JADS from './images/JS.jpg'
import TESTER from './images/TESTER.jpg'
import TR from './images/redes.JPG'


const Certificates = () => {
    return (
    <div id='Certificates'>
        <h1 id='title'>Certificates</h1>
        <br/>
        <div className='certificate-container'>
            <a href={JAP}><img className="thumbnail" src={JAP} alt='Jovenes a Programar .NET' /></a>
            <a href={TI}><img className="thumbnail" src={TI} alt='Técnico en Informática (Ofimática)' /></a>
            <a href={RWD}><img className="thumbnail" src={RWD} alt='Responsive Web Desing' /></a>
            <a href={JADS}><img className="thumbnail" src={JADS} alt='JavaScript Algorithms and Data Structures' /></a>
            <a href={TESTER}><img className="thumbnail" src={TESTER} alt='Tester' /></a>
            <a href={TR}><img className="thumbnail" src={TR} alt='Técnico en Redes' /></a>
        </div>
    </div>
    )
}

export default Certificates;
