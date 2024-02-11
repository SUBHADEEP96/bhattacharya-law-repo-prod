"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React, { useState, useEffect, useRef } from "react";
import { RiMenu3Line, RiCloseLine, RiRefreshFill } from "react-icons/ri";
import "./header.css";

const menuItems = [
  { id: 1, name: "Home", path: "/" },
  { id: 3, name: "Partners", path: "/partners" },
  { id: 4, name: "Practices", path: "/practices" },
  { id: 5, name: "News & Articles", path: "/news" },
  { id: 6, name: "Reportings", path: "/reportings" },
  { id: 7, name: "Gallery", path: "/gallery" },
  { id: 8, name: "Career", path: "/career" },
  { id: 9, name: "Contact", path: "/contact" },
];

const Header = () => {
  const [toggleMenu, setToggleMenu] = useState(false);
  const mobileMenuRef = useRef<HTMLDivElement>(null);
  const pathname = usePathname();

  useEffect(() => {
    const handleMenu = (e: any) => {
      if (!mobileMenuRef.current?.contains(e.target)) {
        setToggleMenu(false);
      }
    };
    document.addEventListener("mousedown", handleMenu);
    return () => {
      document.removeEventListener("mousedown", handleMenu);
    };
  }, []);
  const handleRefresh = () => {
    localStorage.removeItem("userAgreed");
    if (
      typeof window !== "undefined" &&
      window.location &&
      window.location.reload
    ) {
      window.location.reload();
      window.location.href = "/";
    }
  };

  return (
    <div className="bhatt__navbar bg-black">
      <div className="bhatt__navbar-links">
        <div className="bhatt__navbar-links_log text-teal-50">
          <Link href="/">
            {" "}
            <img
              src="/logo.jpg"
              aria-label="Bhattacharyyas & Associates Logo"
              alt="Bhattacharyyas & Associates Logo"
            />{" "}
          </Link>
        </div>
        <div className="bhatt__navbar-links_container">
          {menuItems?.map((menuItem) => {
            const isActive = pathname === menuItem?.path;
            return (
              <p
                key={menuItem?.id}
                className={isActive ? "active_menu_item" : ""}
              >
                <Link href={menuItem?.path}>{menuItem?.name}</Link>
              </p>
            );
          })}
        </div>
      </div>
      <div className="bhatt__navbar-menu" ref={mobileMenuRef}>
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
              {menuItems?.map((menuItem) => {
                const isActive = pathname === menuItem?.path;
                return (
                  <p key={menuItem?.id} onClick={() => setToggleMenu(false)}>
                    <Link
                      href={menuItem?.path}
                      className={isActive ? "active_menu_item" : ""}
                    >
                      {menuItem?.name}
                    </Link>
                  </p>
                );
              })}
            </div>
            <hr />
            <button onClick={handleRefresh} className="text-white">
              <RiRefreshFill color="#fff" size={27} />
            </button>
          </div>
        )}
      </div>

      <div className="bhatt__navbar-refresh bhatt__navbar-menu_container-links">
        <button onClick={handleRefresh} className="text-white">
          <RiRefreshFill color="#fff" size={27} />
        </button>
      </div>
    </div>
  );
};

export default Header;
