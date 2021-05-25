import React from 'react';
import './Whoami.css';
import Certificates from './Certificates';

const Whoami = () => {
    return (
        <div>
            <div className='home-div' >
                <h1>Whoami:</h1>
                <br/>
                <p>I am Leonardo, a programmer/thinkerer
            with knowledge mostly on FrontEnd develoment, but also some BackEnd, general Version Control and Testing
            searching for a employment where i can upgrade my skills and learn new ones.
                </p> 
                <br/>                            
            </div>
            <Certificates/>
        </div>
    )
}

export default Whoami

