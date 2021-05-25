import React from 'react'
import './Home.css'

export const Home = () => {
    return (
        <div className='greetings'>            
          <h1>Welcome to my website!</h1>
          <p>This site has been created as a portfolio/exposition and itself is also a growing project. Feel free to send your suggestions! </p>
          <div className="contact">                
                <div className="link">
                    <h4>Email:</h4>
                    <a href="mailto:leonardosoumas3@gmail.com">leonardosoumas3@gmail.com</a>
                </div>
                <div className="link">
                    <h4>Twitter:</h4>
                    <a href='https://twitter.com/leonardosoumas1'>@leonardosoumas1</a>
                </div>
                <div className="link">
                    <h4>Github: </h4>
                    <a href='https://github.com/Liopol2'>https://github.com/Liopol2</a>
                </div>
            </div>     
        </div>
        
    )
}
