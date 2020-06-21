import React, {useState} from 'react'
import {Link} from 'react-router-dom'
import {Collapse, NavbarBrand, NavbarToggler} from 'reactstrap';

const NavBar = () => {

    const [isOpen, setIsOpen] = useState(false)
    const toggle = () => setIsOpen(!isOpen)

    return (
        <div>
            <nav className="navbar navbar-expand-md bg-dark navbar-dark">
                <NavbarBrand href="/">
                    <img className="navbar-brand" alt="logo" width="100px"
                         src={require('../../Styles/trufla-logo.png')}/>
                </NavbarBrand>
                <NavbarToggler onClick={toggle}/>
                <Collapse isOpen={isOpen} navbar>
                    <ul className="mr-auto navbar-nav">
                        <li className="nav-item">
                            <Link to={'/products/'} className="nav-link">Product</Link>
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
                </Collapse>
            </nav>
        </div>
    )
}

export default NavBar
