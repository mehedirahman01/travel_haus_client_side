import React from 'react';
import { useEffect, useState } from 'react/cjs/react.development';
import SinglePackage from '../SinglePackage/SinglePackage';

const Packages = () => {
    const [packages, setPackages] = useState([])
    // Set state for Spinner
    const [dataLoaded, setDataLoaded] = useState(false)
    // Load and set data
    useEffect(() => {
        fetch("https://protected-stream-04533.herokuapp.com/packages")
            .then(res => res.json())
            .then(data => {
                setPackages(data)
                setDataLoaded(true)
            })
            .catch(error => console.log(error))
    }, [])
    return (
        <div className="container my-5">
            <h1>Our Packages</h1>
            <hr />
            {
                dataLoaded ? <div
                    className="row row-cols-1 row-cols-md-3 g-4"> {packages.map(singlePackage => <SinglePackage
                        key={singlePackage._id}
                        singlePackage={singlePackage}
                    ></SinglePackage>)}
                </div> : <div className="me-auto">
                    <div className="spinner-border" style={{ width: "10rem", height: "10rem" }} role="status">
                        <span className="visually-hidden">Loading...</span>
                    </div>
                </div>
            }
        </div>
    );
};

export default Packages;