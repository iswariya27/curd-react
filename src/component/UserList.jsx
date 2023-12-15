import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';


function UserList() {
    const [userss, setUserss] = useState([]);
    useEffect(() => {
        async function getdata() {
            try {
                const userList = await axios.get("https://655f0381879575426b445b47.mockapi.io/users")
                setUserss([...userList.data]);
            } catch (error) {
                console.log(error);
            }
        } 
        getdata(); 
    }, []); 
        const handleDelete = async(id)=>{
            // console.log(id);
            await axios.delete(`https://655f0381879575426b445b47.mockapi.io/users/${id}`);
            const newUserData = userss.filter((item) => item.id !== id);
            setUserss([...newUserData]);
        } 
    return (
        <div className='container'>
            <div className="mdle">
                <h1 className="h4">Table Data</h1>
                <Link to="/CreatUser" className="btn btn-primary"> Create User</Link>
            </div>
            <div className="card">
                <div className="card-header">
                    <h6 className="h6">Users Details</h6>
                </div>
                <div className="card-body">
                    <div className="table-responsive">
                        <table className="table table-bordered" id="dataTable">
                            <thead>
                                <tr>
                                    <th>FirstName</th>
                                    <th>LastName</th>
                                    <th>Email</th>
                                    <th>Address</th>
                                    <th>City</th>
                                    <th>State</th>
                                    <th>Phone</th>
                                    <th>Action</th>
                                </tr>
                            </thead>
                            <tbody>
                                {
                                    userss.map((users)=>{
                                        return <tr>
                                        <td>{users.firstname}</td>
                                        <td>{users.lastname}</td>
                                        <td>{users.email}</td>
                                        <td>{users.address}</td>
                                        <td>{users.city}</td>
                                        <td>{users.state}</td>
                                        <td>{users.phone}</td>
                                        <td> <Link to={`/editsuser/${users.id}`} className='edit btn btn-warning  btn-sm '>Edits</Link>
                                            <Link to={`/viewuser/${users.id}`} className='view btn btn-info  btn-sm '>Viwes</Link>
                                            <button className='del btn btn-danger btn-sm ' onClick = {()=> handleDelete (users.id)} >Delete</button></td>
                                    </tr>
                                    })
                                }                               
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default UserList;

