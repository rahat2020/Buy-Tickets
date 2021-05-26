import React from 'react';
import './Sidebar.css'
const Sidebar = () => {
    return (
        <div>
             <div class="s-layout">
                <div class="s-layout__sidebar">
                    <a class="s-sidebar__trigger" href="#0">
                        <i class="fa fa-bars"></i>
                    </a>

                    <nav class="s-sidebar__nav">
                        <ul>
                            <li>
                                <a class="s-sidebar__nav-link" href="/">
                                    <i class="fa fa-home"></i><em>Home</em>
                                </a>
                            </li>
                            <li>
                                <a class="s-sidebar__nav-link" href="addReview">
                                    <i class="fa fa-user"></i><em>Add Review</em>
                                </a>
                            </li>
                            <li>
                                <a class="s-sidebar__nav-link" href="orderList">
                                    <i class="fa fa-camera"></i><em>Order list</em>
                                </a>
                            </li>
                            <li>
                                <a class="s-sidebar__nav-link" href="manage">
                                    <i class="fa fa-camera"></i><em>Manage service</em>
                                </a>
                            </li>
                            <li>
                                <a class="s-sidebar__nav-link" href="admin">
                                    <i class="fa fa-camera"></i><em>Admin</em>
                                </a>
                            </li>
                            <li>
                                <a class="s-sidebar__nav-link" href="addService">
                                    <i class="fa fa-camera"></i><em>Add service</em>
                                </a>
                            </li>
                        </ul>
                    </nav>
                </div>
            </div>
        </div>
    );
};

export default Sidebar;