import React, { useState } from 'react';
import axios from 'axios';
import { useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';

function Confirmorder() {
    var navigate = useNavigate();
    const[list,setlist] = useState([]);
    var params = useParams();
    useEffect(async () => {
        confirmorder()
      }, [])
    
       

      let confirmorder = async () => {
        try {
          let itemdetials = await axios.put(`https://petsiter-backend.herokuapp.com/confirmorder/${params.id}`);
            alert('/Now the order is confirmed and shown for caretakers go to BE A CARETAKER section and accept order.')
          navigate('/dashboard')
           
        } catch (error) {
          console.log(error)
        }
      }

    
  return (
    <div style={{backgroundcolor:'black'}}>Loading...</div>
  )
}
 
export default Confirmorder
