import React, { useState, useRef } from "react";
import { HashLink } from "react-router-hash-link";
import { NavLink } from "react-router-dom";
import BurgerIcon from "./BurgerIcon";
import Logo from "./Logo";
import StyledMobileNav, { MobileMenuItems } from "./styles/NavMobile.styled";

export default function NavMobile({ setShowLogo }) {
  const handleClick = () => {
      setMenuOpen(!menuOpen);
      setShowLogo((showLogo) => !showLogo);
  };
  const handleOutsideClick = (e) => {
    if (!menuRef.current.contains(e.target)) {
      handleClick()
    } 
  }
  const [menuOpen, setMenuOpen] = useState(false);
  const menuRef = useRef(null);
  return (
    <>
      <BurgerIcon onClick={handleClick} menuOpen={menuOpen} />
      <StyledMobileNav
        className={menuOpen ? "opened" : undefined}
        onClick={handleOutsideClick}
      >
        <div ref={menuRef}>
          <Logo />
          <MobileMenuItems>
            <NavLink to="/"  onClick={handleClick}>About the Shelter</NavLink>
            <NavLink to="/pets" onClick={handleClick}>Our pets</NavLink>
            <HashLink smooth to="/#help-shelter"  onClick={handleClick}>
              Help the shelter
            </HashLink>
            <HashLink smooth to="/#contact-shelter"  onClick={handleClick}>
              Contacts
            </HashLink>
          </MobileMenuItems>
        </div>
      </StyledMobileNav>
    </>
  );
}
