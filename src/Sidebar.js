import React from "react";
import { Link } from "react-router-dom";
import './style.css'

export default function Sidebar({user}) {
    // console.log(user.Username);
    return (
        <div>
            <ul class="navbar-nav   sidebar sidebar-dark accordion" id="customsidebar">


                <div class="sidebar-brand d-flex align-items-center justify-content-center" >
                    <div class="sidebar-brand-icon rotate-n-15">
                    <i class="fas fa-paw"></i>
                    </div>
                    <div class="sidebar-brand-text mx-3">PETSITTER</div>
                </div>


                 

             <li class="nav-item active">
                    <Link class="nav-link" to="/dashboard">
                        <i class="fas fa-fw fa-tachometer-alt"></i>
                        <span>Dashboard</span></Link>
                </li>

 
                <div class="sidebar-heading">
                    Interface
                </div>

                <li class="nav-item">
                <Link class="nav-link collapsed" to={`/order/${user}`} data-toggle="collapse" data-target="#collapseTwo"
                        aria-expanded="true" aria-controls="collapseTwo">
                        <i class="fas fa-fw fa-cog"></i>
                        <span>Payment Bending Order</span>
                    </Link>
                    </li>

                    <li class="nav-item">
                <Link class="nav-link collapsed" to='/orderstatus' data-toggle="collapse" data-target="#collapseTwo"
                        aria-expanded="true" aria-controls="collapseTwo">
                        <i class="fas fa-fw fa-cog"></i>
                        <span>Confirmed Order </span>
                    </Link>
                    </li>
                

                <li class="nav-item">
                <Link class="nav-link collapsed" to="/login" data-toggle="collapse" data-target="#collapseTwo"
                        aria-expanded="true" aria-controls="collapseTwo">
                        <i class="fas fa-fw fa-cog"></i>
                        <span>Login</span>
                    </Link>
                    </li>

                <li class="nav-item">
                <Link class="nav-link collapsed" to="/" data-toggle="collapse" data-target="#collapseTwo"
                        aria-expanded="true" aria-controls="collapseTwo">
                        <i class="fas fa-fw fa-cog"></i>
                        <span>Register</span>
                    </Link>
                    </li>
                    </ul>
                </div>
         
    )
}