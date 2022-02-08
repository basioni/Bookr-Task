import {logo} from "../logo.svg";
import React from "react";
import { Outlet, Link } from "react-router-dom";

const Menu = () => {
  return (
    <>
      
      <aside class="main-sidebar sidebar-dark-primary elevation-4">
        <div class="brand-link">
          <p><img src="{logo}" alt="CRM Logo" class="brand-image img-circle"/>
          </p>
        </div>
        <div class="sidebar">
          <nav class="mt-2">
            <ul class="nav nav-pills nav-sidebar flex-column float-left" data-widget="treeview" role="menu" data-accordion="false">
                <li class="nav-item nav-link text-left">
                    <i class="nav-icon fas fa-tachometer-alt"></i>
                    <Link to="/dashboard">Dashboard</Link>
                </li>
                <li class="nav-item nav-link text-left">
                  <i class="nav-icon fas fa-tachometer-alt"></i>
                  <Link to="/contacts">Contacts</Link>
                </li>
                <li class="nav-item nav-link text-left">
                  <i class="nav-icon fas fa-tachometer-alt"></i>
                  <Link to="/users">Users</Link>
                </li>
                <li class="nav-item nav-link text-left">
                  <i class="nav-icon fas fa-tachometer-alt"></i>
                  <Link to="/roles">Roles</Link>
                </li>
            </ul>
          </nav>
        </div>
      </aside>
      

      <Outlet />
    </>
  )
};

export default Menu;