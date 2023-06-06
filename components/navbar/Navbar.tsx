"use client";

import { useState } from "react";
import { usePathname } from "next/navigation";
import NavItem from "./NavItem";
import {
  AppBar,
  Toolbar,
  Link,
  Box,
  IconButton,
  Menu,
  MenuItem,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";

const MENU_LIST = [
  { text: "Home", href: "/" },
  { text: "About Us", href: "/about" },
  { text: "Contact", href: "/contact" },
];
const REGISTER_LIST = [
  { text: "Signup", href: "/signup" },
  { text: "Login", href: "/login" },
];

const Navbar = () => {
  const path = usePathname();
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const [isOpenMenu, setIsOpenMenu] = useState<boolean>(false);

  const handleMenuOpen = (event: React.MouseEvent<HTMLElement>) => {
    setIsOpenMenu(true);
    setAnchorEl(event.currentTarget);
  };

  const handleMenuClose = () => {
    setIsOpenMenu(false)
    setAnchorEl(null);
  };

  return (
    <AppBar position="static">
      <Toolbar>
        <Box sx={{ display: "flex", alignItems: "center" }}>
          {MENU_LIST.map((menu) => (
            <Box
            key={menu.text}
            p={4}
            color={menu.href === path ? "secondary.main" : "initial"}
          >
            <NavItem {...menu} />
          </Box>
          ))}
        </Box>
        <Box sx={{ flexGrow: 1 }} />
        <div style={{ display: "flex", alignItems: "center" }}>
          <IconButton
            edge="end"
            aria-label="menu"
            aria-controls="menu"
            aria-haspopup="true"
            onClick={handleMenuOpen}
            color ={isOpenMenu ? "primary" : "inherit"}
          >
            <MenuIcon />
          </IconButton>
          <Menu
            id="menu"
            anchorEl={anchorEl}
            open={Boolean(anchorEl)}
            onClose={handleMenuClose}
          >
            {REGISTER_LIST.map((menu) => (
              <MenuItem key={menu.text} onClick={handleMenuClose}>
                <NavItem text={menu.text} href={menu.href} />
              </MenuItem>
            ))}
          </Menu>
        </div>
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
