import React from 'react';
import { useEffect, useState } from 'react';
import useAuth from '../../../hooks/useAuth';
import MyBookingsTable from '../MyBookingsTable/MyBookingsTable';

const MyBookingsPage = () => {
    const { user } = useAuth()
    const [myBookings, setMyBookings] = useState([])

    // Get Bookings
    useEffect(() => {
        fetch('http://localhost:5000/myBookings', {
            method: "POST",
            headers: {
                'content-type': "application/json"
            },
            body: JSON.stringify(user)
        })
            .then(res => res.json())
            .then(data => setMyBookings(data))
            .catch(error => console.log(error))
    }, [])
    return (
        <div className="container py-5">
            <h3>My Bookings</h3>
            <div className="table-responsive">
                <table className="table table-striped table-hover">
                    <thead>
                        <tr>
                            <th scope="col">Name</th>
                            <th scope="col">Email</th>
                            <th scope="col">Address</th>
                            <th scope="col">City</th>
                            <th scope="col">Country</th>
                            <th scope="col">Destination</th>
                            <th scope="col">Cost</th>
                            <th scope="col">Status</th>
                            <th scope="col">Cancel Booking</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            myBookings ? myBookings.map(singleBooking => <MyBookingsTable
                                key={singleBooking._id}
                                singleBooking={singleBooking}></MyBookingsTable>) : <h3>No Bookings</h3>
                        }
                    </tbody>
                </table>
            </div>


        </div>
    );
};

export default MyBookingsPage;