import React from 'react';

const ManageRentHouseData = (props) => {
    const { houseTitle, price, adminEmail, _id } = props.houseData
    return (
        <tr>
            <th scope="row">{houseTitle}</th>
            <td>${price}</td>
            <td>admin@gmail.com</td>
            <td>
<button className='btn btn-danger'>Delete</button>

            </td>
        </tr>
    );
};

export default ManageRentHouseData;