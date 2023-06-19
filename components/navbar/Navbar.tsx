"use client";

import { useContext, useEffect, useState } from "react";
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
  Typography,
  Button,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import { UserInContext } from "@/typings";
import { userContext } from "../../lib/contexts/userContext";
import LogoutIcon from '@mui/icons-material/Logout';
import axios from "axios";
import { useRouter } from "next/navigation";


const MENU_LIST = [
  { text: "Home", href: "/", tooltip: "Return to main page", id: '1', display:'all' },
  { text: "About Us", href: "/about", tooltip: "Details about us", id: '2', display:'all' },
  { text: "Contact", href: "/contact", tooltip: "Feel free to contact", id: '3', display:'all' },
  { text: "Search", href: "/search", tooltip: "Search plants", id: '4', display:'user' },

];
const REGISTER_LIST = [
  { text: "Signup", href: "/signup", id: '1' },
  { text: "Login", href: "/login", id: '2' },
];

const Navbar = () => {
  const path = usePathname();
  const router = useRouter();
  const { user, setNewUser }: { user: UserInContext | null, setNewUser: (newUser: UserInContext | null) => void } = useContext(userContext);

  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const [isOpenMenu, setIsOpenMenu] = useState<boolean>(false);
  const [navList, setNavList] = useState<any[]>(MENU_LIST)

  const handleMenuOpen = (event: React.MouseEvent<HTMLElement>) => {
    setIsOpenMenu(true);
    setAnchorEl(event.currentTarget);
  };

  const handleMenuClose = () => {
    setIsOpenMenu(false)
    setAnchorEl(null);
  };

  const handleLogout = () => {
    try{
      axios.get('/api/auth/logout').then((response:any) => {
        setNewUser(null);
        router.push('/login');
      })
    }catch(err){
      console.log(err)
    }
  }

  const filterNavList = () => {
    let newNavList:any[] = [];
    if(!user){
      newNavList = MENU_LIST.filter((item) =>{
        return item.display ==='all';
      });
    }else if(user){
      newNavList = MENU_LIST.filter((item) =>{
        return item;
      }
    )}
    setNavList(newNavList);
  };

  useEffect(() => {
    filterNavList();
  },[user]);

  return (
    <AppBar position="static">
      <Toolbar>
        <Box sx={{ display: "flex", alignItems: "center" }}>
          {navList.map((menu) => (
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
        <div className='flex items-center flex-col'>
          <Typography className="text-xs">{user && `Hi ${user.firstName} ${user.lastName}`}</Typography>
          {user
            ?
            <Tooltip title="Logout">

              <Button
                variant="text"
                color="inherit"
                startIcon={<LogoutIcon />}
                onClick={handleLogout}
              />
            </Tooltip>
            :
            <><Tooltip title="Signup or Login">
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
              </Menu></>}
        </div>
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
