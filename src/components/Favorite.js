import React, {useState , useEffect} from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import axios from 'axios';
import setAuthToken from '../utils/setAuthToken'
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

const renderFavorites = () => {
    if (favorites.length) {
        let favoritesArray = favorites.map((f, idx) => <div key = {idx}> {f.imageUrl}   
        {f.name}
        {f.bio}
        {f.location}
        </div>)
        return favoritesArray
    } else {
        return <h1>There are no Favorites</h1>
    }
}
    return(
    <div>
        {renderFavorites()}
    </div>
    )
}  

export default Favorites;