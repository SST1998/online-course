import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Menu from "@mui/material/Menu";
import MenuIcon from "@mui/icons-material/Menu";
import Container from "@mui/material/Container";
import Button from "@mui/material/Button";
import MenuItem from "@mui/material/MenuItem";
import Logo from "../../assets/images/logo.png";
import { LinkType } from "../../types/courses";
import { Link } from "react-router-dom";
import { navBarPages, webName } from "./navBarPages";
import CustomLink from "../@core/CustomLink";
import { useAuth } from "../../hook/useAuth";
import { UserDataType } from "../../context/types";
import { Avatar, useMediaQuery, useTheme } from "@mui/material";

const Navbar = () => {
  const theme = useTheme();
  const mobileview = useMediaQuery(theme.breakpoints.down("sm"));
  const [anchorElNav, setAnchorElNav] = React.useState<null | HTMLElement>(
    null
  );
  const getUserData = window.localStorage.getItem("userData");
  const isUserData = getUserData ? true : false;
  const userData: UserDataType = JSON.parse(getUserData!);
  const auth = useAuth();
  const handleOpenNavMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorElNav(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  return (
    <AppBar position="sticky" sx={{ bgcolor: "#000", py: 2 }}>
      <Container>
        <Toolbar disableGutters>
          <Box
            sx={{
              marginRight: "1rem",
              display: { xs: "none", sm: "flex" },
              alignItems: "center",
              padding: "0.5rem",
            }}
          >
            <Link
              to={"/"}
              style={{
                display: "flex",
                alignItems: "center",
                textDecoration: "none",
              }}
            >
              <Box sx={{ display: { xs: "none", sm: "flex" }, mr: 1 }}>
                <img src={Logo} alt="logo" style={{ width: "3em" }} />
              </Box>
              <Typography
                variant="h6"
                noWrap
                align="center"
                sx={{
                  display: { xs: "none", sm: "flex" },

                  fontWeight: 700,
                  color: "#fff",
                  textDecoration: "none",
                  borderRadius: 1,
                }}
              >
                {webName}
              </Typography>
            </Link>
          </Box>

          {/* On Laptop & Ipad Device */}
          <Box
            sx={{
              flexGrow: 1,
              display: { xs: "none", sm: "flex" },
              justifyContent: "space-between",
            }}
          >
            {navBarPages.length !== 0
              ? navBarPages.map(({ pathName, url }: LinkType, index) => (
                  <CustomLink key={index} to={url}>
                    <Button
                      onClick={handleCloseNavMenu}
                      sx={{ my: 2, color: "white", display: "block" }}
                    >
                      {pathName}
                    </Button>
                  </CustomLink>
                ))
              : null}
            {!isUserData && (
              <Box sx={{ display: "flex" }}>
                <CustomLink to={"/sign-in"}>
                  <Button
                    onClick={handleCloseNavMenu}
                    sx={{ my: 2, color: "white", display: "block" }}
                  >
                    Sign In
                  </Button>
                </CustomLink>
                <CustomLink to={"/sign-up"}>
                  <Button
                    onClick={handleCloseNavMenu}
                    sx={{ my: 2, color: "white", display: "block" }}
                  >
                    Sign Up
                  </Button>
                </CustomLink>
              </Box>
            )}
          </Box>

          {/* On Mobile Device */}
          <Box
            sx={{
              width: "100%",
              display: { xs: "flex", sm: "none" },
              alignItems: "center",
            }}
          >
            <Link
              to={"/"}
              style={{
                display: "flex",
                alignItems: "center",
                textDecoration: "none",
              }}
            >
              <Box sx={{ display: { xs: "flex", md: "none" }, mr: 1 }}>
                <img src={Logo} alt="logo" style={{ width: "3em" }} />
              </Box>
              <Typography
                variant="h5"
                noWrap
                sx={{
                  mr: 2,
                  display: { xs: "flex", md: "none" },
                  flexGrow: 1,

                  fontWeight: 700,
                  color: "#fff",
                  textDecoration: "none",
                }}
              >
                {webName}
              </Typography>
            </Link>
          </Box>

          <Box sx={{ flexGrow: 0 }}>
            {mobileview ? (
              <IconButton
                size="large"
                aria-label="account of current user"
                aria-controls="menu-appbar"
                aria-haspopup="true"
                onClick={handleOpenNavMenu}
                color="inherit"
              >
                <MenuIcon />
              </IconButton>
            ) : (
              <>
                {isUserData && (
                  <Button sx={{ color: "white" }} onClick={handleOpenNavMenu}>
                    <Avatar
                      sx={{
                        mr: 1,
                        textTransform: "uppercase",
                        fontWeight: (theme) => theme.typography.fontWeightBold,
                      }}
                    >
                      {userData.firstName[0]}
                    </Avatar>
                    {userData.firstName} {userData.lastName}
                  </Button>
                )}
              </>
            )}
            <Menu
              id="menu-appbar"
              anchorEl={anchorElNav}
              anchorOrigin={{
                vertical: "bottom",
                horizontal: "left",
              }}
              keepMounted
              transformOrigin={{
                vertical: "top",
                horizontal: "left",
              }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
            >
              {isUserData && mobileview && (
                <MenuItem
                  sx={{
                    textTransform: "uppercase",
                  }}
                >
                  <Avatar
                    sx={{
                      mr: 1,
                      fontWeight: (theme) => theme.typography.fontWeightBold,
                    }}
                  >
                    <Typography variant="h6">
                      {userData.firstName[0]}
                    </Typography>
                  </Avatar>
                  <Typography variant="h6">
                    {userData.firstName} {userData.lastName}
                  </Typography>
                </MenuItem>
              )}
              {navBarPages.length !== 0
                ? navBarPages.map(({ pathName, url }: LinkType, index) => (
                    <CustomLink key={index} to={url} style={{ color: "#000" }}>
                      <MenuItem onClick={handleCloseNavMenu}>
                        <Typography textAlign="center">{pathName}</Typography>
                      </MenuItem>
                    </CustomLink>
                  ))
                : null}
              {isUserData ? (
                <>
                  <CustomLink to={"/sign-up"} style={{ color: "#000" }}>
                    <MenuItem onClick={handleCloseNavMenu}>
                      <Typography textAlign="center">Sign Up</Typography>
                    </MenuItem>
                  </CustomLink>
                  <MenuItem
                    onClick={() => {
                      handleCloseNavMenu();
                      auth.logout();
                    }}
                  >
                    <Typography textAlign="center">Sign Out</Typography>
                  </MenuItem>
                </>
              ) : (
                <>
                  <CustomLink to={"/sign-in"} style={{ color: "#000" }}>
                    <MenuItem onClick={handleCloseNavMenu}>
                      <Typography textAlign="center">Sign In</Typography>
                    </MenuItem>
                  </CustomLink>
                  <CustomLink to={"/sign-up"} style={{ color: "#000" }}>
                    <MenuItem onClick={handleCloseNavMenu}>
                      <Typography textAlign="center">Sign Up</Typography>
                    </MenuItem>
                  </CustomLink>
                </>
              )}
            </Menu>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
};
export default Navbar;
