import React from 'react';
import axios from 'axios';
import { useEffect } from 'react';
import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './style.css'

function Worker({user}) {
  var navigate = useNavigate();
  const [orderarr, setorderarr] = useState([]);
  try{
    useEffect(async () => {
      if(user!== null){
        var order = await axios.get('https://petsiter-backend.herokuapp.com/workorders',{
          headers: {
              Authorization: window.localStorage.getItem("my_token")
          },
      });
        console.log(order.data);
        setorderarr(order.data);
      }else{
        alert('Login to See ');
        navigate('/login')
      }
         
        }, [])
  }catch (error) {
    console.log(error)
}
 
  return (
    <>
      <div id='pghd'>Available Orders</div>
      <div className='container' id='ordcontainer'>
      {
       
        orderarr.map((obj,index) => {
          return <div class="card text-white " id='ordercard' key={index}
              style={{ width: "18rem" }}>
              <div class="card-header text-white" id='ordercardhead'
                style={{ textTransform: "uppercase" }}><b>{obj.pettype}</b></div>
              <div class="card-body">
                <h5 class="card-title" style={{ textTransform: "uppercase" }}>
                  <b>{obj.petbreed}</b> </h5>
                <p class="card-text"><b>{`Timing: ${obj.hours} hour`}</b></p>
                <p class="card-text"><b>{`City: ${obj.city}`}</b></p>
                <p class="card-text"><b>{`Pincode: ${obj.pincode}`}</b></p>
                <div className='col-lg-12 mt-3 text-center'>
                <Link to={`/accept/${obj._id}`}>  <input type="button"  id='acptbtn'
                className='btn btn-light '  
                 value="Accept"></input></Link>
              </div>
            </div>
          </div>
          
         
        })
        
      }
      </div>
    </>
  )
}

export default Worker
