import React from 'react';
import './Home.css';

import Tickets from '../Tickets/Tickets';
import Header from '../Header/Header';

const Home = () => {
    return (
        <div>
            <Header></Header>
            <Tickets></Tickets>
        </div>
    );
};

export default Home;