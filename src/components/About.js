import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Github} from 'react-bootstrap-icons'
import {Linkedin} from 'react-bootstrap-icons'

const About = () => {
    return (
        <div className= 'about'>
        <h1> The Developers</h1>
            <div className= 'dev'>
                <div >
                    <img src="Hnin.gif" className='img' alt="Hnin"/>
                    <h4>Hnin Mabalo</h4>
                    <p>Fullstack Developers.</p>
                    <a href="https://github.com/hninmabalo" target="_blank"> < Github className='github'size='20px' /> </a>
                    <a href="https://www.linkedin.com/in/hnin-mabalo/" target="_blank"> < Linkedin className='linkedin' size='20px' /></a>
                </div>

                <div >
                    <img src="Rene.gif" className='img' alt="Rene"/>
                    <h4>Rene Collins</h4>
                    <p>Fullstack Developers.</p>
                    <a href="https://github.com/ReneTheMC" target="_blank"> < Github className='github' size='20px' /> </a>
                    <a href="https://www.linkedin.com/in/rene-collins-1a1877152/" target="_blank"> < Linkedin className='linkedin' size='20px' /></a>
                </div>
               
                <div >
                    <img src="lizz.gif" className='img' alt="Hnin"/>
                    <h4>Liz Rurangwa</h4>
                    <p>Fullstack Developers.</p>
                    <a href="https://github.com/ruraliz" target="_blank"> < Github className='github' size='20px' /> </a>
                    <a href="https://www.linkedin.com/in/liz-rurangwa-liz-rurangwa/" target="_blank"> < Linkedin className='linkedin' size='20px' /></a>
                </div>
            </div>    
        </div>
    )
}

export default About;