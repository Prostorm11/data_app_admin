import Image from "next/image";
import { darkTheme, lightTheme } from "./constants/colors";
import TopNavigator from "./components/top_navigator";

export default function Home() {
  const color=darkTheme
  return (
    <div>
      <h1>Welcome to Data Admin</h1>
      <TopNavigator></TopNavigator>
    </div>
  );
}
