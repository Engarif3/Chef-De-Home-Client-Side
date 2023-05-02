import React from "react";
import Navigationbar from "../shared/Navbar/Navigationbar";
import { Outlet } from "react-router-dom";
import Footer from "../shared/Footer/Footer";

const Layout = () => {
  const style = {
    backgroundColor: "#F8F8F8",
    borderTop: "1px solid #E7E7E7",
    textAlign: "center",
    padding: "20px",
    position: "fixed",
    left: "0",
    bottom: "0",
    height: "60px",
    width: "100%",
  };

  return (
    <div>
      <Navigationbar></Navigationbar>
      <Outlet></Outlet>
      <div style={style} className="bg-black text-white">
        <Footer></Footer>
      </div>
    </div>
  );
};

export default Layout;