import React from "react";
import { Box, Button, Container, Typography } from "@mui/material";
import Logo from "../../assets/images/logo.png";
import { Link } from "react-router-dom";
import { LinkType } from "../../types/courses";
import { navBarPages, webName } from "./navBarPages";
import { Copyright } from "../@core/CopyRight";

const Footer = () => {
  return (
    <>
      <Box sx={{ bgcolor: "#000", marginTop: "auto", p: 2 }}>
        <Container sx={{ display: "flex" }}>
          <Box
            sx={{
              marginRight: "1rem",
              display: "flex",
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
              <Box>
                <img src={Logo} alt="logo" style={{ width: "5em" }} />
                <Typography
                  variant="h6"
                  noWrap
                  align="center"
                  sx={{
                    // display: { xs: "none", md: "flex" },
                    justifyContent: "center",

                    fontWeight: 700,
                    fontSize: "1rem",
                    color: "#fff",
                    textDecoration: "none",
                  }}
                >
                  {webName}
                </Typography>
              </Box>
            </Link>
          </Box>
          <Box sx={{ display: "flex", alignItems: "center", flexWrap: "wrap" }}>
            {navBarPages.map((page: LinkType, index: number) => (
              <Link
                key={index}
                to={page.url}
                style={{ textDecoration: "none" }}
              >
                <Button sx={{ my: 2, color: "white", display: "block" }}>
                  {page.pathName}
                </Button>
              </Link>
            ))}
          </Box>
        </Container>
        <Box
          sx={{
            display: "flex",
            justifyContent: "flex-end",
          }}
        >
          <Copyright sx={{ color: (theme) => theme.palette.grey[500] }} />
        </Box>
      </Box>
    </>
  );
};

export default Footer;
