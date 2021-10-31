import React from 'react';
import { useForm } from 'react-hook-form';
import { useHistory, useParams } from 'react-router';
import { useEffect, useState } from 'react';
import useAuth from '../../hooks/useAuth';

const BookingPage = () => {
    const { register, handleSubmit, reset, formState: { errors } } = useForm();
    const { user } = useAuth();
    const { _id } = useParams()
    const [singlePackage, setSinglePackage] = useState({})
    const history = useHistory()

    // Load Data By ID
    useEffect(() => {
        fetch(`https://protected-stream-04533.herokuapp.com/book/${_id}`)
            .then(res => res.json())
            .then(data => setSinglePackage(data))
            .catch(error => console.log(error))
    }, [])

    // Handle Form
    const onSubmit = formData => {

        if (!formData.name) {
            formData.name = user.displayName
        }

        if (!formData.email) {
            formData.email = user.email
        }
        formData.packageId = _id
        formData.status = "pending"

        fetch("http://localhost:5000/book", {
            method: "POST",
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(formData)
        })
            .then(res => res.json())
            .then(result => {
                console.log(result)
                alert("Package Booked Successfully. Please wait for our call.")
                reset()
                history.push('/home')
            })
    }

    return (
        <div className="container my-5">
            <h1>Book Your Package</h1>

            <div className="row">
                <div className="col-lg-8 col-12 border rounded p-0">
                    <div className="py-4 bg-dark text-white">
                        <h5>Your Details</h5>
                    </div>

                    {/* User Details Form */}
                    <form className="p-4" onSubmit={handleSubmit(onSubmit)}>

                        <div className="mb-3">
                            <label>First Name</label>
                            <input defaultValue={user.displayName} className="form-control" {...register("name")} />
                        </div>

                        <div className="mb-3">
                            <label>Email</label>
                            <input defaultValue={user.email} className="form-control" {...register("email")} />
                        </div>

                        <div className="mb-3">
                            <label>Address</label>
                            <textarea className="form-control" placeholder="House No, Street" id="floatingTextarea2" defaultValue="" style={{ height: "100px" }} {...register("address")}></textarea>
                        </div>

                        <div className="mb-3">
                            <label>City</label>
                            <input placeholder="Dhaka/ Delhi etc" className="form-control" {...register("city")} />
                        </div>

                        <div className="mb-3">
                            <label>Country</label>
                            <input placeholder="USA" className="form-control" {...register("country")} />
                        </div>

                        <div className="mb-3">
                            <label>Phone Number</label>
                            <input placeholder="+1XXXXXXX" className="form-control" {...register("phone")} />
                        </div>

                        <input className="btn btn-success" type="submit" value="Book Now" />
                    </form>
                </div>

                {/* Package Details */}
                <div className="col-lg-4 col-12 border rounded p-0 order-lg-last order-first mb-lg-0 pb-3">
                    <div className="py-4 bg-success text-white">
                        <h5>Order Details</h5>
                    </div>
                    <div>
                        <img className="img-fluid" src={singlePackage?.imgUrl} alt="" />
                        <h5 className="p-2">Destination: {singlePackage?.city}</h5>
                        <h5>Country: {singlePackage?.country}</h5>
                        <p className="p-2">{singlePackage?.shortDescription}</p>
                        <h4>Total Cost: {singlePackage?.cost}$</h4>

                    </div>
                </div>

            </div>
        </div>
    );
};

export default BookingPage;