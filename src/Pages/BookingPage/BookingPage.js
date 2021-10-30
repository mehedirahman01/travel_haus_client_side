import React from 'react';
import { useForm } from 'react-hook-form';
import { useParams } from 'react-router';
import { useEffect, useState } from 'react/cjs/react.development';
import useAuth from '../../hooks/useAuth';

const BookingPage = () => {
    const { register, handleSubmit, reset, formState: { errors } } = useForm();
    const { user } = useAuth();
    const { _id } = useParams()
    const [singlePackage, setSinglePackage] = useState({})

    // Load Data By ID
    useEffect(() => {
        fetch(`https://protected-stream-04533.herokuapp.com/book/${_id}`)
            .then(res => res.json())
            .then(data => setSinglePackage(data))
    })

    const onSubmit = formData => {
        if (!formData.name) {
            formData.name = user.displayName
        }

        console.log(formData.email)

        if (!formData.email) {
            formData.email = user.email
        }

        fetch("https://protected-stream-04533.herokuapp.com/book", {
            method: "POST",
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(formData)
        })
            .then(res => res.json())
            .then(result => console.log(result))
    }

    return (
        <div className="container my-5">
            <h1>Book Your Package</h1>

            <div className="row">
                <div className="col-lg-8 col-12 border rounded p-0">
                    <div className="py-4 bg-dark text-white">
                        <h5>Your Details</h5>
                    </div>
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