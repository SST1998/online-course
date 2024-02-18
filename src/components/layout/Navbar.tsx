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

const Navbar = () => {
  const [anchorElNav, setAnchorElNav] = React.useState<null | HTMLElement>(
    null
  );

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
              display: { xs: "none", md: "flex" },
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
              <Box sx={{ display: { xs: "none", md: "flex" }, mr: 1 }}>
                <img src={Logo} alt="logo" style={{ width: "3em" }} />
              </Box>
              <Typography
                variant="h6"
                noWrap
                align="center"
                sx={{
                  display: { xs: "none", md: "flex" },

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

          <Box sx={{ flexGrow: 1, display: { xs: "none", md: "flex" } }}>
            {navBarPages.length !== 0
              ? navBarPages.map(({ pathName, url }: LinkType, index) => (
                  <Link key={index} to={url} style={{ textDecoration: "none" }}>
                    <Button
                      onClick={handleCloseNavMenu}
                      sx={{ my: 2, color: "white", display: "block" }}
                    >
                      {pathName}
                    </Button>
                  </Link>
                ))
              : null}
          </Box>

          {/* On Mobile Device */}
          <Box
            sx={{
              width: "100%",
              display: { xs: "flex", md: "none" },
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
              {navBarPages.length !== 0
                ? navBarPages.map(({ pathName, url }: LinkType, index) => (
                    <CustomLink key={index} to={url} style={{ color: "#000" }}>
                      <MenuItem onClick={handleCloseNavMenu}>
                        <Typography textAlign="center">{pathName}</Typography>
                      </MenuItem>
                    </CustomLink>
                  ))
                : null}
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
              <CustomLink to={"/sign-in"} style={{ color: "#000" }}>
                <MenuItem onClick={handleCloseNavMenu}>
                  <Typography textAlign="center">Sign Out</Typography>
                </MenuItem>
              </CustomLink>
            </Menu>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
};
export default Navbar;
