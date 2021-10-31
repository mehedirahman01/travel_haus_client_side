import React from 'react';
import { useEffect, useState } from 'react';
import useAuth from '../../../hooks/useAuth';
import MyBookingsTable from '../MyBookingsTable/MyBookingsTable';

const MyBookingsPage = () => {
    const { user } = useAuth()
    const [myBookings, setMyBookings] = useState([])
    const [dataLoaded, setDataLoaded] = useState(false)

    // Get Bookings
    useEffect(() => {
        fetch('https://protected-stream-04533.herokuapp.com/myBookings', {
            method: "POST",
            headers: {
                'content-type': "application/json"
            },
            body: JSON.stringify(user)
        })
            .then(res => res.json())
            .then(data => {
                setMyBookings(data)
                setDataLoaded(true)
            })
            .catch(error => console.log(error))
    }, [])

    // Handle Booking Cancel
    const handleCancelBooking = id => {
        var confirm = window.confirm("Are you sure you want to Cancel Booking?")
        if (confirm) {
            fetch(`https://protected-stream-04533.herokuapp.com/booking/${id}`, {
                method: "DELETE"
            })
                .then(res => res.json())
                .then(data => {
                    if (data.deletedCount) {
                        const remainingBookings = myBookings.filter(booking => booking._id !== id)
                        setMyBookings(remainingBookings)
                    }
                })
        }
    }


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
                            <th scope="col">Cancel</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            dataLoaded ? myBookings.map(singleBooking => <MyBookingsTable
                                key={singleBooking._id}
                                singleBooking={singleBooking}
                                handleCancelBooking={handleCancelBooking}></MyBookingsTable>) :
                                <div className="d-flex justify-content-center">
                                    <div className="spinner-border" role="status">
                                        <span className="visually-hidden">Loading...</span>
                                    </div>
                                </div>
                        }
                    </tbody>
                </table>
            </div>
        </div >
    );
};

export default MyBookingsPage;