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
  { text: "Home", href: "/", tooltip: "Return to main page", id: '1' },
  { text: "About Us", href: "/about", tooltip: "Details about us", id: '2' },
  { text: "Contact", href: "/contact", tooltip: "Feel free to contact", id: '3' },
];
const REGISTER_LIST = [
  { text: "Signup", href: "/signup", id: '1' },
  { text: "Login", href: "/login", id: '2' },
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
            <div key={menu.id}>
              <Tooltip title={menu.tooltip}>
                <Box
                  key={menu.id}
                  p={4}
                  color={menu.href === path ? "secondary.main" : "initial"}
                  fontWeight={menu.href === path ? "bold" : ''}
                >
                  <NavItem {...menu} />
                </Box>
              </Tooltip>
            </div>
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
              <MenuItem key={menu.id} onClick={handleMenuClose}>
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
