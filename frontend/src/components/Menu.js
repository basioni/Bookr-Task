import React from "react";
import { Link } from "react-router-dom";
import { useAuth0 } from "@auth0/auth0-react";

const Menu = () => {
    const {loginWithRedirect } = useAuth0();
    const { logout } = useAuth0();
    const { user, isAuthenticated} = useAuth0();
  return (
    <>
    
        <nav class="main-header navbar navbar-expand-md navbar-light navbar-white">
          <div class="container">
            <h1 class="navbar-brand">
              <span class="brand-text font-weight-light">Bookr Task</span>
            </h1>

            <button class="navbar-toggler order-1" type="button" data-toggle="collapse" data-target="#navbarCollapse" aria-controls="navbarCollapse" aria-expanded="false" aria-label="Toggle navigation">
              <span class="navbar-toggler-icon"></span>
            </button>

            <div class="collapse navbar-collapse order-3" id="navbarCollapse">
              <ul class="navbar-nav">
                <li class="nav-item nav-link">
                <Link to="/home">Home</Link>
                </li>
                <li class="nav-item nav-link">
                <Link to="/todos">Todos</Link>
                </li>
              </ul>

            <ul class="order-1 order-md-3 navbar-nav navbar-no-expand ml-auto">
              <li class="nav-item dropdown">
                <button class="btn nav-link" data-toggle="dropdown">
                  <i class="far fa-user"></i> My Account
                </button>
                <div class="dropdown-menu dropdown-menu-lg dropdown-menu-right">
                  <div class="dropdown-item">
                   
                    { user && (
                    <div>
                    Hi <b>{user.name}</b>,
                    <button class="dropdown-item dropdown-footer" onClick={()=>logout()}>Logout</button>
                    </div>
                    )}
                    {!user && (
                    <div>
                    <p>Please, Login to access the app.</p>
                    <button class="dropdown-item dropdown-footer" onClick={()=>loginWithRedirect()}>Login</button>
                    </div>
                    )
                  }
                  </div>
                 
                </div>
                
              </li>
            </ul>
          </div>
          </div>
        </nav>  
        
    </>
  )
};

export default Menu;