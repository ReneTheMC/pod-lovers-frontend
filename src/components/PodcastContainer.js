// import React, { useEffect, useState } from "react";
// // import Podcast from "./Podcast";
// import axios from "axios";

// const REACT_APP_SERVER_URL = process.env.REACT_APP_SERVER_URL;

// function PodcastContainer() {
//     const [podcast, setPodcast] = useState([])

//     useEffect(() => {
//         axios.get(`${REACT_APP_SERVER_URL}/pods`)
//         .then(response => {
//             console.log(response.data)
//             setPodcast(response.data.pods)
//         })
//     }, [])

//     const renderPodcast = () => {
//         if (podcast.length){
//             console.log("It works up until here >>>>", podcast)
//             let arrayPodcast = podcast.map((p, idx) => <Podcast imageUrl={p.imageUrl} title={p.title} description={p.description} key={idx}/>)
//             return arrayPodcast
//         } else {
//             return <h1>There is no podcast</h1>
//         }

//     }

//     return (
//         <div>
//             <h1>We Have the podcasts</h1>
//             { renderPodcast() }
//         </div>
//     )
// }

// export default PodcastContainer;