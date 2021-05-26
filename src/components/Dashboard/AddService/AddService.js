import React, { useState } from 'react';
import './AddService.css'
import { useLocation } from 'react-router';
import axios from 'axios';
import Sidebar from '../Sidebar/Sidebar';
const AddServices = () => {
    const location = useLocation
    const [service, setService] = useState({
        name: '',
        price: '',
        imgURL: '',
    })
    const handleChange = (event) => {
        console.log(event.target.name, event.target.value);
        const newData = { ...service }
        newData[event.target.name] = event.target.value;
        setService(newData);

    }

    const handleImgUpload = event => {
        console.log(event.target.files)
        const imgData = new FormData();
        imgData.set('key', '470efbdc7a8b58e612fcce457fb05dd7');
        imgData.append('image', event.target.files[0])

        axios.post('https://api.imgbb.com/1/upload', imgData)
            .then(function (response) {
                const imgData = { ...service }
                imgData.imgURL = response.data.data.display_url
                setService(imgData)
                // setImgURL(response.data.data.display_url);
                alert("image added to the database");
            })
            .catch(function (error) {
                console.log(error);
            });
    }

    const handleAddService = e => {
        e.preventDefault(true);
        if (service.imgURL !== '') {
            console.log(service)
            const url = `http://localhost:5000/addServices`
            fetch(url, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(service)
            })
                .then(response => response.json())
                .then(data => {
                    console.log(data)
                })
            alert('product added successfully')

        }

    };


    return (
        <div className="mt-5 pt-5">
           <Sidebar></Sidebar>
            <div className="">
                <h4 className="title"> ADD SERVICES</h4>
                <form className="mt-3 border p-4 shadow-sm bg-white ">
                    <div class="mb-3">
                        <input type="email" class="form-control" placeholder="service name" onBlur={handleChange} id="exampleInputEmail1" aria-describedby="emailHelp" name="name" />
                    </div>
                    <div class="mb-3">
                        <input type="text" class="form-control" placeholder="service price" onBlur={handleChange} id="exampleInputPassword1" name="price" />
                    </div>
                    <div class="mb-3 ">
                        <input type="file" class="form-control" onChange={handleImgUpload} id="exampleFile1" name="img" />
                    </div>
                    <button type="submit" onClick={handleAddService} class="btn btn-primary btn-lg">Submit</button>
                </form>
            </div>
        </div>
    );
};

export default AddServices;