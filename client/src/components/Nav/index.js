import React from "react";
import Auth from "../../utils/auth";
import { Link } from "react-router-dom";
import Logo from "../../images/logo2.png";
import Torch from "../../images/animatedtorch.gif";
import "../../App.css";
import Button from "@mui/material/Button";

function Nav() {
  // Function to determine the navigation based on user authentication status
  function showNavigation() {
    if (Auth.loggedIn()) {
      // If user is logged in, navigation links for order history and logout are shown
      return (
        <ul className="nav-ul-bg">
          <Link to="/orderHistory">
            <Button variant="text" className="signed-in-button">
              <li>Order History</li>
            </Button>
          </Link>

          {/* Use an anchor tag to logout the user and refresh the application */}
          <Button variant="text" className="signed-in-button">
            <a href="/" onClick={() => Auth.logout()}>
              <li>Log Out</li>
            </a>
          </Button>
        </ul>
      );
    } else {
      // If user is not logged in, navigation links for signup and login are shown
      return (
        <ul className="nav-links nav-ul-bg">
          <Link to="/signup">
            <Button variant="text">
              <li className="mx-1">Sign Up</li>
            </Button>
          </Link>

          <Link to="/login">
            <Button variant="text">
              <li className="mx-1">Log in</li>
            </Button>
          </Link>
        </ul>
      );
    }
  }

  // Render the navigation component
  return (
    <header className="navigation">
      <img src={Torch} alt="torch" className="torch" />
      <img src={Torch} alt="torch" className="torch-2" />

      <h1 className="">
        <Link to="/">
          <img src={Logo} alt="logo" />
        </Link>
      </h1>

      <nav>{showNavigation()}</nav>
    </header>
  );
}

export default Nav;
