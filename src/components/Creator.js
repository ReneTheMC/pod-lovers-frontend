
import React, {useState } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import axios from 'axios';
import { Redirect } from 'react-router-dom';
import setAuthToken from '../utils/setAuthToken'
const REACT_APP_SERVER_URL = process.env.REACT_APP_SERVER_URL

function Creator() {
  const [creators, setCreator] = useState([]);
  const [q, setQ]= useState('')
  const [redirect, setRedirect]= useState(false)
  const handleChange = event => {
    setQ(event.target.value);
  }
const handleSubmit = (e) => {
  setAuthToken(localStorage.getItem('jwtToken'))
    e.preventDefault();
    const searchTerm = {q}
    axios.post(`${REACT_APP_SERVER_URL}/creators/results`, searchTerm)
    .then(response => {
      console.log(response.data)
      setCreator(response.data.creators)
    })
    .catch(error => console.log(error))
  }
 
  function addToFavorite( pcid, name, bio, location, imageUrl, birthday, followerCount) {
    setAuthToken(localStorage.getItem('jwtToken'))
    axios({
      method: 'post',
      url: `${REACT_APP_SERVER_URL}/users/AddFavorites`,
      data: {
        pcid: pcid,
        name: name, 
        bio:bio,
        location: location,
        imageUrl: imageUrl,
        birthday: birthday,
        followerCount
      }
    }).then(response => {
      console.log(response)
      setRedirect(true)
    })
    .catch(error => console.log(error));
  }
if (redirect) return <Redirect to="/favorite" />


  return (
  <div>
    <form onSubmit={handleSubmit}  action="/creators/results" method= 'POST' className="form-inline">
        <label htmlFor="q"></label>
        <input value={q} onChange={handleChange} id="q"className="form-control mr-sm-2" type="search" placeholder="Creator" aria-label="Search"/>
        <button className="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
  </form>
  <h1>Results</h1>
      <div >
        {creators.map((creator, idx) => ( 
          <div className= 'result' key={idx}> 
            <div className="card" style={{width: '50rem', background: 'grey'}} key={creator.name}>  <img id="img" src={creator.imageUrl} width='200px' alt='creatorimage'/> 
            <strong>{creator.name}</strong>
            <br></br>
            <em>{creator.bio}</em>
            <br></br>
             <b>{creator.location}</b>
             </div>
            <button onClick={()=>{addToFavorite(creator.pcid, creator.name, creator.bio, creator.location, creator.imageUrl,creator.birthday,creator.followerCount)}} type="button" className="btn btn-secondary">Add To Favorites</button>
            <hr />
          </div>
        ))}
     </div> 
  </div>   
       
  )
  }

  export default Creator;

