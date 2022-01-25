import React from "react";
import { AiOutlineMenu } from "react-icons/ai";

const Navigation = () => {
  return (
    <nav className="navbar">
      <AiOutlineMenu />
      <a>Github Code</a>
      <a>About</a>
      <a>Contact Me</a>
    </nav>
  );
};

export default Navigation;
