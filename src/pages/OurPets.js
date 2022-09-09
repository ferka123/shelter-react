import React from "react";
import Header from "../components/Header";
import { ThemeProvider } from "styled-components";

const headerTheme = {
  logoTitle: "#545454",
  logoSubtitle: "#292929",
  link: "#545454",
  activeLink: "#292929",
  activeLinkUnderline: "#F1CDB3",
  burgerIconColor: "#000",
  burgerBg: "white",
  bg: "white",
};

export default function OurPets() {
  return (
    <>
      <ThemeProvider theme={headerTheme}>
        <Header />
      </ThemeProvider>
      <div>OurPets</div>
    </>
  );
}
