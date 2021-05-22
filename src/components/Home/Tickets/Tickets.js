import React from 'react';
import './Tickets.css';
import trainpng from '../../../img/trainpng.png';
import bus from '../../../img/bus.png';
import plane from '../../../img/plane_.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faStar } from '@fortawesome/free-solid-svg-icons'
const Tickets = () => {
    return (
        <div className="container mb-5 mt-5 pt-5 ">
            <h1 className="mt-4"> Book your tickets</h1>
            <div className="row">
                {/* card 1 */}
                <div className="col-md-4 cardStyle">
                    <div className="card mt-3">
                        <div className="product-1 align-items-center p-2 text-center">
                            <img className="img-fluid " style={{height:'200px'}} src={trainpng} alt=""></img>
                            <h5>TRAIN</h5>

                            {/* card info */}
                            <div className="mt-3 info">
                                <span className="text1 d-block">this is the best ticket to travel</span>
                                <span className="text1">this is the ticket</span>
                            </div>

                            <div className="cost mt-3 text-dark">
                                <span>$69.99</span>
                                <div className="start mt-3 align-items-center">
                                    <FontAwesomeIcon icon={faStar} />
                                    <FontAwesomeIcon icon={faStar} />
                                    <FontAwesomeIcon icon={faStar} />
                                    <FontAwesomeIcon icon={faStar} />
                                    <FontAwesomeIcon icon={faStar} />
                                </div>
                            </div>
                        </div>
                        {/* button */}
                        <div className="p-3 train text-center text-white cursor">
                            <span className="text-uppercase">add to cart </span>
                        </div>
                    </div>
                </div>

                {/* card 2 */}
                <div className="col-md-4">
                    <div className="card mt-3">
                        <div className="product-1 align-items-center p-2 text-center">
                            <img className="img-fluid" style={{height:'200px'}} src={bus} alt=""></img>
                            <h5>BUS</h5>

                            {/* card info */}
                            <div className="mt-3 info">
                                <span className="text1 d-block">this is the best ticket to travel</span>
                                <span className="text1">this is the ticket</span>
                            </div>

                            <div className="cost mt-3 text-dark">
                                <span>$69.99</span>
                                <div className="start mt-3 align-items-center">
                                    <FontAwesomeIcon icon={faStar} />
                                    <FontAwesomeIcon icon={faStar} />
                                    <FontAwesomeIcon icon={faStar} />
                                    <FontAwesomeIcon icon={faStar} />
                                    <FontAwesomeIcon icon={faStar} />
                                </div>
                            </div>
                        </div>
                        {/* button */}
                        <div className="p-3 bus text-center text-white cursor">
                            <span className="text-uppercase">add to cart </span>
                        </div>
                    </div>
                </div>

                {/* card 3 */}
                <div className="col-md-4">
                    <div className="card mt-3">
                        <div className="product-1 align-items-center p-2 text-center">
                            <img className="img-fluid" style={{height:'200px'}} src={plane} alt=""></img>
                            <h5>PLANE</h5>

                            {/* card info */}
                            <div className="mt-3 info">
                                <span className="text1 d-block">this is the best ticket to travel</span>
                                <span className="text1">this is the ticket</span>
                            </div>

                            <div className="cost mt-3 text-dark">
                                <span>$69.99</span>
                                <div className="start mt-3 align-items-center">
                                    <FontAwesomeIcon icon={faStar} />
                                    <FontAwesomeIcon icon={faStar} />
                                    <FontAwesomeIcon icon={faStar} />
                                    <FontAwesomeIcon icon={faStar} />
                                    <FontAwesomeIcon icon={faStar} />
                                </div>
                            </div>
                        </div>
                        {/* button */}
                        <div className="p-3 plane text-center text-white cursor">
                            <span className="text-uppercase">add to cart </span>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    );
};

export default Tickets;