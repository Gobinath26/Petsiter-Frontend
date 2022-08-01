import React from 'react';
import axios from 'axios';
import { useFormik } from 'formik';
import { Navigate, useNavigate } from 'react-router-dom';
import './style.css';
import { useEffect } from 'react';
 
  
function Customer({user,hour}) {
  
   var navigate = useNavigate();
   useEffect(async () => {
    fetchUsers()
    }, [])

  let fetchUsers = async () => {
    try {
        if(user===null){
          alert('Login to See ');
          navigate('/login')
        }
    } catch (error) {
        console.log(error)
    }
}




  const formik = useFormik({
    initialValues: {
      username:user,
      pettype:'',
      petbreed:'',
      hours: '',
      city:'',
      pincode:'',
      status:'not taken',
      payment:'not done',
      assignedto:'',
      employid:'',
      whatsappnum:'',
    },
    onSubmit: async (values) => {
      try {
        console.log(values);
        let data = await axios.post("https://petsiter-backend.herokuapp.com/customer", values)
        alert(data.data.message);
        navigate(`/order/${user}`);

      } catch (error) {
        console.log(error)
      }
    }
    
  })
   
  return (
    <div id='custmr'>
      
       
      <form onSubmit={formik.handleSubmit}>
        <div className='container' id='custcont'>
          <div className='row mt-4'>
            <div className='col-lg-4 text-right align-self-center' id='divbg'><label><b>Pet Type:</b></label></div>
            <div className='col-lg-4' >< input type="text" required className='form-control' placeholder="dogs,cats,birds..."
              onChange={formik.handleChange} value={formik.values.pettype} name='pettype'></input></div>
          </div>
          <div className='row mt-4' >
            <div className='col-lg-4 text-right align-self-center' id='divbg'>
              <label><b>Pet Breed:</b></label></div>
            <div className='col-lg-4'><input type="text" required className='form-control'
             placeholder="beagle,labrador..."
              onChange={formik.handleChange} value={formik.values.petbreed} name='petbreed'></input></div>
          </div>
          
          <div className='row mt-4'>
            <div className='col-lg-4 text-right align-self-center' id='divbg'><label><b>Number Of Hours:</b></label></div>
            <div className='col-lg-4'><input type="number" min={1} required className='form-control'
               onChange={formik.handleChange} value={formik.values.hours} name='hours'></input></div>
          </div>

          <div className='row mt-4'>
            <div className='col-lg-4 text-right align-self-center' id='divbg'><label><b>City:</b></label></div>
            <div className='col-lg-4'><input type="text" required className='form-control'
             onChange={formik.handleChange} value={formik.values.city} name='city'></input></div>
          </div>
          <div className='row mt-4'>
            <div className='col-lg-4 text-right align-self-center shadow-none' id='divbg'><label><b>Pincode:</b></label></div>
            <div className='col-lg-4'><input type="text" required className='form-control'
             onChange={formik.handleChange} value={formik.values.pincode} name='pincode'></input></div>
          </div>
          <div className='row mt-2'>
          
          <div className='col-lg-12 mt-3 text-center'><input type="submit"  
           className='btn' id='paybtn' value="SUBMIT"></input></div>
        </div>
        </div>
      </form>
    </div>
      

  )
}

export default Customer
