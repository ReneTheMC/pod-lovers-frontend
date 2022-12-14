import React, {useState , useEffect} from 'react';
import axios from 'axios';
import setAuthToken from '../utils/setAuthToken';
import Carousel from 'react-bootstrap/Carousel';
const REACT_APP_SERVER_URL = process.env.REACT_APP_SERVER_URL

function FavPodcastList()  {
const [favPodcastList, setFavPodcastList]= useState([])
useEffect(() => {
    setAuthToken(localStorage.getItem('jwtToken'))
    axios.get(`${REACT_APP_SERVER_URL}/users/getfavPodcastList`)
        .then(response => {
            setFavPodcastList(response.data.favPodcastList);
        })
        .catch(error => console.log(error));
}, [])

function removeFromFavorites(id){
    axios({
        method: 'delete',
        url: `${REACT_APP_SERVER_URL}/users/favPodcastLists/${id}`

    })
    .then(response => {
          console.log(response)
          setFavPodcastList(response.data.favPodcastList)
        })
        .catch(error => console.log(error));
}


const renderFavPodcastList = () => {
    if (favPodcastList.length) {
        let favPodArray = favPodcastList.map((f, idx) => <div key = {idx}> 
        <img src={f.imageUrl} width='250px' alt='podcast poster'/>   
        {f.title}
        {f.description}
        <br />
        <button onClick={()=>{removeFromFavorites(f.id)}} type="button" className= 'remove-button'>Remove</button>
        </div>)
        return favPodArray
    } else {
        return <h1>There are no Favorites</h1>
    }
}
    return(
    <div>
         <Carousel>
      <Carousel.Item>
        <img
          className="d-block"
          src="homeimg2.gif"
          alt="First slide"
        />
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block"
          src="homeimg3.gif"
          alt="Second slide"
        />
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block"
          src="homeimg5.gif"
          alt="Third slide"
        />
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-10"
          src="homeimg6.gif"
          alt="Second slide"
        />
      </Carousel.Item> 
      <Carousel.Item>
        <img
          className="d-block w-10"
          src="homeimg8.gif"
          alt="Second slide"
         />
      </Carousel.Item> 

    </Carousel>
        {renderFavPodcastList()}
    </div>
    )
}  

export default FavPodcastList;