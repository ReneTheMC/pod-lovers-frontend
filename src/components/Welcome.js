import React from 'react';
import PodcastList from './PodcastList';
import Creator from './Creator';
import Carousel from 'react-bootstrap/Carousel';

const Welcome = () => {
    return (
        <div>
    <Carousel>
      <Carousel.Item>
        <img
          className="d-block"
          src="image3.gif"
          alt="First slide"
        />
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block"
          src="homeimg1.gif"
          alt="Second slide"
        />
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block"
          src="homeimg3.gif"
          alt="Third slide"
        />
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block"
          src="homeimg6.gif"
          alt="Second slide"
        />
      </Carousel.Item> 
      <Carousel.Item>
        <img
          className="d-block"
          src="homeimg5.gif"
          alt="Second slide"
         />
      </Carousel.Item> 
      <Carousel.Item>
        <img
          className="d-block"
          src="homeimg7.gif"
          alt="Second slide"
         />
      </Carousel.Item> 
      <Carousel.Item>
        <img
          className="d-block"
          src="homeimg8.gif"
          alt="Second slide"
         />
      </Carousel.Item> 
      <Carousel.Item>
        <img
          className="d-block"
          src="homeimg4.gif"
          alt="Second slide"
         />
      </Carousel.Item> 
      <Carousel.Item>
        <img
          className="d-block"
          src="homeimg2.gif"
          alt="Second slide"
         />
      </Carousel.Item> 
      </Carousel>
            <h1>Podlovers</h1>
            <PodcastList />
            <Creator />
        </div>
    )
}

export default Welcome;