"use client";

import React, { useState } from "react";
import NavItem from "./NavItem";

const MENU_LIST = [
  { text: "Home", href: "/" },
  { text: "About Us", href: "/about" },
  { text: "Contact", href: "/contact" },
];
const REGISTER_LIST = [
  { text: "Register", href: "/register" },
  { text: "Login", href: "/login" },
];

const Navbar = () => {

  const [currentUrl, setCurrentUrl] = useState("Home");
  
  return (
    <>
        <div className="flex justify-between">
          <div className="flex mr-auto ml-6">
            {MENU_LIST.map((menu) => (
              <div key={menu.text} className={menu.text===currentUrl ? "p-4 text-indigo-700" : "p-4 text-indigo-950"}>
                <NavItem text={menu.text} href={menu.href} setUrl={()=>setCurrentUrl(menu.text)} />
              </div>
            ))}
          </div>
          <div className="flex mr-6">
            {REGISTER_LIST.map((menu) => (
              <div key={menu.text} className={menu.text===currentUrl ? "p-4 text-indigo-700" : "p-4 text-indigo-950"}>
                <NavItem text={menu.text} href={menu.href} setUrl={()=>setCurrentUrl(menu.text)} />
              </div>
            ))}
          </div>
        </div>
    </>
  );
};
export default Navbar;
