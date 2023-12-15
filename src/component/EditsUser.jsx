import React, { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import axios from 'axios';
import { useFormik } from 'formik';



function EditsUser(props) {
    const prams = useParams();
    const [user, setUser] = useState();

    const formik = useFormik({
        initialValues: {
            firstname: "",
            lastname: "",
            email: "",
            address: "",
            city: "",
            state: "",
            phone: "",

        },

        onSubmit: async (values) => {
            // console.log(values);
            try {

                await axios.put(`https://655f0381879575426b445b47.mockapi.io/users/${prams.id}`, values);
                alert("Data Update Success");
            } catch (error) {
                console.error("Error updating user:", error);
            }
        },
    });


    let getuserdata = async () => {
        let userdata = await axios.get(`https://655f0381879575426b445b47.mockapi.io/users/${prams.id}`);
        setUser(userdata.data);
        // console.log(userdata.data)
        formik.setValues(userdata.data);
    };

    useEffect(() => {
        getuserdata();
    }, []);
    return ( 
        <div className="cent container">
            <form onSubmit={formik.handleSubmit}>
                <div className='row'>
                    <div className=' form-group'>
                        <label> FirstName</label> <br />
                        <input type="text"  className='form-contorl' size="60" name='name' value={formik.values.firstname} onChange={formik.handleChange} />
                    </div>
                    <div className=' form-group'>
                        <label> lastName</label> <br />
                        <input type="text"  className='form-contorl' size="60" name='username' value={formik.values.lastname} onChange={formik.handleChange} />
                    </div>
                    <div className=' form-group'>
                        <label> Email</label> <br />
                        <input type="email"  className='form-contorl' size="60" name='email' value={formik.values.email} onChange={formik.handleChange} />
                    </div>
                    <div className=' form-group'>
                        <label for=""> Address</label> <br />
                        <input type="type" className='form-contorl' size="60" name='address' value={formik.values.address} onChange={formik.handleChange} /><br />
                    </div>
                    <div className=' form-group'>
                        <label for="">City</label> <br />
                        <input type="text" className='form-contorl' size="60" name='city' value={formik.values.city} onChange={formik.handleChange} />
                    </div>
                    <div className=' form-group'>
                        <label for="">State</label> <br />
                        <input type="text" className='form-contorl' size="60" name='state' value={formik.values.state} onChange={formik.handleChange} />
                    </div>
                    <div className=' form-group'>
                        <label for=""> Phone Number</label> <br />
                        <input type="text" className='form-contorl' size="60" name='phone' value={formik.values.phone} onChange={formik.handleChange} />
                    </div>
                    <div className='button'>
                        <input type="submit" className='input btn btn-secondary  btn-sm' value={"Update"} />
                        <button type='button' className='batn btn btn-success  btn-sm ' ><Link className="nav-link" to="/userList">Back Home</Link></button>
                    </div>
                    <div className='col-lg-8 mt-6 mt-2'>
                    </div>
                </div>
            </form>

        </div>
    );
}

export default EditsUser;