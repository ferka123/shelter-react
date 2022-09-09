import React from "react";
import StyledLogo from "./styles/Logo.styled";

export default function Logo({ showLogo = true }) {
  return (
    <StyledLogo className={showLogo ? undefined : "hidden"}>
      <h1>Cozy House</h1>
      <h3>Shelter for pets in Boston</h3>
    </StyledLogo>
  );
}
