import React from 'react';
import Carousel from 'react-bootstrap/Carousel';

const Welcome = () => {
    return (
        <div>
    <h1 className= 'title'>Podlovers</h1>
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

            <h2 className= 'homep'>There are a few different methods for achieving peace of mind. Have you try listen Podcast? If not, start listen for popular podcast.</h2>

            <hr />
            <p>Start searching for popular podcast
                <form action="/podcast" className="form-inline">
                    <button className="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
                </form>
            </p>
            <p>Start searching for famous creator 
                <form action="/creator" className="form-inline">
                <button className="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
            </form></p>

        </div>
    )
}

export default Welcome;