import React from "react";
import { Link } from "react-router-dom";

export const Navbar = () => {
	return (		
  <nav className="navbar navbar-light bg-light">
    <div className="container d-flex justify-content-between">
      <a className="navbar-brand"><img src="https://1000logos.net/wp-content/uploads/2017/06/Star-Wars-Logo-1.png" alt="" width="100" height="60" /></a>
      <div class="dropdown">
        <button class="btn btn-primary dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
          Favorites
        </button>
        <div class="dropdown-menu" aria-labelledby="dropdownMenuButton">
          <a class="dropdown-item" href="#">Action</a>
          <a class="dropdown-item" href="#">Another action</a>
          <a class="dropdown-item" href="#">Something else here</a>
        </div>
      </div>
    </div>
  </nav>
	);
};
