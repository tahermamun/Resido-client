import React from 'react';
import "./Main.scss"
import DashboardProfile from '../DashboardProfile/DashboardProfile';
import { useParams } from 'react-router';
import AddRentHouse from '../AddRentHouse/AddRentHouse';


const Main = () => {
    let { panel } = useParams();
    return (
        <main>

            {
                panel === 'dashboardProfile' ? <DashboardProfile/> :
                    panel === 'addRentHouse' ? <AddRentHouse/> :''
            }

        </main>
    );
};

export default Main;