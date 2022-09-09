import React from "react";
import { StyledBurgerIcon } from "./styles/NavMobile.styled";

export default function BurgerIcon({ menuOpen, onClick }) {
  return (
    <StyledBurgerIcon
      onClick={onClick}
      className={menuOpen ? "opened" : undefined}
      width="30"
      height="22"
      viewBox="0 0 30 22"
      strokeWidth="2"
      xmlns="http://www.w3.org/2000/svg"
    >
      <line y1="21" x2="30" y2="21" />
      <line y1="11" x2="30" y2="11" />
      <line y1="1" x2="30" y2="1" />
    </StyledBurgerIcon>
  );
}
