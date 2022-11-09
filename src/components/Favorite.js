import React, {useState , useEffect} from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import axios from 'axios';
import setAuthToken from '../utils/setAuthToken'
import {GeoAltFill} from 'react-bootstrap-icons'
import {BalloonFill} from 'react-bootstrap-icons'
import {PersonHeart} from 'react-bootstrap-icons'
import Carousel from 'react-bootstrap/Carousel';
const REACT_APP_SERVER_URL = process.env.REACT_APP_SERVER_URL

function Favorites()  {
const [favorites, setFavorites]= useState([])
useEffect(() => {
    setAuthToken(localStorage.getItem('jwtToken'))
    axios.get(`${REACT_APP_SERVER_URL}/users/getfavorites`)
        .then(response => {
            setFavorites(response.data.favorites);
        })
        .catch(error => console.log(error));
}, [])

function removeFromFavorites(pcid){
    axios({
        method: 'delete',
        url: `${REACT_APP_SERVER_URL}/users/favorites/${pcid}`

    })
    .then(response => {
          console.log(response)
          setFavorites(response.data.favorites)
        })
        .catch(error => console.log(error));
}

const renderFavorites = () => {
    if (favorites.length) {
        let favoritesArray = favorites.map((f, idx) => <div ClassName= 'fav' key = {idx}> 
        <img src={f.imageUrl}  width='60px' alt='creator'/>
        <b>{f.name}</b>
        <br></br>
        <em>{f.bio}</em>
        <br></br>
        <GeoAltFill/> {f.location}
        <br></br>
        <BalloonFill/>{f.birthday}
        <br></br>
        <PersonHeart/>{f.followerCount}
        <br></br>
        <button onClick={()=>{removeFromFavorites(f.pcid)}} type="button" className= 'remove-button'>Remove</button>
        </div>)
        return favoritesArray
    } else {
        return <h1>There are no Favorites</h1>
    }
}
    return(
    <div style={{height: '100vh'}} >
        <Carousel>
      <Carousel.Item>
        <img
          className="d-block"
          src="image4.gif"
          alt="First slide"
        />
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block"
          src="image2.gif"
          alt="Second slide"
        />
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block"
          src="image3.gif"
          alt="Third slide"
        />
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-10"
          src="image1.gif"
          alt="Second slide"
        />
      </Carousel.Item> 
      <Carousel.Item>
        <img
          className="d-block w-10"
          src="image5.gif"
          alt="Second slide"
         />
      </Carousel.Item> 

    </Carousel>
     {renderFavorites()}
    </div>
    )
}  

export default Favorites;