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

const pages: LinkType[] = [
  {
    pathName: "หลักสูตรทั้งหมด",
    url: "/",
  },
];

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
          <Box sx={{ display: { xs: "none", md: "flex" }, mr: 1 }}>
            <img src={Logo} alt="logo" style={{ width: "3em" }} />
          </Box>
          <Typography
            variant="h6"
            noWrap
            component="a"
            href="/"
            sx={{
              mr: 2,
              display: { xs: "none", md: "flex" },
              fontFamily: "monospace",
              fontWeight: 700,
              color: "inherit",
              textDecoration: "none",
            }}
          >
            Tech Learning
          </Typography>

          <Box sx={{ flexGrow: 1, display: { xs: "none", md: "flex" } }}>
            {pages.length !== 0
              ? pages.map(({ pathName, url }: LinkType, index) => (
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
          <Box sx={{ display: { xs: "flex", md: "none" }, mr: 1 }}>
            <img src={Logo} alt="logo" style={{ width: "3em" }} />
          </Box>
          <Typography
            variant="h5"
            noWrap
            component="a"
            sx={{
              mr: 2,
              display: { xs: "flex", md: "none" },
              flexGrow: 1,
              fontFamily: "monospace",
              fontWeight: 700,
              color: "inherit",
              textDecoration: "none",
            }}
          >
            Tech Learning
          </Typography>

          <Box sx={{ flexGrow: 0, display: { xs: "flex", md: "none" } }}>
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
              sx={{
                display: { xs: "block", md: "none" },
              }}
            >
              {pages.length !== 0
                ? pages.map(({ pathName, url }: LinkType, index) => (
                    <Link
                      key={index}
                      to={url}
                      style={{ textDecoration: "none" }}
                    >
                      <MenuItem onClick={handleCloseNavMenu}>
                        <Typography textAlign="center">{pathName}</Typography>
                      </MenuItem>
                    </Link>
                  ))
                : null}
            </Menu>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
};
export default Navbar;
