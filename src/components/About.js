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
                    <h5> Fullstack Developers </h5>
                    <p>I want to create software development. In the next phase of my career, I not only want to use my problem solving skills to make applications work smoothly, but I also want to work on the technically challenging aspects of the application. I find great satisfaction being able to help people to create new websites and new technology that gear towards something that would benefit them in processes.</p>
                    <a href="https://github.com/hninmabalo" target="_blank"> < Github className='github'size='20px' /> </a>
                    <a href="https://www.linkedin.com/in/hnin-mabalo/" target="_blank"> < Linkedin className='linkedin' size='20px' /></a>
                </div>

                <div >
                    <img src="Rene.gif" className='img' alt="Rene"/>
                    <h4>Rene Collins</h4>
                    <h5> Fullstack Developers </h5>
                    <p>I want to be associated with a growth oriented organization where my skills would significantly contribute towards its success. I would love to be on a team that provides an ample scope for learning new technologies and methodologies to further my skill set and contribute further to my team. I have the ability to work independently or in team environment; ability to handle multiple priorities and meet deadlines under pressure without compromising on quality, value or integrity which I believe in. I also have strong interpersonal communication along with problem solving abilities that assists clients and customers fit their bottom line. </p>
                    <a href="https://github.com/ReneTheMC" target="_blank"> < Github className='github' size='20px' /> </a>
                    <a href="https://www.linkedin.com/in/rene-collins-1a1877152/" target="_blank"> < Linkedin className='linkedin' size='20px' /></a>
                </div>
               
                <div >
                    <img src="lizz.gif" className='img' alt="Hnin"/>
                    <h4>Liz Rurangwa</h4>
                    <h5> Fullstack Developers </h5>
                    <p>I am passionate about developing platforms where creators, vendors etc...can have their own space to have their projects flourish. As the world becomes more tech focused, I want to give people in my community the opportunity to interact with such world. </p>
                    <a href="https://github.com/ruraliz" target="_blank"> < Github className='github' size='20px' /> </a>
                    <a href="https://www.linkedin.com/in/liz-rurangwa-liz-rurangwa/" target="_blank"> < Linkedin className='linkedin' size='20px' /></a>
                </div>
            </div>    
        </div>
    )
}

export default About;