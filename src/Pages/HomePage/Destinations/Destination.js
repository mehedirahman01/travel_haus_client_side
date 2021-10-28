import React from 'react';
import california from '../../../images/destinations/cali.jpg'
import losAngeles from '../../../images/destinations/los.jpg'
import newJersey from '../../../images/destinations/new.jpg'
import delaware from '../../../images/destinations/dela.jpg'
import nevada from '../../../images/destinations/nevada.jpg'

const caliStyle = {
    backgroundImage: `url(${california})`,
    height: "270px"
}

const losStyle = {
    backgroundImage: `url(${losAngeles})`,
    height: "270px"
}

const newStyle = {
    backgroundImage: `url(${newJersey})`,
    height: "270px"
}

const delStyle = {
    backgroundImage: `url(${delaware})`,
    height: "270px"
}

const nevStyle = {
    backgroundImage: `url(${nevada})`,
    height: "270px"
}
const Destination = () => {
    return (
        <div className="container my-5">
            <h1>OUR DESTINATIONS</h1>
            <hr />
            <div className="row gx-lg-3 gx-0 gy-lg-0 gy-3">
                <div className="col-lg-7 border d-flex flex-column justify-content-center align-items-center" style={caliStyle}>
                    <div className="bg-dark bg-opacity-50 p-5">
                        <h4 className="text- white fw-bold">California</h4>
                        <button className="btn btn-success">18 Tours</button>
                    </div>
                </div>
                <div className="col-lg-5 border d-flex flex-column justify-content-center align-items-center" style={losStyle}>
                    <div className="bg-dark bg-opacity-50 p-5">
                        <h4 className="text-white fw-bold">Los Angeles</h4>
                        <button className="btn btn-success">11 Tours</button>
                    </div>
                </div>
                <div className="row gx-lg-0">
                    <div className="col-lg-4 border d-flex flex-column justify-content-center align-items-center" style={newStyle}>
                        <div className="bg-dark bg-opacity-50 p-5">
                            <h4 className="text-white fw-bold">New Jersey</h4>
                            <button className="btn btn-success">20 Tours</button>
                        </div>
                    </div>
                    <div className="col-lg-4 border d-flex flex-column justify-content-center align-items-center" style={delStyle}>
                        <div className="bg-dark bg-opacity-50 p-5">
                            <h4 className="text-white fw-bold">Delaware</h4>
                            <button className="btn btn-success">13 Tours</button>
                        </div>
                    </div>
                    <div className="col-lg-4 border d-flex flex-column justify-content-center align-items-center" style={nevStyle}>
                        <div className="bg-dark bg-opacity-50 p-5">
                            <h4 className="text-white fw-bold">Nevada</h4>
                            <button className="btn btn-success">15 Tours</button>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    );
};

export default Destination;