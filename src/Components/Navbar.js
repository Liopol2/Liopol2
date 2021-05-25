import React from 'react';
import logo from './images/L2.png';
import whoami from'./images/whoami.svg';
import devlog from './images/devlog.svg';
import proyects from './images/proyects.svg';
import './Navbar.css'
export const Navbar = () => {
    return (
        <div className='sidebar'> 
            <div className="logo-div"><a href='/'><img id='logo' src={logo} alt='logo'/></a></div>
            <div className='whoami-div'> 
                <a className='navlink' href='/whoami' title='Whoami' >
                    <img className='nav-logo' src={whoami} alt='whoami'/>
                </a>
            </div>
            <div className='devlog-div'>
               <a className='navlink' href='/Devlog' title="Devlog" >
                   <img className='nav-logo' src={devlog} alt='Devlog'/>
               </a>
            </div>
            <div className='proyects-div'>
                <a className='navlink' href='/Proyects' title='Proyects' >
                    <img className='nav-logo' src={proyects} alt='Proyects'/>
                </a>
            </div>
        </div>
    )
}

export default Navbar;