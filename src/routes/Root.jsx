import React from "react";
import logo from "../assets/logo.png";
import Intro from "../components/Intro";

export default function Root() {
  return (
    <>
      <div className="fixed z-50 flex h-24 w-full items-center justify-center p-4">
        <img src={logo} className="aspect-square w-20" />
      </div>
      <Intro />
    </>
  );
}
