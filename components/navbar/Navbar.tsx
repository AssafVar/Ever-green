"use client";

import { useState } from "react";
import { usePathname } from "next/navigation";
import NavItem from "./NavItem";
import {
  AppBar,
  Toolbar,
  Box,
  IconButton,
  Menu,
  MenuItem,
  Tooltip,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";

const MENU_LIST = [
  { text: "Home", href: "/", tooltip: "Return to main page" },
  { text: "About Us", href: "/about", tooltip: "Details about us" },
  { text: "Contact", href: "/contact", tooltip: "Feel free to contact" },
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
            <Tooltip title={menu.tooltip}>
              <Box
                key={menu.text}
                p={4}
                color={menu.href === path ? "secondary.main" : "initial"}
                fontWeight={menu.href === path ? "bold" : ''}
              >
                <NavItem {...menu} />
              </Box>
            </Tooltip>
          ))}
        </Box>
        <Box sx={{ flexGrow: 1 }} />
        <div style={{ display: "flex", alignItems: "center" }}>

          <Tooltip title="Signup or Login">
            <IconButton
              edge="end"
              aria-label="menu"
              aria-controls="menu"
              aria-haspopup="true"
              onClick={handleMenuOpen}
              color={isOpenMenu ? "primary" : "inherit"}
            >
              <MenuIcon />
            </IconButton>
          </Tooltip>
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
