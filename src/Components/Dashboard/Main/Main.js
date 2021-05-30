import React from 'react';
import "./Main.scss"
import DashboardProfile from '../DashboardProfile/DashboardProfile';
import { useParams } from 'react-router';
import AddRentHouse from '../AddRentHouse/AddRentHouse';
import ManageRentHouse from '../ManageRentHouse/ManageRentHouse';
import AddReview from '../AddReview/AddReview';


const Main = () => {
    let { panel } = useParams();
    return (
        <main className='dashboard-main'>

            {
                panel === 'dashboardProfile' ? <DashboardProfile /> :
                    panel === 'addRentHouse' ? <AddRentHouse /> :
                        panel === 'manageRentHouse' ? <ManageRentHouse /> :
                            panel === 'addReview' ? <AddReview /> : ''
            }

        </main>
    );
};

export default Main;