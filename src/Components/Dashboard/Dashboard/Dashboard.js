import React, { useState } from 'react';
import Main from '../Main/Main';
import Navbar from '../Navbar/Navbar';
import Sidebar from '../Sidebar/Sidebar';
import './Dashboard.scss'

const Dashboard = () => {

    const [sidebarOpen, setSidebarOpen] = useState(false)

    const openSidebar = () => {
        setSidebarOpen(true)
    }
    const closeSidebar = () => {
        setSidebarOpen(false)
    }
    return (
        <div className='container'>
            <Navbar openSidebar={openSidebar} sidebarOpen={sidebarOpen}></Navbar>
            <Main></Main>
            <Sidebar sidebarOpen={sidebarOpen} closeSidebar={closeSidebar}></Sidebar>

        </div>
    );
};

export default Dashboard;