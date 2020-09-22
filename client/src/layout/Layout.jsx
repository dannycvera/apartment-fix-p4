import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import "./Layout.css";

export default function Layout(props) {
  return (
    <>
      <Header
        currentUser={props.currentUser}
        handleLogout={props.handleLogout}
      />
      <main>{props.children}</main>

      <Footer></Footer>
    </>
  );
}
