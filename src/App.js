import React, { useEffect } from "react";
import { useLocation } from "react-router-dom";
import Routes from "./Routes";

import "./css/style.scss";

import { focusHandling } from "cruip-js-toolkit";
import "./charts/ChartjsConfig";

function App() {
  const location = useLocation();

  useEffect(() => {
    document.querySelector("html").style.scrollBehavior = "auto";
    window.scroll({ top: 0 });
    document.querySelector("html").style.scrollBehavior = "";
    focusHandling("outline");
  }, [location.pathname]); // triggered on route change

  return <Routes />;
}

export default App;
