import React, { useEffect, useState } from 'react';
import AllBookingsTable from '../AllBookingsTable/AllBookingsTable';

const AllBookingsPage = () => {
    const [bookings, setBookings] = useState([])
    // Set state for Spinner
    const [dataLoaded, setDataLoaded] = useState(false)
    // Load and set data
    useEffect(() => {
        fetch("https://protected-stream-04533.herokuapp.com/allBookings")
            .then(res => res.json())
            .then(data => {
                setBookings(data)
                setDataLoaded(true)
            })
            .catch(error => console.log(error))
    }, [])


    // Handle Booking Cancel
    const handleCancelBooking = id => {
        var confirm = window.confirm("Are you sure you want to Cancel Booking?")
        console.log(id)
        if (confirm) {
            fetch(`https://protected-stream-04533.herokuapp.com/booking/${id}`, {
                method: "DELETE"
            })
                .then(res => res.json())
                .then(data => {
                    console.log(data)
                    if (data.deletedCount) {
                        const remainingBookings = bookings.filter(booking => booking._id !== id)
                        setBookings(remainingBookings)
                    }
                })
        }
    }

    const approveBooking = id => {
        fetch(`https://protected-stream-04533.herokuapp.com/booking/${id}`, {
            method: "PUT"
        })
            .then(res => res.json())
            .then(data => {
                fetch("https://protected-stream-04533.herokuapp.com/allBookings")
                    .then(res => res.json())
                    .then(data => {
                        setBookings(data)
                        setDataLoaded(true)
                    })
                    .catch(error => console.log(error))
            })

    }


    return (
        <div className="container py-5">
            <h3>All Bookings</h3>
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
                            <th scope="col">Approve</th>
                            <th scope="col">Cancel</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            dataLoaded ? bookings.map(singleBooking => <AllBookingsTable
                                key={singleBooking._id}
                                singleBooking={singleBooking}
                                handleCancelBooking={handleCancelBooking}
                                approveBooking={approveBooking}></AllBookingsTable>) : <div className="d-flex justify-content-center">
                                <div className="spinner-border" role="status">
                                    <span className="visually-hidden">Loading...</span>
                                </div>
                            </div>
                        }
                    </tbody>
                </table>
            </div>


        </div>
    );
};

export default AllBookingsPage;