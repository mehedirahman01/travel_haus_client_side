import React, { useEffect, useState } from 'react';
import HomePackage from '../HomePackage/HomePackage';

const HomePackages = () => {
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

    const selectedPackages = packages.slice(0, 6)

    return (
        <div className="container my-5">
            <h1>Our Latest Packages</h1>
            <hr />
            {
                dataLoaded ? <div
                    className="row row-cols-1 row-cols-md-3 g-4"> {selectedPackages.map(singlePackage => <HomePackage
                        key={singlePackage._id}
                        singlePackage={singlePackage}
                    ></HomePackage>)}
                </div> : <div className="me-auto">
                    <div className="spinner-border" style={{ width: "10rem", height: "10rem" }} role="status">
                        <span className="visually-hidden">Loading...</span>
                    </div>
                </div>
            }
        </div>

    );
};

export default HomePackages;