"use client";
import Link from "next/link";
import React, { useState, useEffect, useRef } from "react";
import { RiMenu3Line, RiCloseLine } from "react-icons/ri";
import "./header.css";
const menuItems = [
  { id: 1, name: "Home", path: "/" },

  { id: 3, name: "Partners", path: "/partners" },
  { id: 4, name: "Practices", path: "/practices" },
  { id: 5, name: "News", path: "/news" },
  { id: 6, name: "Reportings", path: "/reportings" },
  { id: 7, name: "Gallery", path: "/gallery" },
  { id: 8, name: "Career", path: "/career" },
  { id: 9, name: "Contact", path: "/contact" },
];

const Header = () => {
  const [toggleMenu, setToggleMenu] = useState(false);

  // useEffect(() => {
  //   const handleMenu = () => {
  //     setToggleMenu(false);
  //   };

  //   window.addEventListener("mousedown", handleMenu);

  //   return () => {
  //     window.removeEventListener("mousedown", handleMenu);
  //   };
  // }, []);

  return (
    <div className="bhatt__navbar bg-black">
      <div className="bhatt__navbar-links">
        <div className="bhatt__navbar-links_log text-teal-50">
          <Link href="/">
            {" "}
            <img src="/logo.jpg" />{" "}
          </Link>
        </div>
        <div className="bhatt__navbar-links_container">
          {menuItems?.map((menuItem) => (
            <p key={menuItem?.id}>
              <Link href={menuItem?.path}>{menuItem?.name}</Link>
            </p>
          ))}
        </div>
      </div>
      <div className="bhatt__navbar-menu">
        {toggleMenu ? (
          <RiCloseLine
            color="#fff"
            size={27}
            onClick={() => setToggleMenu(false)}
          />
        ) : (
          <RiMenu3Line
            color="#fff"
            size={27}
            onClick={() => setToggleMenu(true)}
          />
        )}
        {toggleMenu && (
          <div className="bhatt__navbar-menu_container scale-up-center">
            <div className="bhatt__navbar-menu_container-links">
              {menuItems?.map((menuItem) => (
                <p key={menuItem?.id} onClick={() => setToggleMenu(false)}>
                  <Link href={menuItem?.path}>{menuItem?.name}</Link>
                </p>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Header;
