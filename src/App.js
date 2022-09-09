import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import SharedLayout from "./pages/SharedLayout";
import About from "./pages/About";
import OurPets from "./pages/OurPets";
import Error from "./pages/Error";
import GlobalStyles from "./components/styles/Global";

function App() {
  return (
    <BrowserRouter>
      <GlobalStyles />
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
