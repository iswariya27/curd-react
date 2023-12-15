import React, { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import axios from 'axios';

function ViewUser(props) {
  const res = useParams()
  const [userData, setUserData] = useState()

  let getdatas = async () => {
    let empolee = await axios.get(`https://655f0381879575426b445b47.mockapi.io/users/${res.id}`);
    setUserData(empolee.data)
  };

  useEffect(() => {
    getdatas(); 
  }, []);

  return (
    <div className='container'>
      {
        userData ?
          <ul>
            <li>{userData?.id}</li>
            <li>{userData?.firstname}</li>
            <li>{userData?.lastname}</li>
            <li>{userData?.email}</li>
            <li>{userData?.address}</li>
            <li>{userData?.city}</li>
            <li>{userData?.state}</li>
            <li>{userData?.phone}</li>
          </ul> :
          <div className="spinner-border m-5" role="status">
            <span className="visually-hidden">Loading...</span>
          </div>
      }
      <div className='col-lg-8 mt-6 mt-2 mb-3'>
        <button type='button' className='btn btn-success' ><Link className="nav-link" to="/userList">Back Home</Link></button>
      </div>
    </div>
  );
}

export default ViewUser;    