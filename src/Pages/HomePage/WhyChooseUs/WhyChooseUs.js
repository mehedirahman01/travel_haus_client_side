import React from 'react';
import backgroundPicture from '../../../images/whyChooseUs/home_never_be_alone_bg-1.png'
import leftImage from '../../../images/whyChooseUs/left.jpg'
import paymentIcon from '../../../images/whyChooseUs/smartph-100x100.png'
import operatorIcon from '../../../images/whyChooseUs/Group-70@3x-100x100.png'
import bedIcon from '../../../images/whyChooseUs/Group-69@3x-100x100.png'

const backgroundStyle = {
    backgroundImage: `url(${backgroundPicture})`,
    backgroundSize: "100%`",
}


const WhyChooseUs = () => {
    return (
        <div className="mt-5 py-5" style={backgroundStyle} >
            <h1>About US</h1>
            <div className="row d-flex justify-content-center">
                {/* Left Section */}
                <div className="col-lg-6 col-12 p-5">
                    <p>Since 2014, we’ve helped more than 500,000 people of all ages enjoy the best outdoor experience of their lives. Whether it’s for one day or a two-week vacation, close to home or a foreign land and something like that.</p>
                    <img src={leftImage} alt="" className="img-fluid" />
                </div>
                {/* Right Section */}
                <div className="col-lg-6 col-12 p-5">
                    <h4 className="pb-2 text-lg-start">Why Choose Us</h4>
                    <div className="d-flex flex-column">
                        <div className="d-flex align-items-center mt-3">
                            <img className="img-fluid" src={paymentIcon} alt="" style={{ width: "40px" }} />
                            <p className="m-0 ps-2">BOOKING WITH SPREAD PAYMENTS</p>
                        </div>

                        <div className="d-flex align-items-center mt-3">
                            <img className="img-fluid" src={bedIcon} alt="" style={{ width: "40px" }} />
                            <p className="m-0 ps-2">SLEEP and TRAVEL IN COMFORT</p>
                        </div>

                        <div className="d-flex align-items-center mt-3">
                            <img className="img-fluid" src={operatorIcon} alt="" style={{ width: "40px" }} />
                            <p className="m-0 ps-2">FULLY LICENSED TOUR OPERATOR</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default WhyChooseUs;