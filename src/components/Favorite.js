import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';


function Favorites({favorites})  {
    return(
    <div>{favorites.imageUrl}   
    {favorites.name}
    {favorites.bio}
    {favorites.location}
    </div>
    )
}  

export default Favorites;