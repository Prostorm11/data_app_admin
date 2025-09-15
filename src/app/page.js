"use client"
import { darkTheme, lightTheme } from "./constants/colors";
import TopNavigator from "./components/top_navigator";
import "./css/page.css";
import Profile from "./Screens/profile";
import Dashboard from "./Screens/dashboard";
import Packages from "./Screens/packages";
import Clients from "./Screens/clients";
import Orders from "./Screens/orders";
import { useState } from "react";

export default function Home() {

  const [currentPage, setCurrentPage] = useState("Dashboard");
  function changePage(pageName) {
    switch (pageName) {
      case "Profile":
        return <Profile></Profile>;
      case "Dashboard":
        return <Dashboard></Dashboard>
      case "Packages":
        return <Packages></Packages>
      case "Clients":
        return <Clients></Clients>
      case "Orders":
        return <Orders></Orders>
      default:
        return <Dashboard></Dashboard>;
    }
  }
  return (
    <div className="main">
      <TopNavigator action={setCurrentPage} currentPage={currentPage}></TopNavigator>
      <div style={{flex:1}}>
        {changePage(currentPage)}
      </div>
    </div>
  );
}
