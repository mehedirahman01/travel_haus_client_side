import React from 'react';

// import css
import './Destination.css'

const Destination = () => {
    return (
        <div className="container my-5">
            <h1>OUR TOP DESTINATIONS</h1>
            <hr />
            {/* Top Row */}
            <div className="row gx-lg-3 gx-0 gy-lg-0 gy-3">
                <div className="col-lg-7 col-12">
                    <div className="p-5 d-flex flex-column justify-content-center align-items-center firstBackground">
                        <div className="bg-dark bg-opacity-50 p-5">
                            <h4 className="text-white fw-bold">Australia</h4>
                            <h6 className="text-white bg-success border-0 rounded py-2 px-3 m-0">18 Tours</h6>
                        </div>
                    </div>
                </div>
                <div className="col-lg-5 col-12">
                    <div className="p-5 d-flex flex-column justify-content-center align-items-center secondBackground">
                        <div className="bg-dark bg-opacity-50 p-5">
                            <h4 className="text-white fw-bold">United States</h4>
                            <h6 className="text-white bg-success border-0 rounded py-2 px-1 m-0">11 Tours</h6>
                        </div>
                    </div>
                </div>
            </div>

            {/* Bottom Row */}
            <div className="row gx-lg-3 gx-0 gy-lg-0 gy-3 mt-lg-3 mt-0">
                <div className="col-lg-4 col-12">
                    <div className="p-5 d-flex flex-column justify-content-center align-items-center thirdBackground">
                        <div className="bg-dark bg-opacity-50 p-5">
                            <h4 className="text-white fw-bold">Malaysia</h4>
                            <h6 className="text-white bg-success border-0 rounded py-2 px-3 m-0">20 Tours</h6>
                        </div>
                    </div>
                </div>
                <div className="col-lg-4 col-12">
                    <div className="p-5 d-flex flex-column justify-content-center align-items-center fourthBackground">
                        <div className="bg-dark bg-opacity-50 p-5">
                            <h4 className="text-white fw-bold">Thailand</h4>
                            <h6 className="text-white bg-success border-0 rounded py-2 px-3 m-0">13 Tours</h6>
                        </div>

                    </div>
                </div>
                <div className="col-lg-4 col-12">
                    <div className="p-5 d-flex flex-column justify-content-center align-items-center fifthBackground">
                        <div className="bg-dark bg-opacity-50 p-5">
                            <h4 className="text-white fw-bold">Switzerland</h4>
                            <h6 className="text-white bg-success border-0 rounded py-2 px-3 m-0">15 Tours</h6>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Destination;