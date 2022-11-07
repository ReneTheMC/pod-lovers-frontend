import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';


function Favorites({favorites})  {
    return(
    <div>{favorites.name}</div>
    )
}  

export default Favorites;