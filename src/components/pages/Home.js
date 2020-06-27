import React from 'react';

import Hero from '../Hero';
import Banner from '../Banner';
import {Link} from 'react-router-dom';

const Home = props => {
    return (
        <Hero hero="defaultHero">
            <Banner title="luxurious rooms" 
                subtitle="deluxe rooms starting at $299"
            >
                <Link to="/rooms" className="btn-primary">
                    our rooms
                </Link>
            </Banner>
        </Hero>
    )
}

export default Home;