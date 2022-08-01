import React from 'react';
import { BrowserRouter, Routes } from 'react-router-dom';
import { Link } from 'react-router-dom';
import './style.css'

function Dashboard() {
    return (
        
 <div className='container' id='dshcont'>
                <div className='row mt-5'>
                    <div className='col-6'>
                   <Link to="/customer" className='btn' id='dashbtn'>
                     <p className='dashtext'>Need A Caretaker</p>  </Link>
                    </div>
                    <div className='col-6'>
                    <Link to="/staff" className='btn' id='dashbtn'>
                       <p className='dashtext'> Be A Caretaker</p></Link>
                    </div>
                </div>
            </div>

 
    )
}

export default Dashboard