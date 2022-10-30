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
                    <img src="Hnin.gif" class='img' alt="Hnin"/>
                    <h4>Hnin Mabalo</h4>
                    <p>Hnin...Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                Tempore dolorum excepturi, pariatur dolore fuga perferendis 
                mollitia deserunt a voluptas assumenda! Consequatur beatae qui 
                dolorem tempora possimus accusantium, fugit eius quidem?</p>
                    <a href="https://github.com/ruraliz"> < Github size='20px' /> </a>
                    <a href="https://github.com/ruraliz"> < Linkedin size='20px' /></a>
                </div>

                <div className="dev2">
                    <img src="Rene.gif" class='img' alt="Rene"/>
                    <h4>Rene Collins</h4>
                    <p>Rene...Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                Tempore dolorum excepturi, pariatur dolore fuga perferendis 
                mollitia deserunt a voluptas assumenda! Consequatur beatae qui 
                dolorem tempora possimus accusantium, fugit eius quidem?</p>
                    <a href="https://github.com/ruraliz"> < Github size='20px' /> </a>
                    <a href="https://github.com/ruraliz"> < Linkedin size='20px' /></a>
                </div>
               
                <div className="dev3">
                    <img src="lizz.gif" class='img' alt="Hnin"/>
                    <h4>Liz Rurangwa</h4>
                    <p>Liz...Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                Tempore dolorum excepturi, pariatur dolore fuga perferendis 
                mollitia deserunt a voluptas assumenda! Consequatur beatae qui 
                dolorem tempora possimus accusantium, fugit eius quidem?</p>
                    <a href="https://github.com/ruraliz"> < Github size='20px' /> </a>
                    <a href="https://github.com/ruraliz"> < Linkedin size='20px' /></a>
                </div>
            </div>    
        </div>
    )
}

export default About;