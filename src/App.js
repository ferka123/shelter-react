import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import SharedLayout from "./pages/SharedLayout";
import About from "./pages/About";
import OurPets from "./pages/OurPets";
import Error from "./pages/Error";
import GlobalStyles from "./components/styles/Global";
import ScrollToTop from "./helpers/ScrollToTop";

function App() {
  return (
    <BrowserRouter>
      <GlobalStyles />
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<SharedLayout />}>
          <Route index element={<About />} />
          <Route path="pets" element={<OurPets />} />
          <Route path="*" element={<Error />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
