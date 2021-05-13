import React from "react";
import { NavItem, NavLink, Nav } from "reactstrap";
import classNames from "classnames";
import { Link } from "react-router-dom";

const SideBar = ({ isOpen, toggle }) => (
  <div className={classNames("sidebar", { "is-open": isOpen })}>
    <div className="sidebar-header">
      <span color="info" onClick={toggle} style={{ color: "#fff" }}>
        &times;
      </span>
      <h3>Car Recognition</h3>
    </div>
    <hr style={{background: "white"}}></hr>
    <h5>Menu</h5>
    <hr style={{background: "white"}}></hr>
    <div className="side-menu">
      <Nav vertical className="list-unstyled pb-3">
        <NavItem>
          <NavLink className="itemTag" tag={Link} to={"/"}>
            Home
          </NavLink>
        </NavItem>
        <NavItem>
          <NavLink  className="itemTag" tag={Link} to={"/pages"}>
            Category
          </NavLink>
        </NavItem>
        <NavItem>
          <NavLink  className="itemTag" tag={Link} to={"/faq"}>
            FAQ
          </NavLink>
        </NavItem>
        <NavItem>
          <NavLink  className="itemTag" tag={Link} to={"/contact"}>
            Contact
          </NavLink>
        </NavItem>
      </Nav>
    </div>
  </div>
);

export default SideBar;
