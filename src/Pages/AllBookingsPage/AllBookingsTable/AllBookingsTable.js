import React, { useEffect, useState } from 'react';

const AllBookingsTable = props => {
    const { singleBooking } = props
    const [selectedPackage, setSelectedPackage] = useState([])
    const { packageId } = singleBooking
    // Load Data By ID
    useEffect(() => {
        fetch(`https://protected-stream-04533.herokuapp.com/book/${packageId}`)
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
            <td><button onClick={() => props.approveBooking(singleBooking._id)} className="btn btn-success">Approve</button></td>
            <td><button onClick={() => props.handleCancelBooking(singleBooking._id)} className="btn btn-danger">Cancel</button></td>
        </tr>
    );
};

export default AllBookingsTable;