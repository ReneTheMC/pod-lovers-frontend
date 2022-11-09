import React, {useState } from 'react';
import axios from 'axios';
import { Redirect } from 'react-router-dom';
import setAuthToken from '../utils/setAuthToken';

const REACT_APP_SERVER_URL = process.env.REACT_APP_SERVER_URL;

function Podcast() {
  const [podcasts, setPodcast] = useState([]);
  const [q, setQ]= useState('')
  const [redirect, setRedirect]= useState(false)
  const handleChange = event => {
    setQ(event.target.value);
  }

const handleSubmit = (e) => {
  setAuthToken(localStorage.getItem('jwtToken'))
    e.preventDefault();
    const searchTerm = {q}
    axios.post(`${REACT_APP_SERVER_URL}/podcasts/results`, searchTerm)
    .then(response => {
      console.log(response.data)
      setPodcast(response.data.podcasts)
    })
    .catch(error => console.log(error))
  }
  
  function addToFavPod( id, imageUrl, title, description) {
    setAuthToken(localStorage.getItem('jwtToken'))
    axios({
      method: 'post',
      url: `${REACT_APP_SERVER_URL}/users/AddFavPodcastList`,
      data: {
        id: id,
        imageUrl: imageUrl,
        title: title,
        description: description
      }
    }).then(response => {
      console.log(response)
      setRedirect(true)
    })
    .catch(error => console.log(error));
  }
if (redirect) return <Redirect to="/favPodcastList" />
  return (
  <div>
    <form onSubmit={handleSubmit}  action="/podcasts/results" method= 'POST' className="form-inline">
        <label htmlFor="q"></label>
        <input value={q} onChange={handleChange} id="q"className="form-control mr-sm-2" type="search" placeholder="Podcast" aria-label="Search"/>
        <button className="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
  </form>

    <h1>Your results</h1>
      <div>
        {podcasts.map((podcast, idx) => ( 
          <div className= 'result' key={idx}> 
            <div className="card" style={{width: '50rem', background: 'grey'}} key={podcast.title}>  <img src={podcast.imageUrl} width='250px' alt='podcast poster'/> 
            <h3><strong>{podcast.title}</strong></h3>
            <p>{podcast.description}</p>
             </div>
            <button onClick={()=>{addToFavPod(podcast.id, podcast.imageUrl, podcast.title, podcast.description)}} type="button" className= 'button'>Add To Favorites</button>
           <hr />
          </div>
        ))}
     </div> 
  </div>   
       
  )
  }

  export default Podcast;