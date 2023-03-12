import React from "react"
import './NavBar.css'

const NavBar=()=>{
    return (
<nav class="navbar navbar-expand-sm navbar-custom bg-light">
    <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarCustom">
        <span class="navbar-toggler-icon"></span>
    </button>
    <div class="navbar-collapse collapse" id="navbarCustom">
        <ul class="navbar-nav">
            <li class="nav-item active">
                <a class="nav-link" href="#">Home</a>
            </li>
            <li class="nav-item">
                <a class="nav-link" href="#">Profile</a>
            </li>
            <li class="nav-item">
                <a class="nav-link" href="#">Shop</a>
            </li>
        </ul>
    </div>
</nav>
    )}
      

export default NavBar