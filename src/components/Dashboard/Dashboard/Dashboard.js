import React from 'react';
import './Dashboard.css';
import AddService from '../AddService/AddService';
import Sidebar from '../Sidebar/Sidebar';

const Dashboard = () => {
    return (
        <div>
            <AddService></AddService>
            <Sidebar></Sidebar>
        </div>
    );
};

export default Dashboard;