import React from 'react';

const Welcome = () => {
    return (
        <div>
            <h2 className='quote'>There are a few different methods for achieving peace of mind. Have you try listen Podcast? If not, start listen for popular podcast.</h2>
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