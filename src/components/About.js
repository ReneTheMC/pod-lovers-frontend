import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Github} from 'react-bootstrap-icons'
import {Linkedin} from 'react-bootstrap-icons'

const About = () => {
    return (
        <div className= 'about'>
        <h1> The Developers</h1>
            <div className= 'dev'>
                <div className="dev1">
                    <img src="Hnin.gif" className='img' alt="Hnin"/>
                    <h4>Hnin Mabalo</h4>
                    <p>Hnin...Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                Tempore dolorum excepturi, pariatur dolore fuga perferendis 
                mollitia deserunt a voluptas assumenda! Consequatur beatae qui 
                dolorem tempora possimus accusantium, fugit eius quidem?</p>
                    <a href="https://github.com/hninmabalo"> < Github className='github'size='20px' /> </a>
                    <a href="https://www.linkedin.com/in/hnin-mabalo/"> < Linkedin className='linkedin' size='20px' /></a>
                </div>

                <div className="dev2">
                    <img src="Rene.gif" className='img' alt="Rene"/>
                    <h4>Rene Collins</h4>
                    <p>Rene...Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                Tempore dolorum excepturi, pariatur dolore fuga perferendis 
                mollitia deserunt a voluptas assumenda! Consequatur beatae qui 
                dolorem tempora possimus accusantium, fugit eius quidem?</p>
                    <a href="https://github.com/ReneTheMC"> < Github className='github' size='20px' /> </a>
                    <a href="https://www.linkedin.com/in/rene-collins-1a1877152/"> < Linkedin className='linkedin' size='20px' /></a>
                </div>
               
                <div className="dev3">
                    <img src="lizz.gif" className='img' alt="Hnin"/>
                    <h4>Liz Rurangwa</h4>
                    <p>Liz...Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                Tempore dolorum excepturi, pariatur dolore fuga perferendis 
                mollitia deserunt a voluptas assumenda! Consequatur beatae qui 
                dolorem tempora possimus accusantium, fugit eius quidem?</p>
                    <a href="https://github.com/ruraliz"> < Github className='github' size='20px' /> </a>
                    <a href="https://www.linkedin.com/in/liz-rurangwa-liz-rurangwa/"> < Linkedin className='linkedin' size='20px' /></a>
                </div>
            </div>    
        </div>
    )
}

export default About;