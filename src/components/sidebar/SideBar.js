import React, { useState, useEffect } from "react";
import * as s from "./Sidebar.style";
import { FaHome } from "react-icons/fa";
import { BsFillShieldLockFill, BsFillTrash2Fill } from "react-icons/bs";
import { AiOutlineShareAlt } from "react-icons/ai";
import { MdNoEncryption } from "react-icons/md";
import { Link, useRouteMatch } from "react-router-dom";

function SideBar() {
  const { path } = useRouteMatch();
  //background image

  //logo
  const LOGO = "SOS";

  //menus
  const MenuItems = [
    { id: 1, name: "Home", to: `${path}`, icon: <FaHome size="2rem" /> },
    {
      id: 2,
      name: "Shared With Me",
      to: `${path}/shared-with-me`,
      icon: <AiOutlineShareAlt size="2rem" />,
    },
    {
      id: 3,
      name: "Shared By Me",
      to: `${path}/shared-by-me`,
      icon: <AiOutlineShareAlt size="2rem" />,
    },
    {
      id: 4,
      name: "Encrypt",
      to: `${path}/encrypt`,
      icon: <BsFillShieldLockFill size="2rem" />,
    },
    {
      id: 5,
      name: "Decrypt",
      to: `${path}/decrypt`,
      icon: <MdNoEncryption size="2rem" />,
    },
    {
      id: 6,
      name: "Trash",
      to: `${path}/bin`,
      icon: <BsFillTrash2Fill size="2rem" />,
    },
  ];
  //selected state
  const [selected, setSelected] = useState(MenuItems[0].name);

  //open state
  const [sidebarOpen, setSidebarOpen] = useState(true);

  //handles menu click
  const handleMenuClickItem = (name) => {
    // if (name === "Home") {
    //   return setSelected("");
    // }
    // localStorage.setItem("menuItem", name);
    // const menu = localStorage.getItem("menuItem");

    setSelected(name);
  };

  //resize window
  useEffect(() => {
    const updateWindowWidth = () => {
      if (window.innerWidth <= 900 || window.innerHeight <= 540)
        setSidebarOpen(false);
      else setSidebarOpen(true);
    };

    window.addEventListener("resize", updateWindowWidth);

    return () => window.removeEventListener("resize", updateWindowWidth);
  }, [sidebarOpen]);

  return (
    <s.SidebarContainer isSidebarOpen={sidebarOpen}>
      <s.LogoContainer>{LOGO}</s.LogoContainer>
      <s.MenuItemContainer>
        {MenuItems.map((item, index) => {
          // const selectedItem = selected === "" ? "Home" : item.name;
          // localStorage.setItem("menuItem", selectedItem);
          const isItemSelected = selected === item.name;
          return (
            <Link
              to={item.to}
              key={index}
              style={{ textDecoration: "none", color: "inherit" }}
            >
              <s.MenuItem
                key={index}
                selected={isItemSelected}
                onClick={() => handleMenuClickItem(item.name)}
                isSidebarOpen={sidebarOpen}
              >
                <s.Icons selected={isItemSelected} isSidebarOpen={sidebarOpen}>
                  {item.icon}
                </s.Icons>
                <s.Text isSidebarOpen={sidebarOpen}>{item.name}</s.Text>
              </s.MenuItem>
            </Link>
          );
        })}
      </s.MenuItemContainer>
      <s.TogglerContainer onClick={() => setSidebarOpen(!sidebarOpen)}>
        <s.Toggler />
      </s.TogglerContainer>
    </s.SidebarContainer>
  );
}

export default SideBar;
