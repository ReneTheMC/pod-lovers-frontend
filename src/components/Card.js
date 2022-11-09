import React from 'react';

function Card({creator}) {
  return(
    <div className="tc bg-light-green dib br3 pa3 ma2 grow bw2 shadow-5">
      {/* <img className="br-100 h3 w3 dib" alt={creator.name} /> */}
      <div>
        <h2>{creator.name}</h2>
        <p>{creator.bio}</p>
        <p>{creator.location}</p>
      </div>
    </div>
  );
}

export default Card;