import React from 'react';
import './Home.css';
import Tickets from '../Tickets/Tickets';
import Header from '../Header/Header';
import Review from '../Review/Review';

const Home = () => {
    return (
        <div>
            <Header></Header>
            <Tickets></Tickets>
            <Review></Review>
         
        
        </div>
    );
};

export default Home;