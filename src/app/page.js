import Image from "next/image";
import { darkTheme, lightTheme } from "./constants/colors";
import TopNavigator from "./components/top_navigator";
import "./css/page.css";
import Profile from "./Screens/profile";

export default function Home() {
  const color = darkTheme;
  return (
    <div className="main">
      <TopNavigator></TopNavigator>
      <div style={{flex:1}}>
        <Profile></Profile>
      </div>
    </div>
  );
}
