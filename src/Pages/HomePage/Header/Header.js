import React from 'react';
import { NavLink } from 'react-router-dom';
import { IconContext } from 'react-icons';
import { RiAccountCircleFill } from 'react-icons/ri'
import useAuth from '../../../hooks/useAuth';
import './Header.css'


const Header = () => {
    const { user, handleLogout } = useAuth()
    return (
        <div>
            <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
                <div className="container-fluid">
                    {/* Navbar Left */}
                    <div className="d-flex align-items-center">
                        <div className="ms-2"><NavLink className="nav-link p-0" to="/"><h3 className="text-white m-0">TravelHaus</h3></NavLink></div>
                    </div>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarNav">
                        {/* Navbar Middle */}
                        <ul className="navbar-nav mx-auto fw-bold">
                            <li className="nav-item ">
                                <NavLink className="nav-link" to="/home"><h6 className="text-white m-0">Home</h6></NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink className="nav-link" to="/packages"><h6 className="text-white m-0">Packages</h6></NavLink>
                            </li>
                        </ul>

                        {/* Navbar Right */}
                        <IconContext.Provider value={{ size: "1.5em" }}>
                            <div className="btn-group">
                                <button type="button" className="btn btn-success" data-bs-toggle="dropdown" aria-expanded="false">
                                    <h6 className="text-center m-0"><RiAccountCircleFill /> {user?.email ? user.displayName : 'Account'}</h6>
                                </button>
                                {
                                    user?.email ? <ul className="dropdown-menu p-0">
                                        <li> <NavLink className="nav-link" to="/myBookings"><h6 className="text-black m-0">My Bookings</h6></NavLink></li>
                                        <li><NavLink className="nav-link" to="/myBookings"><h6 className="text-black m-0"> Add New Package</h6></NavLink></li>
                                        <li><NavLink className="nav-link" to="/allBookings"><h6 className="text-black m-0"> All Bookings</h6></NavLink></li>
                                        <li><NavLink className="nav-link" to="/home" onClick={handleLogout}><h6 className="text-black m-0">Logout</h6></NavLink></li>

                                    </ul> : <ul className="dropdown-menu p-0">
                                        <li><NavLink className="nav-link text-black" to="/login">Login</NavLink></li>
                                    </ul>
                                }
                            </div>
                        </IconContext.Provider>

                    </div>
                </div >
            </nav >
        </div >
    );
};

export default Header;