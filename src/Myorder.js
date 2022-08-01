import React from 'react';
import axios from 'axios';
import { useEffect } from 'react';
import { useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { Link } from 'react-router-dom';
import './style.css'

function Myorder({setorder,setbill,user}) {
  var navigate = useNavigate();
 const [orderarr, setorderarr] = useState([]);
  var params = useParams();
  useEffect(async () => {
    fetchUsers()
    }, [])

  let fetchUsers = async () => {
    try {
        if(user!==null){
          let order = await axios.get(`https://petsiter-backend.herokuapp.com/notpayed/${params.id}`,{
            headers:{
              Authorization:  window.localStorage.getItem("my_token")
            }
          });
         
          setorderarr(order.data)
          console.log(order.data)
          console.log(orderarr)
        }else{
          alert('Login to See ');
          navigate('/login')
        }
        
    } catch (error) {
        console.log(error)
    }
}

  let handleDelete = async (id) => {
    try {
        let result = window.confirm("Are you sure do you want to delete?")
        if (result) {
            await axios.delete(`https://petsiter-backend.herokuapp.com/order${id}` )
            fetchUsers()
        }
    } catch (error) {
        console.log(error)
    }
}

let calculate = async (id) => {
  try {
      var orderinfo = await axios.get(`https://petsiter-backend.herokuapp.com/myorder/${id}`,{
        headers: {
            Authorization: window.localStorage.getItem("my_token")
        },
})
console.log((orderinfo.data[0].hours)*50)
setbill((orderinfo.data[0].hours)*50 )      
} catch (error) {
      console.log(error)
  }
}

  return (
    <>
          <div id='pghd'>Pay now to confirm your orders </div>

      <div className='container' id='ordcontainer'>
      {
        orderarr.map((obj,index) => {
          {setorder(obj._id)}
          return <div class="card text-white" id='ordercard' key={index}
             >
              <div class="card-header text-white" id='ordercardhead'
                style={{ textTransform: "uppercase" }}><b>{obj.pettype}</b></div>
              <div class="card-body">
                <h5 class="card-title" style={{ textTransform: "uppercase" }}>
                  <b>{obj.petbreed}</b> </h5>
                <p class="card-text"><b>{`Timing: ${obj.hours} hour`}</b></p>
                <p class="card-text"><b>{`City: ${obj.city}`}</b></p>
                <p class="card-text"><b>{`Pincode: ${obj.pincode}`}</b></p>
                {console.log(obj._id)}
               <Link to={`/myorder/${obj._id}`}><button  className='btn btn-sm btn-light' id='edbtn'>
                 <b>Edit</b></button></Link>
                <button onClick={() => handleDelete(obj._id)} className='btn btn-sm btn-light
                 ' id='edbtn'><b>Delete</b></button>
                <Link to={`/payment/${obj._id}`}> 
                                  <button className='btn btn-sm btn-light'
                                     id='pynwbtn'    onClick={() => calculate(obj._id)}
                                    >Pay Now</button></Link> 
              </div>
            </div>
           })
      }
</div>
    </>

  )
}

export default Myorder


