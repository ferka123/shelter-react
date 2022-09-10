import React, { useEffect, useState, createContext } from "react";
import { Outlet, useLocation } from "react-router-dom";
import Header from "../components/Header";
import Footer from "../components/Footer";

import { ThemeProvider } from "styled-components";

const primaryTheme = {
  logoTitle: "#F1CDB3",
  logoSubtitle: "#fff",
  link: "#CDCDCD",
  activeLink: "#FAFAFA",
  activeLinkUnderline: "#F1CDB3",
  burgerIconColor: "#F1CDB3",
  burgerBg: "#292929",
  bg: "none",
};
const secondaryTheme = {
  logoTitle: "#545454",
  logoSubtitle: "#292929",
  link: "#545454",
  activeLink: "#292929",
  activeLinkUnderline: "#F1CDB3",
  burgerIconColor: "#000",
  burgerBg: "white",
  bg: "white",
};

export const PetDataContext = createContext(null);

export default function SharedLayout() {
  const [petData, setPetData] = useState({ data: [], loading: true });
  const [theme, setTheme] = useState(primaryTheme);
  const { pathname } = useLocation();

  useEffect(() => {
    if (pathname === "/") {
      setTheme(primaryTheme);
    } else {
      setTheme(secondaryTheme);
    }
  }, [pathname]);

  useEffect(() => {
    fetch("/data.json")
      .then((res) => res.json())
      .then((data) => {
        setPetData({ data, loading: false });
      })
      .catch((e) => console.log(e));
  }, []);
  return (
    <>
      <ThemeProvider theme={theme}>
        <Header />
      </ThemeProvider>
      <PetDataContext.Provider value={petData}>
        <Outlet />
      </PetDataContext.Provider>
      <Footer />
    </>
  );
}
