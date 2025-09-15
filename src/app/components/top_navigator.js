import React from "react";
import "./top_navigator.css";
import CustomButton from "./customButton";

export default function TopNavigator({ action ,currentPage}) {
  
  return (
    <div
      className="main_board"
      style={{
        backgroundColor: "var(--card-background)",
        boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
      }}
    >
      <CustomButton text={"Dashboard"} onClick={() => action("Dashboard")} selected={currentPage === "Dashboard"}>
        {" "}
      </CustomButton>
      <CustomButton text={"Clients"} onClick={() => action("Clients")} selected={currentPage === "Clients"}>
        {" "}
      </CustomButton>
      <CustomButton text={"Packages"} onClick={() => action("Packages")} selected={currentPage === "Packages"}>
        {" "}
      </CustomButton>
      <CustomButton text={"Orders"} onClick={() => action("Orders")} selected={currentPage === "Orders"}>
        {" "}
      </CustomButton>
    </div>
  );
}
