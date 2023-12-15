import { useFormik } from 'formik';
import React from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';


function CreateUser(props) {
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
                await axios.post("https://655f0381879575426b445b47.mockapi.io/users", values)
                alert("Data Submit Success")
            } catch (error) {
                alert("Something Worng")
                console.log(error)
            } 
        }
    });
    return (
        <div className="cent container">
            <form onSubmit={formik.handleSubmit}>
                <div className='row'>
                <div className=' form-group'>
                        <label> FirstName</label> <br />
                        <input type="text"  className='form-contorl' size="60" name='firstname' value={formik.values.firstname} onChange={formik.handleChange} />
                    </div>
                    <div className=' form-group'>
                        <label> lastName</label> <br />
                        <input type="text"  className='form-contorl' size="60" name='lastname' value={formik.values.lastname} onChange={formik.handleChange} />
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
                        <input type="submit" className='input btn btn-primary btn-sm' value={"Submit"} />
                        <button type='button' className='batn btn btn-success btn-sm' ><Link className="nav-link" to="/userList">Back Home</Link></button>
                    </div>
                </div>
            </form>

        </div>
    );
}

export default CreateUser;