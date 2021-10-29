import React, { useEffect, useState } from 'react';
import HomePackage from '../HomePackage/HomePackage';

const HomePackages = () => {
    const [packages, setPackages] = useState([])
    useEffect(() => {
        fetch("http://localhost:5000/packages")
            .then(res => res.json())
            .then(data => setPackages(data))
    }, [])
    return (
        <div className="container my-5">
            <h1>Our Packages</h1>
            <hr />
            <div className="row row-cols-1 row-cols-md-3 g-4">
                {
                    packages.map(singlePackage => <HomePackage
                        key={singlePackage._id}
                        singlePackage={singlePackage}
                    ></HomePackage>)
                }
            </div>
        </div>

    );
};

export default HomePackages;