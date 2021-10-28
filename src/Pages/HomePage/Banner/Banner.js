import React from 'react';
import banner from '../../../images/cover.jpg'
import { IconContext } from 'react-icons';
import { FaWineGlassAlt, FaTree, FaUniversity, FaIcons } from 'react-icons/fa';
// Banner Page Style
const bannerStyle = {
    backgroundImage: `url(${banner})`,
    height: "100vh",
    backgroundSize: "cover",
    backgroundRepeat: 'no-repeat'
}


const Banner = () => {
    return (
        <div>
            <div style={bannerStyle} className="d-flex flex-column justify-content-center py-5 text-white">
                <div className="py-3">
                    <h1>Plan your next Holiday</h1>
                    <h3>Choose From Our Best Packages</h3>
                </div>

                <div className="container">
                    <div className="row gx-lg-5 gy-3">
                        <IconContext.Provider value={{ color: "white", className: "global-class-name" }}>
                            <div className="col-lg-3 col-6 ">
                                <div className="py-2 bg-dark bg-opacity-50">
                                    <FaWineGlassAlt></FaWineGlassAlt>
                                    <p className="text-white m-0">Relax</p>
                                </div>
                            </div>
                            <div className="col-lg-3 col-6">
                                <div className="py-2 bg-dark bg-opacity-50">
                                    <FaTree></FaTree>
                                    <p className="text-white m-0">Nature</p>
                                </div>

                            </div>
                            <div className="col-lg-3 col-6">
                                <div className="py-2 bg-dark bg-opacity-50">
                                    <FaUniversity></FaUniversity>
                                    <p className="text-white m-0">History</p>
                                </div>

                            </div>
                            <div className="col-lg-3 col-6">
                                <div className="py-2 bg-dark bg-opacity-50">
                                    <FaIcons></FaIcons>
                                    <p className="text-white m-0">Culture</p>
                                </div>
                            </div>
                        </IconContext.Provider>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Banner;