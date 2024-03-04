import React from "react";
import { MyNav } from "../components/Navbar/Navbar";
import { MyFooter } from "../components/Footer/Footer";

const MainLayout = ({ children }) => {
  return (
    <>
      <MyNav />
      {children}
      <MyFooter />
    </>
  );
};

export default MainLayout;
