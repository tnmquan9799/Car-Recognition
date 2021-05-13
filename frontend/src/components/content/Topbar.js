import React, { useState } from "react";
import {
  Navbar,
  Button,
  NavbarToggler,
  Collapse,
  Nav,
} from "reactstrap";

const Topbar = ({ toggleSidebar }) => {
  const [topbarIsOpen, setTopbarOpen] = useState(true);
  const toggleTopbar = () => setTopbarOpen(!topbarIsOpen);

  return (
    <Navbar
      color="light"
      dark
      className="navbar shadow-sm p-3 mb-5 bg-dark text-white rounded"
      expand="md"
    >
      <Button color="light" onClick={toggleSidebar}>
        <img src="https://img.icons8.com/material-sharp/24/000000/menu--v3.png"/>
      </Button>
      <NavbarToggler onClick={toggleTopbar} />
      <Collapse isOpen={topbarIsOpen} navbar>
        <Nav className="ml-auto" navbar>
          <h6>Develop team: Tuan & Quan</h6>
        </Nav>
      </Collapse>
    </Navbar>
  );
};

export default Topbar;
