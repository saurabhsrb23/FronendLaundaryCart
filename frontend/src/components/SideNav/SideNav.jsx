import React from "react";
import home from "./home.svg";
import list from "./list.png";
import more from "./more.svg";
import Products from "../CreateOrderComponent/Products/Products";
import PastOrderHeader from "../PastOrderComponents/pastOrderHeader/pastOrderHeader"
import { Link} from "react-router-dom";

import "./SideNav.css";



const SideNav = () => {
  return (
    <aside>

    <div className="container">

      <ul className="sidebar">
        <li><span>
          <Link to={'/'}><img className="vnavicon" src={home} alt="profilepic" /></Link>
        </span></li>
        <li><span>
          <Link to={"/order"}><img className="vnavicon" src={more} alt="profilepic" /></Link>
        </span></li>
        <li><span>
          <Link to={"/pastorder"}><img className="vnavicon" src={list} alt="profilepic" /></Link>
        </span></li>


      </ul>

      <div className="content">
        <PastOrderHeader/>
          <Products/>

      </div>
    </div>

    </aside>
  );
};

export default SideNav;
