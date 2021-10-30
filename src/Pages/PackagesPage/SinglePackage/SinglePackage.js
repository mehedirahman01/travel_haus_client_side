import React from 'react';
import { NavLink } from 'react-router-dom';

const SinglePackage = (props) => {
    const { singlePackage } = props
    const { _id } = singlePackage
    return (
        <div>
            {/* Card */}
            <div className="col">
                <div className="card h-100">
                    <img src={singlePackage?.imgUrl} className="card-img-top" alt="..." />
                    <div className="card-body">
                        <ul className="list-group list-group-flush text-start">
                            <li className="list-group-item">
                                <h6 className="fw-bold">{singlePackage?.city}</h6> <small className="text-muted">{singlePackage?.country}</small>
                            </li>

                            <li className="list-group-item">
                                <div className="row d-flex justify-content-between align-items-center">
                                    <div className="col-6">
                                        <small>{singlePackage?.type}</small>
                                    </div>
                                    <div className="col-6">
                                        <small className="fw-bold">Cost: {singlePackage?.cost}$</small>
                                    </div>
                                </div>
                            </li>

                            <li className="list-group-item"><p className="fw-lighter" style={{ textAlign: "justify" }}>{singlePackage?.shortDescription}</p></li>
                        </ul>
                        <button className="btn btn-success"><NavLink className="text-decoration-none text-white" to={`/book/${_id}`}>Book Now</NavLink></button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SinglePackage;