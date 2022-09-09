import React from "react";
import Header from "../components/Header";
import Hero from "../components/Hero";
import AboutSection from "../components/AboutSection";
import FriendsSection from "../components/FriendsSection";
import HelpSection from "../components/HelpSection";
import { ThemeProvider } from "styled-components";

const headerTheme = {
  logoTitle: "#F1CDB3",
  logoSubtitle: "#fff",
  link: "#CDCDCD",
  activeLink: "#FAFAFA",
  activeLinkUnderline: "#F1CDB3",
  burgerIconColor: "#F1CDB3",
  burgerBg: "#292929",
  bg: "none",
};

export default function About() {
  return (
    <>
      <ThemeProvider theme={headerTheme}>
        <Header theme="primary" />
      </ThemeProvider>
      <main>
        <Hero />
        <AboutSection />
        <FriendsSection />
        <HelpSection />
      </main>
    </>
  );
}
