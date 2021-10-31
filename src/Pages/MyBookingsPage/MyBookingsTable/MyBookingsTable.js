import React from 'react';
import { useEffect, useState } from 'react';

const MyBookingsTable = (props) => {
    const { singleBooking } = props
    const [selectedPackage, setSelectedPackage] = useState([])
    const { packageId } = singleBooking
    // Load Data By ID
    useEffect(() => {
        fetch(`http://localhost:5000/book/${packageId}`)
            .then(res => res.json())
            .then(data => setSelectedPackage(data))
            .catch(error => console.log(error))
    }, [])


    return (
        // Booking Details
        <tr>
            <td>{singleBooking.name}</td>
            <td>{singleBooking.email}</td>
            <td>{singleBooking.address}</td>
            <td>{singleBooking.city}</td>
            <td>{singleBooking.country}</td>
            <td>{selectedPackage.city}</td>
            <td>{selectedPackage.cost}</td>
            <td>{singleBooking.status}</td>
            <td><button className="btn btn-danger">Cancel</button></td>
        </tr>
    );
};

export default MyBookingsTable;