import React from "react";
import Navbar from "../Navbar";
import SideBar from "./SideBar";
import { Search } from "@mui/icons-material";
import Feed from "./Feed";
const Home = () => {
  return (
    <>
      <Navbar />
      <SideBar />
      <Feed />
    </>
  );
};

export default Home;
