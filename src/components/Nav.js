import { HashLink } from "react-router-hash-link";
import { NavLink } from "react-router-dom";
import React from "react";

import StyledNav from "./styles/Nav.styled";

export default function Nav() {
  return (
    <StyledNav>
      <NavLink to="/">About the Shelter</NavLink>
      <NavLink to="/pets">Our pets</NavLink>
      <HashLink smooth to="/#help-shelter">
        Help the shelter
      </HashLink>
      <HashLink smooth to="/#contact-shelter">
        Contacts
      </HashLink>
    </StyledNav>
  );
}
