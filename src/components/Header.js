import React, { useState, useEffect } from "react";
import Logo from "./Logo";
import Nav from "./Nav";
import NavMobile from "./NavMobile";
import StyledHeader from "./styles/Header.styled";
import Container from "./styles/Container";

export default function Header() {
  const [showLogo, setShowLogo] = useState(true);
  const [winSize, SetWinSize] = useState(window.innerWidth);
  const handleResize = (e) => {
    SetWinSize(e.currentTarget.innerWidth);
  };
  useEffect(() => {
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);
  return (
    <StyledHeader>
      <Container as="div">
        <Logo showLogo={showLogo}/>
        {winSize > 768 ? <Nav /> : <NavMobile setShowLogo={setShowLogo}/>}
      </Container>
    </StyledHeader>
  );
}
