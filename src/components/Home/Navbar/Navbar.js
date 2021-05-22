import React from 'react';
import './Navbar.css';
const Navbar = () => {
    
    return (
        <div className="">
            <nav class="navbar navbar-expand-lg navbar-light ">
            <div class="container-fluid">
                <a class="navbar-brand text-white fw-bold" href="/"> Buy<span className="ticketStyle">Tickets</span></a>
                <button class="navbar-toggler" type="button" data-bs-toggle="collapse" style={{ background: 'white'}}
                    data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent"
                    aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon" ></span>
                </button>
                <div class="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul class="navbar-nav me-auto mb-2 mb-lg-0"></ul>
                    <div>
                        <ul class= "nav justify-content-end ">
                            <li class="nav-item">
                                <a class="nav-link"  style={{color:'aqua'}} aria-current="page" href="/">Home</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link text-white fw-bold" href="features"> Features</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link text-white fw-bold" href="login">login</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link text-white fw-bold" href="about" >About us</a>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </nav>

            {/* <nav class="navbar navbar-expand-lg navbar-light ">
                <div class="container-fluid">
                    <a class="navbar-brand text-white fw-bold" href="/">Buy<span className="ticketStyle">Tickets</span></a>
                    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                        <span class="navbar-toggler-icon"></span>
                    </button>
                    <div class="collapse navbar-collapse d-flex justify-content-end" id="navbarNav">
                        <ul class="navbar-nav">
                            <li class="nav-item">
                                <a class="nav-link active  fw-bold" aria-current="page" style={{color:'aqua'}} href="/">Home</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link text-white  fw-bold" href="features">Features</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link text-white   fw-bold" href="login">Login</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link text-white fw-bold" href="dashboard" >Dashboard</a>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav> */}
        </div>
    );
};

export default Navbar;