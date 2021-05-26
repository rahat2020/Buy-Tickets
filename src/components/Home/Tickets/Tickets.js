import React, { useEffect, useState } from 'react';
import './Tickets.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faStar } from '@fortawesome/free-solid-svg-icons'
const Tickets = () => {
    const [items, setItems] = useState([])
    console.log(items)
    useEffect(() => {
        const url = `http://localhost:5000/services`
        fetch(url)
            .then(response => response.json())
            .then(data => setItems(data))
    }, [])
    return (
        <div className="container mb-5 mt-5 pt-5 ">
            <h1 className="mt-4"> Book your tickets</h1>
            <div className="row">
                {/* card 1 */}
                {
                    items.map((serviceItem) => (
                        <div className="col-md-4 cardStyle ">
                            <div className="card mt-3">
                                <div className="product-1 align-items-center p-2 text-center">
                                    <img className="img-fluid " style={{ height: '150px' }} src={serviceItem.imgURL} alt=""></img>
                                    <h5 className="fw-bold">{serviceItem.name}</h5>

                                    {/* card info */}
                                    <div className="mt-3 info">
                                        <span className="text1 d-block">this is the best ticket to travel</span>
                                        <span className="text1">this is the ticket</span>
                                    </div>

                                    <div className="cost mt-3 text-dark">
                                        <span>${serviceItem.price}</span>
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
                                    <span className="text-uppercase fw-bold">Book now </span>
                                </div>
                            </div>
                        </div>

                    ))
                }

            </div>
        </div>

    );
};

export default Tickets;