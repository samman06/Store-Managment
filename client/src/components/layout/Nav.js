import React from 'react';
import '../../App.css';
import {Link} from "react-router-dom";

const Home =()=>{

    return (
        <nav className="navbar navbar-expand-md bg-dark navbar-dark">
            <Link to={"/"}>
                <img className="navbar-brand" width="100px" src={require('../../Styles/trufla-logo.png')} />
            </Link>
            <button className="navbar-toggler" type="button" data-toggle="collapse"
                    data-target="#collapsibleNavbar">
                <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="collapsibleNavbar">
                <ul className="navbar-nav">
                    <li className="nav-item">
                        <Link to={'/products/'} className="nav-link">Product

                        </Link>
                    </li>
                    <li className="nav-item">
                        <Link to={'/departments/'} className="nav-link">Departments
                        </Link>
                    </li>
                    <li className="nav-item">
                        <Link to={'/promotions/'} className="nav-link">Promotions
                        </Link>
                    </li>
                </ul>
            </div>
        </nav>
    );
}

export default Home;
