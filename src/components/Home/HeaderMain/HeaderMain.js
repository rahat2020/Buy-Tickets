import React from 'react';
import './HeaderMain.css'
import headerOne from '../../../img/headerOne.jpg';
import headerTwo from '../../../img/headerTwo.jpg';
import headerThree from '../../../img/headerThree.jpg';

const HeaderMain = () => {
    return (
        <div>
            <div id="carouselExampleControls" class="carousel slide panda-pic mt-5" data-bs-ride="carousel">
                <div class="carousel-inner">
                    <div class="carousel-item active">
                        <div class="carousel-inner">
                            <div class="carousel-item-active">
                                <div class="row d-flex align-items-center p-5 ">
                                    <div class="col-md-6">
                                        <h1 className="text-white">From Florida </h1> <h1 class=" titleStyle"> To New York</h1>
                                        <p className="text-white">this is the american best train services that <br />you've ever travel to anywhere in america</p>
                                        <div className="d-flex justify-content-around">
                                            <h2 class="text-warning">$1200</h2>
                                            <a href="#" class="btn btn-primary color"> <i class="fas fa-shopping-cart"></i> Book now </a>
                                        </div>
                                    </div>
                                    <div class="col-md-6">
                                        <img src={headerOne} class="d-block w-100 imgStyle" alt="..." />
                                    </div>
                                </div>
                            </div>
                        </div>

                    </div>
                    <div class="carousel-item">
                        <div class="carousel-inner">
                            <div class="carousel-item-active">
                                <div class="row d-flex align-items-center p-5">
                                    <div class="col-md-6">
                                        <h1 className="text-white">From Los Angeles </h1> <h1 class=" titleStyle"> To Phoeniex</h1>
                                        <p className="text-white">this is the american best train services that <br />you've ever travel to anywhere in america</p>
                                        <div className="d-flex justify-content-around">
                                            <h2 class="text-warning">$1200</h2>
                                            <a href="#" class="btn btn-primary color"> <i class="fas fa-shopping-cart"></i> Book now </a>
                                        </div>
                                    </div>
                                    <div class="col-md-6">
                                        <img src={headerTwo} class="d-block w-100 imgStyle" alt="..." />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div class="carousel-item">
                        <div class="carousel-inner">
                            <div class="carousel-item-active">
                                <div class="row d-flex align-items-center p-5 ">
                                    <div class="col-md-6">
                                        <h1 className="text-white">From Virginia </h1> <h1 class=" titleStyle"> To Huston</h1>
                                        <p className="text-white">this is the american best train services that <br />you've ever travel to anywhere in america</p>
                                        <div className="d-flex justify-content-around">
                                            <h2 class="text-warning">$1200</h2>
                                            <a href="#" class="btn btn-primary color"> <i class="fas fa-shopping-cart"></i> Book now </a>
                                        </div>
                                    </div>
                                    <div class="col-md-6">
                                        <img src={headerThree} class="d-block w-100 imgStyle" alt="..." />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
                <a class="carousel-control-prev" href="#carouselExampleControls" role="button" data-bs-slide="prev">
                    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span class="visually-hidden">Previous</span>
                </a>
                <a class="carousel-control-next" href="#carouselExampleControls" role="button" data-bs-slide="next">
                    <span class="carousel-control-next-icon" aria-hidden="true"></span>
                    <span class="visually-hidden">Next</span>
                </a>
            </div>
        </div>
    );
};

export default HeaderMain;