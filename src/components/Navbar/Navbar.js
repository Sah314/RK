import React from "react";
import "./navbar.css";
import { Link } from "react-router-dom";
function Navigationbar() {
  return (
    <nav id="navbar" class="font-sans flex flex-col text-center sm:flex-row sm:text-left sm:justify-between py-3 px-3 sm:items-baseline w-full ">
      <div id="home" class="mb-2 sm:mb-0">
        <a href="/" class="font-bold text-2xl no-underline text-[#f59e0b] dark:text-[#7d77f2]" id="rk">R.K Industries</a>
      </div>
      <div>
       
        <Link to="/products" class="font-bold text-xl no-underline text-grey-darkest hover:text-blue-dark ml-2 text-[#f59e0b] dark:text-[#7d77f2]">Products</Link>
        <Link to="/aboutus" class="font-bold text-xl no-underline text-grey-darkest hover:text-blue-dark ml-2 text-[#f59e0b] dark:text-[#7d77f2]">About us</Link>
        <Link to="/enquiryform" class="font-bold text-xl no-underline text-grey-darkest hover:text-blue-dark ml-2 text-[#f59e0b] dark:text-[#7d77f2]">Contact us</Link>
      
      </div>
    </nav>
  );
}

export default Navigationbar;