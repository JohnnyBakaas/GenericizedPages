import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import Header from "./components/header/Header";
import { siteData } from "./siteData";
import ScrollToTop from "./components/ScrollToTop";
import { Outlet } from "react-router-dom";

function App() {
  const data = siteData;

  return (
    <>
      <ScrollToTop /> {/*hvis man vil ha det*/}
      <Header pageName={data.pageName} logo={data.logo} pages={data.pages} />
      <Outlet />
    </>
  );
}

export default App;
