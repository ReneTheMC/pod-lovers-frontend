import React from 'react';

const PodcastList = () => {
    return (
        <div>
            <h2>Popular Podcasts</h2>
            <div className="row row-cols-1 row-cols-md-3 g-4">
                <div className="col">
                    <div className="card h-100">
                        <img src="..." className="card-img-top" alt="..."/>
                            <div className="card-body">
                                <h5 className="card-title">Podcast 1</h5>
                                <p className="card-text">description</p>
                            </div>
                    </div>
                </div>
                <div className="col">
                    <div className="card h-100">
                        <img src="..." className="card-img-top" alt="..."/>
                            <div className="card-body">
                                <h5 className="card-title">Podcast 2</h5>
                                <p className="card-text">description</p>
                            </div>
                    </div>
                </div>
                <div className="col">
                    <div className="card h-100">
                        <img src="..." className="card-img-top" alt="..."/>
                            <div className="card-body">
                                <h5 className="card-title">Podcast 3</h5>
                                <p className="card-text">description</p>
                            </div>
                    </div>
                </div>
                <div className="col">
                    <div className="card h-100">
                        <img src="..." className="card-img-top" alt="..."/>
                            <div className="card-body">
                                <h5 className="card-title">Podcast 4</h5>
                                <p className="card-text">description</p>
                            </div>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default PodcastList;