import React from 'react';
import { Link } from 'react-router-dom';

function Navbar(props) {
    return (
        <nav className=" navbar container">
            <div className="nav-text">
                    <p>Users Imformation Lists</p>
               </div>
               <div className='links'>
               <Link to="/userlist" className=" btn btn-primary">Users Data</Link>
            </div>
        </nav>
    );
}

export default Navbar;