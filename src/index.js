import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import Header from "./Header";
import Page from "./Page";
import Footer from "./Footer";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <div>
    <Header />
    <Page />
    <Footer />
  </div>
);
