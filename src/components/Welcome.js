import React from 'react';
import PodcastList from './PodcastList';
import Creator from './Creator';

const Welcome = () => {
    return (
        <div>
            <h1>Podlovers</h1>
            <PodcastList />
            <Creator />
        </div>
    )
}

export default Welcome;