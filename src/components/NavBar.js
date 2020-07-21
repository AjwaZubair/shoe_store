import React from 'react';
import { Link } from 'react-router-dom';

function NavBar() {

  return (
	<div class= "topnav">
        <a><Link to="/"> Home </Link></a>
        <a><Link to="/About"> About </Link></a>
        <a><Link to="/Product"> Product </Link></a>
	</div>
  );
}

export default NavBar;