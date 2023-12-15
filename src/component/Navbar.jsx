import React from 'react';
import { Link } from 'react-router-dom';

function Navbar(props) {
    return (
        <nav className=" navbar container">
            <div className="nav-text">
                <Link className='nav-link' to="/userList">
                    <span>Users Imformation Lists</span></Link>
            </div>
        </nav>
    ); 
}

export default Navbar;