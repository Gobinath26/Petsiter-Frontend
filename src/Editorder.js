import axios from 'axios';
import { useFormik } from 'formik';
import React, { useEffect } from 'react'
import { useState } from 'react';
import { useNavigate,useParams } from 'react-router-dom';

function Editorder({user}) {
    let params = useParams()
    // const [value,setValues]= useState();
    useEffect(async () => {
        let userData = await axios.get(`https://petsiter-backend.herokuapp.com/myorder/${params.id}`);
        console.log(userData.data[0]);
        // setValues(userData.data[0])
        formik.setFieldValue('pettype',userData.data[0].pettype)
        formik.setFieldValue('petbreed',userData.data[0].petbreed)
        formik.setFieldValue('hours',userData.data[0].hours)
        formik.setFieldValue('city',userData.data[0].city)
        formik.setFieldValue('pincode',userData.data[0].pincode)
        // formik.setValues(userData.data)
    },[])
    // console.log(value)
    const navigate = useNavigate()
    const formik = useFormik({
        initialValues: {
          pettype:'',
          petbreed:'',
          hours:'',
          city:'',
          pincode:''
        },
        onSubmit: async (values) => {
            try {
               var res= await axios.put(`https://petsiter-backend.herokuapp.com/order/${params.id}`,values)
               console.log(values);
               alert("order edited");
                navigate('/dashboard');
            } catch (error) {
                console.log(error)
            }
        }
    });

    return (
        <div>
      <div>Customer</div>
       
      <form onSubmit={formik.handleSubmit}>
        <div className='container'>
          <div className='row mt-4'>
            <div className='col-lg-4 text-right align-self-center'><label><b>Pet Type:</b></label></div>
            <div className='col-lg-4'><input type="text" className='form-control' required
             placeholder="dogs,cats,birds..."
              onChange={formik.handleChange} value={formik.values.pettype} name='pettype'></input></div>
          </div>
          <div className='row mt-4'>
            <div className='col-lg-4 text-right align-self-center'><label><b>Pet Breed:</b></label></div>
            <div className='col-lg-4'><input type="text" className='form-control'required
             placeholder="beagle,labrador..."
              onChange={formik.handleChange} value={formik.values.petbreed} name='petbreed'></input></div>
          </div>
          
          <div className='row mt-4'>
            <div className='col-lg-4 text-right align-self-center'><label><b>Number Of Hours:</b></label></div>
            <div className='col-lg-4'><input type="number" className='form-control' required
              
              onChange={formik.handleChange} value={formik.values.hours} name='hours'></input></div>
          </div>

          <div className='row mt-4'>
            <div className='col-lg-4 text-right align-self-center'><label><b>City:</b></label></div>
            <div className='col-lg-4'><input type="text" className='form-control' required
             onChange={formik.handleChange} value={formik.values.city} name='city'></input></div>
          </div>
          <div className='row mt-4'>
            <div className='col-lg-4 text-right align-self-center'><label><b>Pincode:</b></label></div>
            <div className='col-lg-4'><input type="text" className='form-control' required
             onChange={formik.handleChange} value={formik.values.pincode} name='pincode'></input></div>
          </div>

          <div className='col-lg-12 mt-3 text-centrt'>
            <input type="submit" className='btn' id='paybtn' value="SUBMIT"></input></div>
        </div>
      </form>
    </div>
    )
}

export default Editorder
