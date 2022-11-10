import React from 'react';
import { NavLink, Link } from 'react-router-dom';

import {BoxArrowInRight} from 'react-bootstrap-icons'
import {BoxArrowLeft} from 'react-bootstrap-icons'
import {PersonCircle} from 'react-bootstrap-icons'
import {Search} from 'react-bootstrap-icons'
import {HeartFill} from 'react-bootstrap-icons'

import logo from '../image/podlogo2.png';

const Navbar = (props) => {
    return (
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark" id="navbar">
            <div className="container">
                <Link className="navbar-brand" to="/" ><img src={logo} />PodLovers</Link>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarsExample07" aria-controls="#navbarsExample07" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarsExample07">
                    <ul className="navbar-nav mr-auto">
                        <li className="nav-item">
                            <NavLink className="nav-link" exact to="/">Home</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink className="nav-link" to="/about">About</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink className="nav-link" to="/podcast"><Search /> Podcast</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink className="nav-link" to="/creator"><Search /> Creator</NavLink>
                        </li>
                        
                            <li className="nav-item">
                                <NavLink className="nav-link"  to="/favorite"><HeartFill/> Favorite</NavLink>
                            </li>

                        <li className="nav-item">
                            <NavLink className="nav-link" to="/favPodcastList"><HeartFill/> Favorite Podcasts</NavLink>

                        </li>

                    </ul>
                    {
                        props.isAuth
                            ? <ul className="navbar-nav ml-auto">
                                <li className="nav-item">
                                    <NavLink className="nav-link" to="/profile">Profile</NavLink>
                                </li>
                                <li className="nav-item">
                                    <span onClick={props.handleLogout} className="nav-link logout-link"><BoxArrowLeft /> Logout  </span>
                                </li>
                            </ul>
                            : <ul className="navbar-nav ml-auto">
                                <li className="nav-item">
                                    <NavLink className="nav-link" to="/signup"><PersonCircle /> Create Account </NavLink>
                                </li>
                                <li className="nav-item">
                                    <NavLink className="nav-link" to="/login"><BoxArrowInRight /> Login</NavLink>
                                </li>
                            </ul>

                    }
                </div>
            </div>
        </nav>
    );
}

export default Navbar;
